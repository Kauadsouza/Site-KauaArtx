# Site KauaArtx

[English](README.md) · **Português** · [Español](README.es.md)

A plataforma pública do canal [@KauaArtx](https://www.youtube.com/@KauaArtx): vídeos, histórias de viagem, guias práticos e a jornada de construir uma vida nova em Oxford — em português e inglês.

[Visitar kauaartx.vercel.app](https://kauaartx.vercel.app)

---

## Por que ele existe

Um canal de YouTube não dá endereço próprio: o algoritmo decide quem vê o quê, e o conteúdo escrito não tem onde morar. Este site é o lugar onde as histórias ficam inteiras, encontráveis por busca, e onde alguém que chegou por um vídeo consegue entender a jornada toda.

## O que tem nele

- **Conteúdo editorial** — artigos sobre Oxford, o ETA do Reino Unido, o sistema EES/ETIAS e trabalho remoto, com guia de termos e uma página do capítulo atual.
- **Mapa interativo** de viagens, construído com D3 e TopoJSON, com dados carregados sob demanda para não pesar a primeira visita.
- **Bilíngue de verdade** — português e inglês com 253 chaves traduzidas cada, não tradução automática por cima.
- **Feed RSS, sitemap e imagens de Open Graph geradas por artigo**, para o conteúdo circular fora do site.
- **Formulário de contato** com validação, campo-armadilha contra robô, limite de envios e verificação de origem.

## Decisões técnicas que valem menção

- **Dados estruturados de pessoa** (JSON-LD) e prévia social por página, para o site se apresentar direito quando compartilhado.
- **Idioma declarado corretamente.** O atributo `lang` acompanha a rota: `/` responde `pt`, `/en` responde `en` — o que importa para leitor de tela e para busca.
- **404 que existe de verdade.** Endereço desconhecido cai num 404 próprio, nos dois idiomas, com status HTTP correto.
- **Cabeçalhos de segurança** com CSP e HSTS configurados na origem.
- **Acessibilidade tratada como requisito:** indicador de foco visível, `prefers-reduced-motion` respeitado e alvos de toque adequados no celular.
- **CI que verifica de fato:** tipagem, lint, testes e build a cada envio — é o repositório com a verificação mais completa do conjunto.

## Tecnologias

Next.js 15, React 19, TypeScript, next-intl, Supabase, D3/TopoJSON, Framer Motion, Vitest e Vercel.

## Desenvolvimento local

```powershell
npm.cmd install
Copy-Item .env.example .env.local
npm.cmd run dev
```

O site público roda sem credencial privada. Supabase, e-mail e newsletter dependem das variáveis correspondentes do `.env.example`.

> **Nota sobre o `package-lock.json`:** o CI roda Node 22 (npm 10). Um lock gerado por npm 11 é recusado lá. Se precisar regerar, use `npx npm@10 install --package-lock-only`.

## Verificação

```powershell
npm.cmd run lint
npm.cmd run test
npm.cmd run build
npm.cmd audit --omit=dev
```

## Mapa do repositório

```text
messages/         Textos da interface em português e inglês
public/           Mídia de marca e de viagem
scripts/          Preparação dos dados do mapa
src/app/          Páginas públicas, área administrativa, feeds e metadados
src/components/   Componentes editoriais, de viagem, mapa e navegação
src/data/         Jornadas publicadas e conteúdo curado
src/lib/          Integrações com Supabase, leitura, mapa e YouTube
supabase/         Configuração de banco para publicação
testes/           Testes de conteúdo e do mapa
```

## Situação

Publicado e mantido ativamente na Vercel. O foco editorial atual é o canal @KauaArtx, viagem, Oxford e desenvolvimento pessoal.

Feito e mantido por [Kauã Diniz Souza](https://github.com/Kauadsouza).
