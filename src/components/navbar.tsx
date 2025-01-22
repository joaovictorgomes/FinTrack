import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { Command } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Menu = [
  {
    id: "1",
    name: "Cadastro de serviços",
    href: "/dashboard/cadastro-de-servicos",
  },
  {
    id: "2",
    name: "Extrato de serviços",
    href: "/dashboard/extrato-de-servicos",
  },
];

export default function Navbar() {
  return (
    <header>
      <nav className="h-16 bg-opaque p-3">
        <div className="flex flex-row gap-20 items-center">
          {/* Logo e título */}
          <Link className="flex flex-row gap-2 items-center ml-2" href="/dashboard">
            <Command size={24} />
            <p className="text-lg text-white">FinTrack</p>
          </Link>

          <div className="flex-1 flex justify-between items-center">
            {/* Menu de navegação */}
            <NavigationMenu className="flex gap-4 list-none flex-grow ">
              {Menu.map((item) => (
                <NavigationMenuItem key={item.id} className="list-none">
                  <Link href={item.href} passHref legacyBehavior>
                    <NavigationMenuLink
                      className={`px-4 py-2 text-white bg-transparent border border-transparent rounded-md hover:bg-gray-500/50 transition duration-200 ${navigationMenuTriggerStyle()}`}
                    >
                      {item.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenu>

            {/* Avatar */}
            <div>
              <Avatar className="size-7">
                <AvatarImage />
                <AvatarFallback className="text-sm text-black">LG</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
