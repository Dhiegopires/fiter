const fs = require('fs');

const NAV = `<nav class="site-nav" id="site-nav" aria-label="Navegação principal">
    <div class="nav-inner">
        <a class="nav-logo" href="/"><img src="/assets/img/fiter_logo.svg" alt="Fiter" style="height:28px;width:auto;"></a>
        <ul class="nav-links">
            <li class="nav-item has-drop" data-nav-item>
                <button class="nav-link">Soluções <span class="nav-chevron">▾</span></button>
                <div class="nav-drop">
                    <a class="drop-link" href="/solucoes/rh/"><div><div class="drop-link-name">Recursos Humanos</div><div class="drop-link-tag">RH Corporativo</div></div></a>
                    <a class="drop-link" href="/solucoes/educacao/"><div><div class="drop-link-name">Educação</div><div class="drop-link-tag">IES e Redes de Ensino</div></div></a>
                </div>
            </li>
            <li class="nav-item has-drop" data-nav-item>
                <button class="nav-link">Produtos <span class="nav-chevron">▾</span></button>
                <div class="nav-drop">
                    <a class="drop-link" href="/produtos/pulse/"><div><div class="drop-link-name">Pulse</div><div class="drop-link-tag">Engajamento contínuo</div></div></a>
                    <a class="drop-link" href="/produtos/nr01/"><div><div class="drop-link-name">Agente NR1</div><div class="drop-link-tag">Conformidade automática</div></div></a>
                    <a class="drop-link" href="/produtos/guia-pratico-de-gestao-dos-riscos-psicossociais/"><div><div class="drop-link-name">Guia Prático</div><div class="drop-link-tag">Gestão de Riscos Psicossociais</div></div></a>
                </div>
            </li>
            <li class="nav-item"><a class="nav-link" href="/sobre/">Sobre</a></li>
            <li class="nav-item"><a class="nav-link" href="/blog/">Blog</a></li>
            <li class="nav-item"><a class="nav-link" href="/contato/">Contato</a></li>
        </ul>
        <div class="nav-right">
            <a class="btn btn-primary nav-cta btn-animate-chars" href="https://calendly.com/fiter_/fiter" target="_blank" rel="noopener noreferrer" style="text-decoration:none;">Agendar demonstração</a>
            <button class="nav-hamburger" id="nav-hamburger" aria-label="Abrir menu" aria-expanded="false"><span></span><span></span><span></span></button>
        </div>
    </div>
    <div class="nav-drawer" id="nav-drawer" aria-hidden="true">
        <div class="nav-backdrop" id="nav-backdrop"></div>
        <div class="nav-panel" role="dialog" aria-label="Menu de navegação">
            <div class="nav-panel-logo"><img src="/assets/img/fiter_logo.svg" alt="Fiter" style="height:24px;width:auto;"></div>
            <div class="drawer-item" data-drawer-item>
                <button class="drawer-trigger">Soluções <span class="drawer-chevron">▾</span></button>
                <div class="drawer-sub"><div class="drawer-sub-inner">
                    <a class="drawer-sub-link" href="/solucoes/rh/">Recursos Humanos</a>
                    <a class="drawer-sub-link" href="/solucoes/educacao/">Educação</a>
                </div></div>
            </div>
            <div class="drawer-item" data-drawer-item>
                <button class="drawer-trigger">Produtos <span class="drawer-chevron">▾</span></button>
                <div class="drawer-sub"><div class="drawer-sub-inner">
                    <a class="drawer-sub-link" href="/produtos/pulse/">Pulse</a>
                    <a class="drawer-sub-link" href="/produtos/nr01/">Agente NR1</a>
                    <a class="drawer-sub-link" href="/produtos/guia-pratico-de-gestao-dos-riscos-psicossociais/">Guia Prático</a>
                </div></div>
            </div>
            <a class="drawer-plain-link" href="/sobre/">Sobre</a>
            <a class="drawer-plain-link" href="/blog/">Blog</a>
            <div class="drawer-cta"><a class="btn btn-primary w-full" href="https://calendly.com/fiter_/fiter" target="_blank" rel="noopener noreferrer" style="text-decoration:none;justify-content:center;">Agendar demonstração</a></div>
        </div>
    </div>
</nav>`;

