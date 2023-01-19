import * as React from 'react';
import './Loader.scss';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export const Loader: React.FC = () => {
  return (
    <Box className="loader" sx={{ display: 'flex' }}>
      <CircularProgress/>
    </Box>
  );
}