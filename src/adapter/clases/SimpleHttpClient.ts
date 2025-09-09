import { AxiosAdapater } from "./AxiosAdapter";
import { FetchAdapter } from "./FetchAdapter";

export class SimpleHttpClient {

  private httpClientFetch: FetchAdapter;
  private httpClientAxios: AxiosAdapater;

  constructor() {
    this.httpClientAxios = new AxiosAdapater();
    this.httpClientFetch = new FetchAdapter();
  }

  public getUsersFetch(url: string) {
    return this.httpClientFetch.get(url);
  }

  public getUsersAxios(url: string) {
    return this.httpClientAxios.get(url);
  }
}