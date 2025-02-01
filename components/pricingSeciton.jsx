import { ScrollAnimated } from "@/animation/animation-wrapper";
import React from "react";
import { Card } from "./ui/card";
import { CheckCircle } from "lucide-react";
import { Button } from "./ui/button";

const pricing = [
  {
    title: "Free",
    price: "$0",
    description: "Perfect for getting started",
    features: [
      "Up to 5 invoices per month",
      "Basic templates",
      "24/7 priority support",
      "Email support",
      "Single user",
      "Client portal",
    ],
  },
  {
    title: "Standard",
    price: "$19",
    description: "Best for small businesses",
    features: [
      "Up to 50 invoices per month",
      "Premium templates",
      "24/7 priority support",
      "Priority email support",
      "Up to 3 users",
      "Client portal",
    ],
  },
  {
    title: "Premium",
    price: "$49",
    description: "For growing businesses",
    features: [
      "Unlimited invoices",
      "Custom templates",
      "24/7 priority support",
      "Unlimited users",
      "Advanced analytics",
      "API access",
    ],
  },
];

const PricingSeciton = () => {
  return (
    <ScrollAnimated
      className="child-one"
      animationClass="slide-in"
      threshold={0.3}
      triggerOnce={true}
    >
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Simple and Affordable <br />
            <span className=" gradient-text">Pricing</span>{" "}
          </h2>
          <p className="text-xl text-muted-foreground">
            Choose the plan that best suits your needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricing.map((plan, index) => (
            <Card key={index} className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                <div className="text-4xl font-bold mb-2 gradient-text">
                  {plan.price}
                  <span className="text-lg ">/month</span>
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full ${
                  index === 1
                    ? "gradient-btn hover-color-shadow"
                    : "hover-shadow"
                }`}
                variant={index === 1 ? "default" : "outline_nohover"}
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </ScrollAnimated>
  );
};

export default PricingSeciton;
