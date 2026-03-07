'use client';

import { NextIntlClientProvider } from 'next-intl';

export function Providers({ children, messages, locale }) {
  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      {children}
    </NextIntlClientProvider>
  );
}