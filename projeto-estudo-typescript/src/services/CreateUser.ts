/**
 * Para criar:  name email e senha
 */
interface TechObject{
    title: string,
    experience: number
}
interface CreateUserData {
    name ?: string,
    email : string,
    password : string,
    tecnologies: Array<string | TechObject>
}
export default function createUser( {name, email, password} : CreateUserData){

    const user = {
        name,
        email,
        password
    }

    return user;
}