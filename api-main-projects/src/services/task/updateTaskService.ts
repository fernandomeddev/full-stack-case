import { IResult } from "../../interfaces/IResult";
import { ITask } from "../../interfaces/ITask";
import { TaskRepository } from "../../repository/taskRepository";
import { INewTask } from "../../validationSchemas/newTask.schema";

export async function updateTaskService(taskId: string, modifications: INewTask): Promise<IResult<ITask | null>> {
    const taskRepository = TaskRepository.instance();
    const task: ITask | null = await taskRepository.getById(taskId);
    if (!task) {
        return {
            success: false,
            messages: ['Task not found']
        }
    }

    const updatedData: ITask = {
        ...task,
        updatedAt: new Date(),
        ...modifications
    }

    const taskUpdated = await taskRepository.save(updatedData);
    if (!taskUpdated.id) {
        return {
            success: false,
            data: null,
            messages: ['Não foi possível atualizar a tarefa. Tente novamente.']
        }
    }

    return {
        success: true,
        data: updatedData
    }
}