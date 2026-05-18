# Fiter — SEO & Keywords
> VellumWire × Fiter · Maio 2026
> Atualizado com base na reunião com Sergio Amad + Project Brief v3
> Usar como contexto em todas as sessões de Claude Code

---

## Visão Geral da Estratégia

A Fiter não compete por "software de RH" (muito amplo, dominado por gigantes). O objetivo é **dominar buscas de intenção específica** em três nichos onde tem vantagem real:

| Nicho | Produto | Vantagem competitiva |
|-------|---------|----------------------|
| Medição contínua de engajamento e felicidade | Pulse | 8 cliques, 2 min, WhatsApp, sem app |
| Conformidade NR-01 automatizada | Agente NR1 | Único robô focado na NR1 no Brasil |
| Prevenção de evasão escolar com IA | Pulse Educação | IFE + predição + conformidade CNE 3/2025 |
| Pesquisa de clima contínua (vs. anual) | Pesquisa de Clima | Diferencial direto vs. GPTW |
| Canal de denúncias com IA | Ouvidoria | Obrigação legal automatizada |

**Stakeholder primário:** dono de empresa (conversão 3× maior que foco em RH isolado)
**Stakeholder secundário:** gestor de RH, profissional de saúde ocupacional, reitor/gestor acadêmico

---

## Sitemap SEO — URLs e Keywords Primárias

```
fiter.com.br/
│
├── /                          keyword: "software de engajamento de colaboradores"
├── /solucoes/rh/              keyword: "plataforma de RH com inteligência artificial"
│   ├── /solucoes/rh/pulse     keyword: "pulse survey colaboradores whatsapp"        [LP migrada]
│   ├── /solucoes/rh/nr01      keyword: "software NR1 saúde mental trabalho"         [LP migrada · prioridade máxima]
│   ├── /solucoes/rh/guia-riscos   keyword: "gestão de riscos psicossociais"         [LP captura · migrada]
│   └── /solucoes/rh/ebook-riscos  keyword: "guia NR1 riscos psicossociais"          [LP obrigado · migrada]
│
├── /solucoes/educacao/        keyword: "como reduzir evasão escolar"
│
├── /clientes/                 keyword: "cases fiter clientes"                        [⚠ confirmar fase]
├── /sobre/                    keyword: "fiter deeptech neurociência rh"              [⚠ confirmar fase]
├── /contato/                  keyword: "demo fiter plataforma engajamento"
│
└── /blog/                     keyword: "blog rh engajamento felicidade no trabalho"
    └── /blog/[slug]           keyword: por post (ver seção de posts prioritários)
```

---

## Keyword Map por Página

### Home — `/`

**Keyword primária:** `software de engajamento de colaboradores`
**H1 sugerido:** "Inteligência de Felicidade para RH e Educação"

| Keyword | Intenção | Volume est. | Dificuldade | Prioridade |
|---------|----------|-------------|-------------|------------|
| software de engajamento de colaboradores | comercial | alto | média | ★★★ |
| plataforma de felicidade no trabalho | comercial | médio | baixa | ★★★ |
| como medir engajamento de funcionários | informacional | alto | média | ★★★ |
| pesquisa de engajamento via whatsapp | comercial | baixo | muito baixa | ★★★ |
| deeptech rh brasil | informacional | baixo | muito baixa | ★★ |
| inteligência artificial rh brasil | comercial | médio | média | ★★ |

**Meta dados:**
```
title:       Fiter — Inteligência de Felicidade para RH e Educação
description: Meça engajamento, preveja turnover e automatize a NR1 com IA.
             8 cliques, 2 minutos. Sem app. Usado por Braspress, Kroton e Marinha do Brasil.
```

**Schema:** `Organization`, `WebSite` com `SearchAction`

---

### Solução RH — `/solucoes/rh/`

