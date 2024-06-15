import { IResult } from "../../interfaces/IResult";
import { ITask } from "../../interfaces/ITask";
import { TaskRepository } from "../../repository/taskRepository";

export async function createTaskService(data:ITask): Promise<IResult<ITask | null>>{
    const taskRepository = TaskRepository.instance();
    
    // sujestão de melhoria: Criar um campo alias, transformar o title em unique(slug) e verificar se já existe uma tarefa com o mesmo alias
    // const taskWithSameName = await taskRepository.findByName(data.title);
    const taskCreated = await taskRepository.save(data);
    if (!taskCreated.id) {
        return {
            success: false,
            data: null,
            messages: ['Não foi possível criar a tarefa. Tente novamente.']
        }
    }
    const newTask = {
        ...data,
        id: taskCreated.id
    }

    return {
        success: true,
        data: newTask,
    }
}