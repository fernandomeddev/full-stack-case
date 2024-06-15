import { Request, Response } from "express";
import { updateProjectService } from "../../services/project/updateProjectService";
import { validationSchema } from "../../validationSchemas/newProject.schema";

export async function updateProjectController(request: Request, response: Response) {
    try {
        const projectId = request.params.projectId;
        const validate = validationSchema.safeParse(request.body);
        if (validate.error) return response.status(400).send({errors: validate.error?.errors});
    
        const modifications = {
            name: request.body.name,
            description: request.body.description,
        };
        const responseService = await updateProjectService(projectId, modifications );
        if (!responseService.success) return response.status(400).send(responseService.messages);
       
        return response.status(200).send(responseService);
    } catch (error) {
        console.log(`server error on route get url/ :: ${error}`);
        return response.status(500).send("internal server error");
    }
}