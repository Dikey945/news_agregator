import {Article} from "../types/Article";
import {makeRequests} from "../utils/makeRequest";

export const getAllArticles = async (): Promise<Article[]> => {
  return makeRequests({url: '/articles'});
}

export const getArticleById = async (id: string | undefined): Promise<Article> => {
  return makeRequests({url: `/articles/${id}`});
}