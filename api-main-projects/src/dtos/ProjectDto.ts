// Objective: Define the structure of a project data transfer object.
export interface ProjectDto {
    id?: string;
    name: string;
    description: string;
    createdBy: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}