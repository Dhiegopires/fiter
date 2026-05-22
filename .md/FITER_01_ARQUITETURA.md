# Fiter — Arquitetura de Informação
> Baseado na reunião com Sergio Amad | Atualizar Chat 2

---

## Contexto estratégico

A Fiter tem um problema de comunicação digital identificado pelo próprio Sergio: o site atual não reflete a qualidade nem a profundidade dos produtos. O objetivo do novo site é **gerar entendimento simples do produto em segundos** e converter via CTA direto — priorizando donos de empresa como stakeholder principal (conversão 3x maior que focando só em RH).

A suíte tem 4 produtos para RH e 1 produto separado para Educação. Os produtos podem ser contratados individualmente ou em conjunto.

---

## Sitemap revisado

```
fiter.com.br/
│
├── /                          → Home
│
├── /solucoes/
│   ├── /solucoes/rh/          → Solução RH (todos os módulos em uma página)
│   └── /solucoes/educacao/    → Solução Educação (todos os módulos em uma página)
│
├── /clientes/                 → Cases e depoimentos
├── /sobre/                    → Quem é a Fiter, DNA científico, selos
├── /contato/                  → Demo + contato
└── /blog/                     → Conteúdo SEO (fase futura)
```

---

## Lógica de produto — modular

A Fiter tem dois produtos: **RH** e **Educação**.
Dentro de cada produto, o cliente escolhe os módulos que quer contratar.

**Produto RH — módulos disponíveis:**
- Pulse (engajamento, felicidade, fit cultural, predição de turnover)
- Agente NR1 (conformidade regulatória, análise de risco ocupacional)
- Pesquisa de Clima (checkup anônimo mensal, benchmarking)
- Ouvidoria (canal anônimo de denúncias)

**Produto Educação — módulos disponíveis:**
- Pulse Educação (IFE, predição de evasão, clima escolar)
- *(expansão futura conforme produto crescer)*

Cada módulo tem valor individual. A contratação de múltiplos módulos gera preço combinado — definir tabela com Sergio antes de publicar (ver seção de notas).

---

## Páginas — detalhamento

### Home `/`
**Objetivo:** fazer o visitante entender em 5 segundos o que a Fiter faz e para quem.
**Stakeholder primário:** dono de empresa + RH
**Funil:** topo — descoberta e geração de interesse
**CTA principal:** "Ver demonstração"
**CTA secundário:** "Falar com especialista"

Seções obrigatórias:
1. Hero — proposta de valor central + "8 cliques, 2 minutos"
2. Logos bar — Braspress, Kroton, Arcor, Marinha do Brasil, USP, Fatec
3. Os 4 problemas que a Fiter resolve (dores do dono/RH)
4. Visão geral da suíte — 4 produtos RH + Educação em cards
5. Métricas de resultado — 500k+ medidos, 92% economia NR1, etc.
6. Prova científica — USP, Mackenzie, livro, selos ABES, Sebrae
7. Testemunho / case
8. CTA final

---

### Solução RH `/solucoes/rh/`
**Objetivo:** apresentar o produto RH completo e seus módulos — o visitante entende o que cada módulo faz e monta a combinação que faz sentido para ele
**Stakeholder primário:** dono de empresa
**Stakeholder secundário:** gestor de RH
**Stakeholder terciário:** profissional de saúde ocupacional (para NR1)

Seções em ordem:
1. Hero — proposta de valor do produto RH + "8 cliques, 2 minutos"
2. Os problemas que o produto resolve (dores do dono/RH)
3. Módulos disponíveis — 4 cards com nome, descrição curta e benefício principal de cada um
   - Pulse
   - Agente NR1
   - Pesquisa de Clima
   - Ouvidoria
4. Como funciona cada módulo — seção expandida com detalhes de cada um
5. Modularidade — "Contrate só o que você precisa. Escale quando quiser."
6. Como funciona a implementação (Assinatura → CS → Treinamento 1h30 → Go live)
7. Métricas de resultado
8. Prova social — cases e logos
9. FAQ
10. CTA

**Detalhe dos módulos na página:**

