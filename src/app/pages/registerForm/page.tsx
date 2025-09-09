"use client"

import React from "react"
import { useForm } from "react-hook-form"
import { registerFormSchemas, registerTypeForm } from "@/zodSchemas/formRegister"
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { standardSchemaResolver } from "@hookform/resolvers/standard-schema"
import { Separator } from "@radix-ui/react-select"
import { FieldPhoneInput } from "@/components/ui/field-phone-number"
import { Button } from "@/components/ui/button"
import HeaderLink from "@/components/header-link/header"
import {
    Card, CardHeader, CardTitle, CardContent
} from "@/components/ui/card"


export default function RegisterForm() {
    const form = useForm<registerTypeForm>({
        resolver: standardSchemaResolver(registerFormSchemas()),
        defaultValues: {
            first_name: "",
            last_name: "",
            email: "",
            date_of_birth: "",
            sex: "Male",
            height: 0,
            weight: 0,
            marital_status: "Single",
            contact_number: "",
            address_complete: {
                street: "",
                city: "",
                state: "",
                zip_code: ""
            }
        }
    })


    const listSex = [
        { value: "Male", label: "Masculino" },
        { value: "Female", label: "Feminino" },
        { value: "Outher", label: "Outro" }
    ]

    const listMaritalStatus = [
        { value: "Single", label: "Solteiro(a)" },
        { value: "Married", label: "Casado(a)" },
        { value: "Divorced", label: "Divorciado(a)" },
        { value: "Widowed", label: "Viúvo(a)" }
    ]


    const onSubmit = (data: registerTypeForm) => {
        console.log(data)
    }

    React.useEffect(() => {
        if (form.formState.errors) {
            console.log("Form errors:", form.formState.errors)
        }
    }, [form.formState.errors])


    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
            <HeaderLink nextForm="/pages/contactForm" previousForm="/pages/loginForm" />
            <Card className="px-8 space-y-6">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center">Cadastro</CardTitle>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <div className="w-full grid grid-cols-2 gap-4">
                                <FormField
                                    control={form.control}
                                    name="first_name"
                                    render={({ field }) => {
                                        return (
                                            <FormItem >
                                                <FormLabel>Nome</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Digite seu nome"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )
                                    }}
                                />
                                <FormField
                                    control={form.control}
                                    name="last_name"
                                    render={({ field }) => {
                                        return (
                                            <FormItem >
                                                <FormLabel>Sobrenome</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Digite seu sobrenome"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )
                                    }}
                                />
                            </div>

                            <div className="w-full grid grid-cols-2 gap-4">
                                <FormField
                                    control={form.control}
                                    name="date_of_birth"
                                    render={({ field }) => {
                                        return (
                                            <FormItem>
                                                <FormLabel>Data de Nascimento</FormLabel>
                                                <FormControl className="w-1/3">
                                                    <Input {...field} className="w-full" type="date" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )
                                    }}
                                />
                                <FormField
                                    control={form.control}
                                    name="sex"
                                    render={({ field }) => {
                                        return (
                                            <FormItem>
                                                <FormLabel>Sexo</FormLabel>
                                                <FormControl>
                                                    <Select value={field.value} onValueChange={field.onChange}>
                                                        <SelectTrigger className="w-full">
                                                            <SelectValue placeholder="Selecione o sexo" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            {listSex.map((item) => {
                                                                return (
                                                                    <SelectItem key={item.value} value={item.value}>
                                                                        {item.label}
                                                                    </SelectItem>
                                                                )
                                                            })}
                                                        </SelectContent>
                                                    </Select>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )
                                    }}
                                />
                            </div>

                            <div className="w-full grid grid-cols-2 gap-4">
                                <FormField
                                    control={form.control}
                                    name="height"
                                    render={({ field }) => {
                                        return (
                                            <FormItem>
                                                <FormLabel>Altura (cm)</FormLabel>
                                                <FormControl>
                                                    <Input {...field} type="number" placeholder="Ex: 170" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )
                                    }}
                                />
                                <FormField
                                    control={form.control}
                                    name="weight"
                                    render={({ field }) => {
                                        return (
                                            <FormItem>
                                                <FormLabel>Peso (kg)</FormLabel>
                                                <FormControl>
                                                    <Input {...field} type="number" placeholder="Ex: 50" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )
                                    }}
                                />
                            </div>

                            <FormField
                                control={form.control}
                                name="marital_status"
                                render={({ field }) => {
                                    return (
                                        <FormItem>
                                            <FormLabel>Estado Civil</FormLabel>
                                            <FormControl>
                                                <Select value={field.value} onValueChange={field.onChange}>
                                                    <SelectTrigger className="w-1/2">
                                                        <SelectValue placeholder="Selecione o estado civil" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {listMaritalStatus.map((item) => {
                                                            return (
                                                                <SelectItem key={item.value} value={item.value}>
                                                                    {item.label}
                                                                </SelectItem>
                                                            )
                                                        })}
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )
                                }}
                            />

                            <Separator className="bg-gray-300 h-[1px]" />

                            <div className="w-full grid grid-cols-2 gap-4" >

                                <FormField
                                    control={form.control}
                                    name="contact_number"
                                    render={({ field }) => {
                                        return (
                                            <FormItem>
                                                <FormLabel>Numero de contato</FormLabel>
                                                <FormControl>
                                                    <FieldPhoneInput
                                                        value={field.value}
                                                        onChange={field.onChange}
                                                        onBlur={field.onBlur}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )
                                    }}
                                />

                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => {
                                        return (
                                            <FormItem>
                                                <FormLabel>E-mail</FormLabel>
                                                <FormControl>
                                                    <Input {...field} type="email" placeholder="Seu Email" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )
                                    }}
                                />
                            </div>

                            <Separator className="bg-gray-300 h-[1px]" />

                            <FormField
                                control={form.control}
                                name="address_complete.street"
                                render={({ field }) => {
                                    return (
                                        <FormItem>
                                            <FormLabel>Rua</FormLabel>
                                            <FormControl>
                                                <Input {...field} type="text" placeholder="Rua" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )
                                }}
                            />
                            <div className="w-full grid grid-cols-2 gap-4">
                                <FormField
                                    control={form.control}
                                    name="address_complete.city"
                                    render={({ field }) => {
                                        return (
                                            <FormItem>
                                                <FormLabel>Cidade</FormLabel>
                                                <FormControl>
                                                    <Input {...field} placeholder="Cidade" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )
                                    }}
                                />
                                <FormField
                                    control={form.control}
                                    name="address_complete.state"
                                    render={({ field }) => {
                                        return (
                                            <FormItem>
                                                <FormLabel>Estado</FormLabel>
                                                <FormControl>
                                                    <Input {...field} placeholder="Estado" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )
                                    }}
                                />
                            </div>

                            <FormField
                                control={form.control}
                                name="address_complete.zip_code"
                                render={({ field }) => {
                                    return (
                                        <FormItem>
                                            <FormLabel>Código de Endereçamento Postal (CEP)</FormLabel>
                                            <FormControl>
                                                <Input {...field} type="number" placeholder="CEP" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )
                                }}
                            />

                            <div>
                                <Button className="cursor-pointer" type="submit">Enviar</Button>
                            </div>


                        </form>
                    </Form>

                </CardContent>
            </Card>
        </div>
    )
}
