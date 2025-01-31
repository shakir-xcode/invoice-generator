import { ScrollAnimated } from "@/animation/animation-wrapper";
import { Award, DollarSign, Star, TrendingUp, Zap } from "lucide-react";
import React from "react";

const benefits = [
  {
    icon: <DollarSign className="h-6 w-6" />,
    title: "Save Time & Money",
    description:
      "Reduce manual data entry and eliminate costly invoicing errors.",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Get Paid Faster",
    description:
      "Send professional invoices that impress clients and encourage prompt payment.",
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Improve Cash Flow",
    description: "Track payments effectively and maintain a healthy cash flow.",
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Boost Productivity",
    description:
      "Focus on core business activities while our app handles the invoicing.",
  },
  {
    icon: <Star className="h-6 w-6" />,
    title: "Professional Image",
    description:
      "Project a professional image to your clients with branded invoices.",
  },
];

const BenefitsSections = () => {
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
            Experience the Benefits of Using
            <br /> <span className="gradient-text">Our App</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            See how our app can transform your business
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="text-primary">{benefit.icon}</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollAnimated>
  );
};

export default BenefitsSections;