**Keyword primária:** `plataforma de rh com inteligência artificial`
**H1 sugerido:** "A Suíte Completa de Engajamento, Conformidade e Clima para RH"

| Keyword | Intenção | Volume est. | Dificuldade | Prioridade |
|---------|----------|-------------|-------------|------------|
| plataforma de rh com inteligência artificial | comercial | médio | média | ★★★ |
| software rh whatsapp sem app | comercial | baixo | muito baixa | ★★★ |
| solução rh engajamento conformidade | comercial | baixo | muito baixa | ★★★ |
| people analytics brasil | comercial | médio | média | ★★ |
| software de rh para dono de empresa | comercial | baixo | baixa | ★★★ |

**Meta dados:**
```
title:       Solução RH — Engajamento, NR1 e Clima com IA | Fiter
description: Pulse, Agente NR1, Pesquisa de Clima e Ouvidoria em uma só plataforma.
             8 cliques, 2 minutos, via WhatsApp. Sem app. Fale com um especialista.
```

**Schema:** `SoftwareApplication`, `FAQPage`

---

### LP Pulse — `/solucoes/rh/pulse` _(migrada do lab)_

**Keyword primária:** `pulse survey colaboradores`
**H1 sugerido:** "Pulse: Felicidade, Fit Cultural e Predição de Turnover em 8 Cliques"

| Keyword | Intenção | Volume est. | Dificuldade | Prioridade |
|---------|----------|-------------|-------------|------------|
| pulse survey colaboradores | comercial | médio | baixa | ★★★ |
| medir felicidade no trabalho | informacional/comercial | médio | baixa | ★★★ |
| pesquisa de engajamento whatsapp | comercial | baixo | muito baixa | ★★★ |
| predição de turnover | comercial | baixo | muito baixa | ★★★ |
| fit cultural colaboradores | informacional/comercial | médio | baixa | ★★★ |
| como reduzir turnover | informacional | alto | alta | ★★★ |
| health score colaboradores | comercial | baixo | muito baixa | ★★ |
| absenteísmo como prevenir | informacional | médio | média | ★★ |
| plano de desenvolvimento individual automático | informacional | baixo | muito baixa | ★★ |
| pesquisa de engajamento de colaboradores | comercial | alto | média | ★★★ |

**Snippets para SERP:**
> "8 cliques e 2 minutos via WhatsApp — sem baixar aplicativo"

**Meta dados:**
```
title:       Pulse — Engajamento e Felicidade via WhatsApp | Fiter
description: Pesquisa de engajamento em 8 cliques e 2 minutos direto no WhatsApp.
             Preveja turnover e absenteísmo em tempo real. Sem app. Veja demonstração.
```

**Schema:** `SoftwareApplication`, `FAQPage`

**Cauda longa (blog):**
- "como fazer pulse survey no whatsapp"
- "diferença entre pulse survey e pesquisa de clima"
- "como medir fit cultural na empresa"
- "o que é índice de felicidade no trabalho"

---

### LP Agente NR1 — `/solucoes/rh/nr01` _(migrada do lab · prioridade máxima)_

> ⚠ **Urgência:** deadline regulatório ativo. Migrar antes de qualquer outra LP.
> ⚠ **Pendente:** confirmar prazo exato com Sergio Amad antes de publicar copy de urgência.

**Keyword primária:** `software NR1 saúde mental trabalho`
**H1 sugerido:** "Agente NR1: Conformidade Automática com 92% Menos Tempo"

| Keyword | Intenção | Volume est. | Dificuldade | Prioridade |
|---------|----------|-------------|-------------|------------|
| NR1 saúde mental trabalho | informacional/comercial | alto | média | ★★★ |
| software NR1 | comercial | médio | baixa | ★★★ |
| conformidade NR1 empresa | comercial | médio | baixa | ★★★ |
| laudo NR1 automático | comercial | baixo | muito baixa | ★★★ |
| gestão de risco ocupacional | comercial | médio | média | ★★★ |
| segurança jurídica trabalhista RH | informacional | médio | baixa | ★★★ |
| automação medicina ocupacional | comercial | baixo | muito baixa | ★★★ |
| análise de risco por cargo | comercial | baixo | muito baixa | ★★★ |
| PGR programa de gerenciamento de riscos | informacional/comercial | médio | média | ★★ |
| obrigatoriedade NR1 saúde mental | informacional | alto | baixa | ★★★ |

