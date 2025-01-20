interface IRegisterData{
    id?: number,
    name: string,
    email: string,
    password: string,
    confirmPassword?: string,
    address: string,
    phone: string,
}

export default IRegisterData