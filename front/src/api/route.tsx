import { FormData } from "app/(auth)/signup/page";

export async function signUpUser(formData: FormData): Promise<Object> {
    console.log("aqui 1")
    const { name, email, password } = formData;
    const data = {
        nome: name,
        email,
        senha: password,
        tipoUsuario: "Aluno"
    }

    return await fetch("http://localhost:3030/user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(data)
    })
    .then((x) => x.json())
    .then((response) => {
        console.log(response);
        return response;
    })
}  