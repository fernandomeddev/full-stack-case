import { Request, Response } from "express";
import { createProjectService } from "../../services/project/createProjectService";
import { IProject } from "../../interfaces/IProject";
import { validationSchema } from "../../validationSchemas/newProject.schema";

export async function createProjectController(request: Request, response: Response) {
    try {
        const validate = validationSchema.safeParse(request.body);
        console.log(request.user)
        if (validate.error) return response.status(400).send({errors: validate.error?.errors});
        const userId: string  = request.user?.id;
        if (!userId) return response.status(401).send('Unauthorized');

        const dataProject: IProject = {
            name: request.body.name,
            description: request.body.description,
            createdBy: userId,
        }

        const responseService = await createProjectService(dataProject);
        if (!responseService.success) return response.status(400).send(responseService.messages);

        return response.status(200).send(responseService);
    } catch (error) {
        console.log(`server error on route get url/ :: ${error}`);
        return response.status(500).send("internal server error");
    }
}
