# Google Docs Clone

This example shows how to use [Tailwind CSS](https://tailwindcss.com/) [(v2.2)](https://blog.tailwindcss.com/tailwindcss-2-2) with Next.js. It follows the steps outlined in the official [Tailwind docs](https://tailwindcss.com/docs/guides/nextjs).

## How to use

In local :

 - Create in root folder an .env.local file

 and type your firebase credentials

 ```
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=YOUR GOOGLE CLIENT ID
GOOGLE_CLIENT_SECRET=YOUR GOOGLE SECRET CLIENT KEY
```

```bash
npx create-next-app --example with-tailwindcss with-tailwindcss-app
# or
yarn create next-app --example with-tailwindcss with-tailwindcss-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).


