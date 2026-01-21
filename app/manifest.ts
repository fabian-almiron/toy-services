import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'TOYS SERVICES & UPHOLSTERY',
    short_name: 'Toys Services',
    description: 'Premium marine upholstery and flooring in West Jordan, Utah',
    start_url: '/',
    display: 'standalone',
    background_color: '#0A2540',
    theme_color: '#14B8A6',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
