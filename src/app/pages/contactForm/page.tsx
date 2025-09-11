"use client"

import HeaderLink from "@/components/header-link/header";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { contactFormSchemas } from "@/zodSchemas/formContact"
import { contactTypeForm } from "@/zodSchemas/formContact"
import { standardSchemaResolver } from "@hookform/resolvers/standard-schema";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FieldPhoneInput } from "@/components/ui/field-phone-number";
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "@/components/ui/card";

export default function ContactForm() {
    const form = useForm<contactTypeForm>({
        resolver: standardSchemaResolver(contactFormSchemas()),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            message: ""
        }
    })

    const onSubmit = (data: contactTypeForm) => {
        console.log(data)
    }
    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
            <HeaderLink nextForm="/pages/listForm" previousForm="/pages/registerForm" />
            <Card className="">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center">Contact Form</CardTitle>
                </CardHeader>
                <CardContent>
                    <Form {...form} >
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <div className="space-y-4">

                                <div className="grid grid-cols-2 gap-3">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => {
                                            return (
                                                <FormItem>
                                                    <FormLabel>Name</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Name" {...field} />
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
                                                    <FormLabel>Email</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Email" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )
                                        }}
                                    />
                                </div>


                                <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({ field }) => {
                                        return (
                                            <FormItem>
                                                <FormLabel>Phone</FormLabel>
                                                <FormControl>
                                                    <FieldPhoneInput  {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )
                                    }}
                                />

                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => {
                                        return (
                                            <FormItem>
                                                <FormLabel>Message</FormLabel>
                                                <FormControl>
                                                    <Textarea placeholder="Message" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )
                                    }}
                                />

                                <Button type="submit" className="">Enviar</Button>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}