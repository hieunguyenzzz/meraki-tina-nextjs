import React, { PropsWithChildren } from "react";
import { LayoutProvider } from "./layout-context";
import client from "../../tina/__generated__/client";
import { MerakiHeader } from "./nav/meraki-header";
import { Footer } from "./nav/footer";
import { Language, defaultLanguage } from "@/lib/i18n";

type LayoutProps = PropsWithChildren & {
  rawPageData?: any;
  lang?: Language;
};

export default async function Layout({ children, rawPageData, lang = defaultLanguage }: LayoutProps) {
  const { data: globalData } = await client.queries.global({
    relativePath: "index.json",
  },
    {
      fetchOptions: {
        next: {
          revalidate: 60,
        },
      }
    }
  );

  return (
    <LayoutProvider globalSettings={globalData.global} pageData={rawPageData} lang={lang}>
      <MerakiHeader />
      <main className="overflow-x-hidden pt-20">
        {children}
      </main>
      <Footer />
    </LayoutProvider>
  );
}
