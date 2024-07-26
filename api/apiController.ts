import { AxiosInstance, AxiosStatic } from "axios";

export class ApiController {
  apiInstance: AxiosInstance;

  constructor(apiController: AxiosStatic) {
    this.apiInstance = apiController.create({
      baseURL: process.env.EXPO_PUBLIC_API_URL
    });
  }

  async get(route: string) {
    return await this.apiInstance.get(route);
  }

  async post(route: string, body = {}) {
    return await this.apiInstance.post(route, { ...body });
  }

  async put(route: string, body = {}) {
    return await this.apiInstance.put(route, { ...body });
  }

  async delete(route: string) {
    return await this.apiInstance.delete(route);
  }
}
