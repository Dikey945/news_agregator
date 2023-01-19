import React from "react";
import './ArticleList.scss'
import {Box, Typography} from "@mui/material";
import {useArticles} from "../../context/ArticleContext";
import {ArticleCard} from "../ArticleCard";
import {Article} from "../../types/Article";

export const ArticleList: React.FC = () => {
  const { loading, filteredArticles } = useArticles();

  return (
    <Box className="articles-block">
      <Typography className={"articles-block__count"}>
        {`Results: ${filteredArticles.length}`}
      </Typography>

      <div className="articles-block__horizontal-line"></div>

      <Box component="ul" className="articles-block__list">
        {loading
          ? `Loading...`
          : filteredArticles.map((article: Article) => (
              <li key={article.id}>
                <ArticleCard article={article}/>
              </li>
            )
          )}
      </Box>
    </Box>
  )
}