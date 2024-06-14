export interface TaskDto {
    id?: string;
    projectId: string;
    title: string;
    description: string;
    status: 'pendente' | 'concluído' | 'em andamento' | 'cancelado'; // Acrescentei mais dois status 
    createdBy: string; // Acrescentei usuário que criou a tarefa 
    createdAt: Date;
    completedAt?: Date;
    completedBy?: string;
}




    