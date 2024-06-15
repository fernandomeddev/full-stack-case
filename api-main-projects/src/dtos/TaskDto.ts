
export interface TaskDto {
    id?: string;
    projectId: string;
    title: string;
    description: string;
    status: string; // Acrescentei status da tarefa como interface
    createdBy: string; // Acrescentei usuário que criou a tarefa 
    createdAt: Date;
    updatedAt?: Date;
    completedAt?: Date;
    completedBy?: string;
}




    