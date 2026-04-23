export default function Page() {
  return (
    <div className="bg-black text-white">

      {/* HERO */}
      <section className="min-h-[60vh] flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <h1 className="text-5xl md:text-6xl font-extrabold max-w-4xl">
          FitScan: IA para análise de movimentos e performance física
        </h1>

        <p className="mt-6 text-gray-400 max-w-xl text-lg">
          Plataforma que utiliza visão computacional para corrigir exercícios em tempo real diretamente pelo celular.
        </p>

        <a
          href="https://wa.me/5561994420949"
          className="mt-8 bg-green-500 hover:bg-green-600 px-8 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
        >
          Quero desenvolver algo assim
        </a>
      </section>

      {/* IMAGEM DO SISTEMA */}
      <section className="max-w-5xl mx-auto px-6 mt-12">
        <h2 className="text-2xl font-bold text-center mb-6">
          Visual da plataforma
        </h2>

        <div className="bg-gray-900 p-4 rounded-2xl border border-gray-800 shadow-lg">
          <img
            src="/images/fitscan.png"
            alt="Aplicativo FitScan com IA"
            className="rounded-xl w-full hover:scale-105 transition duration-300"
          />
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold">🚨 O problema</h2>
        <p className="text-gray-400 mt-4 text-lg">
          A maioria dos aplicativos de treino não corrige a execução dos exercícios,
          o que pode gerar lesões e baixa eficiência nos resultados.
        </p>
      </section>

      {/* SOLUÇÃO */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold">💡 A solução</h2>
        <p className="text-gray-400 mt-4 text-lg">
          Uso de inteligência artificial e visão computacional para analisar movimentos,
          identificar erros e oferecer feedback em tempo real.
        </p>
      </section>

      {/* DIFERENCIAIS */}
      <section className="py-16 px-6 max-w-5xl mx-auto grid md:grid-cols-3 gap-8">

        <div className="bg-gray-900 p-6 rounded-xl">
          <h3 className="font-bold text-lg">🤖 IA em tempo real</h3>
          <p className="text-gray-400 mt-2">
            Análise de postura com precisão usando visão computacional.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          <h3 className="font-bold text-lg">📱 Mobile First</h3>
          <p className="text-gray-400 mt-2">
            Funciona direto no celular, sem necessidade de equipamentos.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          <h3 className="font-bold text-lg">🚀 Modelo SaaS</h3>
          <p className="text-gray-400 mt-2">
            Plataforma escalável com plano gratuito e premium.
          </p>
        </div>

      </section>

      {/* TECNOLOGIAS */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold">⚙️ Tecnologias</h2>

        <div className="flex flex-wrap gap-4 mt-6">
          <span className="bg-gray-800 px-4 py-2 rounded-lg">React Native</span>
          <span className="bg-gray-800 px-4 py-2 rounded-lg">.NET 9</span>
          <span className="bg-gray-800 px-4 py-2 rounded-lg">MediaPipe</span>
          <span className="bg-gray-800 px-4 py-2 rounded-lg">Azure</span>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <h2 className="text-3xl md:text-4xl font-bold">
          Quer tirar sua ideia do papel?
        </h2>

        <p className="text-gray-400 mt-4">
          Vamos construir uma solução inovadora juntos.
        </p>

        <a
          href="https://wa.me/5561994420949"
          className="mt-8 inline-block bg-green-500 px-10 py-4 rounded-xl text-lg font-semibold"
        >
          Falar comigo
        </a>
      </section>

    </div>
  );
}