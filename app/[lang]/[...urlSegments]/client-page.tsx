"use client";
import { Blocks } from "@/components/blocks";
import { PageQuery } from "@/tina/__generated__/types";
import ErrorBoundary from "@/components/error-boundary";

export interface ClientPageProps {
  data: {
    page: PageQuery["page"];
  };
  variables?: {
    relativePath: string;
  };
  query?: string;
}

export default function ClientPage(props: ClientPageProps) {
  // For now, use the data directly without useTina hook
  const { data } = props;
  return (
    <ErrorBoundary>
      <Blocks {...data?.page} />
    </ErrorBoundary>
  );
}
