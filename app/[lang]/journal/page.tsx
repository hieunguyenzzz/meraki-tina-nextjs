import React from "react";
import Layout from "@/components/layout/layout";
import { JournalListing } from "@/components/pages/journal-listing";
import { Language } from '@/lib/i18n';

export const revalidate = 300;

interface JournalPageProps {
  params: Promise<{ lang: Language }>;
}

export default async function JournalPage({ params }: JournalPageProps) {
  const { lang } = await params;

  return (
    <Layout lang={lang}>
      <JournalListing lang={lang} />
    </Layout>
  );
}