import { GrammarPage } from './pages/grammar-page';
import { HomePage } from './pages/home-page';
import { ListPage } from './pages/list-page';
import { LoginPage } from './pages/login-page';
import { NumbersPage } from './pages/numbers-page';
import { PracticePage } from './pages/practice-page';

export const routes = [
  {
    path: '/LearningEnglish',
    element: <LoginPage />,
  },
  {
    path: '/home',
    element: <HomePage />,
  },

  {
    path: '/category/:type',
    element: <ListPage />,
  },

  {
    path: '/numbers',
    element: <NumbersPage />,
  },
  {
    path: '/practice',
    element: <PracticePage />,
  },
  {
    path: '/grammar',
    element: <GrammarPage />,
  },
];
