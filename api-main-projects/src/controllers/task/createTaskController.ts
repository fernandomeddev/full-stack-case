import { Request, Response } from "express";
import { INewTask, validationSchema } from "../../validationSchemas/newTask.schema";
import { createTaskService } from "../../services/task/createTaskService";
import { ITask } from "../../interfaces/ITask";

export async function createTaskController(request: Request, response: Response) {
    try {
        const validate = validationSchema.safeParse(request.body);
        if (validate.error) return response.status(400).send({errors: validate.error?.errors});
        
        const userId: string = request.user.id;
        const projectId: string  = request.params.projectId;
        const newTask:INewTask = {
           ...request.body
        }
        const responseService = await createTaskService({...newTask, projectId, createdBy: userId} as ITask);
        if (!responseService.success) return response.status(400).send(responseService.messages);

        return response.status(200).send(responseService);
    } catch (error) {
        console.log(`server error on route get url/ :: ${error}`);
        return response.status(500).send("internal server error");
    }
}