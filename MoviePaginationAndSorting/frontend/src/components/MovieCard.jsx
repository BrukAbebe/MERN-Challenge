import React from 'react';
import { Box, Text, Stack } from '@chakra-ui/react';

const MovieCard = ({ movie }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p="4"
      bg="#ffffff"
      boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
      transition="all 0.3s"
      _hover={{ transform: 'scale(1.05)', boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)' }}
    >
      <Stack spacing="3">
        <Text
          fontSize={{ base: '16px', md: 'lg' }}
          fontWeight="bold"
          bgGradient="linear(to-r, #FF0081, #FF8C00)"
          bgClip="text"
        >
          {movie.title}
        </Text>
        <Text fontSize={{ base: 'sm', md: 'md' }}>Genre: {movie.genre}</Text>
        <Text fontSize={{ base: 'sm', md: 'md' }}>Release Year: {movie.releaseYear}</Text>
        <Text fontSize={{ base: 'sm', md: 'md' }}>Rating: {movie.rating}</Text>
      </Stack>
    </Box>
  );
};

export default MovieCard;
