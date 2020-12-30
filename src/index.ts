import { Func, Inject, Provide } from "@midwayjs/decorator";
import { FaaSContext, FunctionHandler } from "@midwayjs/faas";
import { UserService } from "./service/user.service";

@Provide()
export class IndexService implements FunctionHandler {
  @Inject()
  ctx: FaaSContext; // context

  @Inject()
  userService: UserService;

  @Func("index.handler")
  async handler() {
    const user = await this.userService.saveUser();
    return user;
  }
}
