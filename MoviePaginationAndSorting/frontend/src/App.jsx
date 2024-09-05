import React from 'react';
import { Box } from '@chakra-ui/react';
import MovieList from './components/MovieList';

function App() {
  return (
  
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
        padding="4"
        bgGradient="linear(to-r, #F0F4F8, #CFE2F3)"
      >
        <MovieList />
      </Box>
    
  );
}

export default App;
