import type { User } from "../model/user";

let userList: Array<User> = [];

export function saveProfile(profile: User): void {
    profile.id = Math.floor(Math.random() * Number.MAX_VALUE)
    userList.push(profile);
    console.log(profile)
}

export function findProfile(email: string, password: string) {
    const user = userList.find(user => {
        user.email === email && user.password === password
    })
    return user
}