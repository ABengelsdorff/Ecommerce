export const ValidationRules = {
    email: {
        required: {
            value:true,
            message:"Email es requerido"
        },
        pattern: {
            value:
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, //expresión regular o RegEx
            message: "Email no valido"
        },
    },
    
    password: {
        required: {
            value:true,
            message:"Contraseña es requerida"
        },
        minLength: {
            value: 8,
            message: "La contraseña debe tener como minimo 8 caracteres"

        },
        pattern: { 
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{1,}$/,
            message: "La contraseña debe tener al menos una letra mayúscula, una letra minúscula y un número."
        },
    },
    
}