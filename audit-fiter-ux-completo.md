# Audit UX/Fluxo — fiter.com.br
**Data:** 30 de junho de 2026  
**Feito por:** VellumWire (Dhiego)  
**Método:** Auditoria técnica ao vivo com inspeção de DOM, rede e fetch de todas as páginas

---

## 🔴 BUGS CRÍTICOS — quebram o funil ativamente

### BUG 1 — Link morto: `/produtos/portal-de-transparencia/`
A URL `https://fiter.com.br/produtos/portal-de-transparencia/` não existe e retorna página vazia/404. Está referenciada em **dois lugares diferentes**:

| Página | Onde aparece | Texto do link | URL errada | URL correta |
|--------|-------------|---------------|-----------|------------|
| `/solucoes/rh/` | Dropdown "Produtos" do nav | "Ouvidoria" | `/produtos/portal-de-transparencia/` | `/produtos/ouvidoria/` |
| `/solucoes/educacao/` | Seção "Portal do Coordenador" | "Ver o portal →" | `/produtos/portal-de-transparencia/` | *(remover ou substituir pelo produto correto)* |

**Fix:** Substituir ambas as URLs. No nav de `/solucoes/rh/`, trocar para `/produtos/ouvidoria/`. No CTA de `/solucoes/educacao/`, avaliar se existe uma página dedicada ao Portal do Coordenador ou remover o CTA até ela existir.

---

### BUG 2 — Formulário `/contato/` bloqueia emails pessoais silenciosamente
O formulário tem uma validação client-side que rejeita qualquer email de domínio gratuito (gmail.com confirmado; provavelmente hotmail, outlook, yahoo também). A mensagem de erro aparece discretamente na tela do visitante como "✕ Use um e-mail corporativo" — e **zero request chega ao EmailJS**, ou seja:

- Sergio **não recebe nada** no inbox
- **Não aparece no GA4**
- **Não aparece no EmailJS dashboard**
- Não há nenhum log dessa rejeição em lugar algum

**Impacto real:** Fiter posiciona-se para PMEs. Donos de pequenas empresas, RHs de startups e coordenadores universitários frequentemente usam Gmail. Esses contatos estão sendo silenciosamente descartados.

**Fixes (escolher um):**
- **Opção A (recomendada):** Remover a validação de domínio corporativo. Deixar o EmailJS filtrar spam naturalmente.
- **Opção B:** Manter a validação mas logar as tentativas bloqueadas (ex: evento GA4 `lead_blocked` com o domínio rejeitado) para que Sergio possa ver quantos prospects estão sendo perdidos.
- **Opção C:** Substituir a mensagem de erro por uma mensagem mais amigável que oriente o visitante a usar email da empresa, sem frustrar quem não tem.

---

### BUG 3 — "Pulse Educação" sumiu do dropdown Produtos em 2 páginas
O item "Pulse Educação" está **ausente** do menu dropdown de Produtos em:
- `/solucoes/educacao/` ← a página de educação não lista o produto de educação
- `/sobre/`

Nas demais páginas (home, todos os `/produtos/*`, `/solucoes/rh/`, blog) aparece corretamente com todos os 6 produtos. Evidência de dois templates de nav diferentes fora de sincronia.

**Fix:** Sincronizar o template do header/nav para que todas as páginas usem a versão com 6 produtos. Verificar se `/solucoes/educacao/` e `/sobre/` usam um layout ou include diferente.

---

### BUG 4 — "Contato" sumiu do nav desktop nos posts de blog
Em posts individuais do blog (ex: `/blog/autonomia-lideranca-clima-ia/`), o nav desktop não tem o item "Contato" — mas o nav mobile (hamburger) tem. Ou seja, usuários de desktop lendo um artigo não têm link direto para o formulário de contato no nav.

**Fix:** Sincronizar o template do header usado nos posts de blog para incluir "Contato" no nav desktop, igual ao template das demais páginas.

---

## 🟠 CONTEÚDO STALE — urgente antes de qualquer campanha

### STALE 1 — Prazo NR1 expirado
O prazo "26 de maio de 2026" venceu há **5 semanas** (hoje é 30/06/2026). Aparece em:

