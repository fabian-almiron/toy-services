'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

interface FormData {
  name: string;
  phone: string;
  email: string;
  boatMake: string;
  boatModel: string;
  boatYear: string;
  services: string[];
  timeline: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    boatMake: '',
    boatModel: '',
    boatYear: '',
    services: [],
    timeline: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const serviceOptions = [
    'Upholstery',
    'Flooring',
    'Covers',
    'Repairs',
    'Other',
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleCheckboxChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service],
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Placeholder: Replace with actual form submission endpoint
      // Example: Formspree, Resend, or custom API route
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          name: '',
          phone: '',
          email: '',
          boatMake: '',
          boatModel: '',
          boatYear: '',
          services: [],
          timeline: '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-sm text-red-500">
              {errors.name}
            </p>
          )}
        </div>

        {/* Phone & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
              Phone *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent ${
                errors.phone ? 'border-red-500' : 'border-gray-300'
              }`}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? 'phone-error' : undefined}
            />
            {errors.phone && (
              <p id="phone-error" className="mt-1 text-sm text-red-500">
                {errors.phone}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <p id="email-error" className="mt-1 text-sm text-red-500">
                {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Boat Info */}
        <div>
          <label className="block text-sm font-medium text-primary mb-2">
            Boat Information
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              name="boatMake"
              placeholder="Make"
              value={formData.boatMake}
              onChange={handleInputChange}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <input
              type="text"
              name="boatModel"
              placeholder="Model"
              value={formData.boatModel}
              onChange={handleInputChange}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <input
              type="text"
              name="boatYear"
              placeholder="Year"
              value={formData.boatYear}
              onChange={handleInputChange}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
        </div>

        {/* Services Needed */}
        <div>
          <label className="block text-sm font-medium text-primary mb-3">
            Services Needed
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {serviceOptions.map(service => (
              <label key={service} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.services.includes(service)}
                  onChange={() => handleCheckboxChange(service)}
                  className="w-4 h-4 text-accent border-gray-300 rounded focus:ring-accent"
                />
                <span className="text-sm text-text-dark">{service}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Preferred Timeline */}
        <div>
          <label htmlFor="timeline" className="block text-sm font-medium text-primary mb-2">
            Preferred Timeline
          </label>
          <select
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <option value="">Select a timeline</option>
            <option value="asap">As soon as possible</option>
            <option value="1-2weeks">1-2 weeks</option>
            <option value="3-4weeks">3-4 weeks</option>
            <option value="flexible">Flexible</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Tell us about your project..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-none"
          ></textarea>
        </div>

        {/* File Upload Placeholder */}
        <div>
          <label className="block text-sm font-medium text-primary mb-2">
            Upload Photos (Optional)
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <svg className="h-12 w-12 text-gray-400 mx-auto mb-3" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <p className="text-sm text-gray-600 mb-1">File upload coming soon</p>
            <p className="text-xs text-gray-500">For now, you can email photos to us after submitting</p>
          </div>
        </div>

        {/* Submit Status Messages */}
        {submitStatus === 'success' && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-800 text-sm">
              Thank you! We've received your quote request and will contact you shortly.
            </p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-800 text-sm">
              Sorry, there was an error submitting your request. Please try calling us directly.
            </p>
          </div>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          variant="accent"
          size="lg"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Request Your Free Quote'}
        </Button>

        <p className="text-xs text-text-light text-center">
          * Required fields. We'll respond within 1 business day.
        </p>
      </form>
    </Card>
  );
};
