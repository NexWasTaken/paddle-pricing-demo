"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { initializePaddle, Paddle } from "@paddle/paddle-js";

type PropsType = {
  title: string;
  description: string;
  features: string[];
};

export default function PricingCard(props: PropsType) {
  const [paddle, setPaddle] = useState<Paddle>();
  let STARTER_MONTHLY_ID = "";

  useEffect(() => {
    initializePaddle({
      environment: "sandbox",
      token: process.env["NEXT_PUBLIC_PADDLE_CLIENT_TOKEN"]!,
    }).then((paddle) => setPaddle(paddle));
  }, []);

  const handleCheckout = () => {
    if (!paddle) return alert("[ERROR] Paddle not initialized.");

    console.log(STARTER_MONTHLY_ID);
    paddle.Checkout.open({
      items: [
        {
          priceId: process.env["NEXT_PUBLIC_STARTER_MONTHLY_ID"]!,
          quantity: 1,
        },
      ],
      settings: {
        displayMode: "overlay",
        successUrl: "http://localhost:3000/success",
      },
    });
  };

  return (
    <Card className="border-neutral-700 border-2 h-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{props.title}</CardTitle>
        <CardDescription className="w-2/3">{props.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-1">
          {props.features.map((feature, i) => (
            <li className="text-xs" key={i}>
              - {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="justify-center">
        <Button onClick={handleCheckout}>Proceed</Button>
      </CardFooter>
    </Card>
  );
}
