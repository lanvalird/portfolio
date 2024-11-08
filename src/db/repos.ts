import { Project, LocalProject } from '../types/Project.ts';

const response = await fetch('https://api.github.com/users/aculaOne/repos');
export const ghRepos: Project[] = await response.json();

export const lcRepos: LocalProject[] = [
  {
    id: 'gevaui',
    name: 'GevaUI',
    description: 'UI библиотека компонентов и стилей для TailwindCSS',
    requirements: [
      'Современный дизайн',
      'Мягкость и элегантность (эксперимент)',
      'Лёгкость',
      'Грусть и воодушевление (эксперимент)',
      'В общем: сделать красиво и сочесть несочетаемое',
    ],
    language: null,
    url: null,
    topics: ['Web', 'React', 'Kit', 'UI'],
    images: ['/preview'],
  },
  {
    id: 'ferisian_book',
    name: 'Ferisian Book',
    description:
      'Учебник был создан для реализации онлайн-книги для обучения ферийского языка, а также посвящён обновлению и совершенствованию креативных навыков.',
    requirements: [
      'Изучить новый фреймворк для создания документаций и тп',
      'Мультиязычность',
      'Удобство пользования',
      'Реализация поиска по словарю',
      'Использовать React',
    ],
    language: 'TypeScript',
    url: 'https://ferisian-book.netlify.app',
    topics: ['Web', 'React', 'Remix'],
    images: ['/preview/0', '/preview/1', '/preview/2', '/preview/3'],
  },
  {
    id: 'laf-info-site',
    name: 'LAF Site',
    description: 'Сайт команды LAF',
    requirements: ['Создать фронтенд для сайта'],
    language: 'TypeScript',
    url: 'https://laf-info.netlify.app',
    topics: ['Web', 'React', 'Vite', 'Team'],
  },
];
