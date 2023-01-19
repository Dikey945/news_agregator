import axios, {AxiosError, AxiosResponse } from "axios";

const SERVER_URL = 'https://api.spaceflightnewsapi.net/v3';

const api = axios.create({
  baseURL: SERVER_URL
});

interface ApiOptions {
  url: string;
  option?: any;
}

export const makeRequests = async ({ url, option }: ApiOptions): Promise<any> => {
  try {
    const response: AxiosResponse = await api(url, option);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response) {
        throw new Error(error.response.data.message);
      } else {
        throw new Error(error.message);
      }
    } else {
      throw error;
    }
  }
}