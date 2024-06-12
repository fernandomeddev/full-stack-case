import { UserDto } from "../../dtos/UserDto";
import { IResult } from "../../interfaces/IResult";
import UserRepository from "../../repository/userRepository";
import { IUserSignup } from "../../validationSchemas/userSignup.schema";

export async function userSignupService(user: IUserSignup): Promise<IResult<UserDto>> {
    const output: IResult<UserDto> = {
        success: false
    }
    const userData: UserDto = {
        id: '',
        userAlias: '',
        name: user.name,
        email: user.email,
        hashedPassword: user.password,
        createdAt: new Date(),
        updatedAt: new Date()
    }

    const userRepository = UserRepository.instanse();
    const userExists: UserDto[] = await userRepository.findAll({ email: userData.email });
    for await (const user of userExists) {
        if (user.email === userData.email) {
            output.messages = ['User already exists'];
            return output;
        }
    }
    
    const { id } = await userRepository.save(userData);
    if (id) {
        userData.id = id;
        output.success = true;
        output.data = userData;

        return output;
    }

    output.messages = ['Error on save user'];
    return output;
}