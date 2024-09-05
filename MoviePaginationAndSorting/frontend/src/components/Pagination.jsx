import React from 'react';
import { Button, ButtonGroup, Box } from '@chakra-ui/react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <Box textAlign="center" mt="6">
      <ButtonGroup spacing="4">
        <Button
          onClick={handlePrev}
          isDisabled={currentPage === 1}
          variant="solid"
          colorScheme="blue"
          size={{ base: 'sm', md: 'md' }}
        >
          Previous
        </Button>
        <Button
          onClick={handleNext}
          isDisabled={currentPage === totalPages}
          variant="solid"
          colorScheme="blue"
          size={{ base: 'sm', md: 'md' }}
        >
          Next
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default Pagination;
