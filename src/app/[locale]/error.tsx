'use client';

import { useEffect } from 'react';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';

const COPY = {
  pt: {
    kicker: 'Algo falhou',
    title: 'Esta página não carregou.',
    text: 'O problema é do meu lado, não do seu. Tente de novo em instantes.',
    retry: 'Tentar de novo',
    home: 'Ir para o início',
    code: 'Código do erro',
  },
  en: {
    kicker: 'Something broke',
    title: 'This page did not load.',
    text: 'The problem is on my side, not yours. Please try again in a moment.',
    retry: 'Try again',
    home: 'Go to home',
    code: 'Error code',
  },
} as const;

export default function LocaleError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const locale = useLocale();
  const copy = COPY[locale === 'en' ? 'en' : 'pt'];

  useEffect(() => {
    console.error('Falha no site KauaArtx:', error.message, error.digest ?? '');
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <p className="mb-3 font-mono text-xs tracking-widest text-foreground-muted uppercase">{copy.kicker}</p>
        <h1 className="mb-3 text-3xl font-bold text-foreground">{copy.title}</h1>
        <p className="mb-8 text-foreground-muted">{copy.text}</p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button type="button" onClick={reset} className="btn-pill-primary text-sm">{copy.retry}</button>
          <Link href="/" className="text-sm text-foreground-muted underline underline-offset-4">{copy.home}</Link>
        </div>
        {error.digest && <p className="mt-6 font-mono text-xs text-foreground-muted">{copy.code}: {error.digest}</p>}
      </div>
    </div>
  );
}
