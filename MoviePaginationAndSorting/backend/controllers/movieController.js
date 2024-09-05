const Movie = require('../models/Movie');


const getMovies = async (req, res) => {
  try {
    const { page = 1, limit = 10, sortBy = 'releaseYear', sortOrder = 'asc', genre, minRating } = req.query;

    
    const skip = (page - 1) * limit;

 
    const filter = {};
    if (genre) filter.genre = genre;
    if (minRating) filter.rating = { $gte: minRating };

 
    const sortOptions = {};
    sortOptions[sortBy] = sortOrder === 'desc' ? -1 : 1;

    
    const movies = await Movie.find(filter)
      .sort(sortOptions)
      .skip(skip)
      .limit(parseInt(limit));

    const totalMovies = await Movie.countDocuments(filter);

    res.json({
      movies,
      currentPage: parseInt(page),
      totalPages: Math.ceil(totalMovies / limit),
      totalMovies,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving movies', error });
  }
};

module.exports = {
  getMovies,
};
