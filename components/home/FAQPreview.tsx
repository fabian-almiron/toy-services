import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { FAQAccordion } from '@/components/FAQAccordion';
import { faqs } from '@/lib/content';

export const FAQPreview: React.FC = () => {
  const previewFAQs = faqs.slice(0, 4);

  return (
    <section className="py-20 bg-dark">
      <Container size="md">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Quick answers to common questions about our services"
          centered
          className="mb-12"
        />
        
        <FAQAccordion faqs={previewFAQs} />
        
        <div className="text-center mt-10">
          <Button href="/faq" variant="secondary">
            View All FAQs
          </Button>
        </div>
      </Container>
    </section>
  );
};
