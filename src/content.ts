export interface SiteContent {
  header: {
    enabled: boolean;
    marca: string;
    nav: Array<{ label: string; href: string }>;
    primaryAction: { label: string; href: string };
  };
  hero: {
    enabled: boolean;
    kicker: string;
    title: {
      before: string;
      highlight: string;
      after: string;
    };
    description: string;
    primaryAction: { label: string; href: string };
    secondaryAction: { label: string; href: string };
    image: { src: string; alt: string };
    etiquetas: string[];
  };
  paraquem: {
    enabled: boolean;
    title: {
      before: string;
      highlight: string;
      after: string;
    };
    subtitle: string;
    paraQuem: Array<{ title: string; description: string }>;
    paraQuemNao: Array<{ title: string; description: string }>;
    image: { src: string; alt: string };
  };
  aprender: {
    enabled: boolean;
    title: {
      before: string;
      highlight: string;
      after: string;
    };
    description: string;
    itens: Array<{ id: string; texto: string; grifo: string }>;
  };
  trilha: {
    enabled: boolean;
    title: {
      before: string;
      highlight: string;
      after: string;
    };
    description: string;
    modulos: Array<{
      numero: number;
      titulo: string;
      resumo: string;
      duracao: string;
      aulas: string[];
    }>;
  };
  formato: {
    enabled: boolean;
    title: {
      before: string;
      highlight: string;
      after: string;
    };
    description: string;
    blocos: Array<{
      id: string;
      titulo: string;
      marcador: string;
      descricao: string;
    }>;
    image: { src: string; alt: string };
  };
  planos: {
    enabled: boolean;
    title: {
      before: string;
      highlight: string;
      after: string;
    };
    description: string;
    opcoesPeriodo: {
      mensal: string;
      anual: string;
    };
    planos: Array<{
      id: string;
      nome: string;
      precoMensal: string;
      precoAnual: string;
      periodoMensal: string;
      periodoAnual: string;
      descricao: string;
      destaque: boolean;
      beneficios: string[];
      action: { label: string; href: string };
    }>;
  };
  faq: {
    enabled: boolean;
    title: {
      before: string;
      highlight: string;
      after: string;
    };
    description: string;
    perguntas: Array<{
      id: string;
      pergunta: string;
      resposta: string;
    }>;
  };
  ctafinal: {
    enabled: boolean;
    title: {
      before: string;
      highlight: string;
      after: string;
    };
    description: string;
    primaryAction: { label: string; href: string };
    secondaryAction: { label: string; href: string };
  };
  rodape: {
    enabled: boolean;
    marca: string;
    descricao: string;
    links: Array<{ label: string; href: string }>;
    cnpj: string;
    contato: string;
    endereco: string;
    horario: string;
    reduzirAnimacoesLabel: string;
    animacoesReduzidasLabel: string;
  };
  depoimentos: {
    enabled: boolean;
    items: unknown[];
  };
}

