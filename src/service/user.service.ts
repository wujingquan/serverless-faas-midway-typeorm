import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { User } from "../entity/user";
import { Repository } from "typeorm";

@Provide()
export class UserService {
  @InjectEntityModel(User)
  userModel: Repository<User>;

  // save
  async saveUser() {
    let user = new User();
    user.name = "Me and Bears";
    const userResult = await this.userModel.save(user);
    return userResult;
  }
}
