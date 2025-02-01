'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  CheckCircle,
  DollarSign,
  Zap,
  TrendingUp,
  Award,
  Star,
  PenBoxIcon
} from "lucide-react";
import Image from "next/image";
import TestimonialCarousel from "@/components/testimonial-carousel";
import { InvoiceForm } from "@/components/invoiceFrom";
import Link from "next/link";
import { ScrollAnimated } from "@/animation/animation-wrapper";
import { FaqAccordion } from "@/components/faq-accordian";
import FeatureSection from "@/components/featureSection";
import BenefitsSections from "@/components/benefitsSections";
import PricingSeciton from "@/components/pricingSeciton";

export default function Home() {

  // Gradient colors : #F443E6, 6739B7


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
        "Client portal"
      ]
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
        "Client portal"
      ]
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
        "API access"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Design Studio Co.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150",
      testimonial:
        "This invoice generator has transformed how we handle our billing. It's intuitive, professional, and saves us hours every week.",
    },
    {
      name: "Michael Chen",
      company: "Tech Solutions Inc.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150",
      testimonial:
        "The automated calculations and tracking features have eliminated errors and improved our cash flow significantly.",
    },
    {
      name: "Sarah Johnson",
      company: "Design Studio Co.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150",
      testimonial:
        "This invoice generator has transformed how we handle our billing. It's intuitive, professional, and saves us hours every week.",
    },
    {
      name: "Michael Chen",
      company: "Tech Solutions Inc.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150",
      testimonial:
        "The automated calculations and tracking features have eliminated errors and improved our cash flow significantly.",
    },
    {
      name: "Sarah Johnson",
      company: "Design Studio Co.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150",
      testimonial:
        "This invoice generator has transformed how we handle our billing. It's intuitive, professional, and saves us hours every week.",
    },
    {
      name: "Michael Chen",
      company: "Tech Solutions Inc.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150",
      testimonial:
        "The automated calculations and tracking features have eliminated errors and improved our cash flow significantly.",
    },
  ];


  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto sm:h-[100svh] flex flex-col sm:flex-row  items-center justify-center pt-[134px] md:pt-[134px] pb-[34px] px-7 ">
        <ScrollAnimated
          className="fade-left-initital  sm:w-[60%] sm:px-4 "
          animationClass="fade-left"
          threshold={0}
          triggerOnce={true}
        >
          <div className=" flex flex-col justify-center w-full h-full  text-left z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
              Effortlessly Create Professional<br /> <span className="gradient-text">Invoices</span>
            </h1>
            <p className=" md:text-xl text-muted-foreground mb-8 max-w-3xl ">
              Stop wasting time on manual invoicing. Our app lets you quickly generate professional invoices in seconds. Get paid faster with easy downloads and seamless client communication.
            </p>
            <div className="flex flex-cl flex-wrap sm:flex-row gap-4 justify-start">
              <Link href={"#invoice-form"}>
                <Button size="lg" className=" hover-color-shadow text-lg px-8 gradient-btn ">
                  Create Invoice
                  <PenBoxIcon />
                </Button>
              </Link>
              <Button size="lg" variant="outline_nohover" className="text-lg px-8 hover-shadow ">
                Learn More
              </Button>
            </div>
          </div>
        </ScrollAnimated>

        <div className="  relative flex justify-center items-center container w-full h-full sm:w-1/2 px-4">
          <Image priority={false} className=" sm:block lg:w-[]  rounded-3xl object-cover mx-auto z-10 d-shadow" src="/images/inv.webp" width={1536} height={1536} alt="inovice-img" />
        </div>

      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/50 ">
        <FeatureSection />
      </section>


      {/* Invoice Form */}
      <section id="invoice-form" className="py-20 ">
        <InvoiceForm />
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary/50">
        <BenefitsSections />
      </section>

      {/* Pricing Section */}
      <section className="py-20 ">
        <PricingSeciton />
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-secondary/50">
        <ScrollAnimated
          className="child-one"
          animationClass="slide-in"
          threshold={0.3}
          triggerOnce={true}
        >
          <TestimonialCarousel />
        </ScrollAnimated>
      </section>

      {/* FAQ Section */}
      <section className="py-20 ">
        <ScrollAnimated
          className="child-one"
          animationClass="slide-in"
          threshold={0.3}
          triggerOnce={true}
        >
          <div className="container px-4 md:w-[80%] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions
                <br /><span className=" gradient-text"> (FAQs)</span> </h2>
              <p className="text-xl text-muted-foreground">
                Have questions about using our invoice generator? We’ve got you covered! Below are some common questions and answers to help you create, manage, and send professional invoices with ease.
              </p>
            </div>
            <div className="">
              <FaqAccordion />
            </div>
          </div>
        </ScrollAnimated>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/50">
        <ScrollAnimated
          className="child-one "
          animationClass="slide-in"
          threshold={0.3}
          triggerOnce={true}
        >
          <div className="container px-4 mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Ready to Get Started?</h2>
            <p className="text-xl mb-8 ">
              Join thousands of businesses who trust our app to streamline their invoicing.
            </p>
            <Link href={"#invoice-form"}>
              <Button size="lg" className=" text-primary text-lg px-8 gradient-btn animate-bounce hover-color-shadow">
                Start Your Free Trial
              </Button>
            </Link>

          </div>
        </ScrollAnimated>
      </section>

    </div>
  );
}