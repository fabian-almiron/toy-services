import { Hero } from '@/components/home/Hero';
import { Highlights } from '@/components/home/Highlights';
import { ServicesPreview } from '@/components/home/ServicesPreview';
import { FeaturedGallery } from '@/components/home/FeaturedGallery';
import { ProcessSteps } from '@/components/home/ProcessSteps';
import { Testimonials } from '@/components/home/Testimonials';
import { FAQPreview } from '@/components/home/FAQPreview';
import { CTABand } from '@/components/home/CTABand';

export default function Home() {
  return (
    <>
      <Hero />
      <Highlights />
      <ServicesPreview />
      <FeaturedGallery />
      <ProcessSteps />
      <Testimonials />
      <FAQPreview />
      <CTABand />
    </>
  );
}
