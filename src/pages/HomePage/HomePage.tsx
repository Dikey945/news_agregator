import React from "react";
import './HomePage.scss'
import {Box, InputAdornment, OutlinedInput, Typography} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export const HomePage: React.FC = () => {
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
      />

    </Box>
  );
};