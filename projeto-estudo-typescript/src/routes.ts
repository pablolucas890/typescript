import { Request, Response } from 'express'
import createUser from './services/CreateUser';

export function helloWord (request: Request, response: Response){
    const user = createUser({
        name: 'Pablo',
        email: 'pablo@gmail.com',
        password: 'oishdsf65sd46f',
        tecnologies: [
            "Node",
            "BootsTrap",
            {
                title: 'JavaScript',
                experience: 100
            }
        ]
    });

    return response.send("Hello Word");
}