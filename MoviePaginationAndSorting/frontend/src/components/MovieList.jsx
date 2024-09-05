import React, { useEffect, useState } from 'react';
import { Box, Select, Stack, Heading } from '@chakra-ui/react';
import { getMovies } from '../services/movieService';
import MovieCard from './MovieCard';
import Pagination from './Pagination';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [sortBy, setSortBy] = useState('releaseYear');
  const [sortOrder, setSortOrder] = useState('asc');
  const [genre, setGenre] = useState('');

  useEffect(() => {
    fetchMovies();
  }, [page, sortBy, sortOrder, genre]);

  const fetchMovies = async () => {
    const params = {
      page,
      limit,
      sortBy,
      sortOrder,
      genre,
    };

    const data = await getMovies(params);
    setMovies(data.movies);
    setTotalPages(data.totalPages);
  };

  const handleGenreChange = (e) => {
    setGenre(e.target.value);
    setPage(1);
  };

  return (
    <Box p={{ base: '4', md: '6' }}>
      <Heading
        mb="6"
        fontSize={{ base: '20px', md: '24px', lg: '28px' }}
        bgGradient="linear(to-r, #007bff, #28a745)"
        bgClip="text"
        textAlign="center"
      >
        Movie List
      </Heading>
      <Stack justifyContent={'center'} direction={{ base: 'column', sm: 'row' }} spacing="4" mb="6">
        <Box>
          <Select
            value={genre}
            onChange={handleGenreChange}
            placeholder="Select Genre"
            variant="outline"
            size={{ base: 'sm', md: 'md' }}
            width={{ base: 'full', md: 'auto' }}
            background="#ffffff"
            borderColor="#007bff"
            color="#333333"
            _focus={{ borderColor: '#007bff', boxShadow: '0 0 0 1px #007bff' }}
          >
            <option value="">All</option>
            <option value="Action">Action</option>
            <option value="Comedy">Comedy</option>
            <option value="Drama">Drama</option>
            <option value="Horror">Horror</option>
            <option value="Sci-Fi">Sci-Fi</option>
          </Select>
        </Box>
        <Box>
          <Select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            placeholder="Sort By"
            variant="outline"
            size={{ base: 'sm', md: 'md' }}
            width={{ base: 'full', md: 'auto' }}
            background="#ffffff"
            borderColor="#007bff"
            color="#333333"
            _focus={{ borderColor: '#007bff', boxShadow: '0 0 0 1px #007bff' }}
          >
            <option value="releaseYear">Release Year</option>
            <option value="rating">Rating</option>
          </Select>
        </Box>
        <Box>
          <Select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            placeholder="Order"
            variant="outline"
            size={{ base: 'sm', md: 'md' }}
            width={{ base: 'full', md: 'auto' }}
            background="#ffffff"
            borderColor="#007bff"
            color="#333333"
            _focus={{ borderColor: '#007bff', boxShadow: '0 0 0 1px #007bff' }}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </Select>
        </Box>
      </Stack>
      <Box
        display="grid"
        gridTemplateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
        gap="6"
      >
        {movies.map((movie) => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </Box>
      <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
    </Box>
  );
};

export default MovieList;
