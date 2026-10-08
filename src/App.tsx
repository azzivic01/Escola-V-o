import { siteContent } from './content.ts';
import { MotionProvider } from './components/ui/MotionContext.tsx';
import { ProgressoLeitura } from './components/ui/ProgressoLeitura.tsx';
import { Header } from './sections/Header.tsx';
import { Hero } from './sections/Hero.tsx';
import { ParaQuem } from './sections/ParaQuem.tsx';
import { Aprender } from './sections/Aprender.tsx';
import { Trilha } from './sections/Trilha.tsx';
import { Formato } from './sections/Formato.tsx';
import { PlanosSection } from './sections/PlanosSection.tsx';
import { Faq } from './sections/Faq.tsx';
import { CtaFinal } from './sections/CtaFinal.tsx';
import { Rodape } from './sections/Rodape.tsx';

export default function App() {
  return (
    <MotionProvider>
      <div className="min-h-screen flex flex-col selection:bg-[var(--tema-color-deco-1)] selection:text-[var(--tema-color-text)]">
        {/* Fixed thin reading progress bar */}
        <ProgressoLeitura />

        {/* 1. Header with Top Bar Contract */}
        <Header content={siteContent.header} />

        {/* Main Content Landmark */}
        <main id="conteudo-principal" className="flex-1 w-full">
          {/* 2. Hero Section */}
          <Hero content={siteContent.hero} />

          {/* 3. Para Quem É / Não É */}
          <ParaQuem content={siteContent.paraquem} />

          {/* 4. O Que Você Vai Aprender */}
          <Aprender content={siteContent.aprender} />

          {/* 5. Trilha de Módulos (Assinatura) */}
          <Trilha content={siteContent.trilha} />

          {/* 6. Formato do Curso */}
          <Formato content={siteContent.formato} />

          {/* 7. Planos e Investimento */}
          <PlanosSection content={siteContent.planos} />

          {/* 8. Perguntas Frequentes (FAQ) */}
          <Faq content={siteContent.faq} />

          {/* 9. Chamada Final (CTA) */}
          <CtaFinal content={siteContent.ctafinal} />
        </main>

        {/* 10. Rodapé */}
        <Rodape content={siteContent.rodape} />
      </div>
    </MotionProvider>
  );
}
