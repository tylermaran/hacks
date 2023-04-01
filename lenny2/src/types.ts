export interface SmsWebhookRequest {
	AccountSid: string;
	ApiVersion: string;
	Body: string;
	From: string;
	FromCity: string;
	FromCountry: string;
	FromState: string;
	FromZip: string;
	MessageSid: string;
	NumMedia: string;
	NumSegments: string;
	SmsMessageSid: string;
	SmsSid: string;
	SmsStatus: string;
	To: string;
	ToCity: string;
	ToCountry: string;
	ToState: string;
	ToZip: string;
}
