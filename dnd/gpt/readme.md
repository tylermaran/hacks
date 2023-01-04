# GPTDND

### Getting Started

Create a `.env` file with the following:

```
OPENAI_API_KEY = SECRETKEY12345
ORG = MYORG
```

Read about authentication here: https://beta.openai.com/docs/api-reference/authentication

Run the following:

`npm install`

`node index.js`

### Endpoints

#### /ping

returns `pong`

#### /prompt

Returns conversation log of your prompts and gpt responses from the OpenAI completion endpoint (https://beta.openai.com/docs/api-reference/completions)

To emulate a ChatGPT like feature, we add the prompts and responses
to each new request so there is context to the incoming questions.
Ex:

```
[
 'prompt: describe lord of the rings in one sentence',
 'response: The Lord of the Rings is a fantasy novel written by J. R. R. Tolkien.',
 'prompt: i meant the movie',
 'response: The Lord of the Rings movies are a trilogy of fantasy movies based on the novel by J. R. R. Tolkien.',
]
```
