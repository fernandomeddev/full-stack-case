import { ProjectDto } from "../../dtos/ProjectDto";
import { IProject } from "../../interfaces/IProject";
import { IResult } from "../../interfaces/IResult";
import { ProjectRepository } from "../../repository/projectRepository";

export async function removeProjectService(projectId: string): Promise<IResult<IProject | null>>   {
    const projectRepository = ProjectRepository.instance();
    const project: ProjectDto | null = await projectRepository.getById(projectId);
    if (!project) {
        return {
            success: false,
            data: null,
            messages: ['Project not found']
        }
    }
    await projectRepository.delete(projectId);    
    return {
        success: true,
        messages: ['Project deleted successfully'],
    }
}