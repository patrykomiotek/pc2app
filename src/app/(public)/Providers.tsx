"use client";

import { Toast } from "@/components/Toast";

type Props = {
  children: React.ReactNode;
};

export const Providers = ({ children }: Props) => {
  // QueryClientProvider
  // AuthProvider
  // ThemeProvider

  return (
    <>
      {children}
      <Toast />
    </>
  );
};
