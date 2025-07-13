'use client';

import { Button } from "@/components/ui/button";
import { PenBoxIcon } from "lucide-react";
import TestimonialCarousel from "@/components/testimonial-carousel";
import { InvoiceForm } from "@/components/invoiceFrom";
import Link from "next/link";
import Image from "next/image"
import { ScrollAnimated } from "@/animation/animation-wrapper";
import { FaqAccordion } from "@/components/faq-accordian";
import FeatureSection from "@/components/featureSection";
import BenefitsSections from "@/components/benefitsSections";

export default function Home() {

  // Gradient colors : #F443E6, 6739B7


  return (
    <div className="bg-background ">
      {/* Hero Section */}
      <div className="relative container mx-auto">
        <section className="  mx-auto md:h-[670px] flex flex-col md:flex-row 
        justify-center pt-[134px] md:pt-[134px] pb-[64px] px-7">

          {/* <div className=" absolute inset-0 mesh-gradient " /> */}
          <div className=" flex flex-col justify-center items-start z-10">
            <div className="flex items-center justify-center gap-1 w-fit px-4 py-1 mb-6 rounded-3xl  border border-primary/50 ">
              <span className="w-4 h-[1px] bg-primary/50" />
              <h1 className=" font-bold text-primary/80">Free Invoice Generator</h1>
              <span className="w-4 h-[1px] bg-primary/50" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 text-primary tracking-tight">
              Effortlessly Create Professional <span className="gradient-text">Invoices</span>
            </h2>
            <p className="  text-primary/70 mb-8 max-w-3xl ">
              Simplify invoicing with our invoice generator. Choose from a variety of invoice templates, create professional invoices and get paid faster with easy downloads.
            </p>

            <div className="  flex sm:flex-row gap-4 justify-center">
              <Link href={"#invoice-form"}>
                <Button size="lg" className=" hover-color-shadow text-lg px-8 gradient-btn ">
                  Create Invoice
                  <PenBoxIcon />
                </Button>
              </Link>
              {/* <Button size="lg" variant="outline_nohover" className="text-lg px-8 hover-shadow ">
                Learn More
              </Button> */}
            </div>
          </div>

          <div className="w-[400px] self-center h-[200px] lg:w-[700px] lg:h-[400px] mt-[100px] md:mt-0 relative flex justify-center items-center ">
            <Image priority={false}
              className=" rounded-3xl z-10 d-shadow"
              style={{
                width: "100%",
                height: "auto",
              }}
              width="400"
              height="300"
              src="/images/inv2.png"
              alt="inovice-img" />
          </div>

        </section>
      </div>

      {/* Benefits Section */}
      <section className="py-20 ">
        <BenefitsSections />
      </section>

      {/* Invoice Form */}
      <section id="invoice-form" className="py-20 bg-secondary/50">
        <InvoiceForm />
      </section>

      {/* Features Section */}
      <section className="py-20  ">
        <FeatureSection />
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
                Start Invoicing Now
              </Button>
            </Link>

          </div>
        </ScrollAnimated>
      </section>

    </div>
  );
}