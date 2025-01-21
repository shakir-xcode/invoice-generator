'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
    Mail,
    Twitter,
    Facebook,
    Instagram,
    Github
} from "lucide-react";

export default function Home() {
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
                "Email support",
                "Single user"
            ]
        },
        {
            title: "Standard",
            price: "$19",
            description: "Best for small businesses",
            features: [
                "Up to 50 invoices per month",
                "Premium templates",
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
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150",
            testimonial: "This invoice generator has transformed how we handle our billing. It's intuitive, professional, and saves us hours every week."
        },
        {
            name: "Michael Chen",
            company: "Tech Solutions Inc.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150",
            testimonial: "The automated calculations and tracking features have eliminated errors and improved our cash flow significantly."
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className=" relative h-[90svh] flex items-center justify-center bg-gradient-to-r from-primary/10 to-primary/5">
                <div className="mesh-gradient"></div>
                <div className="container px-4 mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                        Effortlessly Create Professional<br /> Invoices
                    </h1>
                    <p className=" md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                        Stop wasting time on manual invoicing. Our app lets you quickly generate professional invoices in seconds. Get paid faster with easy downloads and seamless client communication.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <Button size="lg" className="text-lg px-8">
                            Start Invoicing Now
                        </Button>
                        {/* <Button size="lg" variant="outline" className="text-lg px-8">
                            Learn More
                        </Button> */}
                    </div>
                    {/* <div className="mt-12">
                        <img
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=600"
                            alt="Invoice Dashboard"
                            className="rounded-lg shadow-2xl"
                        />
                    </div> */}
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-secondary/20">
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Powerful Features for Every Business</h2>
                        <p className="text-xl text-muted-foreground">
                            Our app is packed with features to streamline your invoicing process
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                                <div className="mb-4 text-primary">{feature.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                <p className="text-muted-foreground">{feature.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20">
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Experience the Benefits of Using Our App</h2>
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
            </section>

            {/* Pricing Section */}
            <section className="py-20 bg-secondary/20">
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Simple and Affordable Pricing</h2>
                        <p className="text-xl text-muted-foreground">
                            Choose the plan that best suits your needs
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {pricing.map((plan, index) => (
                            <Card key={index} className="p-8">
                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                                    <div className="text-4xl font-bold mb-2">{plan.price}<span className="text-lg">/month</span></div>
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
                                <Button className="w-full" variant={index === 1 ? "default" : "outline"}>
                                    Get Started
                                </Button>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20">
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
                        <p className="text-xl text-muted-foreground">
                            Hear from satisfied businesses using our app
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <Card key={index} className="p-8">
                                <div className="flex items-center gap-4 mb-4">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-16 h-16 rounded-full"
                                    />
                                    <div>
                                        <h3 className="font-semibold">{testimonial.name}</h3>
                                        <p className="text-muted-foreground">{testimonial.company}</p>
                                    </div>
                                </div>
                                <p className="text-lg italic">{testimonial.testimonial}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary text-primary-foreground">
                <div className="container px-4 mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
                    <p className="text-xl mb-8 opacity-90">
                        Join thousands of businesses who trust our app to streamline their invoicing.
                    </p>
                    <Button size="lg" variant="secondary" className="text-lg px-8">
                        Start Your Free Trial
                    </Button>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 bg-secondary/20">
                <div className="container px-4 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="font-bold mb-4">Company</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-primary">About</a></li>
                                <li><a href="#" className="hover:text-primary">Careers</a></li>
                                <li><a href="#" className="hover:text-primary">Press</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold mb-4">Product</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-primary">Features</a></li>
                                <li><a href="#" className="hover:text-primary">Pricing</a></li>
                                <li><a href="#" className="hover:text-primary">Security</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold mb-4">Resources</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-primary">Blog</a></li>
                                <li><a href="#" className="hover:text-primary">Help Center</a></li>
                                <li><a href="#" className="hover:text-primary">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold mb-4">Connect</h3>
                            <div className="flex gap-4">
                                <a href="#" className="hover:text-primary"><Twitter className="h-5 w-5" /></a>
                                <a href="#" className="hover:text-primary"><Facebook className="h-5 w-5" /></a>
                                <a href="#" className="hover:text-primary"><Instagram className="h-5 w-5" /></a>
                                <a href="#" className="hover:text-primary"><Github className="h-5 w-5" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground">
                        <p>&copy; 2024 Invoice Generator. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}