import { Singleton } from "typescript-singleton"
import { UserDto } from "../dtos/UserDto"
import { BaseCrud } from "mongo-base-crud"

const dbName = 'db_projects'
export default class UserRepository extends BaseCrud<UserDto> {
  public static instanse() {
    const instanse = Singleton.getInstance('UserRepository', UserRepository, 'tb_users', dbName)
    return instanse
  }
}