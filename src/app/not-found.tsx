import Link from 'next/link';
import { getLocale } from 'next-intl/server';

/**
 * O 404 que estranhos realmente veem.
 *
 * O [locale]/not-found.tsx só entra quando algo dentro do segmento de idioma
 * chama notFound() — um endereço inexistente não casa com rota nenhuma e cai
 * aqui, na raiz. Sem este arquivo, a página era a tela cinza padrão do Next.
 */
const COPY = {
  pt: {
    title: 'Página não encontrada',
    text: 'O endereço que você abriu não existe ou foi movido.',
    back: 'Voltar ao início',
  },
  en: {
    title: 'Page not found',
    text: 'The address you opened does not exist or has moved.',
    back: 'Back to home',
  },
} as const;

export default async function RootNotFound() {
  const locale = await getLocale();
  const copy = COPY[locale === 'en' ? 'en' : 'pt'];

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <p className="font-mono text-8xl font-bold text-accent/20 mb-6">404</p>
        <h1 className="text-3xl font-bold text-foreground mb-3">{copy.title}</h1>
        <p className="text-foreground-muted mb-8">{copy.text}</p>
        <Link href={locale === 'en' ? '/en' : '/'} className="btn-pill-primary text-sm">
          {copy.back}
        </Link>
      </div>
    </div>
  );
}
