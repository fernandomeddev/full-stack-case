import { BaseCrud } from "mongo-base-crud";
import { Singleton } from "typescript-singleton";
import { ProjectDto } from "../dtos/ProjectDto";

const dbName = process.env.DB_NAME || 'app_poduct_manager_bko'
export class ProjectRepository extends BaseCrud<ProjectDto> {
    static instance() {
        const instance = Singleton.getInstance('ProjectRepository', ProjectRepository, 'projects', dbName)
        return instance
    }

    public async findByName(name: string): Promise<ProjectDto | undefined> {
        const records: ProjectDto[] = await this.findAll({ name });
        if (records.length === 0) {
            return undefined;
        }
        console.log(records[0]);
        return records[0];
    }
}