**Pulse:**
- 8 cliques, 2 minutos, via WhatsApp, sem app
- Mede: felicidade, fit cultural, saúde mental, produtividade
- Gera: PDI para colaborador + painel em tempo real para RH
- AI prevê: turnover, absenteísmo, riscos por departamento

**Agente NR1:**
- Primeiro robô do Brasil focado na NR1
- 92% menos tempo em análises de risco
- 100% segurança jurídica
- Integra Ministério do Trabalho, CID e OMS

**Pesquisa de Clima:**
- Anônima, mensal, via WhatsApp
- Benchmarking de mercado
- IA cria planos de ação automáticos
- Diferencial vs GPTW: contínua, não anual

**Ouvidoria:**
- Canal anônimo de denúncias — obrigação legal
- IA classifica ocorrências automaticamente
- Governança e compliance completos

---

### Solução Educação `/solucoes/educacao/`
**Objetivo:** apresentar o produto Educação e seus módulos
**Stakeholder:** reitor, gestor acadêmico, coordenador de curso

Seções em ordem:
1. Hero — "Preveja a evasão antes que ela aconteça"
2. Os problemas que o produto resolve
3. Módulos disponíveis — cards de cada módulo
   - Pulse Educação
4. Como funciona o Pulse Educação em detalhe
5. Conformidade CNE 3/2025 — prazo setembro para cursos de medicina
6. Implementação
7. Cases — USP, Fatec
8. FAQ
9. CTA

---

### Clientes `/clientes/`
**Objetivo:** prova social para acelerar decisão de compra
**Conteúdo:** logos + depoimentos em vídeo/texto + métricas de resultado por cliente

Destacar variedade:
- Grande empresa: Braspress, Kroton, Arcor
- Governo/instituição: Marinha do Brasil (submarinos nucleares), USP, Fatec
- Agronegócio (mencionar — Sergio citou como segmento atendido)
- Pequenas empresas (a partir de 5 funcionários)

---

### Sobre `/sobre/`
**Objetivo:** construir credibilidade e confiança — especialmente para deals maiores
**Conteúdo obrigatório:**
- DNA científico — USP, teses de mestrado
- Livro: "Felicidade: Ciência de Dados"
- Selos: Mackenzie, ABES, Sebrae for Startups
- Sergio Amad | Fundador e história
- Definição de deeptech (não é startup convencional)
- Parceiros acadêmicos

---

### Contato `/contato/`
**Objetivo:** qualificar o lead antes de chegar no time de vendas
**Campos do formulário:** nome, e-mail, empresa, cargo, nº de funcionários (ou alunos), produto de interesse
**Campo de nº de funcionários:** qualifica lead e evita que time de vendas perca tempo com desqualificados (sugestão do Dhiego — alinhar com tabela de preços)

---

## Jornadas revisadas

### Dono de empresa médica (50-500 funcionários)
```
Busca "como reduzir turnover na empresa" →
Landing na Home →
Entende a suíte no overview →
Clica em Pulse →
Vê "8 cliques, 2 minutos, sem app" →
Vê que prevê turnover em tempo real →
Clica "Ver demonstração" →
Formulário → Qualificado para vendas
```

### Gestor de RH de grande empresa
```
Busca "conformidade NR1 automação" →
Landing na página NR1 →
Vê 92% economia + segurança jurídica →
Vê que integra com Ministério do Trabalho →
Vê case do setor →
Clica "Falar com especialista"
```

### Reitor de universidade particular
```
Busca "como reduzir evasão escolar" ou "CNE 3/2025" →
Landing na página Educação →
Vê IFE + previsão de evasão →
Vê cases USP e Fatec →
Clica "Solicitar demonstração"
```

---

## Notas para ajuste com o cliente

- **Confirmar prazo exato** da obrigação regulatória NR1 (Sergio mencionou setembro — verificar norma específica)
- **Tabela de preços:** Dhiego sugeriu tabela fixa para empresas até 50 funcionários na landing — definir com Sergio antes de codar
- **Ouvidoria:** confirmar data de lançamento para comunicar "disponível agora" vs "em breve"
- **Validações científicas:** conseguir logos e nomes exatos dos parceiros acadêmicos para o Sobre e rodapé
- **Screenshots do produto:** necessários para os mockups — solicitar ao Sergio (painel admin, pulse em uso, NR1, educação)
