import React, { useEffect, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ArrowRight, Check, X, Brain, LineChart, Shield, Users, ChevronDown, Quote } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

// 1. HERO SECTION
export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-bg-base">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,var(--semantic-color-accent-glow)_0%,transparent_40%)]" />
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <motion.div 
          className="md:col-span-7 flex flex-col items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border-default bg-bg-surface mb-8">
            <span className="w-2 h-2 rounded-full bg-accent-brand animate-pulse" />
            <span className="text-xs font-mono text-text-secondary uppercase tracking-widest">Plataforma Inteligente</span>
          </motion.div>
          
          <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-sans font-extrabold tracking-tight text-text-primary leading-[1.05] mb-6">
            Meça <span className="text-accent-brand">felicidade</span> e preveja resultados reais.
          </motion.h1>
          
          <motion.p variants={fadeIn} className="text-lg md:text-xl text-text-secondary max-w-[480px] mb-10 leading-relaxed">
            A primeira plataforma brasileira que une IA e neurociência para monitorar engajamento, clima e saúde mental em tempo real.
          </motion.p>
          
          <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="btn btn-primary btn-animate-chars">
              <span className="btn-text">
                <span className="char" data-char="A">A</span>
                <span className="char" data-char="g">g</span>
                <span className="char" data-char="e">e</span>
                <span className="char" data-char="n">n</span>
                <span className="char" data-char="d">d</span>
                <span className="char" data-char="a">a</span>
                <span className="char" data-char="r">r</span>
                <span className="char" data-char=" "> </span>
                <span className="char" data-char="D">D</span>
                <span className="char" data-char="e">e</span>
                <span className="char" data-char="m">m</span>
                <span className="char" data-char="o">o</span>
              </span>
            </button>
            <button className="btn btn-secondary btn-animate-chars">
               <span className="btn-text">
                <span className="char" data-char="S">S</span>
                <span className="char" data-char="a">a</span>
                <span className="char" data-char="i">i</span>
                <span className="char" data-char="b">b</span>
                <span className="char" data-char="a">a</span>
                <span className="char" data-char=" "> </span>
                <span className="char" data-char="m">m</span>
                <span className="char" data-char="a">a</span>
                <span className="char" data-char="i">i</span>
                <span className="char" data-char="s">s</span>
              </span>
            </button>
          </motion.div>
          
          <motion.div variants={fadeIn} className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1,2,3].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-bg-base bg-bg-surface overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Avatar" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <p className="text-sm text-text-tertiary">
              <strong className="text-text-primary font-medium">500+</strong> empresas confiam
            </p>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="hidden md:block md:col-span-5 relative"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-accent-glow blur-[100px] rounded-full" />
          <div className="relative aspect-[4/5] bg-bg-surface border border-border-default rounded-2xl shadow-2xl overflow-hidden flex items-center justify-center">
            <div className="text-text-tertiary font-mono text-sm">Dashboard App Mockup</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// 2. LOGOS / SOCIAL PROOF BAR
