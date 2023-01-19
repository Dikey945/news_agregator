import React, {useContext, useEffect, useState} from "react";
import { State, useAsync } from "../hooks/useAsync";
import { getAllArticles } from "../api/articles";
import { Article } from "../types/Article";
interface ArticleContextType {
  filteredArticles: Article[];
  loading: boolean;
  error: any;
  query: string;
  onQueryChange: (query: string) => void;
}
const Context = React.createContext({} as ArticleContextType);
export const useArticles = () => {
  return useContext(Context)
}

interface Props {
  children: React.ReactNode;
}


export const ArticleProvider: React.FC<Props> = ({children}) => {
  const { loading, error, value: articles }: State<Article[]>
    = useAsync(() => getAllArticles())
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([])
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    if (query.length === 0 || !query ) {
      return setFilteredArticles(articles || [])
    }

    const loweredQueryArray = query.toLowerCase().split(' ');
    const filteredByTitle: Article[] | undefined = articles?.filter((article) => (
      loweredQueryArray.some((queryWord) => (article.title.toLowerCase().includes(queryWord)))
    ));
    const filteredBySummary: Article[] | undefined = articles?.filter((article) => (
      loweredQueryArray.some((queryWord) => (article.summary.toLowerCase().includes(queryWord)))
    ));

    const unitedArticles = ([...filteredByTitle!, ...filteredBySummary!])
    const uniqueArticles = [...new Set(unitedArticles)]
    setFilteredArticles(() => uniqueArticles);
  },[query, articles])

  console.log(filteredArticles);

  const onQueryChange = (query: string):void => {
    setQuery(query)
  }

  return (
    <Context.Provider value={{
      filteredArticles,
      loading,
      error,
      query,
      onQueryChange,
    }}>
      { children }
    </Context.Provider>
  )
}
