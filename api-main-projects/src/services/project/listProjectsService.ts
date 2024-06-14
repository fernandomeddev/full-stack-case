import { IProject } from "../../interfaces/IProject";
import { IResult } from "../../interfaces/IResult";
import { ProjectRepository } from "../../repository/projectRepository";

export async function listProjectsService(userId: string): Promise<IResult<IProject[] | null>>   {
    const projectRepository = ProjectRepository.instance();
    const projects: IProject[] = await projectRepository.findAll({ userId });
    if (!projects) {
        return {
            success: false,
            data: null,
            messages: ['Error fetching projects']
        }
    }
    return {
        success: true,
        data: projects,
    }
}