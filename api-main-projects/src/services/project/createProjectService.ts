import { ProjectDto } from "../../dtos/ProjectDto";
import { IProject } from "../../interfaces/IProject";
import { IResult } from "../../interfaces/IResult";
import { ProjectRepository } from "../../repository/projectRepository";

export async function createProjectService(data: IProject): Promise<IResult<string | null>> {
const projectRepository = ProjectRepository.instance();
    const projectWithSameName = await projectRepository.findByName(data.name);
    if (projectWithSameName) {
        // Aqui poderiamos considerar acrescentar um texto '_copy' ao final do name para garantir que o nome seja unico
        return {
            success: false,
            data: null,
            messages: ['Project with same name already exists, try another name']
        }
    }

    const newProject: ProjectDto = {...data, createdAt: new Date() };
    const project = await projectRepository.save(newProject);
    if (!project.id) {
        return {
            success: false,
            data: null,
            messages: ['Error creating project']
        }
    }
    return {
        success: true,
        data: project.id,
        messages: ['Project created successfully']
    }
}
