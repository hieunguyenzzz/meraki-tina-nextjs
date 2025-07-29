import React from "react";
import Layout from "@/components/layout/layout";
import { JournalPage } from "@/components/pages/journal-page";
import { Language } from '@/lib/i18n';

export const revalidate = 300;

interface JournalSlugPageProps {
  params: Promise<{ lang: Language; slug: string }>;
}

export default async function JournalSlugPage({ params }: JournalSlugPageProps) {
  const { lang, slug } = await params;

  return (
    <Layout lang={lang}>
      <JournalPage lang={lang} slug={slug} />
    </Layout>
  );
}