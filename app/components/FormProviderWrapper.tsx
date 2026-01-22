"use client";

import { FormProvider } from '../pages/components/formcontext';

export default function FormProviderWrapper({ children }: { children: React.ReactNode }) {
  return <FormProvider>{children}</FormProvider>;
}
