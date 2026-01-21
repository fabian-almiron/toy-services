import React from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ServiceIcon } from '@/components/ServiceIcon';

interface ServiceCardProps {
  icon: 'upholstery' | 'flooring' | 'covers' | 'repairs';
  title: string;
  description: string;
  href: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, href }) => {
  return (
    <Card hover className="p-6 h-full flex flex-col">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4 border border-accent/20">
        <ServiceIcon type={icon} className="h-8 w-8" />
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-text-light mb-6 flex-grow">{description}</p>
      <Button href={href} variant="secondary" size="sm">
        Learn More
      </Button>
    </Card>
  );
};
