"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  useEffect(() => {
    // Redireciona automaticamente para a página do dashboard
    router.push("/dashboard");
  }, [router]);

  return null; // Não há conteúdo a ser exibido, pois a página será redirecionada
}
