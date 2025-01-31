"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "./ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "Design Studio Co.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150",
    testimonial:
      "The automated calculations and tracking features have eliminated errors and improved our cash flow significantly.",
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
      "The automated calculations and tracking features have eliminated errors and improved our cash flow significantly.",
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
      "The automated calculations and tracking features have eliminated errors and improved our cash flow significantly.",
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

const TestimonialCarousel = () => {
  return (
    <div className="container px-10 mx-auto ">
      <div className="text-center mb-16 ">
        <h2 className="text-4xl font-bold mb-4">
          What Our Customers Say
          <br /> <span className="gradient-text">About Us</span>
        </h2>
        <p className="text-xl text-muted-foreground">
          Hear from satisfied businesses using our app
        </p>
      </div>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-[94%] mx-auto "
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem
              key={index}
              className="basis-[97%] md:basis-[45%] lg:basis-[33%] "
            >
              <Card className=" backdrop-blur-sm">
                <CardContent className="p-6">
                  <blockquote className="space-y-4">
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full"
                      />
                      <div>
                        <h3 className="font-semibold">{testimonial.name}</h3>
                        <p className="text-muted-foreground">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>

                    <p className="italic text-md">
                      &quot;{testimonial.testimonial}&quot;
                    </p>
                  </blockquote>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="gradient-btn" />
        <CarouselNext className="gradient-btn" />
      </Carousel>
    </div>
  );
};

export default TestimonialCarousel;
