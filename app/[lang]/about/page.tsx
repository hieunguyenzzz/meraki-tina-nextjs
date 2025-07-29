import React from "react";
import Layout from "@/components/layout/layout";
import { Language } from '@/lib/i18n';

export const revalidate = 300;

interface AboutPageProps {
  params: Promise<{ lang: Language }>;
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { lang } = await params;
  
  return (
    <Layout lang={lang}>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">
          {lang === 'vi' ? 'Về Chúng Tôi' : 'About Us'}
        </h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-600 mb-8">
            {lang === 'vi' 
              ? 'Chúng tôi là Meraki - đội ngũ tổ chức tiệc cưới chuyên nghiệp tại Việt Nam.'
              : 'We are Meraki - a professional wedding planning team based in Vietnam.'
            }
          </p>
        </div>
      </div>
    </Layout>
  );
}