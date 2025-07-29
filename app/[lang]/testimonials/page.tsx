import React from "react";
import Layout from "@/components/layout/layout";
import { Language } from '@/lib/i18n';

export const revalidate = 300;

interface TestimonialsPageProps {
  params: Promise<{ lang: Language }>;
}

export default async function TestimonialsPage({ params }: TestimonialsPageProps) {
  const { lang } = await params;
  
  return (
    <Layout lang={lang}>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">
          {lang === 'vi' ? 'Lời Khen Ngợi' : 'Kind Words'}
        </h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-600 text-center mb-12">
            {lang === 'vi' 
              ? 'Những lời cảm ơn chân thành từ các cặp đôi đã tin tưởng chúng tôi.'
              : 'Heartfelt thanks from couples who trusted us with their special day.'
            }
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonials will be populated from TinaCMS */}
          </div>
        </div>
      </div>
    </Layout>
  );
}