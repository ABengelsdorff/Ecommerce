export const ValidationRegister = {
    name: {
        required: {
            value: true,
            message: "El nombre es requerido"
        },
        pattern: {
            value: /^[a-zA-ZÀ-ÿ\s]{3,20}$/, // Letras, acentos, espacios, longitud mínima 3, máxima 20.
            message: "El nombre debe contener solo letras y tener entre 3 y 20 caracteres"
        }
    },

    email: {
        required: {
            value: true,
            message: "Email es requerido"
        },
        pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Email no válido"
        }
    },
    
    password: {
        required: {
            value: true,
            message: "Contraseña es requerida"
        },
        minLength: {
            value: 8,
            message: "La contraseña debe tener como mínimo 8 caracteres, una letra mayúscula, una letra minúscula y un número."
        },
        pattern: { 
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{1,}$/,
            message: "La contraseña debe tener como mínimo 8 caracteres, una letra mayúscula, una letra minúscula y un número."
        }
    },

    confirmPassword: {
        required: {
            value: true,
            message: "La confirmación de la contraseña es requerida"
        },
        validate: (value:string, allValues: {password?:string}) => 
            value === allValues.password || "Las contraseñas no coinciden"
    },
    
    address: {
        required: {
            value: true,
            message: "La dirección es requerida"
        },
        minLength: {
            value: 5,
            message: "La dirección debe tener al menos 5 caracteres"
        },
        maxLength: {
            value: 100,
            message: "La dirección no puede exceder 100 caracteres"
        }
    },
    
    phone: {
        required: {
            value: true,
            message: "El teléfono es requerido"
        },
        pattern: {
            value: /^[0-9]{10,15}$/, // Solo números, longitud entre 10 y 15.
            message: "El teléfono debe tener entre 10 y 15 dígitos numéricos"
        }
    }
};
