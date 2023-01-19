import React from "react";
import {Article} from "../../types/Article";
import {Link as RouterLink} from "react-router-dom";
import Highlighter from "react-highlight-words";
import {Card, CardContent, CardMedia, Link, Typography} from "@mui/material";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import EastIcon from '@mui/icons-material/East';
import './ArticleCard.scss'
import {useArticles} from "../../context/ArticleContext";

interface Props {
  article: Article;
}

export const ArticleCard: React.FC<Props> = ({ article }) => {
  const { query } = useArticles();
  const {
    id,
    title,
    summary,
    imageUrl,
    publishedAt,
  } = article;

  const date = publishedAt.split("T")[0];

  return (
    <Card className="article-card">
      <CardMedia component={'img'} src={imageUrl} className="article-card__img"/>
      <CardContent className="article-card__content-wrapper">
        <Typography className="article-card__published">
          <CalendarTodayIcon className="article-card__icon"/>
          <Typography className="article-card__date">
            {date}
          </Typography>
        </Typography>

        <Typography>
          <Highlighter
            className="article-card__title"
            highlightClassName="article-card__title--highlighted"
            searchWords={query.split(" ")}
            autoEscape={true}
            textToHighlight={title}
          />
        </Typography>

        <Typography>
          <Highlighter
            className="article-card__summary"
            highlightClassName="article-card__summary--highlighted"
            searchWords={query.split(" ")}
            autoEscape={true}
            textToHighlight={summary}
          />
        </Typography>

        <Link
          component={RouterLink}
          to={`/${id}`}
          className="article-card__link"
        >
          Read more
          <EastIcon className="article-card__icon-forward"/>
        </Link>
      </CardContent>
    </Card>
  )
}