**Keywords de urgência regulatória (usar em hero e meta):**
- "prazo NR1 2025"
- "obrigatoriedade NR1 saúde mental"
- "como cumprir NR1 saúde mental"

**Snippets para SERP:**
> "O primeiro robô do Brasil focado na NR1 — 92% de economia de tempo e 100% de segurança jurídica"

**Meta dados:**
```
title:       Agente NR1 — Conformidade Automática com IA | Fiter
description: O primeiro robô do Brasil para NR1. 92% menos tempo em análises.
             100% de segurança jurídica. Integra Ministério do Trabalho, CID e OMS.
```

**Schema:** `SoftwareApplication`, `FAQPage`

**Cauda longa (blog):**
- "o que muda na NR1 saúde mental 2025"
- "como automatizar análise de risco NR1"
- "laudo NR1 quem pode assinar"
- "diferença entre PGR e NR1"

---

### Solução Educação — `/solucoes/educacao/`

> ⚠ **Urgência regulatória:** CNE 3/2025 com prazo setembro para cursos de medicina.
> ⚠ **Pendente:** confirmar prazo exato e escopo de cursos com Sergio antes de publicar.

**Keyword primária:** `como reduzir evasão escolar`
**H1 sugerido:** "Preveja a Evasão Antes que Ela Aconteça"

| Keyword | Intenção | Volume est. | Dificuldade | Prioridade |
|---------|----------|-------------|-------------|------------|
| como reduzir evasão escolar | informacional/comercial | alto | média | ★★★ |
| prevenção de evasão escolar | comercial | médio | baixa | ★★★ |
| pesquisa de clima escolar | comercial | médio | baixa | ★★★ |
| engajamento de alunos | informacional/comercial | médio | média | ★★★ |
| índice de felicidade na educação | informacional | baixo | muito baixa | ★★★ |
| software evasão universitária | comercial | baixo | muito baixa | ★★★ |
| predição de evasão escolar | comercial | baixo | muito baixa | ★★★ |
| CNE 3/2025 medicina | informacional/comercial | baixo | muito baixa | ★★★ |
| como cumprir CNE 3 2025 | informacional | baixo | muito baixa | ★★★ |
| indicadores de permanência escolar | informacional | baixo | baixa | ★★ |

**Keywords de urgência regulatória:**
- "CNE 3/2025 prazo setembro"
- "obrigatoriedade CNE 3 2025 medicina"
- "como cumprir CNE 3 2025"

**Snippets para SERP:**
> "Preveja a evasão antes que ela aconteça — 8 cliques, 2 minutos"

**Meta dados:**
```
title:       Pulse Educação — Previna a Evasão Escolar com IA | Fiter
description: Meça o Índice de Felicidade na Educação e preveja a evasão antes que ocorra.
             8 cliques, 2 minutos. Alinhado à CNE 3/2025. Usado na USP e Fatec.
```

**Schema:** `SoftwareApplication`, `FAQPage`

---

### Pesquisa de Clima — mencionada em `/solucoes/rh/` + futura LP própria

> Diferencial a comunicar: pesquisa **contínua, não anual**. Ângulo direto vs. GPTW.

