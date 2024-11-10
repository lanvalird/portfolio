import { DateTime } from 'luxon';
import { Link } from 'react-router-dom';

const facts = [
  'Первоначальная версия этой страницы была взята и "адаптирована" из проекта, который был отложен в долгий ящик – Icechattix.',
  'Мой GitHub профиль был создан 8 марта 2022 года',
  'Я состою в команде LAF',
  'aculaOne, то есть я, создатель FarySD',
  'Этот сайт использует Vite для сборки',
  `Сайт использует Luxon, а не MomentJS. Кстати, сегодня ${DateTime.now().toLocaleString()}.`,
  'Geva – это что-то на душевном',
  'FarySD создан, как эксперимент в прошлом и дело в настоящем',
  'Этот сайт использует TailwindCSS и надстройку под GevaUI',
  '"Наш пушистик прошерстил весь сайт, но даже его шустрые лапки с острыми коготками не сумели закотить эту страницу!"',
];
const forRand = { max: facts.length - 1, min: 0 };

export default function NotFound() {
  return (
    <section className='flow flow mx-auto mt-16 w-full max-w-4xl rounded-lg bg-light-100 text-center shadow-lg dark:bg-dark-100'>
      <h1 className='tex-4xl mb-2 font-semibold'>404</h1>
      <p className='mb-6 text-pretty sm:mx-auto sm:max-w-lg'>
        <h2 className='mb-2'>Время фактов</h2>
        <span>
          {facts[Math.floor(Math.random() * (forRand.max - forRand.min + 1) + forRand.min)]}
        </span>
      </p>
      <Link
        to='/'
        className='rounded-lg bg-gradient-to-t from-lilac-500 to-lilac-300 px-4 py-2 text-light-100 shadow-sm'
      >
        Хорошо, давай домой
      </Link>
    </section>
  );
}
