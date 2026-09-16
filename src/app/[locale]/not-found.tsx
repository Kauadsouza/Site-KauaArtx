'use client';

import { Link } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const COPY = {
  pt: { title: 'Página não encontrada', text: 'A página que você procura não existe ou foi movida.', back: 'Voltar ao início' },
  en: { title: 'Page not found', text: 'The page you are looking for does not exist or has moved.', back: 'Back to home' },
} as const;

export default function NotFound() {
  const locale = useLocale();
  const copy = COPY[locale === 'en' ? 'en' : 'pt'];

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <p className="font-mono text-8xl font-bold text-accent/20 mb-6">404</p>
        <h1 className="text-3xl font-bold text-foreground mb-3">{copy.title}</h1>
        <p className="text-foreground-muted mb-8">{copy.text}</p>
        <Link href="/" className="btn-pill-primary text-sm">
          <ArrowLeft size={14} />
          {copy.back}
        </Link>
      </motion.div>
    </div>
  );
}
