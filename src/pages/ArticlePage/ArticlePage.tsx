import React from "react";
import {Box, Link, Typography} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";
import './ArticlePage.scss';
import {useAsync} from "../../hooks/useAsync";
import {getArticleById} from "../../api/articles";
import {useParams} from "react-router-dom";
import WestIcon from '@mui/icons-material/West';

export const ArticlePage: React.FC = () => {
  const { articleId } = useParams();
  console.log(articleId);
  const { value: article} = useAsync(() => getArticleById(articleId))

  return (
    <Box component="section" className="article">
      <Box
        className="article__cover"
        component="img"
        src={article?.imageUrl}
        alt="page cover image"/>
      <Box className="article__wrapper">
        <Box component="section" className="article__content">
          <Typography className="article__title">
            {article?.title}
          </Typography>
          <Typography className="article__summary">
            {article?.summary}
          </Typography>
        </Box>
        <Link
          component={RouterLink}
          to="/"
          className="article__back"
        >
          <WestIcon className="article__back-icon"/>
          Back to homepage
        </Link>
      </Box>
    </Box>
  )
};