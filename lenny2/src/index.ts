import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { Twilio } from 'twilio';

import { SmsWebhookRequest } from './types';

const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = new Twilio(accountSid, authToken);
const app = express();
const prisma = new PrismaClient();

app.use(express.urlencoded({ extended: false }));

const findOrCreateUserByPhoneNumber = async (phoneNumber: string) => {
	// Parse out only numbers
	const parsedNumber = phoneNumber.replace(/\D/g, '');

	// Find the user by phone number
	const existingUser = await prisma.users.findFirst({
		where: {
			phone_number: parsedNumber,
		},
	});

	// If user already exists, return it
	if (existingUser) {
		return existingUser;
	}

	// Otherwise, create a new user
	return await prisma.users.create({
		data: {
			phone_number: parsedNumber,
		},
	});
};

// Send a message to a specific number
app.post('/new-message', async (req, res) => {
	const { phoneNumber, message } = req.body;

	try {
		const user = await findOrCreateUserByPhoneNumber(phoneNumber);

		const messageResponse = await client.messages.create({
			body: message,
			from: '+18335674388',
			to: user.phone_number,
		});

		await prisma.messages.create({
			data: {
				body: messageResponse.body,
				user_id: user.id,
				metadata: JSON.stringify(messageResponse),
			},
		});

		res.status(201).json({ message: 'message received' });
	} catch (error) {
		console.error('Error creating user:', error);
		res.status(500).json({ message: 'Error creating user', error });
	}
});

// Receive a message and respond
app.post(
	'/sms',
	async (req: Request<{}, {}, SmsWebhookRequest>, res: Response) => {
		console.log('NEW SMSSSS ', req.body.From);
		console.log(req.body.Body);
		try {
			// Find or create user by phone number
			const user = await findOrCreateUserByPhoneNumber(req.body.From);

			// Add incoming message to message logs
			await prisma.messages.create({
				data: {
					body: req.body.Body,
					user_id: user.id,
					metadata: JSON.stringify(req.body),
				},
			});

			// Send return message
			const messageResponse = await client.messages.create({
				body: 'nice to meet you',
				from: '+18335674388',
				to: user.phone_number,
			});

			// Add Lenny's response to message logs
			await prisma.messages.create({
				data: {
					body: messageResponse.body,
					user_id: user.id,
					metadata: JSON.stringify(messageResponse),
				},
			});

			res.status(201).json({ message: 'message received' });
		} catch (error) {
			console.error('Error creating user:', error);
			res.status(500).json({ message: 'Error creating user', error });
		}
	}
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
