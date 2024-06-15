import { IResult } from "../../interfaces/IResult";
import { ITask } from "../../interfaces/ITask";
import { TaskRepository } from "../../repository/taskRepository";

export async function listTasksService(projectId: string): Promise<IResult<ITask[] | null>>{
    const taskRepository = TaskRepository.instance();
    const tasks: ITask[] = await taskRepository.findAll({ projectId });
    if (tasks.length === 0 || !tasks) {
        return {
            success: false,
            data: null,
            messages: ['Não foi possível encontrar tarefas para este projeto.']
        }
    }
    return {
        success: true,
        data: tasks,
    }
}