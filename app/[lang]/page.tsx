import React from "react";
import Layout from "@/components/layout/layout";
import { Homepage } from "@/components/pages/homepage";
import { Language } from '@/lib/i18n';

export const revalidate = 300;

interface HomePageProps {
  params: Promise<{ lang: Language }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { lang } = await params;

  return (
    <Layout lang={lang}>
      <Homepage lang={lang} />
    </Layout>
  );
}