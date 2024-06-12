import { Request, Response } from 'express';
import { validationSchema } from '../../validationSchemas/userSignup.schema';
import { hash } from 'bcryptjs';
import { userSignupService } from '../../services/user/userSignupService';

export async function userSignupController(request: Request, response: Response ) {
    try {
        const validate = validationSchema.safeParse(request.body);
        if (validate.error) return response.status(400).send({errors: validate.error?.errors});
        const hashedPassword = await hash(request.body.password, 10);
        const user = {
            name: request.body.name,
            email: request.body.email,
            password: hashedPassword
        }
        const responseService = await userSignupService(user);
        if (!responseService.success) {
            return response.status(400).send(responseService);
        }
        
        return response.status(200).send('user created')
    } catch (error) {
        console.log(`server error on route get url/ :: ${error}`)
        return response.status(500).send('internal server error')
    }
}