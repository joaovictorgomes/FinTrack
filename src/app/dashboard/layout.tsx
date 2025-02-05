import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="__variable_4d318d __variable_ea5f4b antialiased bg-black text-white">
        {children}
      </body>
    </html>
  );
}
