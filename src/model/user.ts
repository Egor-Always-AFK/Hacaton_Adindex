export interface User {
    id?: number,
    email: string,
    password: string,
    name: Name,
    about: string,
}

interface Name {
    firstName: string,
    secondName: string,
}