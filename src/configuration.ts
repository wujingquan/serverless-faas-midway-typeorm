import { Configuration, Inject } from "@midwayjs/decorator";
import { ILifeCycle, IMidwayContainer } from "@midwayjs/faas";
import * as orm from "@midwayjs/orm";
import { join } from "path";
import { getManager } from "typeorm";
import { DatabaseInterface } from "./interface/database";

@Configuration({
  imports: [
    orm, // 加载 orm 组件
  ],
  importConfigs: [join(__dirname, "./config/")],
})
export class ContainerConfiguratin implements ILifeCycle {
  @Inject("Database")
  db: DatabaseInterface;

  async onReady(container?: IMidwayContainer): Promise<void> {
    console.log("onReady start--------------------------");
    await this.db.connect();

    container.registerObject("manager", getManager());
    console.log("onReady end--------------------------");
  }
  async onStop?(container?: IMidwayContainer): Promise<void> {
    console.log("onStop start--------------------------");
    await this.db.close();
    console.log("onStop end--------------------------");
  }
}