const FOOTER = `<footer class="ds-footer">
    <div class="footer-inner">
        <div class="footer-top">
            <div class="footer-brand">
                <img src="/assets/img/fiter_logo.svg" alt="Fiter">
                <p>People analytics com IA e neurociência. +500k pessoas medidas.</p>
            </div>
            <div class="footer-nav">
                <div>
                    <div class="footer-col-title">Soluções</div>
                    <ul class="footer-links">
                        <li><a href="/solucoes/rh/">Recursos Humanos</a></li>
                        <li><a href="/solucoes/educacao/">Educação</a></li>
                    </ul>
                </div>
                <div>
                    <div class="footer-col-title">Empresa</div>
                    <ul class="footer-links">
                        <li><a href="/sobre/">Sobre</a></li>
                        <li><a href="/blog/">Blog</a></li>
                        <li><a href="/contato/">Contato</a></li>
                    </ul>
                </div>
                <div>
                    <div class="footer-col-title">Conformidade</div>
                    <ul class="footer-links">
                        <li><a href="/lgpd/">LGPD</a></li>
                        <li><a href="/politica-de-privacidade/">Política de privacidade</a></li>
                        <li><a href="/termos-de-uso/">Termos de uso</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="footer-divider"></div>
        <div class="footer-bottom">
            <span class="footer-copy">© 2026 Fiter Tecnologia LTDA · Todos os direitos reservados.</span>
            <span class="footer-copy" style="display:flex;align-items:center;gap:0.3rem;">Feito por <a href="https://vellumwire.com" target="_blank" rel="noopener" style="color:var(--text-secondary);text-decoration:none;transition:color 0.2s;" onmouseover="this.style.color='var(--text-primary)'" onmouseout="this.style.color='var(--text-secondary)'">Vellumwire</a> <span style="color:var(--text-tertiary);">&#10084;</span></span>
        </div>
    </div>
</footer>`;

const SCRIPTS = `<script src="https://unpkg.com/lucide@latest"></script>
<script src="/assets/js/main.js" defer></script>
<script>document.addEventListener('DOMContentLoaded',()=>{if(window.lucide)lucide.createIcons();});</script>`;

const STYLES = `
    <style>
    .legal-wrap{max-width:740px;margin:0 auto;padding:6rem 0 8rem;}
    .legal-wrap h1{font-family:var(--font-serif);font-size:clamp(2rem,3vw,2.75rem);font-weight:800;letter-spacing:-0.03em;line-height:1.1;color:var(--text-primary);margin-bottom:0.75rem;}
    .legal-wrap .legal-date{font-family:var(--font-mono);font-size:0.72rem;color:var(--text-tertiary);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:3rem;display:block;}
    .legal-wrap h2{font-family:var(--font-serif);font-size:1.25rem;font-weight:700;color:var(--text-primary);margin:2.5rem 0 0.75rem;letter-spacing:-0.015em;}
    .legal-wrap p{font-size:0.9375rem;color:var(--text-secondary);line-height:1.75;margin-bottom:1rem;}
    .legal-wrap ul{margin:0.5rem 0 1rem 1.25rem;display:flex;flex-direction:column;gap:0.4rem;}
    .legal-wrap ul li{font-size:0.9375rem;color:var(--text-secondary);line-height:1.6;}
    .legal-wrap a{color:var(--accent-brand);text-decoration:none;}
    .legal-wrap a:hover{text-decoration:underline;}
    .legal-breadcrumb{font-family:var(--font-mono);font-size:0.7rem;color:var(--text-tertiary);margin-bottom:2rem;display:flex;gap:0.5rem;align-items:center;}
    .legal-breadcrumb a{color:var(--text-tertiary);text-decoration:none;}
    .legal-breadcrumb a:hover{color:var(--text-secondary);}
    .legal-highlight{background:var(--bg-surface);border:1px solid var(--border-default);border-radius:var(--radius-md);padding:1.25rem 1.5rem;margin:1.5rem 0;}
    </style>`;

