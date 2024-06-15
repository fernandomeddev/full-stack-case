import { DocumentWithId } from "mongo-base-crud";
import { ProjectDto } from "../../dtos/ProjectDto";
import { IResult } from "../../interfaces/IResult";
import { ProjectRepository } from "../../repository/projectRepository";
import { INewProject } from "../../validationSchemas/newProject.schema";
import { IProject } from "../../interfaces/IProject";

export async function updateProjectService(projectId: string, modifications: INewProject): Promise<IResult<IProject | null>>{
    const projectRepository = ProjectRepository.instance();
    const project: ProjectDto | null = await projectRepository.getById(projectId);
    if (!project) {
        return {
            success: false,
            data: null,
            messages: ['Project not found']
        }
    }

    const updatedData: ProjectDto = {
        ...project,
        updatedAt: new Date(),
        ...modifications
    }
    
    const projectUpdated = await projectRepository.save(updatedData);
    if (!projectUpdated.id) {
        return {
            success: false,
            data: null,
            messages: ['Não foi possível atualizar o projeto. Tente novamente.']
        }
    }     
    return {
        success: true,
        data: updatedData,
    }
}