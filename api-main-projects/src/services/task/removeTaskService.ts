import { IResult } from "../../interfaces/IResult";
import { ITask } from "../../interfaces/ITask";
import { TaskRepository } from "../../repository/taskRepository";

export async function removeTaskService(taskId: string): Promise<IResult<null>> {
    const taskRepository = TaskRepository.instance();
    const task: ITask | null = await taskRepository.getById(taskId);
    if (!task) {
        return {
            success: false,
            messages: ['Task not found']
        }
    }

    const taskRemoved = await taskRepository.delete(taskId);
    if (!taskRemoved) {
        return {
            success: false,
            messages: ['Não foi possível remover a tarefa. Tente novamente.']
        }
    }

    return {
        success: true,
        data: null
    }
}