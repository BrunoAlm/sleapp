import { UseFormRegisterReturn } from "react-hook-form"

type InputTextType = {
    register?: UseFormRegisterReturn<any>;
    label: string;
    error?: string;
    type?: string;
}

export default InputTextType
