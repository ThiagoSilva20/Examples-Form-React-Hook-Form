"use client";

import HeaderLink from "@/components/header-link/header";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"; // Resolver do Zod
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Trash2Icon } from "lucide-react";
import { listFormSchemas, listTypeForm } from "@/zodSchemas/formList";

export default function ListForm() {
  const form = useForm<listTypeForm>({
    resolver: zodResolver(listFormSchemas()),
    defaultValues: {
      name: "",
      list: [{ value: "" }],
    },
  });

  // Configurando useFieldArray para o campo "list"
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "list",
  });

  // Função de envio do formulário
  const onSubmit = (data: listTypeForm) => {
    console.log(data);
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <HeaderLink nextForm="/pages/feedbackForm" previousForm="/pages/contactForm" />
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Formulário com Lista</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/* Campo Nome */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Digite seu nome" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Lista de Itens */}
  
                {fields.map((field, index) => (
                  <FormField
                    key={field.id}
                    control={form.control}
                    name={`list.${index}.value` as const}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Item {index + 1}</FormLabel>
                        <div className="flex gap-2 items-center">
                          <FormControl>
                            <Input {...field} placeholder={`Item ${index + 1}`} />
                          </FormControl>
                          {index > 0 && (
                              <Button
                              type="button"
                              variant="outline"
                              size="icon"
                              onClick={() => remove(index)}
                              >
                            <Trash2Icon className="w-4 h-4" />
                          </Button>
                          )}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                ))}


              {/* Botões */}
              <div className="flex gap-2">
                <Button type="button" onClick={() => append({ value: "" })}>
                  Adicionar Item
                </Button>
                <Button type="submit">Enviar</Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}