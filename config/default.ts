// app config
export const app = {
  is_dev: true,
  node_env: "development",
  name: process.env.NAME,
  host: process.env.HOST,
  port: Number(process.env.PORT),
};

// database config
export const db = {
  url: process.env.DATABASE_URL,
  name: "todo-app",
};
