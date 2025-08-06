export default function Footer() {
  return (
    <footer className="bg-green-900 text-white p-4 mt-10">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} InfoEconomia 24h - Todos os direitos reservados.
        </p>
        <p className="text-xs mt-1">
          Conteúdo automatizado para fins informativos. Não fornecemos recomendações financeiras personalizadas.
        </p>
      </div>
    </footer>
  );
}