function head(title, desc, canonical) {
  return `<!DOCTYPE html>
<html lang="pt-BR" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="google-site-verification" content="TH4kqZnapgxjblie2KFVRM3laak_fIKLUfN9Dm5b1YY">
    <title>${title} | Fiter</title>
    <meta name="description" content="${desc}">
    <link rel="canonical" href="${canonical}">
    <link rel="icon" href="/assets/img/logo.png" type="image/png">
    <meta name="robots" content="noindex">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@300;400;500;600&family=Geist:wght@600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/assets/css/style.css">
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="/assets/js/tailwind-config.js"></script>${STYLES}
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-RL4MTL7XFE"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-RL4MTL7XFE');
    </script>
</head>
<body>`;
}

// ─── LGPD ────────────────────────────────────────────────────────────────────
const lgpd = head(
  'LGPD — Proteção de Dados',
  'Saiba como a Fiter trata e protege seus dados pessoais em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018).',
  'https://fiter.com.br/lgpd/'
) + `
${NAV}
<main class="main-content" style="padding-top:64px;">
    <div class="ds-container px-6">
        <div class="legal-wrap">
            <div class="legal-breadcrumb">
                <a href="/">Fiter</a> <span>›</span> <span>LGPD</span>
            </div>
            <h1>LGPD na Fiter</h1>
            <span class="legal-date">Última atualização: maio de 2026</span>

            <p>A <strong style="color:var(--text-primary);">Lei Geral de Proteção de Dados Pessoais</strong> (Lei nº 13.709/2018 — LGPD) regula o tratamento de dados pessoais no Brasil. A Fiter está comprometida com o cumprimento integral dessa lei e com a transparência no uso das informações que trata.</p>

            <h2>O que é a LGPD?</h2>
            <p>A LGPD é a lei brasileira de proteção de dados, inspirada no GDPR europeu. Ela define regras para coleta, armazenamento, uso, compartilhamento e eliminação de dados pessoais — qualquer informação que identifique ou possa identificar uma pessoa natural.</p>
            <p>A lei garante direitos aos titulares dos dados e impõe obrigações às organizações que os tratam, com o objetivo de proteger a privacidade e a liberdade individual.</p>

            <h2>Papel da Fiter</h2>
            <p>A Fiter atua como <strong style="color:var(--text-primary);">operadora</strong> de dados quando processa informações de colaboradores em nome das empresas clientes, e como <strong style="color:var(--text-primary);">controladora</strong> quando trata dados de seus próprios clientes e visitantes do site.</p>

            <div class="legal-highlight">
                <p style="margin:0;"><strong style="color:var(--text-primary);">Dado sensível no contexto Fiter:</strong> as respostas às pesquisas de bem-estar e saúde mental são classificadas como dados sensíveis pela LGPD. Tratamos essas informações de forma anonimizada — gestores nunca têm acesso à resposta individual de nenhum colaborador.</p>
            </div>

            <h2>Bases legais que utilizamos</h2>
            <ul>
                <li><strong style="color:var(--text-primary);">Execução de contrato</strong> — tratamento necessário para prestar os serviços contratados.</li>
                <li><strong style="color:var(--text-primary);">Consentimento</strong> — quando solicitamos dados diretamente ao titular para finalidades específicas.</li>
                <li><strong style="color:var(--text-primary);">Legítimo interesse</strong> — para melhorias de produto, segurança e prevenção de fraudes.</li>
                <li><strong style="color:var(--text-primary);">Cumprimento de obrigação legal</strong> — como no caso do Agente NR1, que apoia a conformidade com normas do Ministério do Trabalho.</li>
            </ul>

            <h2>Seus direitos como titular</h2>
            <p>De acordo com o Art. 18 da LGPD, você tem direito a:</p>
            <ul>
                <li>Confirmar a existência de tratamento dos seus dados</li>
                <li>Acessar os dados que tratamos sobre você</li>
                <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
                <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários</li>
                <li>Portabilidade dos seus dados a outro fornecedor</li>
                <li>Revogar o consentimento a qualquer momento</li>
                <li>Opor-se ao tratamento realizado sem base legal adequada</li>
            </ul>

            <h2>Como exercer seus direitos</h2>
            <p>Envie sua solicitação para <a href="mailto:privacidade@fiter.com.br">privacidade@fiter.com.br</a>. Respondemos em até 15 dias úteis, conforme previsto na LGPD.</p>

            <h2>Encarregado de Proteção de Dados (DPO)</h2>
            <p>Nossa Encarregada de Proteção de Dados é responsável por garantir o cumprimento da LGPD internamente e por atender solicitações dos titulares. Contato: <a href="mailto:privacidade@fiter.com.br">privacidade@fiter.com.br</a>.</p>

            <h2>Autoridade Nacional de Proteção de Dados (ANPD)</h2>
            <p>Se considerar que seus direitos não foram atendidos adequadamente, você pode apresentar reclamação à <a href="https://www.gov.br/anpd" target="_blank" rel="noopener">ANPD</a> — a autoridade reguladora da LGPD no Brasil.</p>

            <p style="margin-top:2rem;">Para detalhes completos sobre como coletamos e usamos seus dados, consulte nossa <a href="/politica-de-privacidade/">Política de Privacidade</a>.</p>
        </div>
    </div>
</main>
${FOOTER}
${SCRIPTS}
</body>
</html>`;

