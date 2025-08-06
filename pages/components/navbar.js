import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-green-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">InfoEconomia <span className="text-yellow-400">24h</span></h1>
        <div className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/atualidades">Atualidades</Link>
          <Link href="/noticias">Notícias</Link>
          <Link href="/comparativos">Comparativos</Link>
          <Link href="/calculadora-ir">Calculadora IR</Link>
          <Link href="/filmes-series">Filmes & Séries</Link>
        </div>
      </div>
    </nav>
  );
}
