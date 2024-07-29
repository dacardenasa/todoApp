import { getAuthToken } from "@/utils";
import { AxiosInstance, AxiosStatic } from "axios";

export class ApiController {
  apiInstance: AxiosInstance;

  constructor(apiController: AxiosStatic) {
    const apiIntance = apiController.create({
      baseURL: process.env.EXPO_PUBLIC_API_URL,
    });

    apiIntance.interceptors.request.use(
      async (config) => {
        const token = await getAuthToken();
        if (token) {
          config.headers["x-token"] = token;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );

    this.apiInstance = apiIntance;
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
