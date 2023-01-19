import React from "react";
import './HomePage.scss'
import {Box, InputAdornment, OutlinedInput, Typography} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {ArticleList} from "../../components/ArticleList";
import {useArticles} from "../../context/ArticleContext";

export const HomePage: React.FC = () => {
  const { query, onQueryChange } = useArticles();
  return (
    <Box component="section" className="page">
      <Typography className={"page__search-hint"}>
        Filter by keywords
      </Typography>
      <OutlinedInput
        startAdornment={<InputAdornment position="start">
          <SearchIcon/>
      </InputAdornment>}
        placeholder="Search Article"
        className={"page__search"}
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
      />
      <ArticleList/>
    </Box>
  );
};