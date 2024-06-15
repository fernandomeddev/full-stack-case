import { ProjectDto } from "../../dtos/ProjectDto";
import { IProject } from "../../interfaces/IProject";
import { IResult } from "../../interfaces/IResult";
import { ProjectRepository } from "../../repository/projectRepository";

export async function createProjectService(data: IProject): Promise<IResult<IProject | null>> {
const projectRepository = ProjectRepository.instance();
    const projectWithSameName = await projectRepository.findByName(data.name);
    if (projectWithSameName) {
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
    newProject.id = project.id;
    return {
        success: true,
        data: newProject,
    }
}
