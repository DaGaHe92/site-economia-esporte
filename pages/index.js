import Link from "next/link";

export default function Home() {
  // Simulação de dados (futuramente será automatizado via IA/API)
  const cotacoes = [
    { nome: "IBOVESPA", valor: "125.378", variacao: "+0,37%" },
    { nome: "Dólar Comercial", valor: "5,25", variacao: "-0,17%" },
    { nome: "Ouro", valor: "316,45", variacao: "+0,11%" },
    { nome: "Bitcoin", valor: "331.743", variacao: "+0,48%" }
  ];

  const noticias = [
    "Inflação desacelera em abril, mas alimentos continuam em alta",
    "Novas regras tributárias para pequenas empresas entram em vigor",
    "Crescimento econômico surpreende no primeiro trimestre"
  ];

  const atualidades = [
    "Indicadores de confiança mostram queda no otimismo do empregado",
    "Mercado imobiliário cresce com demanda por imóveis residenciais"
  ];

  const financas = [
    "Cartões de crédito sem anuidade: confira as opções",
    "Empréstimo pessoal: o que considerar antes de obter o seu"
  ];

  return (
    <div>
      {/* Seção de Cotações */}
      <section className="bg-yellow-400 p-4 rounded mb-6">
        <h2 className="text-lg font-bold mb-2 text-black">COTAÇÕES DE MERCADO</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {cotacoes.map((c, index) => (
            <div key={index} className="bg-white p-2 rounded shadow text-center">
              <p className="font-bold text-green-800">{c.nome}</p>
              <p className="text-lg">{c.valor}</p>
              <p className={c.variacao.includes('+') ? "text-green-600" : "text-red-600"}>{c.variacao}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Últimas Notícias */}
      <section className="mb-6">
        <h2 className="text-xl font-bold mb-2">ÚLTIMAS NOTÍCIAS</h2>
        <ul className="list-disc list-inside">
          {noticias.map((n, index) => (
            <li key={index}>{n}</li>
          ))}
        </ul>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Criptomoedas */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-bold mb-2">CRIPTOMOEDAS</h3>
          <p>Bitcoin: 331.743 (0,0%)</p>
          <p>Ethereum: 17.418 (-0,1%)</p>
          <p>Tether: 5,26 (-0,1%)</p>
        </div>

        {/* Atualidades */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-bold mb-2">ATUALIDADES</h3>
          <ul className="list-disc list-inside">
            {atualidades.map((a, index) => (
              <li key={index}>{a}</li>
            ))}
          </ul>
        </div>

        {/* Finanças Pessoais */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-bold mb-2">FINANÇAS PESSOAIS</h3>
          <ul className="list-disc list-inside">
            {financas.map((f, index) => (
              <li key={index}>{f}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Link para outras páginas */}
      <div className="mt-6 text-center">
        <Link href="/noticias">
          <button className="btn">Ver todas as notícias</button>
        </Link>
      </div>
    </div>
  );
}