| Keyword | Intenção | Volume est. | Dificuldade | Prioridade |
|---------|----------|-------------|-------------|------------|
| pesquisa de clima organizacional | comercial | alto | alta | ★★★ |
| alternativa ao great place to work | comercial | médio | baixa | ★★★ |
| pesquisa de clima online | comercial | alto | alta | ★★★ |
| pesquisa de clima anônima | comercial | médio | baixa | ★★★ |
| pesquisa de clima whatsapp | comercial | baixo | muito baixa | ★★★ |
| pesquisa de clima mensal contínua | comercial | baixo | muito baixa | ★★★ |
| benchmarking clima organizacional | comercial | baixo | baixa | ★★ |

**Snippets para SERP:**
> "Pesquisa de clima contínua, não anual. Resultados em tempo real com IA."

**Meta dados (quando LP própria):**
```
title:       Pesquisa de Clima Organizacional Contínua | Fiter
description: Substitua a pesquisa anual por checkups mensais via WhatsApp.
             IA analisa dados e cria planos de ação automáticos. Benchmark de mercado.
```

---

### Ouvidoria — mencionada em `/solucoes/rh/` + futura LP própria

> ⚠ **Pendente:** confirmar se módulo está disponível agora ou "em breve" antes de indexar.

| Keyword | Intenção | Volume est. | Dificuldade | Prioridade |
|---------|----------|-------------|-------------|------------|
| canal de ouvidoria empresarial | comercial | médio | baixa | ★★★ |
| ouvidoria anônima para empresas | comercial | médio | muito baixa | ★★★ |
| canal de denúncias trabalhistas | comercial | médio | baixa | ★★★ |
| ouvidoria obrigação legal empresa | informacional | baixo | muito baixa | ★★★ |
| software ouvidoria corporativa | comercial | baixo | muito baixa | ★★★ |

**Ângulo:** obrigação legal como gatilho de urgência — comunicar no copy.

**Meta dados (quando LP própria):**
```
title:       Canal de Ouvidoria Empresarial com IA | Fiter
description: Canal anônimo de denúncias que cumpre a obrigação legal.
             IA classifica ocorrências automaticamente. Governança e compliance completos.
```

---

### Contato — `/contato/`

**Keyword primária:** `demo plataforma engajamento rh`

| Keyword | Intenção | Volume est. | Dificuldade | Prioridade |
|---------|----------|-------------|-------------|------------|
| demo plataforma engajamento rh | transacional | baixo | muito baixa | ★★★ |
| fiter demonstração | transacional | baixo | muito baixa | ★★★ |

**Meta dados:**
```
title:       Fale com a Fiter — Agende uma Demonstração
description: Fale com um especialista e veja como a Fiter funciona para a sua realidade.
             Respondemos em até 1 dia útil.
```

**Schema:** `ContactPage`
> ⚠ Confirmar com Sergio o prazo real de resposta antes de publicar.

---

### Blog — `/blog/`

**Keyword primária:** `blog rh engajamento colaboradores`

**Meta dados:**
```
title:       Blog Fiter — RH, Saúde Mental, Engajamento e Educação
description: Conteúdo prático sobre engajamento, NR1, pesquisa de clima e prevenção
             de evasão escolar. Por quem usa IA e neurociência no dia a dia.
```

**Schema:** `Blog`

---

## Posts Prioritários (3 meses de suporte)

Publicar na ordem abaixo. Cada post deve ter link interno para a página de solução correspondente.

| # | Título | Keyword alvo | URL slug | Página de solução linkada |
|---|--------|-------------|----------|--------------------------|
| 1 | "O que é pulse survey e por que substituir a pesquisa anual" | `o que é pulse survey` | `/blog/o-que-e-pulse-survey` | `/solucoes/rh/pulse` |
| 2 | "Como reduzir turnover com dados comportamentais" | `como reduzir turnover` | `/blog/como-reduzir-turnover` | `/solucoes/rh/pulse` |
| 3 | "Conformidade NR-01: o que muda e como automatizar" | `conformidade nr1 empresas` | `/blog/conformidade-nr1` | `/solucoes/rh/nr01` |
| 4 | "Como prever evasão escolar com IA" | `como prever evasão escolar` | `/blog/como-prever-evasao-escolar` | `/solucoes/educacao` |
| 5 | "O que exige a CNE 3/2025 e como cumprir" | `CNE 3 2025 educação` | `/blog/cne-3-2025` | `/solucoes/educacao` |
| 6 | "Saúde mental no trabalho: como monitorar sem invadir" | `saúde mental colaboradores` | `/blog/saude-mental-trabalho` | `/solucoes/rh/pulse` |

