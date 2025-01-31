import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "What is this invoice generator used for?",
    answer:
      "Our invoice generator helps freelancers, businesses, and service providers create professional invoices quickly. You can customize company details, add products/services, apply taxes/discounts, and send invoices to clients.",
  },
  {
    id: 2,
    question: "Do I need to sign up to generate an invoice?",
    answer:
      "No, you can create invoices without signing up. However, signing up allows you to save and manage your invoices for future reference.",
  },
  {
    id: 3,
    question: "Can I customize my invoice?",
    answer:
      "Yes! You can customize company details, client details, currency, tax rates, discounts, payment terms, and additional notes.",
  },
  {
    id: 4,
    question: "What file formats are available for invoices?",
    answer: "You can download invoices as PDFs for easy sharing and printing.",
  },
  {
    id: 5,
    question: "How is the total amount calculated?",
    answer:
      "The total is calculated based on: Subtotal (sum of all product/service amounts), Tax (if applicable), Discount (if any), and Shipping charges (if applicable).",
  },
  {
    id: 6,
    question: "Can I send invoices directly to clients?",
    answer:
      "Yes! After generating an invoice, you can email it directly to your client from the app.",
  },
  {
    id: 7,
    question: "Is this invoice generator free to use?",
    answer:
      "Yes, you can create and download invoices for free. However, we offer premium features like saving invoice history, recurring invoices, and advanced customizations.",
  },
];

export function FaqAccordion() {
  return (
    <div>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((item, index) => {
          return (
            <AccordionItem key={item.id} value={`item-${item.id}`}>
              <AccordionTrigger className="gradient-text text-lg">
                <span className="">{item.question}</span>
                <ChevronDown className=" text-[#e02b82]  h-5 w-5 transition-transform duration-200 group-data-[state=open]:rotate-180 ml-auto " />
              </AccordionTrigger>
              <AccordionContent className="text-lg">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}

