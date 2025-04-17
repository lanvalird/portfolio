import { Link } from 'react-router-dom';
import Section from '../components/Section';
import Image from '../components/Image';

import faceImg from '../assets/face.png';

import { ghRepos, lcRepos } from '../db/projects';

export default function Home() {
  return (
    <div className='flex w-full flex-col gap-6'>
      <Section className='align-center mx-auto flex max-w-2xl flex-col justify-between gap-12 font-[Prata,_theme("fontFamily.sans")] text-2xl md:flex-row'>
        <img src={faceImg} alt='Me' width='200' height='200' className='mx-auto rounded-lg' />
        <div className='align-center flex w-full flex-col justify-center text-nowrap text-center md:text-right'>
          Привет, меня зовут{' '}
          <p className='text-wrap text-4xl font-semibold text-lilac-600 dark:text-lilac-400'>
            Валентином Бёрдэ
          </p>
          <div className='mt-4 flex w-full flex-row flex-wrap items-center justify-center gap-2 md:justify-end'>
            {['Фронтенд-разработчик', 'Веб-дизайнер'].map((t) => (
              <span
                key={t}
                className='min-w-12 select-none rounded-full bg-lilac-100 px-2 py-1 text-center text-xs text-lilac-400 dark:bg-lilac-900 dark:text-lilac-600'
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </Section>
      <div className='mx-auto mb-8 mt-4 flex w-full max-w-2xl flex-col flex-wrap items-center justify-between gap-2 md:flex-row'>
        <h2>Навыки:</h2>
        <div className='grid grid-cols-4 flex-wrap gap-2 md:flex'>
          {[
            'Git',
            'JavaScript',
            'TypeScript',
            'Java',
            'npm',
            'pnpm',
            'yarn',
            'React',
            'Next.js',
            'Remix',
            'Astro',
            'Vue',
            'Vite',
            'Webpack',
            'Boostrap',
            'Tailwind CSS',
            'daisyUI',
            'shadcn/ui',
            'Eslint',
            'Prettier',
            'Node',
            'Express',
            'Socket.IO',
            'Axios',
            'Prisma',
            'TypeORM',
            'Sequelize',
          ].map((t) => (
            <span
              key={t}
              className='min-w-12 select-none rounded-md border-l-2 border-l-dark-300 px-2 py-1 text-center text-xs text-dark-300 dark:border-b-light-300 dark:border-l-light-300 dark:text-light-300'
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      <Section title='Мои репозитории' description='Все мои публичные репозитории на GitHub'>
        <div className='mt-6 grid grid-cols-1 gap-4 rounded-md sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {ghRepos.map((p) => (
            <Post
              key={p.id}
              type='minimaze'
              post={{
                id: p.id,
                name: p.name,
                href: `${import.meta.env.VITE_GITHUB_PROFILE_URL}/${p.name}`,
              }}
            />
          ))}
        </div>
      </Section>
      <Section title='Другое' description='Что-то, что не попало в предыдущую секцию'>
        <div className='mt-6 grid grid-cols-1 gap-4 rounded-md md:grid-cols-2 lg:grid-cols-3'>
          {lcRepos
            .filter((p) => p.sub !== true)
            .map((p) => (
              <Post
                key={p.id}
                post={{
                  id: p.id,
                  name: p.name,
                  href: `project/${p.id}`,
                  cover: `project/${p.id}/cover.png`,
                }}
              />
            ))}
        </div>
      </Section>
    </div>
  );
}

function Post({
  post,
  type = 'full',
  post: { cover: originCover },
}: {
  type?: 'full' | 'minimaze';
  post: {
    name: string;
    id: number | string;
    href: string;
    cover?: string;
  };
}) {
  return (
    <Link
      to={post.href}
      className='flow overflow-hidden p-0 shadow-sm hover:shadow-md'
      title={post.name}
    >
      {type !== 'minimaze' && (
        <Image
          src={originCover || `/repos/covers/${post.name}.png` || `/blog/cover.png`}
          alt={`${post.id}-${post.name}`}
          className='aspect-[3_/_1] object-cover'
        />
      )}
      <div className='px-4 py-2'>
        <h3 className='line-clamp-2'>{post.name}</h3>
      </div>
    </Link>
  );
}
