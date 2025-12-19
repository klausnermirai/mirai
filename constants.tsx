import { 
  Image as ImageIcon, 
  Video, 
  Workflow, 
  Globe, 
  Cpu
} from 'lucide-react';
import { ServiceCategory, SubscriptionPackage, PortfolioItem } from './types';

export const SERVICE_SITES: ServiceCategory = {
  id: 'sites',
  title: 'Sites & Landing Pages',
  subtitle: 'Sua vitrine digital',
  icon: Globe,
  description: 'Páginas leves e otimizadas focadas em converter visitantes.',
  items: [
    {
      service: 'Taxa de Criação (Setup)',
      description: 'Design, organização de conteúdo e publicação.',
      price: 'R$ 100,00',
      additional: 'Único'
    },
    {
      service: 'Infraestrutura',
      description: 'Hospedagem + Domínio (Isento se cliente já tiver).',
      price: 'R$ 40,00 / mês',
      additional: ''
    },
    {
      service: 'Manutenção Mensal',
      description: 'Monitoramento, renovação de certificados e backups.',
      price: 'R$ 20,00 / mês',
      additional: ''
    }
  ],
  extraInfo: 'Pacote Starter: R$ 60,00 mensais (Hospedagem + Manutenção) se não tiver nada.'
};

export const SERVICE_AUTOMATION: ServiceCategory = {
  id: 'automation',
  title: 'Automação & Processos',
  subtitle: 'Conecte seus aplicativos',
  icon: Workflow,
  description: 'Faça com que uma ação em um lugar dispare uma reação em outro (Make/Zapier).',
  items: [
    {
      service: 'Taxa de Criação (Setup)',
      description: 'Estudo do fluxo, desenho da lógica e implementação.',
      price: 'R$ 75,00',
      additional: 'Pagamento Único'
    },
    {
      service: 'Mensalidade (Manutenção)',
      description: 'Manter o robô ativo e disponível 24h.',
      price: 'R$ 20,00 / mês',
      additional: 'Fixo'
    },
    {
      service: 'Custo por Processamento',
      description: 'Custo a cada 1.000 Operações realizadas pelo robô.',
      price: 'R$ 6,00',
      additional: 'Por 1.000 ops'
    }
  ]
};

export const SERVICE_SYSTEMS: ServiceCategory = {
  id: 'web',
  title: 'Sistemas Web & Apps',
  subtitle: 'Soluções sob medida',
  icon: Cpu,
  description: 'Nós construímos a ferramenta exata que seu negócio precisa.',
  items: [
    {
      service: 'Desenvolvimento (Setup)',
      description: 'Construção da estrutura, design e lógica inicial.',
      price: 'R$ 20,00 - R$ 300,00',
      additional: 'Dependendo do escopo'
    },
    {
      service: 'Mensalidade',
      description: 'Hospedagem, segurança e manutenção do sistema.',
      price: 'R$ 15,00 - R$ 250,00',
      additional: 'Por mês'
    },
    {
      service: 'Evolução e Ajustes',
      description: 'Custo de alteração pontual (botões, campos novos).',
      price: 'R$ 15,00',
      additional: 'Por Movimento'
    }
  ]
};

export const PACKAGES: SubscriptionPackage[] = [
  {
    name: 'MIRAI START',
    price: 'R$ 50',
    subtitle: 'Manutenção básica',
    features: [
      'Criação de Linha Editorial',
      '3 Imagens Trabalhadas',
      'Ideal para: Feed organizado'
    ],
    idealFor: 'Manutenção básica'
  },
  {
    name: 'MIRAI MOTION',
    price: 'R$ 80',
    subtitle: 'Entrada no mundo dos vídeos',
    features: [
      'Criação de Linha Editorial',
      '3 Imagens Trabalhadas',
      '1 Vídeo Short AI (8s)',
      'Ideal para: Quem quer começar Reels'
    ],
    idealFor: 'Vídeos Iniciais',
    highlight: true
  },
  {
    name: 'MIRAI PRO',
    price: 'R$ 120',
    subtitle: 'Volume de postagem',
    features: [
      'Criação de Linha Editorial',
      '5 Imagens Trabalhadas',
      '1 Vídeo Short AI (8s)',
      'Ideal para: Comércios ativos'
    ],
    idealFor: 'Volume'
  },
  {
    name: 'MIRAI ELITE',
    price: 'R$ 200',
    subtitle: 'Autoridade total',
    features: [
      'Criação de Linha Editorial',
      '5 Imagens Trabalhadas',
      '3 Vídeos Short AI (8s)',
      'Ideal para: Crescimento acelerado'
    ],
    idealFor: 'Crescimento'
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    category: 'image',
    title: 'Mascote 3D para Tech',
    description: 'Personagem consistente gerado para marca de software.',
    tag: 'Design AI',
    imageUrl: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000&auto=format&fit=crop'
  },
  {
    category: 'image',
    title: 'Linha Gourmet',
    description: 'Fotografia de produto hiper-realista para menu digital.',
    tag: 'Marketing',
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000&auto=format&fit=crop'
  },
  {
    category: 'video',
    title: 'Teaser Futurista',
    description: 'Vídeo short de 8s com transições fluídas via Gen-2.',
    tag: 'Motion',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop'
  },
  {
    category: 'tech',
    title: 'Automação de Leads',
    description: 'Integração Instagram -> Planilha -> WhatsApp automático.',
    tag: 'Automação'
  },
  {
    category: 'tech',
    title: 'Dashboard de Vendas',
    description: 'Sistema web personalizado para controle de estoque e pedidos.',
    tag: 'Sistemas'
  },
  {
    category: 'image',
    title: 'Retrato Corporativo',
    description: 'Avatares profissionais para equipe sem custo de estúdio.',
    tag: 'Identidade'
  }
];