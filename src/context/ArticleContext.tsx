import React, { useContext } from "react";
import { State, useAsync } from "../hooks/useAsync";
import { getAllArticles } from "../api/articles";
import { useParams } from "react-router-dom";
import { Article } from "../types/Article";

const Context = React.createContext({})
export const useArticle = () => {
  return useContext(Context)
}

interface Props {
  children: React.ReactNode;
};


export const ArticleProvider: React.FC<Props> = ({children}) => {
  const { id } = useParams();
  const { loading, error, value: articles }: State<Article[]>
    = useAsync(() => getAllArticles(), {initialLoading: true,
    dependencies: [id]})

  return (
    <Context.Provider value={{
      articles
    }}>
      {loading ? <h1>Loading</h1> : error ? <h1 className="error-msg">{`${error}`}</h1> : children}
    </Context.Provider>
  )
}