// ─── POLÍTICA DE PRIVACIDADE ──────────────────────────────────────────────────
const privacidade = head(
  'Política de Privacidade',
  'Veja como a Fiter coleta, usa, armazena e protege seus dados pessoais. Comprometidos com a LGPD e com a transparência.',
  'https://fiter.com.br/politica-de-privacidade/'
) + `
${NAV}
<main class="main-content" style="padding-top:64px;">
    <div class="ds-container px-6">
        <div class="legal-wrap">
            <div class="legal-breadcrumb">
                <a href="/">Fiter</a> <span>›</span> <span>Política de Privacidade</span>
            </div>
            <h1>Política de Privacidade</h1>
            <span class="legal-date">Última atualização: maio de 2026</span>

            <p>A <strong style="color:var(--text-primary);">Fiter Tecnologia LTDA</strong> ("Fiter", "nós") é uma empresa brasileira de people analytics. Esta Política descreve como coletamos, usamos, armazenamos e protegemos seus dados pessoais, em conformidade com a LGPD (Lei nº 13.709/2018).</p>

            <h2>1. Quem somos</h2>
            <p>Fiter Tecnologia LTDA — empresa com sede em São Paulo/SP. Dúvidas sobre esta Política: <a href="mailto:privacidade@fiter.com.br">privacidade@fiter.com.br</a>.</p>

            <h2>2. Dados que coletamos</h2>
            <p><strong style="color:var(--text-primary);">Clientes (empresas contratantes):</strong></p>
            <ul>
                <li>Nome, e-mail e telefone do responsável pelo contrato</li>
                <li>Dados da empresa (razão social, CNPJ, segmento)</li>
                <li>Dados de faturamento e pagamento</li>
                <li>Dados de uso da plataforma (logs de acesso, funcionalidades utilizadas)</li>
            </ul>
            <p><strong style="color:var(--text-primary);">Colaboradores e alunos (usuários das pesquisas):</strong></p>
            <ul>
                <li>Número de telefone (para envio via WhatsApp)</li>
                <li>Respostas às pesquisas — tratadas de forma <strong style="color:var(--text-primary);">anonimizada</strong> antes de serem apresentadas aos gestores</li>
                <li>Metadados de resposta (data, hora, tempo de resposta) — sem identificação individual</li>
            </ul>
            <p><strong style="color:var(--text-primary);">Visitantes do site:</strong></p>
            <ul>
                <li>Dados de navegação via cookies analíticos (páginas visitadas, tempo de sessão)</li>
                <li>Dados fornecidos voluntariamente em formulários de contato</li>
            </ul>

            <h2>3. Como usamos os dados</h2>
            <ul>
                <li>Prestação dos serviços contratados (pulse surveys, NR1, portal)</li>
                <li>Envio de pesquisas via WhatsApp para colaboradores e alunos</li>
                <li>Geração de relatórios e dashboards analíticos para gestores</li>
                <li>Comunicação sobre o contrato, atualizações de produto e suporte</li>
                <li>Melhoria contínua da plataforma e dos algoritmos de IA</li>
                <li>Cumprimento de obrigações legais (NR1, CNE 3/2025)</li>
            </ul>

            <h2>4. Anonimização das respostas</h2>
            <div class="legal-highlight">
                <p style="margin:0;">As respostas individuais dos colaboradores e alunos são <strong style="color:var(--text-primary);">sempre anonimizadas</strong> antes de serem apresentadas aos gestores. Grupos com menos de 5 respondentes não são exibidos para evitar identificação por exclusão. Nenhum gestor tem acesso à resposta individual de nenhuma pessoa.</p>
            </div>

            <h2>5. Compartilhamento de dados</h2>
            <p>Não vendemos dados pessoais. Compartilhamos apenas com:</p>
            <ul>
                <li><strong style="color:var(--text-primary);">Meta (WhatsApp Business API)</strong> — para envio das pesquisas</li>
                <li><strong style="color:var(--text-primary);">Provedores de infraestrutura em nuvem</strong> — armazenamento e processamento seguro</li>
                <li><strong style="color:var(--text-primary);">Autoridades competentes</strong> — quando exigido por lei ou ordem judicial</li>
            </ul>
            <p>Todos os fornecedores são contratualmente obrigados a tratar os dados com o mesmo nível de proteção que aplicamos.</p>

            <h2>6. Retenção de dados</h2>
            <ul>
                <li>Dados de clientes: pelo período contratual + 5 anos (obrigações fiscais)</li>
                <li>Respostas de pesquisas: pelo período contratual, excluídas após encerramento</li>
                <li>Logs de acesso: 6 meses (Marco Civil da Internet)</li>
                <li>Dados de visitantes do site: até 24 meses</li>
            </ul>

            <h2>7. Segurança</h2>
            <p>Adotamos medidas técnicas e organizacionais para proteger os dados: criptografia em trânsito (TLS) e em repouso, controle de acesso por perfil, monitoramento contínuo e políticas internas de segurança da informação.</p>

            <h2>8. Seus direitos</h2>
            <p>Você pode exercer todos os direitos previstos no Art. 18 da LGPD. Envie sua solicitação para <a href="mailto:privacidade@fiter.com.br">privacidade@fiter.com.br</a>. Respondemos em até 15 dias úteis.</p>
            <p>Veja o detalhamento dos seus direitos na nossa página sobre <a href="/lgpd/">LGPD</a>.</p>

            <h2>9. Cookies</h2>
            <p>Utilizamos cookies estritamente necessários (para funcionamento do site) e cookies analíticos (para entender o uso e melhorar a experiência). Você pode desativar cookies analíticos nas configurações do seu navegador sem impacto nas funcionalidades principais.</p>

            <h2>10. Alterações nesta Política</h2>
            <p>Podemos atualizar esta Política periodicamente. Em caso de mudanças relevantes, comunicaremos os clientes por e-mail com 30 dias de antecedência. A data de "última atualização" no topo desta página indica a versão vigente.</p>

            <h2>11. Contato</h2>
            <p>Encarregada de Proteção de Dados (DPO): <a href="mailto:privacidade@fiter.com.br">privacidade@fiter.com.br</a><br>
            Fiter Tecnologia LTDA · São Paulo/SP · Brasil</p>
        </div>
    </div>
</main>
${FOOTER}
${SCRIPTS}
</body>
</html>`;

