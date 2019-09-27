/* tslint:disable */
/* eslint-disable */
interface Config {
  app_port: number;
  database_connection: Databaseconnection;
}
interface Databaseconnection {
  host: string;
  database: string;
  user: string;
  password: string;
  port: number;
}