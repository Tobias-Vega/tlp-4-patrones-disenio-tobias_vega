import { SimpleHttpClient } from "./clases/SimpleHttpClient"

export const runAdapter = () => {
  const adaptadorHttp = new SimpleHttpClient();

  adaptadorHttp.getUsersFetch("https://jsonplaceholder.typicode.com/todos/1");

  adaptadorHttp.getUsersAxios("https://jsonplaceholder.typicode.com/todos/1");
}