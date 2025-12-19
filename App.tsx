import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  CheckCircle2, 
  Sparkles,
  Zap,
  Mail,
  Instagram,
  Facebook,
  MessageSquare,
  Users,
  Workflow,
  Cpu,
  Globe,
  Phone,
  Megaphone,
  ArrowRight,
  Eye,
  Layout,
  // Added missing Image import as ImageIcon
  Image as ImageIcon,
  Video as VideoIcon,
  Play
} from 'lucide-react';
import { 
  SERVICE_SITES, 
  SERVICE_AUTOMATION, 
  SERVICE_SYSTEMS, 
  PACKAGES, 
  PORTFOLIO_ITEMS
} from './constants';
import { ServiceCategory } from './types';

// Tab Identifiers
type TabType = 'quem-somos' | 'marketing' | 'automacao' | 'sistemas-sites' | 'portfolio';

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
                  onClick={() => handleTabClick('portfolio')}
                  className="text-white block px-3 py-2 rounded-md text-base w-full text-left"
                >
                  Ver Portfólio
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

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <button 
                onClick={() => handleTabClick('portfolio')}
                className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold px-8 py-4 rounded-full transition-all"
             >
                <Eye className="w-5 h-5" /> Ver Amostras de Trabalho
             </button>
             <button 
                onClick={() => scrollToSection('contato')}
                className="bg-mirai-primary hover:bg-mirai-glow text-mirai-dark font-bold px-8 py-4 rounded-full transition-all shadow-lg"
             >
                Solicitar Orçamento
             </button>
          </div>
        </div>
      </section>

      {/* MAIN TABBED INTERFACE */}
      <section id="main-content" className="pb-24 pt-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Tabs Navigation */}
            <div className="sticky top-20 z-40 bg-mirai-dark/90 backdrop-blur-md py-4 mb-8 -mx-4 px-4 md:mx-0 md:px-0 border-y border-white/5 md:border-none md:rounded-full md:bg-mirai-card/50">
                <div className="flex overflow-x-auto md:justify-center gap-2 md:gap-4 no-scrollbar pb-2 md:pb-0">
                    {[
                        { id: 'quem-somos', label: 'Quem Somos', icon: Users },
                        { id: 'marketing', label: 'Marketing Digital', icon: Megaphone },
                        { id: 'automacao', label: 'Automações', icon: Workflow },
                        { id: 'sistemas-sites', label: 'Sistemas e Sites', icon: Globe },
                        { id: 'portfolio', label: 'Portfólio', icon: Eye },
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
                        </div>
                    </div>
                )}

                {/* 2. MARKETING DIGITAL */}
                {activeTab === 'marketing' && (
                    <div className="space-y-12">
                        <div className="text-center max-w-2xl mx-auto mb-8">
                            <h2 className="text-3xl font-bold text-white mb-4">Planos de Gestão de Conteúdo</h2>
                            <p className="text-gray-400 text-lg">
                                Escolha o volume ideal para manter sua marca ativa e profissional.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {PACKAGES.map((pkg, idx) => (
                            <div key={idx} className={`rounded-2xl p-6 border flex flex-col relative transition-all duration-300 ${pkg.highlight ? 'bg-mirai-card/80 border-mirai-primary shadow-lg md:scale-105 z-10' : 'bg-mirai-card/40 border-white/10'}`}>
                                {pkg.highlight && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-mirai-primary text-mirai-dark text-xs font-bold px-3 py-1 rounded-full uppercase">Mais Popular</div>}
                                <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
                                <div className="flex items-baseline mb-2"><span className="text-3xl font-bold text-mirai-primary">{pkg.price}</span><span className="text-gray-500 text-sm ml-1">/mês</span></div>
                                <p className="text-xs text-gray-400 mb-6 font-medium h-8">{pkg.subtitle}</p>
                                <ul className="space-y-3 mb-8 flex-grow">
                                {pkg.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex items-start gap-2 text-sm text-gray-300">
                                    <CheckCircle2 className="w-4 h-4 text-mirai-primary flex-shrink-0 mt-0.5" />
                                    <span>{feature}</span>
                                    </li>
                                ))}
                                </ul>
                                <button onClick={() => window.open('https://wa.me/5516994137703', '_blank')} className={`w-full py-3 rounded-xl font-bold text-sm transition-all ${pkg.highlight ? 'bg-mirai-primary text-mirai-dark hover:bg-mirai-glow' : 'bg-white/5 text-white border border-white/10'}`}>Escolher Plano</button>
                            </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* 3. AUTOMAÇÕES */}
                {activeTab === 'automacao' && (
                    <div className="max-w-5xl mx-auto space-y-12">
                        {renderServiceCard(SERVICE_AUTOMATION)}
                        
                        {/* Exemplo Real Contextual */}
                        <div className="bg-mirai-primary/5 rounded-3xl p-8 border border-mirai-primary/20">
                            <h4 className="text-mirai-primary font-bold mb-4 flex items-center gap-2">
                                <Sparkles className="w-5 h-5" /> Exemplo de Fluxo (Case Real)
                            </h4>
                            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                                <div className="flex-1 text-center p-4 bg-white/5 rounded-xl border border-white/10">
                                    <Instagram className="w-8 h-8 mx-auto mb-2 text-pink-500" />
                                    <p className="text-xs font-bold">Comentário no Post</p>
                                </div>
                                <ArrowRight className="hidden md:block text-mirai-primary animate-pulse" />
                                <div className="flex-1 text-center p-4 bg-white/5 rounded-xl border border-white/10">
                                    <Workflow className="w-8 h-8 mx-auto mb-2 text-mirai-primary" />
                                    <p className="text-xs font-bold">IA Qualifica Lead</p>
                                </div>
                                <ArrowRight className="hidden md:block text-mirai-primary animate-pulse" />
                                <div className="flex-1 text-center p-4 bg-white/5 rounded-xl border border-white/10">
                                    <MessageSquare className="w-8 h-8 mx-auto mb-2 text-green-500" />
                                    <p className="text-xs font-bold">WhatsApp p/ Vendedor</p>
                                </div>
                            </div>
                            <p className="text-center text-sm text-gray-500 mt-6">
                                Este fluxo economiza em média 12 horas mensais de triagem manual.
                            </p>
                        </div>
                    </div>
                )}

                {/* 4. SISTEMAS E SITES */}
                {activeTab === 'sistemas-sites' && (
                    <div className="max-w-5xl mx-auto space-y-12">
                        <div className="grid md:grid-cols-2 gap-6">
                            {renderServiceCard(SERVICE_SITES)}
                            {renderServiceCard(SERVICE_SYSTEMS)}
                        </div>

                        {/* Exemplo Visual Contextual */}
                        <div className="bg-white/5 rounded-3xl p-8 border border-white/10 overflow-hidden relative group">
                             <div className="absolute top-0 right-0 w-32 h-32 bg-mirai-glow/20 rounded-full blur-3xl group-hover:bg-mirai-glow/40 transition-all" />
                             <div className="flex flex-col md:flex-row gap-8 items-center">
                                 <div className="flex-1">
                                    <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                        <Layout className="w-6 h-6 text-mirai-primary" /> Padrão mirAI de Interface
                                    </h4>
                                    <p className="text-gray-400 text-sm mb-4">
                                        Nossos sistemas seguem um padrão moderno de alta performance (SPA), com foco em experiência do usuário e tempo de carregamento instantâneo.
                                    </p>
                                    <ul className="space-y-2">
                                        <li className="flex items-center gap-2 text-xs text-gray-300"><CheckCircle2 className="w-3 h-3 text-mirai-primary" /> Design Responsivo (Mobile First)</li>
                                        <li className="flex items-center gap-2 text-xs text-gray-300"><CheckCircle2 className="w-3 h-3 text-mirai-primary" /> Painéis de Controle Intuitivos</li>
                                        <li className="flex items-center gap-2 text-xs text-gray-300"><CheckCircle2 className="w-3 h-3 text-mirai-primary" /> Segurança com Certificado SSL</li>
                                    </ul>
                                 </div>
                                 <div className="flex-1 w-full">
                                     <div className="w-full aspect-video bg-mirai-dark rounded-xl border border-white/10 shadow-2xl relative p-2">
                                         <div className="w-full h-full bg-mirai-card rounded-lg overflow-hidden flex flex-col">
                                             <div className="h-4 bg-white/10 flex items-center px-2 gap-1"><div className="w-1 h-1 rounded-full bg-red-500"></div><div className="w-1 h-1 rounded-full bg-yellow-500"></div><div className="w-1 h-1 rounded-full bg-green-500"></div></div>
                                             <div className="p-4 flex gap-4">
                                                 <div className="w-12 h-12 bg-mirai-primary/20 rounded-lg"></div>
                                                 <div className="flex-1 space-y-2">
                                                     <div className="h-2 w-1/2 bg-white/20 rounded"></div>
                                                     <div className="h-2 w-3/4 bg-white/10 rounded"></div>
                                                 </div>
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                        </div>
                    </div>
                )}

                {/* 5. PORTFÓLIO */}
                {activeTab === 'portfolio' && (
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-white mb-4">Amostras do Trabalho</h2>
                            <p className="text-gray-400 max-w-2xl mx-auto">
                                Confira nossa galeria de resultados: imagens impactantes, vídeos cinematográficos, automações inteligentes e sistemas robustos.
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {PORTFOLIO_ITEMS.map((item, idx) => (
                                <div key={idx} className="glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-mirai-primary/40 transition-all group flex flex-col">
                                    <div className="aspect-[4/3] relative overflow-hidden bg-mirai-card">
                                        {item.category === 'image' ? (
                                            <img 
                                              src={item.mediaUrl} 
                                              alt={item.title} 
                                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                                            />
                                        ) : (
                                            <div className="w-full h-full relative">
                                                {/* In a real scenario, mediaUrl would be a video file. If it is '#', we show the thumbnail with a play icon. */}
                                                {item.mediaUrl === '#' ? (
                                                  <div className="w-full h-full relative">
                                                     <img src={item.thumbnailUrl} alt={item.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
                                                     <div className="absolute inset-0 flex items-center justify-center">
                                                         <div className="w-16 h-16 rounded-full bg-mirai-primary/80 flex items-center justify-center backdrop-blur-sm shadow-xl transform group-hover:scale-110 transition-transform">
                                                             <Play className="text-mirai-dark w-8 h-8 fill-mirai-dark ml-1" />
                                                         </div>
                                                     </div>
                                                  </div>
                                                ) : (
                                                  <video 
                                                    src={item.mediaUrl} 
                                                    className="w-full h-full object-cover" 
                                                    muted 
                                                    playsInline
                                                    onMouseOver={e => (e.target as HTMLVideoElement).play()}
                                                    onMouseOut={e => {
                                                        const v = e.target as HTMLVideoElement;
                                                        v.pause();
                                                        v.currentTime = 0;
                                                    }}
                                                  />
                                                )}
                                            </div>
                                        )}
                                        <div className="absolute top-3 right-3 bg-mirai-dark/80 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold text-mirai-primary border border-mirai-primary/20 uppercase tracking-wider">
                                            {item.tag}
                                        </div>
                                    </div>
                                    
                                    <div className="p-6 flex-grow border-t border-white/5 bg-mirai-card/30">
                                        <div className="flex items-center gap-2 mb-2">
                                            {item.category === 'automation' && <Workflow className="w-4 h-4 text-mirai-primary" />}
                                            {item.category === 'system' && <Cpu className="w-4 h-4 text-mirai-primary" />}
                                            {item.category === 'video' && <VideoIcon className="w-4 h-4 text-mirai-primary" />}
                                            {item.category === 'image' && <ImageIcon className="w-4 h-4 text-mirai-primary" />}
                                            <h4 className="text-white font-bold group-hover:text-mirai-primary transition-colors">{item.title}</h4>
                                        </div>
                                        <p className="text-xs text-gray-400 leading-relaxed">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <div className="mt-16 text-center">
                            <div className="p-8 rounded-3xl border border-dashed border-white/10 bg-white/5">
                                <h3 className="text-xl font-bold text-white mb-2">Quer ver mais?</h3>
                                <p className="text-gray-500 text-sm mb-6">
                                    Cada negócio é único. Agende uma demonstração ao vivo para vermos como a IA pode transformar seus processos específicos.
                                </p>
                                <button 
                                    onClick={() => scrollToSection('contato')}
                                    className="inline-flex items-center gap-2 bg-mirai-primary text-mirai-dark font-bold px-10 py-4 rounded-full hover:bg-mirai-glow transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                                >
                                    Solicitar Demonstração <ArrowRight className="w-5 h-5" />
                                </button>
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
                className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-500 text-white rounded-full font-bold transition-all shadow-lg hover:shadow-green-500/20"
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