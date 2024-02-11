"use client"

import InputTextType from "@/types/InputTextType"

export default function InputText({ register, error, label, type = 'text'}: InputTextType): JSX.Element {
    return (
        <div>
            <input className="bg-gray-200 py-2 px-4 rounded-3xl w-full" type={type} { ...register } placeholder={label} />
            <samp>{ error || '' }</samp>
        </div>
    )
}