export const siteContent: SiteContent = {
  header: {
    enabled: true,
    marca: "Escola Vão",
    nav: [
      { label: "Trilha", href: "#trilha" },
      { label: "Para quem é", href: "#paraquem" },
      { label: "Planos", href: "#planos" },
      { label: "Perguntas", href: "#faq" }
    ],
    primaryAction: {
      label: "Quero começar",
      href: "[link de inscrição]"
    }
  },
  hero: {
    enabled: true,
    kicker: "Curso online em percurso estruturado",
    title: {
      before: "Aprenda [tema do curso] no seu ritmo e sem",
      highlight: "pressa",
      after: "."
    },
    description: "Uma trilha prática pensada para adultos que querem absorver conteúdo de verdade, passo a passo, organizando os estudos no tempo que couber na semana.",
    primaryAction: {
      label: "Quero começar",
      href: "[link de inscrição]"
    },
    secondaryAction: {
      label: "Ver a trilha",
      href: "#trilha"
    },
    image: {
      src: "/src/assets/images/mesa-estudo-topo.jpg",
      alt: "Mesa de estudos vista de cima com caderno quadriculado aberto, marca-texto e caneca sob luz natural"
    },
    etiquetas: ["[formato]", "[carga horária]", "[nível]"]
  },
  paraquem: {
    enabled: true,
    title: {
      before: "Este curso foi planejado para",
      highlight: "você",
      after: "?"
    },
    subtitle: "Alinhamento honesto antes de qualquer inscrição, para respeitar o seu tempo e suas metas.",
    paraQuem: [
      {
        title: "Quem tem rotina cheia",
        description: "Você precisa de blocos de estudo objetivos que se adaptam aos seus horários livres, sem obrigações diárias rígidas."
      },
      {
        title: "Quem prefere aprender praticando",
        description: "Você assimila melhor quando coloca a mão na massa imediatamente após cada explicação teórica."
      },
      {
        title: "Quem busca base sólida",
        description: "Você quer entender os fundamentos de [tema do curso] com profundidade antes de avançar para casos complexos."
      }
    ],
    paraQuemNao: [
      {
        title: "Quem procura atalhos rápidos",
        description: "Não oferecemos truques milagrosos nem promessas de assimilação instantânea sem dedicação pessoal."
      },
      {
        title: "Quem precisa de tutoria presencial diária",
        description: "O modelo é digital autônomo com acompanhamento pontual nos canais de apoio do curso."
      },
      {
        title: "Quem busca apenas um carimbo rápido",
        description: "A prioridade pedagógica aqui é a fixação real do conhecimento, não a coleta apressada de certificados."
      }
    ],
    image: {
      src: "/src/assets/images/caderno-anotacoes.jpg",
      alt: "Mãos fazendo anotações cuidadosas em caderno quadriculado com caneta e notas adesivas"
    }
  },
  aprender: {
    enabled: true,
    title: {
      before: "O que você vai",
      highlight: "aprender",
      after: "ao longo do percurso"
    },
    description: "Cada competência foi organizada em exercícios claros para garantir autonomia real ao final do curso.",
    itens: [
      {
        id: "aprender-1",
        texto: "Dominar os conceitos e a terminologia fundamental de [tema do curso]",
        grifo: "conceitos essenciais"
      },
      {
        id: "aprender-2",
        texto: "Montar seu próprio ambiente e rotina de estudos sem depender de ferramentas caras",
        grifo: "ambiente prático"
      },
      {
        id: "aprender-3",
        texto: "Analisar exemplos reais e identificar padrões aplicáveis ao seu dia a dia",
        grifo: "padrões reais"
      },
      {
        id: "aprender-4",
        texto: "Executar tarefas práticas passo a passo com roteiros detalhados de verificação",
        grifo: "roteiros guiados"
      },
      {
        id: "aprender-5",
        texto: "Diagnosticar erros comuns e aplicar correções de forma independente",
        grifo: "solução de problemas"
      },
      {
        id: "aprender-6",
        texto: "Construir projetos próprios do início ao fim usando os módulos anteriores",
        grifo: "projetos aplicados"
      },
      {
        id: "aprender-7",
        texto: "Organizar um caderno de consulta rápida para manter o aprendizado sempre vivo",
        grifo: "guia de consulta"
      }
    ]
  },
  trilha: {
    enabled: true,
    title: {
      before: "A trilha completa de",
      highlight: "módulos",
      after: "passo a passo"
    },
    description: "Cinco marcos ordenados para você trilhar com calma. Clique em cada marco para inspecionar os tópicos e aulas.",
    modulos: [
      {
        numero: 1,
        titulo: "Fundamentos e Ponto de Partida",
        resumo: "Compreenda o panorama geral da disciplina e organize seus primeiros cadernos de estudo prático.",
        duracao: "[duração]",
        aulas: [
          "Visão geral de [tema do curso] e primeiros conceitos",
          "Configuração das ferramentas e materiais de apoio",
          "Exercício introdutório e checagem de alinhamento"
        ]
      },
      {
        numero: 2,
        titulo: "Estruturas e Primeiras Práticas",
        resumo: "Conecte a teoria inicial aos primeiros exercícios guiados com apoio passo a passo.",
        duracao: "[duração]",
        aulas: [
          "Mapeamento de estruturas essenciais na prática",
          "Roteiro guiado de execução e exercícios de fixação",
          "Análise comparativa de erros frequentes e ajustes"
        ]
      },
      {
        numero: 3,
        titulo: "Aprofundamento e Repertório",
        resumo: "Amplie a variedade de situações enfrentadas e ganhe flexibilidade para aplicar em contextos diversos.",
        duracao: "[duração]",
        aulas: [
          "Técnicas intermediárias para cenários variados",
          "Estudo de caso guiado com resolução passo a passo",
          "Construção de mini-projeto com critérios de revisão"
        ]
      },
      {
        numero: 4,
        titulo: "Autonomia e Resolução de Problemas",
        resumo: "Aprenda a depurar desafios por conta própria e documentar soluções de maneira consistente.",
        duracao: "[duração]",
        aulas: [
          "Metodologia para diagnóstico e solução de dúvidas",
          "Refinamento de projeto e boas práticas de organização",
          "Checklist de revisão e teste de independência"
        ]
      },
      {
        numero: 5,
        titulo: "Síntese, Projeto Final e Continuidade",
        resumo: "Consolide todo o caminho percorrido em uma entrega prática e planeje seus próximos passos.",
        duracao: "[duração]",
        aulas: [
          "Integração de todos os tópicos no projeto de síntese",
          "Avaliação formativa baseada na rubrica do curso",
          "Estratégia pessoal para estudos contínuos pós-curso"
        ]
      }
    ]
  },
  formato: {
    enabled: true,
    title: {
      before: "Como o curso funciona na",
      highlight: "prática",
      after: ""
    },
    description: "Uma dinâmica pensada para respeitar o tempo do adulto: você define os dias e horários para estudar.",
    blocos: [
      {
        id: "formato-aulas",
        titulo: "Aulas organizadas",
        marcador: "[ao vivo / gravadas]",
        descricao: "Aulas em capítulos enxutos para você pausar, anotar no caderno e retomar exatamente de onde parou sem se perder."
      },
      {
        id: "formato-comunidade",
        titulo: "Espaço de troca",
        marcador: "[canal]",
        descricao: "Canal dedicado para enviar dúvidas aos colegas, trocar anotações e acompanhar os comunicados da turma."
      },
      {
        id: "formato-material",
        titulo: "Material de apoio",
        marcador: "[formato]",
        descricao: "Apostilas sintetizadas, modelos de fichamento e listas de checagem para consulta rápida durante os exercícios."
      }
    ],
    image: {
      src: "/src/assets/images/ambiente-estudo-pratico.jpg",
      alt: "Ambiente tranquilo de estudos com materiais organizados sobre mesa ensolarada"
    }
  },
  planos: {
    enabled: true,
    title: {
      before: "Escolha o plano que cabe no seu",
      highlight: "momento",
      after: ""
    },
    description: "Valores claros, sem letrinhas miúdas ou renovações ocultas. Selecione entre o ciclo mensal ou o ciclo anual.",
    opcoesPeriodo: {
      mensal: "Mensal",
      anual: "Anual (com desconto)"
    },
    planos: [
      {
        id: "plano-essencial",
        nome: "Plano Essencial",
        precoMensal: "[R$ —]",
        precoAnual: "[R$ —]",
        periodoMensal: "por mês",
        periodoAnual: "por ano",
        descricao: "Para quem quer estudar no próprio ritmo com acesso à trilha completa e aos materiais.",
        destaque: false,
        beneficios: [
          "Acesso integral aos 5 módulos da trilha",
          "Materiais complementares para download",
          "Roteiros e exercícios práticos em PDF",
          "Acesso ao [canal] de avisos gerais"
        ],
        action: {
          label: "Escolher Essencial",
          href: "[link de inscrição]"
        }
      },
      {
        id: "plano-completo",
        nome: "Plano Completo",
        precoMensal: "[R$ —]",
        precoAnual: "[R$ —]",
        periodoMensal: "por mês",
        periodoAnual: "por ano",
        descricao: "Nossa modalidade mais procurada, somando a trilha, comunidade ativa e sessões extras.",
        destaque: true,
        beneficios: [
          "Todos os itens do Plano Essencial",
          "Participação no [canal] de interação da turma",
          "Encontros de dúvidas em formato [ao vivo / gravadas]",
          "Emissão de certificado ao final [se houver]"
        ],
        action: {
          label: "Escolher Completo",
          href: "[link de inscrição]"
        }
      },
      {
        id: "plano-orientado",
        nome: "Plano Orientado",
        precoMensal: "[R$ —]",
        precoAnual: "[R$ —]",
        periodoMensal: "por mês",
        periodoAnual: "por ano",
        descricao: "Para quem quer devolutivas individuais sobre cada exercício e sobre o projeto final.",
        destaque: false,
        beneficios: [
          "Todos os itens do Plano Completo",
          "Feedback assíncrono individual nos projetos",
          "Rubrica comentada em cada módulo concluído",
          "Canal prioritário para envio de dúvidas"
        ],
        action: {
          label: "Escolher Orientado",
          href: "[link de inscrição]"
        }
      }
    ]
  },
  faq: {
    enabled: true,
    title: {
      before: "Perguntas que costumam",
      highlight: "surgir",
      after: ""
    },
    description: "Respostas transparentes sobre metodologia, ritmo recomendado e suporte durante as aulas.",
    perguntas: [
      {
        id: "faq-requisitos",
        pergunta: "Quais são os pré-requisitos para acompanhar o curso?",
        resposta: "Não é exigida formação prévia na área. Você precisará apenas de computador ou tablet com acesso à internet e de um caderno para fazer suas anotações."
      },
      {
        id: "faq-tempo",
        pergunta: "Quanto tempo por semana preciso dedicar aos estudos?",
        resposta: "Recomendamos entre 2 e 4 horas semanais para assistir às aulas e cumprir as práticas com tranquilidade. Você pode distribuir esse tempo conforme a sua disponibilidade."
      },
      {
        id: "faq-certificado",
        pergunta: "O curso oferece certificado de conclusão?",
        resposta: "A emissão do certificado é disponibilizada [se houver], condicionada à entrega e aprovação do projeto prático de síntese do Módulo 5."
      },
      {
        id: "faq-acesso",
        pergunta: "Por quanto tempo tenho acesso ao conteúdo das aulas?",
        resposta: "O período de acesso varia conforme o plano contratado (ciclo mensal ou anual) e permanece ativo enquanto a assinatura estiver vigente."
      },
      {
        id: "faq-reembolso",
        pergunta: "Como funciona a política de cancelamento ou reembolso?",
        resposta: "Seguimos a legislação vigente com período de desistência sem burocracia, conforme detalhado na nossa [política] de termos de serviço."
      },
      {
        id: "faq-suporte",
        pergunta: "Como recebo ajuda se tiver dúvidas durante os exercícios?",
        resposta: "As dúvidas são respondidas no [canal] da comunidade de alunos e pelos canais oficiais de suporte [contato]."
      }
    ]
  },
  ctafinal: {
    enabled: true,
    title: {
      before: "Pronto para começar a aprender sem",
      highlight: "pressa",
      after: "?"
    },
    description: "Entre na Escola Vão e avance na trilha de [tema do curso] com método claro, apoio e no seu próprio compasso.",
    primaryAction: {
      label: "Quero começar agora",
      href: "[link de inscrição]"
    },
    secondaryAction: {
      label: "Tirar dúvidas por mensagem",
      href: "[link do WhatsApp]"
    }
  },
  rodape: {
    enabled: true,
    marca: "Escola Vão",
    descricao: "Educação prática para adultos sem fórmulas mágicas e sem atropelo.",
    links: [
      { label: "Trilha", href: "#trilha" },
      { label: "Para quem é", href: "#paraquem" },
      { label: "Planos", href: "#planos" },
      { label: "Perguntas frequentes", href: "#faq" }
    ],
    cnpj: "[CNPJ]",
    contato: "[contato]",
    endereco: "[endereço]",
    horario: "[horário de funcionamento]",
    reduzirAnimacoesLabel: "Reduzir animações",
    animacoesReduzidasLabel: "Ativar animações"
  },
  depoimentos: {
    enabled: false,
    items: []
  }
};
