'use client'

import Navbar from "app/components/navbar";
import { useForm, SubmitHandler, SubmitErrorHandler } from "react-hook-form";
import { signUpUser } from "api/route";

export type FormData = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
};

export default function Page() {

    const { handleSubmit, register } = useForm();

    const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
        const { password, password_confirmation } = data;
        if (password !== password_confirmation) throw new Error("Senhas diferentes");
        
        console.log(await signUpUser(data))
    };

    const onError: SubmitErrorHandler<FormData> = (error) => console.log(error);

    return (
        <>
            <Navbar />
            <div className="signUpDiv">
                <form onSubmit={handleSubmit(onSubmit, onError)} className="signUpForm">
                    <div className="signUpInput nome">
                        <label htmlFor="name">Nome:</label>
                        <input {...register("name", { required: true })} type="text" name="name" placeholder="Digite aqui" />
                    </div>
                    <div className="signUpInput email" style={{ margin: "5% 0 0 0"}}>
                        <label htmlFor="email">E-mail:</label>
                        <input {...register("email", { required: true })} type="email" name="email" placeholder="Digite aqui" />
                    </div>
                    <div className="signUpInput password" style={{ margin: "5% 0 0 0"}}>
                        <label htmlFor="password">Senha:</label>
                        <input {...register("password", { required: true })} type="password" name="password" placeholder="Digite aqui" />
                    </div>
                    <div className="signUpInput password" style={{ margin: "5% 0 0 0"}}>
                        <label htmlFor="password_confirmation">Confirme a senha:</label>
                        <input {...register("password_confirmation", { required: true })} type="password" name="password_confirmation" placeholder="Digite aqui" />
                    </div>
                    <input type="submit" value="Submit" className="signUpSubmit"/>
                </form>
            </div>
        </>
    );
}