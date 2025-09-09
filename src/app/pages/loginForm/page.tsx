"use client"

import { 
    Form, 
    FormControl, 
    FormField, 
    FormItem, 
    FormLabel, 
    FormMessage 
} from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { formLoginSchema, loginTypeForm } from "@/zodSchemas/formLogin"
import { standardSchemaResolver } from "@hookform/resolvers/standard-schema"
import HeaderLink from "@/components/header-link/header"

export default function LoginForm() {
  const form = useForm<loginTypeForm>({
    resolver: standardSchemaResolver(formLoginSchema()),
    defaultValues: {
      username: "",
      password: "",
    },
  })
  const onSubmit = (data: loginTypeForm) => {
    console.log(data)
  }

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <HeaderLink nextForm="/pages/registerForm" previousForm="/" />
      
        <div className="bg-white rounded-md shadow-lg p-8 space-y-6 w-full max-w-md">
        <h1 className="font-bold text-center text-2xl">Login</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField 
            control={form.control}
            name="username"
            render={({field}) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Digite seu username" {...field} />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="password"
            render={({field}) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Digite sua senha" {...field} />
                </FormControl>
                <FormMessage className="text-red-500"  />
              </FormItem>
            )}
            />
            <Button type="submit" className="cursor-pointer w-full">Login</Button>
          </form>
        </Form>
        </div>
    </div>
  )
}