**SEO obrigatório por post:**
```html
<title>[Keyword principal] — [Título do post] | Blog Fiter</title>
<meta name="description" content="[escrita manualmente, 145–155 chars]">
```
Schema: `Article` com `datePublished`, `dateModified`, `author`, `image`
URL: `/blog/[slug-descritivo-sem-data]` — sem números, sem data, lowercase, hífens

---

## Keywords por Stakeholder

### Dono de empresa _(conversão primária)_
```
como reduzir turnover na empresa
como aumentar produtividade dos funcionários
como saber se funcionários estão satisfeitos
employee engagement software brasil
como melhorar clima organizacional
obrigatoriedade NR1 saúde mental empresa
```

### Gestor de RH
```
software de rh com inteligência artificial
pesquisa de engajamento colaboradores
pulse survey ferramenta
plataforma de people analytics
como medir saúde mental dos colaboradores
conformidade nr1 automatizada
```

### Profissional de saúde ocupacional
```
automação NR1
laudo risco ocupacional automático
software medicina do trabalho
conformidade saúde mental NR1 2025
análise de risco psicossocial
```

### Gestor educacional _(reitor / coordenador)_
```
como reduzir evasão na faculdade
software retenção de alunos
pesquisa satisfação alunos
indicadores de permanência escolar
CNE 3 2025 obrigatoriedade medicina
```

---

## Concorrentes no Google — Estratégia de Ataque

| Concorrente | Produto que disputa | Ângulo de diferenciação |
|-------------|--------------------|-----------------------|
| Great Place to Work | Pesquisa de Clima | "Pesquisa contínua e mensal vs. processo anual e caro. Resultados em tempo real." |
| Solides | Pulse / Engajamento | "Cientificamente validado com neurociência + WhatsApp em 8 cliques, sem app." |
| GUP | Engajamento geral | "IA com predição real de turnover e absenteísmo — não só dashboards." |
| Clínicas de medicina ocupacional | Agente NR1 | "Automação que escala para 10 mil colaboradores. 92% menos tempo." |
| Sistemas acadêmicos (Totvs, etc.) | Educação | "Especialização em evasão + IFE. Não é módulo genérico — é produto dedicado." |

**Landing pages de alternativas a criar (fora do escopo atual, planejar para fase 2):**
- `/alternativas/great-place-to-work`
- `/alternativas/solides`
- `/alternativas/typeform-rh`
- `/alternativas/surveymonkey`

---

## Schema Markup por Página

| Página | URL | Schema types |
|--------|-----|-------------|
| Home | `/` | `Organization`, `WebSite` (com `SearchAction`) |
| Solução RH | `/solucoes/rh/` | `SoftwareApplication`, `FAQPage` |
| LP Pulse | `/solucoes/rh/pulse` | `SoftwareApplication`, `FAQPage` |
| LP NR1 | `/solucoes/rh/nr01` | `SoftwareApplication`, `FAQPage` |
| LP Guia Riscos | `/solucoes/rh/guia-riscos` | `SoftwareApplication` |
| LP Ebook Riscos | `/solucoes/rh/ebook-riscos` | — (página de obrigado, pode ser noindex) |
| Solução Educação | `/solucoes/educacao/` | `SoftwareApplication`, `FAQPage` |
| Clientes | `/clientes/` | `Organization` (clientes) + `Review` |
| Sobre | `/sobre/` | `Organization`, `Person` (Sergio Amad) |
| Contato | `/contato/` | `ContactPage` |
| Blog listagem | `/blog/` | `Blog` |
| Posts individuais | `/blog/[slug]` | `Article` com `datePublished`, `author`, `image` |
| Todas | todas | `BreadcrumbList` |

