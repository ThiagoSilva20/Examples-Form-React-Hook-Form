import Link from "next/link";
import { Button } from "../ui/button";
import { HomeIcon } from "lucide-react";

interface HeaderLinkProps {
  nextForm: string;
  previousForm: string;
}

export default function HeaderLink({ nextForm, previousForm }: HeaderLinkProps) {
  return (
    <div className="absolute w-full top-4 z-10 flex items-center px-4">
      {/* Botão Voltar */}
      <div className="flex-1">
        <Link href={previousForm}>
          <Button className="cursor-pointer" variant="outline">
            {previousForm === "/" ? "Início" : "Voltar"}
          </Button>
        </Link>
      </div>

      {/* Botão Home - Centralizado */}
      <div className="flex justify-center">
        <Link href="/">
          <Button className="cursor-pointer" variant="outline">
            <HomeIcon className="w-5 h-5" />
          </Button>
        </Link>
      </div>

      {/* Botão Próximo */}
      <div className="flex-1 flex justify-end">
        <Link href={nextForm}>
          <Button className="cursor-pointer" variant="outline">
            {nextForm === "/" ? "Início" : "Próximo Formulário"}
          </Button>
        </Link>
      </div>
    </div>
  )
}