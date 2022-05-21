import { HomePage } from './pages/home-page';
import { ListPage } from './pages/list-page';
import { LoginPage } from './pages/login-page';
import { TeacherPage } from './pages/teacher-page';

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
    path: '/teacher',
    element: <TeacherPage />,
  },
  {
    path: '/category/:type',
    element: <ListPage />,
  },
];