// ─── TERMOS DE USO ────────────────────────────────────────────────────────────
const termos = head(
  'Termos de Uso',
  'Termos e condições de uso da plataforma Fiter. Leia antes de contratar ou utilizar nossos serviços.',
  'https://fiter.com.br/termos-de-uso/'
) + `
${NAV}
<main class="main-content" style="padding-top:64px;">
    <div class="ds-container px-6">
        <div class="legal-wrap">
            <div class="legal-breadcrumb">
                <a href="/">Fiter</a> <span>›</span> <span>Termos de Uso</span>
            </div>
            <h1>Termos de Uso</h1>
            <span class="legal-date">Última atualização: maio de 2026</span>

            <p>Estes Termos regulam o acesso e uso dos produtos e serviços da <strong style="color:var(--text-primary);">Fiter Tecnologia LTDA</strong> ("Fiter"). Ao contratar ou utilizar qualquer produto Fiter, você concorda com estes Termos.</p>

            <h2>1. Serviços</h2>
            <p>A Fiter oferece uma plataforma de people analytics composta por:</p>
            <ul>
                <li><strong style="color:var(--text-primary);">Pulse</strong> — pulse survey contínuo via WhatsApp para medir engajamento e bem-estar</li>
                <li><strong style="color:var(--text-primary);">Agente NR1</strong> — geração automatizada de laudos de risco psicossocial em conformidade com a NR1</li>
                <li><strong style="color:var(--text-primary);">Pulse Educação</strong> — medição do Índice de Felicidade na Educação (IFE) e predição de evasão</li>
                <li><strong style="color:var(--text-primary);">Portal de Transparência</strong> — dashboard de gestão e relatórios de clima organizacional</li>
            </ul>
            <p>Os serviços são prestados sob modelo de assinatura (SaaS) e podem ser modificados ou descontinuados mediante aviso prévio de 30 dias.</p>

            <h2>2. Elegibilidade</h2>
            <p>Os serviços são destinados a <strong style="color:var(--text-primary);">pessoas jurídicas</strong> (empresas e instituições de ensino). Ao contratar, o representante declara ter poderes legais para vincular a organização a estes Termos e à <a href="/politica-de-privacidade/">Política de Privacidade</a>.</p>

            <h2>3. Obrigações do cliente</h2>
            <ul>
                <li>Fornecer informações verdadeiras e mantê-las atualizadas</li>
                <li>Obter as autorizações necessárias dos colaboradores e alunos para o tratamento de dados, quando exigido pela LGPD</li>
                <li>Não utilizar a plataforma para fins ilícitos, discriminatórios ou que violem direitos de terceiros</li>
                <li>Manter confidencialidade das credenciais de acesso</li>
                <li>Usar os dados acessados na plataforma apenas para fins legítimos de gestão de pessoas</li>
            </ul>

            <h2>4. Uso proibido</h2>
            <p>É vedado:</p>
            <ul>
                <li>Tentar identificar individualmente colaboradores a partir de dados anonimizados</li>
                <li>Usar os resultados de pesquisas como base exclusiva para demissões ou punições sem processo adequado</li>
                <li>Fazer engenharia reversa, copiar ou redistribuir o software</li>
                <li>Acessar a plataforma por meios automatizados não autorizados (bots, scrapers)</li>
                <li>Compartilhar credenciais de acesso com terceiros não autorizados</li>
            </ul>

            <h2>5. Propriedade intelectual</h2>
            <p>Todo o conteúdo da plataforma — algoritmos, metodologia IFE, interfaces, marca e documentação — é propriedade exclusiva da Fiter ou de seus licenciadores. O contrato não transfere nenhum direito de propriedade intelectual ao cliente.</p>
            <p>Os dados gerados pelo cliente (respostas de colaboradores, resultados de pesquisas) pertencem ao cliente. A Fiter pode usar dados anonimizados e agregados para melhoria dos modelos de IA, sem identificação das organizações.</p>

            <h2>6. Disponibilidade e SLA</h2>
            <p>A Fiter se compromete a manter a plataforma disponível com uptime mínimo de 99% ao mês, exceto em janelas de manutenção programada (comunicadas com 48h de antecedência) e eventos de força maior.</p>

            <h2>7. Limitação de responsabilidade</h2>
            <p>A Fiter não se responsabiliza por:</p>
            <ul>
                <li>Decisões de gestão tomadas com base nos dados da plataforma</li>
                <li>Indisponibilidade causada por falhas de infraestrutura de terceiros (WhatsApp, nuvem)</li>
                <li>Danos indiretos, lucros cessantes ou danos consequenciais</li>
            </ul>
            <p>A responsabilidade máxima da Fiter em qualquer caso fica limitada ao valor pago pelo cliente nos últimos 3 meses de serviço.</p>

            <h2>8. Confidencialidade</h2>
            <p>Ambas as partes comprometem-se a manter em sigilo as informações confidenciais trocadas durante a relação comercial, pelo prazo de 3 anos após o encerramento do contrato.</p>

            <h2>9. Rescisão</h2>
            <p>O contrato pode ser rescindido por qualquer das partes mediante aviso prévio de 30 dias. Em caso de violação material destes Termos, a Fiter pode suspender ou encerrar o acesso imediatamente. Após a rescisão, os dados do cliente serão excluídos em até 60 dias, salvo obrigação legal de retenção.</p>

            <h2>10. Alterações</h2>
            <p>A Fiter pode alterar estes Termos mediante comunicação por e-mail com 30 dias de antecedência. O uso continuado dos serviços após esse prazo implica aceitação das alterações.</p>

            <h2>11. Lei aplicável e foro</h2>
            <p>Estes Termos são regidos pelas leis brasileiras. Fica eleito o foro da Comarca de São Paulo/SP para dirimir quaisquer controvérsias, com renúncia a qualquer outro, por mais privilegiado que seja.</p>

            <h2>12. Contato</h2>
            <p>Dúvidas sobre estes Termos: <a href="mailto:contato@fiter.com.br">contato@fiter.com.br</a><br>
            Fiter Tecnologia LTDA · São Paulo/SP · Brasil</p>
        </div>
    </div>
</main>
${FOOTER}
${SCRIPTS}
</body>
</html>`;

