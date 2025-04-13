import IFromData from "../components/login/InterfaceLogin";
import IRegisterData from "../components/register/InterfaceRegister";


const apiURL = process.env.NEXT_PUBLIC_API_URL

//Enviar datos del registro de un usuario
export async function registerUserService(userData: IRegisterData) {
    try {

        const response = await fetch(`${apiURL}/users/register`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(userData), //agrega  los datos del usuario al cuerpo de la solicitud
        });

        if(response.ok) {
            return response.json()
        } else {
            throw new Error('Registration failed: ' + response.statusText);
        }
       
        
    } catch (error) {
        throw new Error('Error: ' + (error as Error).message)
    }
}

//Enviar datos del inicio de sesion
export async function loginService(userData: IFromData) {
    try {

        const response = await fetch(`${apiURL}/users/login`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(userData),
        });

        if(response.ok) {
            return response.json()
        } else {
            throw new Error('Usuario o contraseña incorrectos');
        }
       
        
    } catch (error) {
        throw new Error('Error: ' + (error as Error).message);
    }
}