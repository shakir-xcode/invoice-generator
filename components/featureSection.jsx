import React from "react";
import { Card } from "./ui/card";
import { ScrollAnimated } from "@/animation/animation-wrapper";
import {
  FileText,
  CreditCard,
  Users,
  BarChart,
  Clock,
  CheckCircle,
} from "lucide-react";

const features = [
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Multiple Template Options",
    description:
      "Choose from a variety of professional templates or create your own branded invoices.",
  },
  {
    icon: <CreditCard className="h-6 w-6" />,
    title: "Easy Item Tracking",
    description:
      "Add multiple items with descriptions, quantities, and tax rates effortlessly.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Client Management",
    description:
      "Store client information and send invoices with a few clicks.",
  },
  {
    icon: <BarChart className="h-6 w-6" />,
    title: "Track Invoice Status",
    description: "Monitor sent, paid, and overdue invoices in real-time.",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Automated Calculations",
    description:
      "Let the app handle taxes, discounts, and totals for you, ensuring accuracy.",
  },
  {
    icon: <CheckCircle className="h-6 w-6" />,
    title: "Secure Online Payments",
    description:
      "Accept payments directly through integrated gateways like Stripe or PayPal.",
  },
];

const FeatureSection = () => {
  return (
    <div className="container px-4 mx-auto ">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          Powerful Features for Every
          <br /> <span className="gradient-text">Business</span>
        </h2>
        <p className="text-xl text-muted-foreground">
          Our app is packed with features to streamline your invoicing process
        </p>
      </div>
      <ScrollAnimated
        className="child-one "
        animationClass="slide-in"
        threshold={0.4}
        triggerOnce={true}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div className="relative" key={index}>
              <div className="absolute h-1.5 -z-1 left-10 right-10  rounded-full gradient-item -top-0.5" />
              <Card className=" p-6 hover-shadow transition-shadow ">
                <div className="mb-4 ">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 ">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            </div>
          ))}
        </div>
      </ScrollAnimated>
    </div>
  );
};

export default FeatureSection;
