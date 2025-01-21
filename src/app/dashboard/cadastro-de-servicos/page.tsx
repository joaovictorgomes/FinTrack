import Link from "next/link";

export default function CadastroDeServicos() {
  return (
    <div>
      <h1>Cadastro de Serviços</h1>
      {/* Conteúdo da página de cadastro */}
      <button>
        <Link href="/dashboard/cadastro-de-servicos/create">
          Ir para Create
        </Link>
      </button>
    </div>
  );
}
