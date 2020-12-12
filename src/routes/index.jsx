import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from '../views/Main';
import Cinemas from '../views/Cinemas';
import CinemaDetails from '../views/CinemaDetails';
import MovieDetails from '../views/MovieDetails';
import ComingSoon from '../views/ComingSoon';

const StackNavigator = createStackNavigator({
  Main,
  Cinemas,
  CinemaDetails,
  MovieDetails,
  ComingSoon
});

export default createAppContainer(StackNavigator);
