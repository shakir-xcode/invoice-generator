'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
    FileText,
    CreditCard,
    Users,
    BarChart,
    Clock,
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

export default function Home() {

    // Gradient colors : #F443E6, 6739B7

    const features = [
        {
            icon: <FileText className="h-6 w-6" />,
            title: "Customizable Templates",
            description: "Choose from a variety of professional templates or create your own branded invoices."
        },
        {
            icon: <CreditCard className="h-6 w-6" />,
            title: "Easy Item Tracking",
            description: "Add multiple items with descriptions, quantities, and tax rates effortlessly."
        },
        {
            icon: <Users className="h-6 w-6" />,
            title: "Client Management",
            description: "Store client information and send invoices with a few clicks."
        },
        {
            icon: <BarChart className="h-6 w-6" />,
            title: "Track Invoice Status",
            description: "Monitor sent, paid, and overdue invoices in real-time."
        },
        {
            icon: <Clock className="h-6 w-6" />,
            title: "Automated Calculations",
            description: "Let the app handle taxes, discounts, and totals for you, ensuring accuracy."
        },
        {
            icon: <CheckCircle className="h-6 w-6" />,
            title: "Secure Online Payments",
            description: "Accept payments directly through integrated gateways like Stripe or PayPal."
        }
    ];

    const benefits = [
        {
            icon: <DollarSign className="h-6 w-6" />,
            title: "Save Time & Money",
            description: "Reduce manual data entry and eliminate costly invoicing errors."
        },
        {
            icon: <Zap className="h-6 w-6" />,
            title: "Get Paid Faster",
            description: "Send professional invoices that impress clients and encourage prompt payment."
        },
        {
            icon: <TrendingUp className="h-6 w-6" />,
            title: "Improve Cash Flow",
            description: "Track payments effectively and maintain a healthy cash flow."
        },
        {
            icon: <Award className="h-6 w-6" />,
            title: "Boost Productivity",
            description: "Focus on core business activities while our app handles the invoicing."
        },
        {
            icon: <Star className="h-6 w-6" />,
            title: "Professional Image",
            description: "Project a professional image to your clients with branded invoices."
        }
    ];

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
                                <Button size="lg" className=" gradient-shadow text-lg px-8 gradient-btn ">
                                    Create Invoice
                                    <PenBoxIcon />
                                </Button>
                            </Link>
                            <Button size="lg" variant="outline" className="text-lg px-8">
                                Learn More
                            </Button>
                        </div>
                    </div>
                </ScrollAnimated>

                <div className="  relative flex justify-center items-center container w-full h-full sm:w-1/2 px-4">
                    {/* <div className=" hidden sm:block absolute inset-0 mesh-gradient" /> */}
                    <Image className=" sm:block overflow-visible  lg:w-[]  rounded-3xl object-cover mx-auto z-10" src="/images/inv.png" width={1536} height={1536} alt="inovice-img" />
                </div>



                {/* <div className="w-1/2 border-2 border-red-500">
                </div> */}

            </section>

            {/* Features Section */}
            <section className="py-20 bg-secondary/50 ">
                <div className="container px-4 mx-auto ">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Powerful Features for Every<br /> <span className="gradient-text">Business</span></h2>
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
                                    <Card className=" p-6 hover:shadow-lg transition-shadow ">
                                        <div className="mb-4 ">{feature.icon}</div>
                                        <h3 className="text-xl font-semibold mb-2 ">{feature.title}</h3>
                                        <p className="text-muted-foreground">{feature.description}</p>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </ScrollAnimated>
                </div>
            </section>

            <section id="invoice-form" className="py-20 ">
                <InvoiceForm />
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-secondary/50">
                <ScrollAnimated
                    className="child-one"
                    animationClass="slide-in"
                    threshold={0.3}
                    triggerOnce={true}
                >
                    <div className="container px-4 mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold mb-4">Experience the Benefits of Using<br /> <span className="gradient-text">Our App</span></h2>
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
            </section>

            {/* Pricing Section */}
            <section className="py-20 ">
                <ScrollAnimated
                    className="child-one"
                    animationClass="slide-in"
                    threshold={0.3}
                    triggerOnce={true}
                >
                    <div className="container px-4 mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold mb-4">Simple and Affordable <br /><span className=" gradient-text">Pricing</span> </h2>
                            <p className="text-xl text-muted-foreground">
                                Choose the plan that best suits your needs
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {pricing.map((plan, index) => (
                                <Card key={index} className="p-8">
                                    <div className="text-center mb-8">
                                        <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                                        <div className="text-4xl font-bold mb-2 gradient-text">{plan.price}<span className="text-lg ">/month</span></div>
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
                                    <Button className={`w-full ${index === 1 ? "gradient-btn" : ""}`} variant={index === 1 ? "default" : "outline"}>
                                        Get Started
                                    </Button>
                                </Card>
                            ))}
                        </div>
                    </div>
                </ScrollAnimated>
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
                            <Button size="lg" className=" text-primary text-lg px-8 gradient-btn animate-bounce">
                                Start Your Free Trial
                            </Button>
                        </Link>

                    </div>
                </ScrollAnimated>
            </section>

        </div>
    );
}