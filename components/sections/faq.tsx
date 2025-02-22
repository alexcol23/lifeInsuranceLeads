import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: "What types of life insurance do you offer?",
    answer: "We offer various types of life insurance including Term Life, Whole Life, and Universal Life Insurance. Each type has its own benefits and features to suit different needs and financial goals.",
  },
  {
    question: "How much life insurance coverage do I need?",
    answer: "The amount of coverage you need depends on various factors including your income, debts, family size, and future financial goals. Our experts can help you calculate the right amount of coverage for your specific situation.",
  },
  {
    question: "How long does the application process take?",
    answer: "The application process typically takes 15-30 minutes to complete. Once submitted, we'll review your application and get back to you within 24-48 hours with available options and next steps.",
  },
  {
    question: "Are medical exams required?",
    answer: "Not always. We offer both medical and no-medical exam policies. The requirement for a medical exam depends on factors such as your age, the coverage amount, and the type of policy you're applying for.",
  },
  {
    question: "How much does life insurance cost?",
    answer: "Premium costs vary based on factors like age, health, coverage amount, and policy type. We work with multiple providers to find the most competitive rates for your specific situation.",
  },
];

export function FaqSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our life insurance solutions.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}