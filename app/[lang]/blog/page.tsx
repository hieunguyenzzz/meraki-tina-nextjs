import React from "react";
import Layout from "@/components/layout/layout";
import { Language } from '@/lib/i18n';

export const revalidate = 300;

interface BlogPageProps {
  params: Promise<{ lang: Language }>;
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { lang } = await params;
  
  return (
    <Layout lang={lang}>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">
          {lang === 'vi' ? 'Blog' : 'Blog'}
        </h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-600 text-center mb-12">
            {lang === 'vi' 
              ? 'Những bài viết hữu ích về lập kế hoạch đám cưới và xu hướng cưới mới nhất.'
              : 'Helpful articles about wedding planning and the latest wedding trends.'
            }
          </p>
          <div className="space-y-8">
            {/* Blog posts will be populated from TinaCMS */}
          </div>
        </div>
      </div>
    </Layout>
  );
}