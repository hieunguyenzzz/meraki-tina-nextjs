"use client";
import React, { useState, useContext } from "react";
import { GlobalQuery } from "../../tina/__generated__/types";
import { Language, defaultLanguage } from "@/lib/i18n";

interface LayoutState {
  globalSettings: GlobalQuery["global"];
  setGlobalSettings: React.Dispatch<
    React.SetStateAction<GlobalQuery["global"]>
  >;
  pageData: {};
  setPageData: React.Dispatch<React.SetStateAction<{}>>;
  theme: GlobalQuery["global"]["theme"];
  lang: Language;
}

const LayoutContext = React.createContext<LayoutState | undefined>(undefined);

export const useLayout = () => {
  const context = useContext(LayoutContext);
  return (
    context || {
      theme: {
        color: "blue",
        darkMode: "default",
      },
      globalSettings: undefined,
      pageData: undefined,
      lang: defaultLanguage,
    }
  );
};

interface LayoutProviderProps {
  children: React.ReactNode;
  globalSettings: GlobalQuery["global"];
  pageData: {};
  lang: Language;
}

export const LayoutProvider: React.FC<LayoutProviderProps> = ({
  children,
  globalSettings: initialGlobalSettings,
  pageData: initialPageData,
  lang,
}) => {
  const [globalSettings, setGlobalSettings] = useState<GlobalQuery["global"]>(
    initialGlobalSettings
  );
  const [pageData, setPageData] = useState<{}>(initialPageData);

  const theme = globalSettings.theme;

  return (
    <LayoutContext.Provider
      value={{
        globalSettings,
        setGlobalSettings,
        pageData,
        setPageData,
        theme,
        lang,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};
