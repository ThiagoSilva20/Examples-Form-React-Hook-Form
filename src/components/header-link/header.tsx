import Link from "next/link";
import { Button } from "../ui/button";

interface HeaderLinkProps {
  nextForm: string;
  previousForm: string;
}

export default function HeaderLink({ nextForm, previousForm }: HeaderLinkProps) {
  return (
    <div>
    <div className="absolute top-4 right-4 z-10">
    <Link href={nextForm}>
      <Button className="cursor-pointer" variant="outline">Próximo Formulário</Button>
    </Link>
  </div>

  <div className="absolute top-4 left-4 z-10">
    <Link href={previousForm}>
      <Button className="cursor-pointer" variant="outline">Voltar</Button>
    </Link>
  </div>
    </div>
  )
}