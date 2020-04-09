module.exports = {
  HOST: env.HOST,
  USER: env.USER,
  PASSWORD: env.USER,
  DB: env.DB,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
