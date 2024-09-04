
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Movie = require('../models/Movie');
const connectDb =require('../config/db');

dotenv.config();


connectDb();

const movies = [
  { title: 'Inception', genre: 'Sci-Fi', releaseYear: 2010, rating: 8.8 },
  { title: 'The Dark Knight', genre: 'Action', releaseYear: 2008, rating: 9.0 },
  { title: 'Interstellar', genre: 'Sci-Fi', releaseYear: 2014, rating: 8.6 },
  { title: 'The Matrix', genre: 'Sci-Fi', releaseYear: 1999, rating: 8.7 },
  { title: 'The Godfather', genre: 'Crime', releaseYear: 1972, rating: 9.2 },
  { title: 'Pulp Fiction', genre: 'Crime', releaseYear: 1994, rating: 8.9 },
  { title: 'Fight Club', genre: 'Drama', releaseYear: 1999, rating: 8.8 },
  { title: 'The Shawshank Redemption', genre: 'Drama', releaseYear: 1994, rating: 9.3 },
  { title: 'The Lord of the Rings: The Fellowship of the Ring', genre: 'Fantasy', releaseYear: 2001, rating: 8.8 },
  { title: 'The Lord of the Rings: The Return of the King', genre: 'Fantasy', releaseYear: 2003, rating: 8.9 },
  { title: 'Star Wars: Episode IV - A New Hope', genre: 'Sci-Fi', releaseYear: 1977, rating: 8.6 },
  { title: 'Star Wars: Episode V - The Empire Strikes Back', genre: 'Sci-Fi', releaseYear: 1980, rating: 8.7 },
  { title: 'Gladiator', genre: 'Action', releaseYear: 2000, rating: 8.5 },
  { title: 'Saving Private Ryan', genre: 'War', releaseYear: 1998, rating: 8.6 },
  { title: 'Schindler\'s List', genre: 'History', releaseYear: 1993, rating: 8.9 },
  { title: 'Forrest Gump', genre: 'Drama', releaseYear: 1994, rating: 8.8 },
  { title: 'Braveheart', genre: 'History', releaseYear: 1995, rating: 8.3 },
  { title: 'The Lion King', genre: 'Animation', releaseYear: 1994, rating: 8.5 },
  { title: 'Jurassic Park', genre: 'Adventure', releaseYear: 1993, rating: 8.1 },
  { title: 'Avatar', genre: 'Sci-Fi', releaseYear: 2009, rating: 7.8 },
  { title: 'Titanic', genre: 'Romance', releaseYear: 1997, rating: 7.8 },
  { title: 'The Avengers', genre: 'Action', releaseYear: 2012, rating: 8.0 },
  { title: 'Avengers: Endgame', genre: 'Action', releaseYear: 2019, rating: 8.4 },
  { title: 'Black Panther', genre: 'Action', releaseYear: 2018, rating: 7.3 },
  { title: 'Spider-Man: Into the Spider-Verse', genre: 'Animation', releaseYear: 2018, rating: 8.4 },
  { title: 'Coco', genre: 'Animation', releaseYear: 2017, rating: 8.4 },
  { title: 'The Incredibles', genre: 'Animation', releaseYear: 2004, rating: 8.0 },
  { title: 'Finding Nemo', genre: 'Animation', releaseYear: 2003, rating: 8.1 },
  { title: 'Toy Story', genre: 'Animation', releaseYear: 1995, rating: 8.3 },
  { title: 'Monsters, Inc.', genre: 'Animation', releaseYear: 2001, rating: 8.1 },
  { title: 'Frozen', genre: 'Animation', releaseYear: 2013, rating: 7.4 },
  { title: 'Beauty and the Beast', genre: 'Animation', releaseYear: 1991, rating: 8.0 },
  { title: 'Aladdin', genre: 'Animation', releaseYear: 1992, rating: 8.0 },
  { title: 'The Silence of the Lambs', genre: 'Thriller', releaseYear: 1991, rating: 8.6 },
  { title: 'A Beautiful Mind', genre: 'Drama', releaseYear: 2001, rating: 8.2 },
  { title: 'The Departed', genre: 'Crime', releaseYear: 2006, rating: 8.5 },
  { title: 'Inglourious Basterds', genre: 'War', releaseYear: 2009, rating: 8.3 },
  { title: 'The Social Network', genre: 'Drama', releaseYear: 2010, rating: 7.7 },
  { title: 'The Wolf of Wall Street', genre: 'Biography', releaseYear: 2013, rating: 8.2 },
  { title: 'Whiplash', genre: 'Drama', releaseYear: 2014, rating: 8.5 },
  { title: 'Mad Max: Fury Road', genre: 'Action', releaseYear: 2015, rating: 8.1 },
  { title: 'Deadpool', genre: 'Action', releaseYear: 2016, rating: 8.0 },
  { title: 'Logan', genre: 'Action', releaseYear: 2017, rating: 8.1 },
  { title: 'John Wick', genre: 'Action', releaseYear: 2014, rating: 7.4 },
  { title: 'La La Land', genre: 'Musical', releaseYear: 2016, rating: 8.0 },
  { title: 'The Revenant', genre: 'Adventure', releaseYear: 2015, rating: 8.0 },
  { title: 'Django Unchained', genre: 'Western', releaseYear: 2012, rating: 8.4 },
  { title: 'The Irishman', genre: 'Crime', releaseYear: 2019, rating: 7.8 },
  { title: 'Shutter Island', genre: 'Thriller', releaseYear: 2010, rating: 8.2 },
  { title: 'Joker', genre: 'Drama', releaseYear: 2019, rating: 8.4 },
  { title: 'Parasite', genre: 'Thriller', releaseYear: 2019, rating: 8.6 },
  { title: 'The Great Gatsby', genre: 'Drama', releaseYear: 2013, rating: 7.2 },
  { title: 'Les Misérables', genre: 'Drama', releaseYear: 2012, rating: 7.6 },
  { title: 'Slumdog Millionaire', genre: 'Drama', releaseYear: 2008, rating: 8.0 },
  { title: 'The Pursuit of Happyness', genre: 'Biography', releaseYear: 2006, rating: 8.0 },
  { title: 'The Prestige', genre: 'Mystery', releaseYear: 2006, rating: 8.5 },
  { title: 'Gone Girl', genre: 'Thriller', releaseYear: 2014, rating: 8.1 },
  { title: 'Get Out', genre: 'Horror', releaseYear: 2017, rating: 7.7 },
  { title: 'A Quiet Place', genre: 'Horror', releaseYear: 2018, rating: 7.5 },
  { title: 'Hereditary', genre: 'Horror', releaseYear: 2018, rating: 7.3 },
  { title: 'The Conjuring', genre: 'Horror', releaseYear: 2013, rating: 7.5 },
  { title: 'It', genre: 'Horror', releaseYear: 2017, rating: 7.3 },
  { title: 'The Exorcist', genre: 'Horror', releaseYear: 1973, rating: 8.0 },
  { title: 'Psycho', genre: 'Horror', releaseYear: 1960, rating: 8.5 },
  { title: 'Alien', genre: 'Sci-Fi', releaseYear: 1979, rating: 8.4 },
  { title: 'Blade Runner', genre: 'Sci-Fi', releaseYear: 1982, rating: 8.1 },
  { title: '2001: A Space Odyssey', genre: 'Sci-Fi', releaseYear: 1968, rating: 8.3 },
  { title: 'Gravity', genre: 'Sci-Fi', releaseYear: 2013, rating: 7.7 },
  { title: 'The Martian', genre: 'Sci-Fi', releaseYear: 2015, rating: 8.0 },
  { title: 'The Thing', genre: 'Horror', releaseYear: 1982, rating: 8.1 },
  { title: 'Arrival', genre: 'Sci-Fi', releaseYear: 2016, rating: 7.9 },
  { title: 'Moonlight', genre: 'Drama', releaseYear: 2016, rating: 7.4 },
  { title: 'Lady Bird', genre: 'Drama', releaseYear: 2017, rating: 7.4 },
  { title: 'Little Women', genre: 'Drama', releaseYear: 2019, rating: 7.8 },
  { title: 'Jojo Rabbit', genre: 'Comedy', releaseYear: 2019, rating: 7.9 },
  { title: 'The Grand Budapest Hotel', genre: 'Comedy', releaseYear: 2014, rating: 8.1 },
  { title: 'Knives Out', genre: 'Mystery', releaseYear: 2019, rating: 7.9 },
  { title: 'Midsommar', genre: 'Horror', releaseYear: 2019, rating: 7.1 },
  { title: 'Once Upon a Time in Hollywood', genre: 'Comedy', releaseYear: 2019, rating: 7.6 },
  { title: 'Bohemian Rhapsody', genre: 'Biography', releaseYear: 2018, rating: 7.9 },
  { title: 'Rocketman', genre: 'Biography', releaseYear: 2019, rating: 7.3 },
  { title: 'Ford v Ferrari', genre: 'Biography', releaseYear: 2019, rating: 8.1 },
  { title: 'The Big Short', genre: 'Biography', releaseYear: 2015, rating: 7.8 },
  { title: 'Spotlight', genre: 'Drama', releaseYear: 2015, rating: 8.1 },
  { title: 'Moneyball', genre: 'Biography', releaseYear: 2011, rating: 7.6 },
  { title: 'The Imitation Game', genre: 'Biography', releaseYear: 2014, rating: 8.0 },
  { title: 'Argo', genre: 'Drama', releaseYear: 2012, rating: 7.7 },
  { title: 'The Theory of Everything', genre: 'Biography', releaseYear: 2014, rating: 7.7 },
  { title: 'Steve Jobs', genre: 'Biography', releaseYear: 2015, rating: 7.2 },
  { title: 'Hidden Figures', genre: 'Biography', releaseYear: 2016, rating: 7.8 },
  { title: '12 Years a Slave', genre: 'Drama', releaseYear: 2013, rating: 8.1 },
  { title: 'The King\'s Speech', genre: 'Biography', releaseYear: 2010, rating: 8.0 },
  { title: 'The Social Dilemma', genre: 'Documentary', releaseYear: 2020, rating: 7.6 },
  { title: 'My Octopus Teacher', genre: 'Documentary', releaseYear: 2020, rating: 8.1 },
  { title: 'The Last Dance', genre: 'Documentary', releaseYear: 2020, rating: 9.1 },
  { title: 'Fyre', genre: 'Documentary', releaseYear: 2019, rating: 7.2 },
  { title: 'Won\'t You Be My Neighbor?', genre: 'Documentary', releaseYear: 2018, rating: 8.4 },
  { title: 'Free Solo', genre: 'Documentary', releaseYear: 2018, rating: 8.2 },
];



const seedMovies = async () => {
  try {
    await connectDb(); 
    await Movie.deleteMany(); 
    await Movie.insertMany(movies); 
    console.log('Movies inserted successfully!');
    mongoose.connection.close(); 
  } catch (error) {
    console.error('Error inserting movies:', error);
    process.exit(1); 
  }
};

seedMovies();
