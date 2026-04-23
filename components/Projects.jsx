"use client";
import { useState } from "react";
import Link from "next/link";

export default function Projects() {
  const [filtro, setFiltro] = useState("todos");

  const projetos = [
    {
      nome: "Sistema de Agendamento para Saúde & Bem-Estar",
      descricao:
        "Aplicativo completo para gestão de atendimentos em salões, barbearias e profissionais da área. Permite agendamento online, controle de horários, catálogo de serviços e envio automático de notificações para clientes.",
      tipo: "dev",
      slug: "sistema-agendamento",
    },
    {
      nome: "EventMenage – Gestão de Eventos e Ingressos",
      descricao:
        "Sistema robusto para gerenciamento completo de eventos, incluindo venda de ingressos, validação de entrada e integração com múltiplos gateways de pagamento.",
      tipo: "dev",
      slug: "eventmenage",
    },
    {
      nome: "FitScan – Plataforma de Análise Física com IA",
      descricao:
        "SaaS inovador que utiliza visão computacional para analisar movimentos em tempo real, corrigir postura e melhorar a performance física diretamente pelo celular.",
      tipo: "ideia",
      slug: "fitscan",
    },
  ];

  const filtrados =
    filtro === "todos"
      ? projetos
      : projetos.filter((p) => p.tipo === filtro);

  return (
    <section className="py-20 px-6 bg-black text-white">
      <h2 className="text-4xl font-bold text-center">
        Projetos e Soluções
      </h2>

      <p className="text-gray-400 text-center mt-4 max-w-xl mx-auto">
        Alguns projetos que demonstram como soluções digitais podem gerar resultados reais.
      </p>

      {/* Filtros */}
      <div className="flex justify-center gap-4 mt-8 flex-wrap">
        <button
          onClick={() => setFiltro("todos")}
          className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700"
        >
          Todos
        </button>

        <button
          onClick={() => setFiltro("dev")}
          className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700"
        >
          Em desenvolvimento
        </button>

        <button
          onClick={() => setFiltro("ideia")}
          className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700"
        >
          Ideias
        </button>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {filtrados.map((p, i) => (
          <div
            key={i}
            className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:scale-105 hover:border-green-400 transition"
          >
            <span className="text-xs text-green-400 uppercase">
              {p.tipo === "dev" ? "Em desenvolvimento" : "Ideia"}
            </span>

            <h3 className="text-xl font-bold mt-2">
              {p.nome}
            </h3>

            <p className="text-gray-400 text-sm mt-3">
              {p.descricao}
            </p>

            <p className="text-green-400 text-xs mt-3">
              Foco em automação, eficiência e escalabilidade
            </p>

            <Link
              href={`/projetos/${p.slug}`}
              className="mt-4 inline-block text-green-400 text-sm hover:underline"
            >
              Ver detalhes →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}