const ROOT = '/home/afonso-jr/Documents/01 - Freelas/fiter';
fs.mkdirSync(`${ROOT}/lgpd`, { recursive: true });
fs.mkdirSync(`${ROOT}/politica-de-privacidade`, { recursive: true });
fs.mkdirSync(`${ROOT}/termos-de-uso`, { recursive: true });

fs.writeFileSync(`${ROOT}/lgpd/index.html`, lgpd, 'utf8');
fs.writeFileSync(`${ROOT}/politica-de-privacidade/index.html`, privacidade, 'utf8');
fs.writeFileSync(`${ROOT}/termos-de-uso/index.html`, termos, 'utf8');
console.log('3 pages created.');

// Update footer links in all files that have # placeholders
const targets = [
  `${ROOT}/index.html`,
  `${ROOT}/blog/index.html`,
  `${ROOT}/clientes/index.html`,
  `${ROOT}/contato/index.html`,
  `${ROOT}/produtos/index.html`,
  `${ROOT}/sobre/index.html`,
  `${ROOT}/solucoes/rh/index.html`,
  `${ROOT}/solucoes/educacao/index.html`,
];

let updated = 0;
targets.forEach(fp => {
  try {
    let h = fs.readFileSync(fp, 'utf8');
    const before = h;
    h = h.replace(/href="#">LGPD<\/a>/g, 'href="/lgpd/">LGPD</a>');
    h = h.replace(/href="#">Política de privacidade<\/a>/g, 'href="/politica-de-privacidade/">Política de privacidade</a>');
    h = h.replace(/href="#">Termos de uso<\/a>/g, 'href="/termos-de-uso/">Termos de uso</a>');
    if (h !== before) { fs.writeFileSync(fp, h, 'utf8'); updated++; }
  } catch(e) {}
});
console.log('Footer links updated in', updated, 'files.');
