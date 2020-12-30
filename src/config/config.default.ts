/**
 * 单数据库实例
 */
export default {
  orm: {
    type: "mysql",
    host: "127.0.0.1",
    port: 3306,
    username: "example",
    password: "",
    database: "example",
    synchronize: false,
    logging: false,
  },
};
