<div align="center">
  <h1>Thanks For Yourself</h1>
  <p>A simple but powerful program to help users express gratitude and positive thoughts about the things life has gone through.</p>
</div>

## ⚡ Tech Stack

- Next JS
- React Icons
- Chakra UI

## Screenshots

![Screenshot 1](/public/Screenshoot-1.png)

## How it works

This project uses the [OpenAI GPT-3 API](https://openai.com/api/) (specifically, text-davinci-003). It asks a user to select from a dropdown a person, place or thing as an input. Then asks from the name. Then sends it to the GPT-3 API  and sends the response back to the application.

## Running Locally

After cloning the repo, go to [OpenAI](https://beta.openai.com/account/api-keys) to make an account and put your API key in a file called `.env`.

Then, run the application in the command line and it will be available at `http://localhost:3000`.

```bash
npm install
npm run dev
```

## One-Click Deploy

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=vercel-examples):
 
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/hqasmei/thankful-thoughts&env=OPENAI_API_KEY&project-name=thankful-thoughts&repo-name=thankful-thoughts)

* Make sure to include environment variable in Vercel Environmental Veriables
