export interface User {
    email: string,
    password: string,
    name: Name,
    about: string,
}

interface Name {
    firstName: string,
    secondName: string,
}