import { NextResponse } from 'next/server';

// Placeholder API route for quote form submission
// Replace this with your actual form handling logic (Formspree, Resend, etc.)

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Log the form data (for development only)
    console.log('Quote request received:', data);

    // TODO: Implement actual email sending logic here
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'website@yourdomain.com',
    //   to: 'info@toysservices.com',
    //   subject: 'New Quote Request',
    //   html: `
    //     <h2>New Quote Request</h2>
    //     <p><strong>Name:</strong> ${data.name}</p>
    //     <p><strong>Phone:</strong> ${data.phone}</p>
    //     <p><strong>Email:</strong> ${data.email}</p>
    //     <p><strong>Boat:</strong> ${data.boatMake} ${data.boatModel} ${data.boatYear}</p>
    //     <p><strong>Services:</strong> ${data.services.join(', ')}</p>
    //     <p><strong>Timeline:</strong> ${data.timeline}</p>
    //     <p><strong>Message:</strong> ${data.message}</p>
    //   `,
    // });

    // For now, just return success
    return NextResponse.json(
      { 
        success: true, 
        message: 'Quote request received. We will contact you soon!' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing quote request:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Error submitting form. Please try calling us directly.' 
      },
      { status: 500 }
    );
  }
}
