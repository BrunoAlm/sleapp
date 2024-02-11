"use client"
import * as yup from "yup"
import LoginType from "@/types/LoginType"
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, SubmitHandler } from "react-hook-form"
import Image from "next/image"
import InputText from "./InputText"

const schema: yup.ObjectSchema<any> = yup.object({
    username: yup.string().required(),
    password: yup.string().required()
}).required();

export default function FormLogin() {

    const { register, handleSubmit, formState: { errors } } = useForm<LoginType>({
        defaultValues: {
            username: '',
            password: ''
        },
        resolver: yupResolver(schema)
    });
    const onSubmit: SubmitHandler<LoginType> = data => console.log(data);

    return (
        // Form Card
        <form className="flex flex-col w-full max-w-96 items-center justify-between p-8 bg-white shadow-sm shadow-gray-400 rounded-xl">
            {/* Title */}
            <div className="mb-5 flex flex-col items-center">
                <Image
                    src="/sleno-orange.svg"
                    alt="Sleno Logo"
                    width={159}
                    height={58}
                    priority
                />
                <p className="text-gray-400 font-medium text-sm">Orçamentos personalizados</p>
            </div>
            {/* TextFields */}
            <div className="flex flex-col gap-2 mb-5 w-full">
                <InputText
                    label="Usuário"
                    register={register("username")}
                    error={errors.username?.message}
                />
                <InputText
                    label="Senha"
                    type="password"
                    register={register("password")}
                    error={errors.password?.message}
                />
            </div>
            <button type="submit" className="border bg-primary-color w-full py-2 rounded-3xl text-sm text-white">entrar</button>
        </form>
    )
}