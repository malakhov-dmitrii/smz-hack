import Todos from './scenes/Todos';
import Welcome from './scenes/Welcome';
import profile from './scenes/profile';
import materials from './scenes/materials';
import homework from './scenes/homework';
import SpecialistProfile from './scenes/profile/SpecialistProfile';
import Messages from './scenes/Messages';
import Login from './scenes/Login';

export default [
  {
    id: 1,
    path: '/',
    children: Welcome,
    useWith: ['header'],
  },
  {
    id: 2,
    path: '/profile',
    children: profile,
    useWith: ['header'],
  },
  {
    id: 3,
    path: '/materials',
    children: materials,
    useWith: ['header'],
  },
  {
    id: 4,
    path: '/homework',
    children: homework,
    useWith: ['header'],
  },
  {
    id: 6,
    path: '/messages',
    children: Messages,
    useWith: ['header'],
  },
  {
    id: 5,
    path: '/login',
    children: Login,
    useWith: ['header'],
  },
];