| Página | Onde aparece |
|--------|-------------|
| `/solucoes/rh/` | Banner de topo: "⚠ Prazo NR1: empresas têm até 26 de maio de 2026 para se adequar... Fora da conformidade = exposição a processos trabalhistas" |
| `/produtos/nr01/` | Badge do hero: "Prazo: 26 de maio de 2026" + bloco de stats: "26/05 prazo legal para adequação à NR1 · 2026" |

Visitante que chega hoje vê a Fiter avisando sobre um prazo já passado. Isso destrói credibilidade e mata a urgência — o efeito oposto do pretendido.

**Fix:** Atualizar os textos para a nova narrativa de urgência pós-prazo. Sugestões:
- *"Prazo NR1 encerrado: sua empresa está em conformidade?"*
- *"NR1 em vigor desde maio de 2026 — evite processos trabalhistas"*
- *"Adequação NR1 obrigatória — auditores já estão atuando"*

---

## 🟡 GARGALOS DE FLUXO/IA — perda de conversão

### FLUXO 1 — Profundidade inconsistente em `/solucoes/rh/`
A página lista 4 produtos, mas com tratamento diferente:

| Produto | CTA atual | Problema |
|---------|-----------|---------|
| Pulse | "Explorar o Pulse →" → `/produtos/pulse/` | ✅ correto |
| Agente NR1 | "Explorar o Agente NR1 →" → `/produtos/nr01/` | ✅ correto |
| Pesquisa de Clima | "Conhecer a Pesquisa de Clima →" → `/contato/` | ❌ pula a página do produto |
| Ouvidoria | "Conhecer a Ouvidoria →" → `/contato/` | ❌ pula a página do produto |

Ambos têm páginas completas (`/produtos/pesquisa-de-clima/`, `/produtos/ouvidoria/`) — simplesmente não estão sendo linkadas. O resultado: visitante vai direto para o formulário com o bug de email antes de conhecer o produto.

**Fix:** Trocar os dois CTAs para apontar para as páginas de produto correspondentes, igual ao padrão de Pulse e NR1.

---

### FLUXO 2 — Blog sem CTA contextual por segmento
Os artigos têm um bloco de CTA no final, mas ele é **sempre "Fiter Pulse"** com link para Calendly — independente do tema do artigo.

Problemas:
- Artigos de Educação (evasão, clima acadêmico) promovem o Pulse (produto de RH corporativo) em vez do Pulse Educação
- O CTA de Calendly exige o maior comprometimento possível do visitante (agendar reunião)
- Não há CTA intermediário (ex: link para o Guia Prático para quem não está pronto para demo)

**Fix:**
- Criar variantes do bloco de CTA final por categoria: artigos "RH" → Pulse, artigos "Educação" → Pulse Educação
- Adicionar o Guia Prático como alternativa de baixo atrito nos artigos de RH sobre NR1/riscos psicossociais

---

### FLUXO 3 — Guia Prático invisível no funil
O Guia Prático é o único ponto de conversão de baixo atrito do site (download gratuito sem precisar agendar reunião). Mas só aparece:
- No dropdown "Produtos" do nav
- Na sua própria página

Não aparece em:
- Homepage (hero ou seção de produtos)
- `/solucoes/rh/` nem `/solucoes/educacao/`
- Posts de blog sobre NR1/riscos psicossociais (onde seria o CTA mais natural)
- `/sobre/`

**Fix:** Adicionar o Guia Prático como CTA secundário nas páginas de solução e nos artigos de blog relevantes. Exemplo de texto: *"Ainda avaliando? Baixe o Guia Gratuito de Gestão de Riscos Psicossociais."*

---

### FLUXO 4 — `/sobre/` tem só Calendly
A página `/sobre/` apresenta o Sergio Amad e a história da empresa — tipicamente visitada por alguém que quer conhecer a empresa antes de fechar. O único CTA disponível é "Agendar demonstração" (Calendly).

Visitantes que preferem escrever antes de falar não têm opção.

**Fix:** Adicionar um segundo CTA "Falar com a gente" → `/contato/` após o bloco de bio do Sergio.

---

### FLUXO 5 — Nenhuma prova social nas páginas de produto
As páginas de produto têm stats internos ("92% menos trabalho operacional", "87% taxa de resposta", etc.) mas nenhuma validação externa:
- Sem logos de clientes
- Sem depoimentos ou testimonials
- Sem cases linkados
- Sem menção ao número de empresas/clientes ativos

