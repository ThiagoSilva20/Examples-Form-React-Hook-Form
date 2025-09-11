"use client"

import HeaderLink from "@/components/header-link/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { FeedbackFormSchemas, FeedbackTypeForm } from "@/zodSchemas/formFeedback";
import { zodResolver } from "@hookform/resolvers/zod";
import { feedbackOptions } from "@/lib/constants/feedback";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function RegisterForm() {
    const form = useForm<FeedbackTypeForm>({
        resolver: zodResolver(FeedbackFormSchemas()),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            encontrou:  "Outros",
            satisfacao: "Neutro",
            experiencia: "Neutra",
        }

    })

    const onSubmit = (data: FeedbackTypeForm) => {
        console.log(data)
    }


    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
            <HeaderLink nextForm="/" previousForm="/pages/orderForm" />
            <Card>
                <CardHeader>
                    <CardTitle>Feedback Form</CardTitle>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">

                            <FormField 
                                control={form.control}
                                name="firstName"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>
                                            Nome
                                        </FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                                />
                            <FormField 
                                control={form.control}
                                name="lastName"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>
                                            Sobrenome
                                        </FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                                />
                                </div>
                            <FormField 
                                control={form.control}
                                name="email"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>
                                            Email
                                        </FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField 
                                control={form.control}
                                name="encontrou"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>
                                            Encontrou
                                        </FormLabel>
                                        <FormControl>
                                            <Select>
                                                <SelectTrigger {...field} className="w-full">
                                                    <SelectValue placeholder="Selecione uma opção" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {feedbackOptions.encontrou.map((option) => (
                                                        <SelectItem key={option} value={option}>{option}</SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="grid grid-cols-2 gap-4">

                            <FormField 
                                control={form.control}
                                name="satisfacao"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>
                                            Satisfação
                                        </FormLabel>
                                        <FormControl>
                                            <Select>
                                                <SelectTrigger {...field} className="w-full">
                                                    <SelectValue placeholder="Selecione uma opção" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {feedbackOptions.satisfacao.map((option) => (
                                                        <SelectItem key={option} value={option}>{option}</SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                                />
                            <FormField 
                                control={form.control}
                                name="experiencia"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>
                                            Experiência
                                        </FormLabel>
                                        <FormControl>
                                            <Select>
                                                <SelectTrigger {...field} className="w-full">
                                                    <SelectValue  placeholder="Selecione uma opção" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {feedbackOptions.experiencia.map((option) => (
                                                        <SelectItem key={option} value={option}>{option}</SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                                />
                                </div>
                            <Button type="submit">Enviar</Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}