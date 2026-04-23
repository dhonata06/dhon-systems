export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      
      <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight max-w-4xl">
        Soluções digitais para impulsionar o seu negócio
        <br />
        <span className="text-green-300">
          do site ao sistema completo
        </span>
      </h1>

      <p className="mt-6 text-gray-400 max-w-xl text-lg">
        Sites, sistemas, automações e SaaS desenvolvidos para
        atrair clientes, automatizar processos e aumentar seus resultados.
      </p>

      <a
        href="https://wa.me/5561994420949"
        className="mt-10 bg-green-500 hover:bg-green-600 px-10 py-4 rounded-xl text-lg font-semibold shadow-lg hover:scale-105 transition"
      >
        Solicitar orçamento agora
      </a>

      <p className="mt-4 text-gray-500 text-sm">
        Atendimento rápido • Projetos sob medida • Foco em resultado
      </p>

    </section>
  );
}