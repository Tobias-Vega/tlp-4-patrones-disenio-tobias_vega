import axios from "axios";
import { IHttpClient } from "../interfaces/IHttpClient";

export class AxiosAdapater implements IHttpClient {

  async get<T>(url: string): Promise<T> {
    const response = await axios.get(url);

    const data = response.data;

    console.log(data);

    return data;
  }

}