---

## Redirects 301 — lab → fiter.com.br

Configurar antes de remover qualquer página do lab. Não redirecionar até o novo destino estar no ar.

| De (lab.fiter.com.br) | Para (fiter.com.br) | Prioridade |
|-----------------------|--------------------|------------|
| `/pulse/` | `/solucoes/rh/pulse` | ★★★ maior tráfego |
| `/nr01/` | `/solucoes/rh/nr01` | ★★★ deadline NR1 |
| `/guia-pratico-de-gestao-dos-riscos-psicossociais/` | `/solucoes/rh/guia-riscos` | ★★ |
| `/ebook_guia-pratico-de-gestao-dos-riscos-psicossociais/` | `/solucoes/rh/ebook-riscos` | ★★ |
| `/evento-selo-h-2026/` | `/contato` | ★ |
| `/portal-de-transparencia/` | **permanece no lab — não migrar** | — |

---

## SEO Técnico — Checklist por Página

Aplicar em todas as páginas sem exceção:

```
[ ] <title> único com keyword primária (50–60 chars)
[ ] <meta description> escrita manualmente (145–155 chars — nunca gerada automaticamente)
[ ] H1 único por página contendo keyword primária
[ ] Alt text descritivo com keyword contextual em todas as imagens
[ ] <link rel="canonical"> em todas as páginas
[ ] Open Graph: og:title, og:description, og:image (1200×630px mínimo)
[ ] sitemap.xml gerado e submetido ao GSC
[ ] robots.txt configurado (bloquear /solucoes/rh/ebook-riscos se for noindex)
[ ] Google Analytics 4 instalado via GTM
[ ] Google Search Console configurado
[ ] Schema markup implementado conforme tabela acima
[ ] Lazy loading em todas as imagens (<img loading="lazy">)
[ ] font-display: swap em todas as fontes
[ ] CSS crítico inline no <head> das páginas de produto
[ ] LCP < 2.5s · CLS < 0.1 · INP < 200ms (validar no PageSpeed após deploy)
```

---

## Snippets de Copy para SERPs

Frases validadas para usar em meta descriptions, hero headlines e OG tags:

```
Pulse:
"8 cliques e 2 minutos via WhatsApp — sem baixar aplicativo"

Agente NR1:
"O primeiro robô do Brasil focado na NR1 — 92% menos tempo, 100% de segurança jurídica"

Pesquisa de Clima:
"Pesquisa de clima contínua, não anual. Resultados em tempo real com IA."

Educação:
"Preveja a evasão antes que ela aconteça — 8 cliques, 2 minutos"

Geral:
"Usado por Braspress, Kroton, Arcor e Marinha do Brasil"
```

---

## Pendências que Afetam SEO — Confirmar com Sergio

| Item | Impacto no SEO | Status |
|------|---------------|--------|
| Prazo exato obrigação NR1 (setembro 2025?) | Copy de urgência na LP nr01 e posts | ⚠ Pendente |
| Prazo CNE 3/2025 para medicina | Copy de urgência na LP educação e post | ⚠ Pendente |
| Ouvidoria disponível agora ou "em breve" | Indexar ou não a página | ⚠ Pendente |
| Métricas reais por módulo | Credibilidade nos snippets e structured data | ⚠ Pendente |
| Screenshots do painel para og:image | Open Graph de todas as páginas de produto | ⚠ Pendente |
| Logos exatos dos parceiros acadêmicos | Schema `Organization` e seção Sobre | ⚠ Pendente |

---

*VellumWire × Fiter · Maio 2026 · baseado em contrato + Project Brief v3 + reunião Sergio Amad*
