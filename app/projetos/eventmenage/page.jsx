export default function Page() {
  return (
    <div className="bg-black text-white">

      {/* HERO */}
      <section className="min-h-[60vh] flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <h1 className="text-5xl md:text-6xl font-extrabold max-w-4xl">
          Plataforma completa para gestão de eventos e ingressos
        </h1>

        <p className="mt-6 text-gray-400 max-w-xl text-lg">
          Controle total de eventos, vendas e validações com uma arquitetura escalável e pronta para grandes volumes.
        </p>

        <a
          href="https://wa.me/5561994420949"
          className="mt-8 bg-green-500 hover:bg-green-600 px-8 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
        >
          Quero um sistema assim
        </a>
      </section>

      {/* IMAGEM DO SISTEMA */}
      <section className="max-w-5xl mx-auto px-6 mt-12">
        <h2 className="text-2xl font-bold text-center mb-6">
          Visual do sistema
        </h2>

        <div className="bg-gray-900 p-4 rounded-2xl border border-gray-800 shadow-lg">
          <img
            src="/images/eventmenage.png"
            alt="Sistema de gestão de eventos"
            className="rounded-xl w-full hover:scale-105 transition"
          />
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold">🚨 O problema</h2>
        <p className="text-gray-400 mt-4 text-lg">
          Organizadores de eventos enfrentam dificuldades com controle de ingressos, validação de acesso e gestão de pagamentos,
          muitas vezes utilizando ferramentas limitadas ou desconectadas.
        </p>
      </section>

      {/* SOLUÇÃO */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold">💡 A solução</h2>
        <p className="text-gray-400 mt-4 text-lg">
          Um sistema completo que gerencia todo o ciclo do evento: criação de ingressos, vendas, validação em tempo real
          e integração com múltiplos gateways de pagamento.
        </p>
      </section>

      {/* DIFERENCIAIS */}
      <section className="py-16 px-6 max-w-5xl mx-auto grid md:grid-cols-3 gap-8">

        <div className="bg-gray-900 p-6 rounded-xl">
          <h3 className="font-bold text-lg">💳 Multi-pagamentos</h3>
          <p className="text-gray-400 mt-2">
            Integração com diferentes gateways como Mercado Pago e Stripe.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          <h3 className="font-bold text-lg">🎟 Validação segura</h3>
          <p className="text-gray-400 mt-2">
            Controle de entrada com prevenção de fraudes e duplicidade.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          <h3 className="font-bold text-lg">🚀 Escalável</h3>
          <p className="text-gray-400 mt-2">
            Arquitetura preparada para crescer e suportar grandes eventos.
          </p>
        </div>

      </section>

      {/* TECNOLOGIAS */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold">⚙️ Tecnologias</h2>

        <div className="flex flex-wrap gap-4 mt-6">
          <span className="bg-gray-800 px-4 py-2 rounded-lg">.NET 9</span>
          <span className="bg-gray-800 px-4 py-2 rounded-lg">Entity Framework</span>
          <span className="bg-gray-800 px-4 py-2 rounded-lg">SQL Server</span>
          <span className="bg-gray-800 px-4 py-2 rounded-lg">Clean Architecture</span>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <h2 className="text-3xl md:text-4xl font-bold">
          Precisa de um sistema robusto para seu negócio?
        </h2>

        <p className="text-gray-400 mt-4">
          Vamos desenvolver uma solução sob medida para você.
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