export const LogoTicker = () => {
  return (
    <section className="py-16 border-y border-border-subtle bg-bg-base overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <p className="font-mono text-xs text-text-tertiary uppercase tracking-[0.15em]">Líderes que confiam na Fiter</p>
      </div>
      <div className="relative flex w-full">
        {/* Gradients for smooth fade on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-bg-base to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-bg-base to-transparent z-10" />
        
        <motion.div 
          className="flex whitespace-nowrap gap-16 items-center px-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        >
          {/* Duplicated for infinite effect */}
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              <span className="text-2xl font-serif text-text-secondary opacity-50 hover:opacity-100 hover:text-text-primary transition-all duration-300">Braspress</span>
              <span className="text-2xl font-serif text-text-secondary opacity-50 hover:opacity-100 hover:text-text-primary transition-all duration-300">Kroton</span>
              <span className="text-2xl font-serif text-text-secondary opacity-50 hover:opacity-100 hover:text-text-primary transition-all duration-300">Arcor</span>
              <span className="text-2xl font-serif text-text-secondary opacity-50 hover:opacity-100 hover:text-text-primary transition-all duration-300">Unimed</span>
              <span className="text-2xl font-serif text-text-secondary opacity-50 hover:opacity-100 hover:text-text-primary transition-all duration-300">Cielo</span>
              <span className="text-2xl font-serif text-text-secondary opacity-50 hover:opacity-100 hover:text-text-primary transition-all duration-300">Votorantim</span>
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// 3. FEATURE SECTION — GRID
export const FeatureGrid = () => {
  const features = [
    { icon: <Brain size={24} />, title: "IA Preditiva", desc: "Antecipe o turnover e entenda o clima antes que os problemas aconteçam." },
    { icon: <LineChart size={24} />, title: "Analytics em Tempo Real", desc: "Dashboard intuitivo com métricas de engajamento e felicidade cruzadas." },
    { icon: <Shield size={24} />, title: "Neurociência Aplicada", desc: "Perguntas baseadas em estudos comportamentais, sem viés ou fricção." }
  ];

  return (
    <section className="py-24 md:py-32 bg-bg-base relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-20"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
        >
          <motion.p variants={fadeIn} className="font-mono text-sm text-text-tertiary uppercase tracking-widest mb-4">Plataforma Completa</motion.p>
          <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-serif mb-6 text-text-primary">Tecnologia que entende pessoas</motion.h2>
          <motion.p variants={fadeIn} className="text-text-secondary text-lg">Substituímos pesquisas longas e enviesadas por pulsos inteligentes e preditivos.</motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
        >
          {features.map((feat, i) => (
            <motion.div key={i} variants={fadeIn} className="card group hover-lift">
              <div className="w-12 h-12 rounded-lg bg-bg-base border border-border-default flex items-center justify-center text-accent-brand mb-6 group-hover:scale-110 transition-transform duration-300">
                {feat.icon}
              </div>
              <h3 className="text-xl font-sans font-medium text-text-primary mb-3">{feat.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-0">{feat.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// 4. FEATURE SECTION — ALTERNADA
export const FeatureAlternate = () => {
  return (
    <section className="py-24 md:py-32 bg-bg-surface border-y border-border-subtle relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border-default bg-bg-base mb-6">
              <span className="text-xs font-mono text-accent-brand uppercase tracking-widest">RH Corporativo</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-serif text-text-primary mb-6">Reduza o turnover com precisão cirúrgica.</h3>
            <p className="text-text-secondary text-lg mb-8">Nossa IA identifica padrões de insatisfação antes que os colaboradores peçam demissão. Retenha talentos com dados concretos.</p>
            <ul className="space-y-4 mb-8">
              {['Alertas preditivos de evasão', 'Mapeamento de clima em tempo real', 'Pulse surveys de 2 minutos'].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check size={20} className="text-accent-brand shrink-0 mt-1" />
                  <span className="text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
            <a href="#" className="inline-flex items-center gap-2 text-text-primary font-medium hover:text-accent-brand transition-colors">
              Explorar solução <ArrowRight size={16} />
            </a>
          </motion.div>
          <motion.div 
            className="aspect-square lg:aspect-[4/3] bg-bg-base border border-border-default rounded-2xl relative shadow-2xl"
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--semantic-color-accent-glow)_0%,transparent_70%)] opacity-50" />
          </motion.div>
        </div>

        {/* Row 2 (Reversed) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center lg:flex-row-reverse">
          <motion.div 
            className="order-2 lg:order-1 aspect-square lg:aspect-[4/3] bg-bg-base border border-border-default rounded-2xl relative shadow-2xl"
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--semantic-color-accent-glow)_0%,transparent_70%)] opacity-50" />
          </motion.div>
          <motion.div 
             className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border-default bg-bg-base mb-6">
              <span className="text-xs font-mono text-accent-brand uppercase tracking-widest">Educação</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-serif text-text-primary mb-6">Evite a evasão escolar e melhore o clima.</h3>
            <p className="text-text-secondary text-lg mb-8">Meça o engajamento dos alunos e o bem-estar dos professores. Intervenha no momento exato em que o aluno começa a se desmotivar.</p>
            <ul className="space-y-4 mb-8">
              {['Termômetro de emoções', 'Predição de cancelamento de matrícula', 'Relatórios segmentados por turma'].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check size={20} className="text-accent-brand shrink-0 mt-1" />
                  <span className="text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
            <a href="#" className="inline-flex items-center gap-2 text-text-primary font-medium hover:text-accent-brand transition-colors">
              Descubra para escolas <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

// 5. METRICS / STATS ROW
const Counter = ({ value, suffix = "" }: { value: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // easeOutQuart
        const ease = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(ease * value));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
};

export const MetricsRow = () => {
  const stats = [
    { value: 500, suffix: "k+", label: "Pessoas Medidas", desc: "Na base de dados Fiter" },
    { value: 8, suffix: "", label: "Cliques", desc: "Para responder uma pesquisa" },
    { value: 2, suffix: "m", label: "Minutos", desc: "Tempo médio de resposta" },
    { value: 92, suffix: "%", label: "Adesão", desc: "Taxa média de engajamento" }
  ];

  return (
    <section className="py-20 bg-bg-base border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x-0 lg:divide-x divide-border-subtle">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center px-4">
              <div className="text-4xl md:text-5xl font-mono text-text-primary mb-3">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm font-medium text-text-primary uppercase tracking-widest mb-2">{stat.label}</div>
              <div className="text-sm text-text-secondary">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 6. TESTIMONIAL / CASE SECTION
export const Testimonials = () => {
  return (
    <section className="py-24 md:py-32 bg-bg-surface relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <p className="font-mono text-sm text-text-tertiary uppercase tracking-widest mb-4">Casos de Sucesso</p>
            <h2 className="text-4xl md:text-5xl font-serif text-text-primary">Impacto comprovado.</h2>
          </div>
          <div className="flex gap-4">
            <button className="w-10 h-10 rounded-full border border-border-default flex items-center justify-center hover:bg-bg-base transition-colors text-text-secondary hover:text-text-primary">
              <ArrowRight size={20} className="rotate-180" />
            </button>
            <button className="w-10 h-10 rounded-full border border-border-default flex items-center justify-center hover:bg-bg-base transition-colors text-text-secondary hover:text-text-primary">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <div className="bg-bg-base border border-border-default rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 text-accent-glow">
            <Quote size={120} strokeWidth={0.5} />
          </div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 font-mono text-sm mb-8">
                ↓ 43% de redução no turnover
              </div>
              <p className="text-2xl md:text-3xl font-serif text-text-primary leading-snug mb-8">
                "A Fiter transformou a forma como olhamos para a nossa operação. Antes, reagíamos aos desligamentos. Hoje, conseguimos prever e reter os nossos melhores talentos com ações direcionadas baseadas em dados."
              </p>
              <div className="flex items-center gap-4">
                <img src="https://i.pravatar.cc/100?img=33" alt="Avatar" className="w-12 h-12 rounded-full border border-border-default" />
                <div>
                  <div className="text-text-primary font-medium">Marina Silva</div>
                  <div className="text-sm text-text-tertiary">Diretora de RH, TechLog</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// 7. PRICING SECTION
export const Pricing = () => {
  return (
    <section className="py-24 md:py-32 bg-bg-base border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-text-primary">Planos claros. Sem surpresas.</h2>
          <p className="text-text-secondary text-lg">Escolha o plano ideal para o tamanho do seu desafio.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Plan 1 */}
          <div className="card h-full justify-between">
            <div className="w-full">
              <h3 className="text-2xl font-sans font-medium text-text-primary mb-2">Essential</h3>
              <p className="text-text-secondary text-sm mb-6">Para empresas iniciando a gestão de clima.</p>
              <div className="text-4xl font-mono text-text-primary mb-8">R$ 15<span className="text-sm text-text-tertiary font-sans">/usuário</span></div>
              
              <ul className="space-y-4 mb-8 w-full">
                {['Pulse surveys ilimitados', 'Dashboard básico', 'Suporte por email'].map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-text-secondary">
                    <Check size={16} className="text-text-primary" /> {feat}
                  </li>
                ))}
                <li className="flex items-center gap-3 text-sm text-text-tertiary">
                  <X size={16} /> IA Preditiva
                </li>
              </ul>
            </div>
            <button className="btn btn-secondary w-full">Começar agora</button>
          </div>

          {/* Plan 2 */}
          <div className="card h-full justify-between border-accent-brand relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-accent-brand text-accent-text text-xs font-bold px-3 py-1 rounded-bl-lg">
              MAIS POPULAR
            </div>
            <div className="absolute inset-0 bg-accent-brand opacity-5 blur-[100px] pointer-events-none" />
            
            <div className="w-full relative z-10">
              <h3 className="text-2xl font-sans font-medium text-text-primary mb-2">Predictive</h3>
              <p className="text-text-secondary text-sm mb-6">IA e Neurociência para retenção ativa.</p>
              <div className="text-4xl font-mono text-text-primary mb-8">R$ 35<span className="text-sm text-text-tertiary font-sans">/usuário</span></div>
              
              <ul className="space-y-4 mb-8 w-full">
                {['Tudo do plano Essential', 'Motor de IA Preditiva', 'Mapeamento de Evasão', 'Customer Success dedicado'].map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-text-secondary">
                    <Check size={16} className="text-accent-brand" /> {feat}
                  </li>
                ))}
              </ul>
            </div>
            <button className="btn btn-primary w-full relative z-10">Falar com especialista</button>
          </div>
        </div>
      </div>
    </section>
  );
};

// 8. FAQ SECTION
const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-border-default">
      <button 
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-text-primary group-hover:text-accent-brand transition-colors">{question}</span>
        <ChevronDown size={20} className={`text-text-tertiary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <motion.div 
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-text-secondary text-base leading-relaxed">{answer}</p>
      </motion.div>
    </div>
  );
};

export const FAQ = () => {
  const faqs = [
    { q: "A Fiter se integra com meu sistema de folha?", a: "Sim. Temos integração nativa com os principais sistemas de folha e ERPs do mercado, facilitando a sincronização da base de colaboradores." },
    { q: "Como garantimos o anonimato dos dados?", a: "Utilizamos criptografia ponta a ponta e agregação de dados. Os gestores nunca têm acesso a respostas individuais, apenas a tendências e alertas de grupos a partir de 5 pessoas." },
    { q: "Qual o tempo médio de implantação?", a: "A implantação padrão leva em média 2 semanas, dependendo da complexidade das integrações e estrutura da empresa." },
    { q: "Preciso ter uma equipe de dados para usar a plataforma?", a: "Não. A interface foi desenhada para o RH. A Inteligência Artificial faz todo o processamento complexo e entrega insights mastigados e prontos para ação." }
  ];

  return (
    <section className="py-24 md:py-32 bg-bg-surface">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-mono text-sm text-text-tertiary uppercase tracking-widest mb-4">Dúvidas Frequentes</p>
          <h2 className="text-4xl font-serif text-text-primary">Perguntas comuns.</h2>
        </div>
        
        <div className="space-y-2">
          {faqs.map((faq, i) => <FAQItem key={i} question={faq.q} answer={faq.a} />)}
        </div>
      </div>
    </section>
  );
};

// 9. CTA FINAL
export const CTAFinal = () => {
  return (
    <section className="py-32 bg-bg-base relative overflow-hidden border-y border-border-subtle">
      {/* Decorative lines/glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--semantic-color-accent-glow)_0%,transparent_60%)]" />
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:100px_100px]" />
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-serif text-text-primary mb-8 tracking-tight">Pronto para prever resultados?</h2>
        <p className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto">
          Agende uma demonstração e veja como a IA da Fiter pode mapear e melhorar o clima da sua organização hoje mesmo.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="btn btn-primary btn-animate-chars text-lg px-8 py-4">
            Agendar Demonstração
          </button>
          <a href="#" className="text-text-secondary hover:text-text-primary font-medium underline underline-offset-4 transition-colors">
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

// 10. FOOTER
export const Footer = () => {
  return (
    <footer className="bg-[#020202] pt-20 pb-10 border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-serif italic text-text-primary mb-4">Fiter.</h2>
            <p className="text-sm text-text-secondary max-w-xs">
              Mapeando a felicidade corporativa e escolar através de IA e neurociência.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-text-primary uppercase tracking-widest mb-6">Produto</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-text-secondary hover:text-accent-brand transition-colors">RH Corporativo</a></li>
              <li><a href="#" className="text-sm text-text-secondary hover:text-accent-brand transition-colors">Educação</a></li>
              <li><a href="#" className="text-sm text-text-secondary hover:text-accent-brand transition-colors">Preços</a></li>
              <li><a href="#" className="text-sm text-text-secondary hover:text-accent-brand transition-colors">Integrações</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-text-primary uppercase tracking-widest mb-6">Empresa</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-text-secondary hover:text-accent-brand transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="text-sm text-text-secondary hover:text-accent-brand transition-colors">Carreiras</a></li>
              <li><a href="#" className="text-sm text-text-secondary hover:text-accent-brand transition-colors">Blog</a></li>
              <li><a href="#" className="text-sm text-text-secondary hover:text-accent-brand transition-colors">Casos de Sucesso</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-text-primary uppercase tracking-widest mb-6">Contato</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-text-secondary hover:text-accent-brand transition-colors">Suporte</a></li>
              <li><a href="#" className="text-sm text-text-secondary hover:text-accent-brand transition-colors">Falar com Vendas</a></li>
              <li><a href="#" className="text-sm text-text-secondary hover:text-accent-brand transition-colors">hello@fiter.com.br</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border-default flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-tertiary">
            © {new Date().getFullYear()} Fiter Brasil. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-text-tertiary hover:text-text-primary transition-colors text-xs">Termos de Uso</a>
            <a href="#" className="text-text-tertiary hover:text-text-primary transition-colors text-xs">Privacidade</a>
            <div className="flex gap-4 ml-4">
              <a href="#" className="text-text-tertiary hover:text-text-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="#" className="text-text-tertiary hover:text-text-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
