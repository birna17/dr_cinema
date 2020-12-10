import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from '../views/Main';
import Cinemas from '../views/Cinemas';
import CinemaDetails from '../views/CinemaDetails';
import MovieDetails from '../views/MovieDetails';

const StackNavigator = createStackNavigator({
  Main,
  Cinemas,
  CinemaDetails,
  MovieDetails,
});

export default createAppContainer(StackNavigator);
