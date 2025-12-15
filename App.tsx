import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Zap,
  Mail,
  Instagram,
  Facebook,
  MessageSquare,
  Users,
  Megaphone,
  Workflow,
  Cpu,
  Globe,
  GraduationCap,
  Phone
} from 'lucide-react';
import { 
  SERVICE_CHAT, 
  SERVICE_VISUAL, 
  SERVICE_VIDEO, 
  SERVICE_SITES, 
  SERVICE_AUTOMATION, 
  SERVICE_SYSTEMS, 
  PACKAGES, 
  MENTORSHIP_SESSIONS,
} from './constants';
import { ServiceCategory } from './types';

// Tab Identifiers
type TabType = 'quem-somos' | 'conversacao' | 'marketing' | 'automacao' | 'sistemas-sites' | 'mentoria';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>('quem-somos');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleTabClick = (tab: TabType) => {
    setActiveTab(tab);
    // Optional: Scroll to top of tab content if user is far down
    const content = document.getElementById('main-content');
    if (content) {
        const yOffset = -100; // Offset for sticky header
        const y = content.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
    }
    setIsMenuOpen(false);
  };

  // Helper to render a Service Card
  const renderServiceCard = (category: ServiceCategory, showIcon: boolean = true) => (
    <div className="glass-card rounded-3xl p-6 md:p-10 border border-mirai-primary/20 animate-fade-in relative overflow-hidden h-full">
        {showIcon && (
            <div className="w-14 h-14 rounded-2xl bg-mirai-primary/10 flex items-center justify-center text-mirai-primary mb-6 border border-mirai-primary/20 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                <category.icon className="w-7 h-7" />
            </div>
        )}
        <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
        <p className="text-mirai-primary font-medium mb-4">{category.subtitle}</p>
        <p className="text-gray-400 leading-relaxed mb-6 text-sm md:text-base">
            {category.description}
        </p>

        <div className="space-y-3">
            {category.items.map((item, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors border border-white/5">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-1 gap-2">
                        <span className="font-bold text-white group-hover:text-mirai-primary transition-colors text-sm md:text-base">{item.service}</span>
                        <span className="text-mirai-primary font-bold whitespace-nowrap bg-mirai-primary/10 px-3 py-1 rounded-full text-xs md:text-sm border border-mirai-primary/20">
                            {item.price}
                        </span>
                    </div>
                    <p className="text-xs text-gray-400 mb-1">{item.description}</p>
                    {item.additional && (
                        <p className="text-[10px] text-gray-500 italic flex items-center gap-1">
                            <Sparkles className="w-3 h-3 text-mirai-glow" />
                            {item.additional}
                        </p>
                    )}
                </div>
            ))}
        </div>
        {category.extraInfo && (
             <div className="mt-6 pt-4 border-t border-dashed border-white/10">
                <p className="text-xs text-mirai-accent/90">
                    <span className="font-bold text-mirai-primary">Nota:</span> {category.extraInfo}
                </p>
            </div>
        )}
    </div>
  );

  return (
    <div className="min-h-screen bg-mirai-dark text-slate-100 font-sans selection:bg-mirai-primary selection:text-mirai-dark overflow-x-hidden">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 glass-card border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
              <div className="w-8 h-8 rounded bg-gradient-to-tr from-mirai-primary to-mirai-accent flex items-center justify-center">
                <Zap className="text-white w-5 h-5" fill="white" />
              </div>
              <span className="font-bold text-2xl tracking-tight text-white">mir<span className="text-mirai-primary">AI</span></span>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button
                    onClick={() => handleTabClick('mentoria')}
                    className={`hover:text-mirai-primary transition-colors px-3 py-2 rounded-md text-sm font-medium ${activeTab === 'mentoria' ? 'text-mirai-primary' : ''}`}
                  >
                    Mentoria
                </button>
                <button 
                   onClick={() => scrollToSection('contato')}
                   className="bg-mirai-primary hover:bg-mirai-glow text-mirai-dark font-bold px-4 py-2 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.4)] hover:shadow-[0_0_25px_rgba(34,211,238,0.6)]"
                >
                  Começar Agora
                </button>
              </div>
            </div>

            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden glass-card border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <button
                  onClick={() => handleTabClick('mentoria')}
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                >
                  Mentoria
                </button>
                <button
                  onClick={() => scrollToSection('contato')}
                  className="text-mirai-primary font-bold block px-3 py-2 rounded-md text-base w-full text-left"
                >
                  Fale Conosco
                </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-mirai-primary/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-mirai-primary/30 bg-mirai-primary/10 text-mirai-primary text-sm font-semibold mb-8 backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            <span>A Revolução da IA para o seu Negócio</span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
            Design, Vídeo & Tech <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mirai-primary to-mirai-accent neon-text">Acessível e Inteligente</span>
          </h1>
          
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400 mb-10">
            A tecnologia das Big Techs aplicada à realidade da sua empresa. 
            Fuja do "fazer sozinho" e dos custos altos.
          </p>
        </div>
      </section>

      {/* MAIN TABBED INTERFACE */}
      <section id="main-content" className="pb-24 pt-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* 6 Fixed Tabs Navigation */}
            <div className="sticky top-20 z-40 bg-mirai-dark/90 backdrop-blur-md py-4 mb-8 -mx-4 px-4 md:mx-0 md:px-0 border-y border-white/5 md:border-none md:rounded-full md:bg-mirai-card/50">
                <div className="flex overflow-x-auto md:justify-center gap-2 md:gap-4 no-scrollbar pb-2 md:pb-0">
                    {[
                        { id: 'quem-somos', label: 'Quem Somos', icon: Users },
                        { id: 'conversacao', label: 'Conversação', icon: MessageSquare },
                        { id: 'marketing', label: 'Marketing Digital', icon: Megaphone },
                        { id: 'automacao', label: 'Automações', icon: Workflow },
                        { id: 'sistemas-sites', label: 'Sistemas e Sites', icon: Globe },
                        { id: 'mentoria', label: 'Mentorias', icon: GraduationCap },
                    ].map((tab) => {
                        const Icon = tab.icon;
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => handleTabClick(tab.id as TabType)}
                                className={`
                                    flex items-center gap-2 px-5 py-3 rounded-full text-sm md:text-base font-bold whitespace-nowrap transition-all duration-300 border
                                    ${isActive 
                                        ? 'bg-mirai-primary text-mirai-dark border-mirai-primary shadow-[0_0_15px_rgba(34,211,238,0.4)]' 
                                        : 'bg-white/5 text-gray-400 border-white/10 hover:border-mirai-primary/50 hover:text-white'
                                    }
                                `}
                            >
                                <Icon className={`w-4 h-4 ${isActive ? 'text-mirai-dark' : 'text-mirai-primary'}`} />
                                {tab.label}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Content Area */}
            <div className="animate-fade-in min-h-[500px]">
                
                {/* 1. QUEM SOMOS */}
                {activeTab === 'quem-somos' && (
                    <div className="max-w-4xl mx-auto space-y-8">
                        <div className="glass-card rounded-3xl p-8 md:p-12 border border-mirai-primary/20 relative">
                             <div className="absolute top-0 right-0 w-64 h-64 bg-mirai-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                             <h2 className="text-3xl font-bold mb-6 text-white">O Cenário Atual (Honestidade)</h2>
                             <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                Existem excelentes designers e programadores no mercado, mas são arte pura e custam caro. 
                                Do outro lado, existe o "fazer sozinho", que toma seu tempo e nem sempre fica bom.
                             </p>
                             <div className="p-6 rounded-2xl bg-gradient-to-br from-mirai-primary/10 to-transparent border border-mirai-primary/20 mb-8">
                                <h3 className="text-xl font-bold text-mirai-primary mb-2 flex items-center gap-2">
                                    <Zap className="w-5 h-5" /> A Terceira Via
                                </h3>
                                <p className="text-gray-200">
                                    A Mirai nasce como uma alternativa ágil e econômica baseada em Inteligência Artificial para quem precisa de resultados rápidos sem perder a qualidade profissional.
                                </p>
                             </div>
                             
                             <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-mirai-dark/50 p-6 rounded-xl border border-white/5">
                                    <h4 className="font-bold text-white mb-2">Custo-Benefício Real</h4>
                                    <p className="text-sm text-gray-400">
                                        Assinar Sora, Midjourney, ChatGPT Plus e ferramentas de automação custa centenas de dólares mensais. Aqui você paga em reais, apenas pelo que usa.
                                    </p>
                                </div>
                                <div className="bg-mirai-dark/50 p-6 rounded-xl border border-white/5">
                                    <h4 className="font-bold text-white mb-2">Profissionalização da IA</h4>
                                    <p className="text-sm text-gray-400">
                                        "Brincar" com IA é fácil. Implementar com consistência de marca, sem alucinações e com qualidade comercial exige técnica e curadoria humana.
                                    </p>
                                </div>
                             </div>
                        </div>
                    </div>
                )}

                {/* 2. CONVERSAÇÃO INTELIGENTE */}
                {activeTab === 'conversacao' && (
                    <div className="max-w-4xl mx-auto">
                        {renderServiceCard(SERVICE_CHAT)}
                    </div>
                )}

                {/* 3. MARKETING DIGITAL (VISUAL + VIDEO + PACOTES) */}
                {activeTab === 'marketing' && (
                    <div className="space-y-12">
                        {/* Intro */}
                        <div className="text-center max-w-2xl mx-auto mb-8">
                            <h2 className="text-2xl font-bold text-white mb-2">Presença Digital Completa</h2>
                            <p className="text-gray-400">
                                Identidade visual, vídeos curtos e pacotes para redes sociais.
                            </p>
                        </div>

                        {/* Services Grid (Sites moved to separate tab) */}
                        <div className="grid md:grid-cols-2 gap-6">
                            {renderServiceCard(SERVICE_VISUAL)}
                            {renderServiceCard(SERVICE_VIDEO)}
                        </div>

                        {/* Divider */}
                        <div className="flex items-center gap-4 py-4">
                            <div className="h-px bg-white/10 flex-grow"></div>
                            <span className="text-mirai-primary font-bold uppercase tracking-widest text-sm bg-mirai-primary/5 px-4 py-1 rounded-full border border-mirai-primary/20">
                                Pacotes Mensais Recorrentes
                            </span>
                            <div className="h-px bg-white/10 flex-grow"></div>
                        </div>

                        {/* Packages Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {PACKAGES.map((pkg, idx) => (
                            <div 
                                key={idx} 
                                className={`rounded-2xl p-6 border flex flex-col relative ${
                                pkg.highlight 
                                    ? 'bg-mirai-card/80 border-mirai-primary shadow-[0_0_20px_rgba(6,182,212,0.15)] md:scale-105 z-10' 
                                    : 'bg-mirai-card/40 border-white/10 hover:border-white/20'
                                }`}
                            >
                                {pkg.highlight && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-mirai-primary text-mirai-dark text-xs font-bold px-3 py-1 rounded-full">
                                    Mais Popular
                                </div>
                                )}
                                <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
                                <div className="flex items-baseline mb-2">
                                <span className="text-2xl font-bold text-mirai-primary">{pkg.price}</span>
                                <span className="text-gray-500 text-sm ml-1">/mês</span>
                                </div>
                                <p className="text-xs text-gray-400 mb-6 h-8">{pkg.subtitle}</p>

                                <ul className="space-y-3 mb-8 flex-grow">
                                {pkg.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex items-start gap-2 text-sm text-gray-300">
                                    <CheckCircle2 className="w-4 h-4 text-mirai-primary flex-shrink-0 mt-0.5" />
                                    <span>{feature}</span>
                                    </li>
                                ))}
                                </ul>

                                <button className={`w-full py-2 rounded-lg font-bold text-sm transition-all ${
                                pkg.highlight 
                                    ? 'bg-mirai-primary text-mirai-dark hover:bg-mirai-glow' 
                                    : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                                }`}>
                                Escolher Plano
                                </button>
                            </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* 4. AUTOMAÇÕES */}
                {activeTab === 'automacao' && (
                    <div className="max-w-4xl mx-auto">
                        {renderServiceCard(SERVICE_AUTOMATION)}
                        <div className="mt-8 grid md:grid-cols-3 gap-4 text-center">
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                <p className="text-mirai-primary font-bold text-lg mb-1">Make / Zapier</p>
                                <p className="text-xs text-gray-500">Integrações robustas</p>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                <p className="text-mirai-primary font-bold text-lg mb-1">N8N</p>
                                <p className="text-xs text-gray-500">Fluxos complexos</p>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                <p className="text-mirai-primary font-bold text-lg mb-1">API OpenAI</p>
                                <p className="text-xs text-gray-500">Inteligência Real</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* 5. SISTEMAS E SITES */}
                {activeTab === 'sistemas-sites' && (
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center max-w-2xl mx-auto mb-8">
                            <h2 className="text-2xl font-bold text-white mb-2">Desenvolvimento Sob Medida</h2>
                            <p className="text-gray-400">
                                De landing pages rápidas a sistemas de gestão complexos.
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                            {renderServiceCard(SERVICE_SITES)}
                            {renderServiceCard(SERVICE_SYSTEMS)}
                        </div>
                        
                        <div className="mt-8 text-center bg-white/5 rounded-2xl p-6 border border-white/10">
                             <p className="text-sm text-gray-400 max-w-2xl mx-auto">
                                <Users className="w-5 h-5 mx-auto mb-2 text-mirai-primary" />
                                Desenvolvemos painéis administrativos, sistemas de gestão interna, Apps para clientes e integrações de banco de dados.
                                Para projetos específicos, agende uma reunião.
                             </p>
                        </div>
                    </div>
                )}

                {/* 6. MENTORIAS */}
                {activeTab === 'mentoria' && (
                    <div className="max-w-5xl mx-auto">
                        <div className="bg-mirai-card border border-mirai-primary/30 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-mirai-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                            
                            <div className="relative z-10">
                            <div className="text-center mb-10">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Mentoria Prática</h2>
                                <p className="text-xl text-mirai-primary font-medium">Não é curso gravado. É ao vivo.</p>
                                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                                Aprenda a "segurar o martelo" da IA. Ensinamos você e sua equipe a utilizarem as ferramentas que usamos na Mirai (ChatGPT, Midjourney, Claude, Make).
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6 mb-12">
                                {MENTORSHIP_SESSIONS.map((session, idx) => (
                                <div key={idx} className="bg-mirai-dark/50 p-6 rounded-xl border border-white/10 hover:border-mirai-primary/40 transition-colors">
                                    <session.icon className="w-8 h-8 text-mirai-primary mb-4" />
                                    <h4 className="text-lg font-bold text-white mb-2">{session.title}</h4>
                                    <p className="text-sm text-gray-400">{session.description}</p>
                                </div>
                                ))}
                            </div>

                            <div className="flex flex-col md:flex-row items-center justify-between bg-mirai-dark/80 p-6 rounded-2xl border border-mirai-primary/20">
                                <div>
                                <p className="text-sm text-gray-400 mb-1">Investimento Único</p>
                                <p className="text-4xl font-bold text-white">R$ 300,00</p>
                                <p className="text-xs text-gray-500 mt-1">3 Encontros de 50 min via Google Meet</p>
                                </div>
                                <button className="mt-4 md:mt-0 px-8 py-3 bg-mirai-primary text-mirai-dark font-bold rounded-full hover:bg-mirai-glow transition-all shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                                Agendar Mentoria
                                </button>
                            </div>
                            </div>
                        </div>
                    </div>
                )}

            </div>
          </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contato" className="bg-mirai-dark border-t border-white/10 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                 <div className="w-8 h-8 rounded bg-gradient-to-tr from-mirai-primary to-mirai-accent flex items-center justify-center">
                    <Zap className="text-white w-5 h-5" fill="white" />
                  </div>
                  <span className="font-bold text-2xl tracking-tight text-white">mir<span className="text-mirai-primary">AI</span></span>
              </div>
              <p className="text-gray-400 max-w-sm mb-6">
                Design, Vídeo e Tecnologia acessíveis baseadas em IA para o seu negócio.
              </p>
              
              <div className="space-y-3 mb-6">
                  <a href="mailto:miraiinteligente@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-mirai-primary transition-colors">
                      <Mail className="w-5 h-5 text-mirai-primary" />
                      <span>miraiinteligente@gmail.com</span>
                  </a>
                  <a href="https://instagram.com/miraiinteligente" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-mirai-primary transition-colors">
                      <Instagram className="w-5 h-5 text-mirai-primary" />
                      <span>@miraiinteligente</span>
                  </a>
                  <a href="https://facebook.com/miraiinteligente" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-mirai-primary transition-colors">
                      <Facebook className="w-5 h-5 text-mirai-primary" />
                      <span>/miraiinteligente</span>
                  </a>
                  <div className="flex items-center gap-3 text-gray-400">
                      <Phone className="w-5 h-5 text-mirai-primary" />
                      <span>(16) 99413-7703</span>
                  </div>
              </div>
            </div>
            
            <div className="flex flex-col justify-center items-start md:items-end">
              <h3 className="text-xl font-bold text-white mb-4">Fale Conosco</h3>
              <p className="text-gray-400 mb-6 text-left md:text-right">
                Precisa de uma solução personalizada ou tem dúvida sobre os planos?
              </p>
              <button 
                onClick={() => window.open('https://wa.me/5516994137703', '_blank')}
                className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-500 text-white rounded-full font-bold transition-all"
              >
                <MessageSquare className="w-5 h-5" />
                Chamar no WhatsApp
              </button>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} mirAI Serviços Inteligentes.
            </p>
            <p className="text-sm text-gray-600 flex items-center gap-1">
              Potencializado por <span className="text-mirai-primary">Inteligência Artificial</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;