# Getting Setup w/ Paddle

1. Paddle Website

   - Register a sandbox account.
   - Create products w/ various prices.
   - Go to `Developer Tools/Authentication`. Scroll down to `Client-side tokens`, click on `+ Generate client-side token`.

2. VS Code

   - Install the paddle package: `pnpm i @paddle/paddle-js`.
   - Initialize the paddle package in your codebase:

   ```ts
   import { initializePaddle, Paddle } from "@paddle/paddle-js";

   const [paddle, setPaddle] = useState<Paddle>();

   useEffect(() => {
     initializePaddle({
       environment: "sandbox",
       token: process.env["NEXT_PUBLIC_PADDLE_CLIENT_TOKEN"]!,
     }).then((paddle) => setPaddle(paddle));
   }, []);
   ```

3. Create a success page. The user needs to be know their payment was successful. You can also add confetti animations.

---

---

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
