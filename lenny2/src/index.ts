import express from 'express';
import { PrismaClient } from '@prisma/client';
import { Twilio } from 'twilio';

// Download the helper library from https://www.twilio.com/docs/node/install
// Set environment variables for your credentials
const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = new Twilio(accountSid, authToken);
const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.post('/new-message', async (req, res) => {
	const { phoneNumber, message } = req.body;

	console.log('phone number: ', phoneNumber);
	console.log('message: ', message);

	client.messages
		.create({
			body: message,
			from: '+18335674388',
			to: '+16782319992',
		})
		.then((message) => console.log(message.sid));

	try {
		const user = await prisma.users.findFirst({
			where: {
				phone_number: phoneNumber,
			},
		});

		console.log('found user');
		console.log(user);

		if (!user) {
			const newUser = await prisma.users.create({
				data: {
					phone_number: phoneNumber,
				},
			});
			console.log('User created:', newUser);
		}

		res.status(201).json({ message: 'message received' });
	} catch (error) {
		console.error('Error creating user:', error);
		res.status(500).json({ message: 'Error creating user', error });
	}
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
