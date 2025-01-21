import Link from "next/link";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        <li>
          <Link href="/dashboard/cadastro-de-servicos">
            Cadastro de Serviços
          </Link>
        </li>
        <li>
          <Link href="/dashboard/extrato-de-servicos">Extrato de Serviços</Link>
        </li>
      </ul>
    </div>
  );
}