Para PME que está avaliando investimento, afirmações da própria empresa sobre si mesma têm peso baixo.

**Fix:** Adicionar seção de social proof em cada página de produto (mesmo que seja 3–5 logos de clientes anonimizados por setor) e pelo menos 1–2 depoimentos reais com nome/cargo/empresa.

---

## ⚪ TRACKING — invisibilidade total de leads

### TRACKING 1 — 3 sistemas de captura de lead sem integração
| Sistema | Onde captura | Vai para GA4? |
|---------|-------------|--------------|
| Leadster | Chatbot em todas as páginas | ❌ não |
| EmailJS | Formulário `/contato/` | ❌ não |
| HubSpot | Formulário Guia Prático (`js.hsforms.net`) | ❌ não (por padrão) |

Cada lead existe em um silo separado. Não tem como saber o total real nem o canal de origem.

**Fix:** Configurar evento `generate_lead` em GA4 via:
- EmailJS: chamar `gtag('event', 'generate_lead')` no callback de sucesso do formulário
- HubSpot: configurar workflow de "Form Submission → Google Analytics" nas configurações do HubSpot
- Leadster: verificar se tem integração nativa com GA4 (normalmente tem)

---

### TRACKING 2 — 3 measurement IDs GA4 simultâneos
Todas as páginas disparam 3 IDs GA4 em paralelo: `G-RL4MTL7XFE`, `G-43W2WYML5H`, `G-721YDVYX9E`. Tráfego fragmentado entre 3 propriedades.

**Fix:** Identificar qual é a propriedade ativa (provavelmente onde está sendo medido os "1600 usuários") e remover os outros dois do código.

---

### TRACKING 3 — Zero evento de conversão em qualquer CTA
Nenhum clique no Calendly, nenhuma submissão de formulário, nenhum download do guia dispara um evento de conversão no GA4.

**Fix:** Adicionar `gtag('event', 'generate_lead')` (ou `conversion`) nos seguintes pontos:
- Clique em qualquer botão "Agendar demonstração" → Calendly
- Submit com sucesso do formulário `/contato/`
- Submit do formulário HubSpot no Guia Prático
- Resposta/interação qualificada no Leadster

---

## 📱 MOBILE — verificação pendente

O resize do browser não foi possível via ferramenta. Recomendo **teste manual** nos seguintes pontos que historicamente são problemáticos com este padrão de nav:

- Dropdown duplo (Soluções + Produtos) no hamburger menu — tamanho dos alvos de toque, scroll dentro do dropdown
- Hero com 4 CTAs paralelos na home — empilhamento em mobile
- Banner de topo NR1 — truncamento de texto em telas pequenas
- Formulário `/contato/` — comportamento do teclado virtual ao focar nos campos

---

## Prioridade de execução sugerida

| # | Item | Impacto | Esforço |
|---|------|---------|---------|
| 1 | BUG 1 — Link morto (2x) | Alto | Baixo (trocar URL) |
| 2 | STALE 1 — Prazo NR1 expirado | Alto | Baixo (trocar texto) |
| 3 | BUG 3 — Pulse Educação no nav | Médio | Baixo (sincronizar template) |
| 4 | BUG 4 — Contato no nav dos posts | Médio | Baixo (sincronizar template) |
| 5 | BUG 2 — Bloquear emails pessoais | Alto | Médio (decisão + código) |
| 6 | FLUXO 1 — CTAs inconsistentes /solucoes/rh/ | Alto | Baixo (trocar href) |
| 7 | TRACKING 1+3 — Eventos GA4 | Alto | Médio (JS em 3 lugares) |
| 8 | TRACKING 2 — Remover IDs duplicados | Médio | Baixo |
| 9 | FLUXO 3 — Guia Prático no funil | Alto | Médio (novo bloco em várias páginas) |
| 10 | FLUXO 2 — CTAs do blog por segmento | Médio | Médio |
| 11 | FLUXO 4 — CTA no /sobre/ | Baixo | Baixo |
| 12 | FLUXO 5 — Social proof | Alto | Alto (precisa de conteúdo) |
| 13 | 📱 Mobile | Desconhecido | Depende do resultado |
