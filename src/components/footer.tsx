import { Command } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-600 text-white text-center py-5">
      <div className="flex flex-col items-center justify-center gap-2">
        <Command size={32} />
        <span className="text-sm">v25.0.1</span>
      </div>
    </footer>
  );
}
