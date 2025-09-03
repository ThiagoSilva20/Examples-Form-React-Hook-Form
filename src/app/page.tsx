"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  const forms = [
    {
      id: 1,
      title: "Formulário de Login",
      status: "completed",
      link: "/pages/loginForm"
    },
    {
      id: 2,
      title: "Formulário de Cadastro",
      status: "completed",
      link: "/pages/registerForm"
    },
    {
      id: 3,
      title: "Formulário de Contato",
      status: "pending",
      link: "/pages/contactForm"
    },
    {
      id: 4,
      title: "Formulário de Pedido",  
      status: "pending",
      link: "/pages/orderForm"
    },
    {
      id: 5,
      title: "Formulário de Feedback",
      status: "pending",
      link: "/pages/feedbackForm"
    },
    {
      id: 6,
      title: "Formulário de Configuração",
      status: "pending",
      link: "/pages/settingsForm"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">React Hook Form Examples</h1>
          <p className="text-gray-600">Coleção de formulários com validação zod</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {forms.map((form) => (
            <div
              key={form.id}
              className={`bg-white rounded-lg p-6 border shadow-sm ${
                form.status === 'completed' 
                  ? 'border-green-200' 
                  : 'border-yellow-200'
              }`}
            >
              {/* Status */}
              <div className={`inline-block px-2 py-1 rounded text-xs font-medium mb-4 ${
                form.status === 'completed' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {form.status === 'completed' ? 'Concluído' : 'Pendente'}
              </div>

              {/* Conteúdo */}
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  {form.title}
                </h3>
              </div>

              {/* Botão */}
              <div className="mt-4">
                {form.status === 'completed' ? (
                  <Link href={form.link}>
                    <Button className="w-full">
                      Ver Formulário
                    </Button>
                  </Link>
                ) : (
                  <Button variant="outline" className="w-full" disabled>
                    Criar Formulário
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}