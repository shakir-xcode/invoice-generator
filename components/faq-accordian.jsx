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
    question: "Does StyledInvoice offer multiple invoice templates?",
    answer:
      "Yes! StyledInvoice provides a variety of professionally designed invoice templates to suit different business needs. You can choose from multiple styles and formats to create invoices that match your brand.",
  },
  {
    id: 4,
    question: "How do I make my invoice legally compliant?",
    answer: (
      <>
        To ensure your invoice is legally compliant, check the{" "}
        <a
          href="https://www.irs.gov/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline italic"
        >
          IRS guidelines
        </a>{" "}
        for tax compliance. If you are in the UK, refer to{" "}
        <a
          href="https://www.gov.uk/invoicing-and-taking-payment-from-customers"
          target="_blank"
          rel="noopener noreferrer"
          className="underline italic"
        >
          Gov.uk’s invoicing rules
        </a>
        .
      </>
    ),
  },
  {
    id: 5,
    question: "What file formats are available for invoices?",
    answer: "You can download invoices as PDFs for easy sharing and printing.",
  },
  {
    id: 6,
    question: "How is the total amount calculated?",
    answer:
      "The total is calculated based on: Subtotal (sum of all product/service amounts), Tax (if applicable), Discount (if any), and Shipping charges (if applicable).",
  },
  {
    id: 7,
    question: "What payment methods should I offer on my invoices?",
    answer: (
      <>
        Consider offering payment options like{" "}
        <a
          href="https://www.paypal.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline italic"
        >
          PayPal
        </a>
        ,{" "}
        <a
          href="https://stripe.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline italic"
        >
          Stripe
        </a>
        , and{" "}
        <a
          href="https://squareup.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Square
        </a>{" "}
        for secure transactions.
      </>
    ),
  },
  {
    id: 8,
    question: "Is this invoice generator free to use?",
    answer:
      "Yes, you can create and download invoices for free. However, we offer premium features like saving invoice history, recurring invoices, and advanced customizations.",
  },
];

export function FaqAccordion() {
  return (
    <div>
      <div type="single" className="w-full text-lg">
        {faqs.map((item, index) => {
          return (
            <div
              key={item.id}
              value={`item-${item.id}`}
              className="flex flex-col gap-1 mt-5"
            >
              <h3 className="gradient-text font-semibold">
                Q: {item.question}
              </h3>
              <p className=" text-primary/90">A: {item.answer}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
