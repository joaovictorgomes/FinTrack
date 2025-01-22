import Footer from "@/components/footer";
import type { Metadata } from "next";
import Navbar from "@/components/navbar"

export const metadata: Metadata = {
  title: "FinTrack",
  description: "Acompanhe suas finanças de forma simples e eficiente.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="__variable_4d318d __variable_ea5f4b antialiased bg-black text-white">
        <Navbar />
        {/* Conteúdo principal */}
        {children}

        {/* Footer dentro do body */}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
