import { Request, Response } from "express";
import { validationSchema } from "../../validationSchemas/newTask.schema";
import { updateTaskService } from "../../services/task/updateTaskService";

export async function updateTaskController(request: Request, response: Response) {
    try {
        const taskId = request.params.id;
        const validate = validationSchema.safeParse(request.body);
        if (validate.error) return response.status(400).send({errors: validate.error?.errors});
    
        const modifications = {
            title: request.body.title,
            description: request.body.description,
            status: request.body.status,
        };
        const responseService = await updateTaskService(taskId, modifications );
        if (!responseService.success) return response.status(400).send(responseService.messages);
       
        return response.status(200).send(responseService);
    } catch (error) {
        console.log(`server error on route get url/ :: ${error}`);
        return response.status(500).send("internal server error");
    }
}
