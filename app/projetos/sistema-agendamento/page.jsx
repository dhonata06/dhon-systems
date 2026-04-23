export default function Page() {
  return (
    <div className="bg-black text-white">

      {/* HERO */}
      <section className="min-h-[60vh] flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <h1 className="text-5xl md:text-6xl font-extrabold max-w-4xl">
          Sistema inteligente de agendamento para negócios locais
        </h1>

        <p className="mt-6 text-gray-400 max-w-xl text-lg">
          Automatize atendimentos, organize horários e aumente seus clientes com uma solução digital completa.
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
            src="/images/agendamento.png"
            alt="Sistema de agendamento"
            className="rounded-xl w-full hover:scale-105 transition duration-300"
          />
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold">🚨 O problema</h2>

        <p className="text-gray-400 mt-4 text-lg">
          Muitos profissionais ainda fazem agendamentos manualmente, o que gera conflitos de horários,
          perda de clientes e falta de organização no dia a dia.
        </p>
      </section>

      {/* SOLUÇÃO */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold">💡 A solução</h2>

        <p className="text-gray-400 mt-4 text-lg">
          Um sistema completo de agendamento online com controle de horários, catálogo de serviços
          e envio automático de notificações para clientes.
        </p>
      </section>

      {/* BENEFÍCIOS */}
      <section className="py-16 px-6 max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        
        <div className="bg-gray-900 p-6 rounded-xl">
          <h3 className="font-bold text-lg">⏱ Economia de tempo</h3>
          <p className="text-gray-400 mt-2">
            Reduz tarefas manuais e automatiza o atendimento.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          <h3 className="font-bold text-lg">📈 Mais clientes</h3>
          <p className="text-gray-400 mt-2">
            Facilita o agendamento e melhora a experiência do usuário.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          <h3 className="font-bold text-lg">⚙️ Organização total</h3>
          <p className="text-gray-400 mt-2">
            Controle completo de horários e serviços.
          </p>
        </div>

      </section>

      {/* TECNOLOGIAS */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold">⚙️ Tecnologias</h2>

        <div className="flex flex-wrap gap-4 mt-6">
          <span className="bg-gray-800 px-4 py-2 rounded-lg">.NET 9</span>
          <span className="bg-gray-800 px-4 py-2 rounded-lg">Boilerplate Architecture</span>
          <span className="bg-gray-800 px-4 py-2 rounded-lg">API REST</span>
          <span className="bg-gray-800 px-4 py-2 rounded-lg">Azure DevOps</span>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 text-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <h2 className="text-3xl md:text-4xl font-bold">
          Quer um sistema como esse no seu negócio?
        </h2>

        <p className="text-gray-400 mt-4">
          Fale comigo e vamos transformar sua ideia em realidade.
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