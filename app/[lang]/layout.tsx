import React from "react";
import { notFound } from 'next/navigation';
import { isValidLanguage } from '@/lib/i18n';

interface LangLayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export default async function LangLayout({ children, params }: LangLayoutProps) {
  const { lang } = await params;
  
  if (!isValidLanguage(lang)) {
    notFound();
  }

  return (
    <div data-lang={lang}>
      {children}
    </div>
  );
}