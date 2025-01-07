import { Link, useParams, useNavigate } from 'react-router-dom';
import { Section } from '../components/Section';
import { lcRepos as repos } from '../db/projects';
import Image from '../components/Image';
import { useEffect, useState } from 'react';
import { CloseCircleOutlined, CodeOutlined } from '@ant-design/icons';

export default function Project() {
  const { id } = useParams();
  const nav = useNavigate();

  const repo = repos.find((r) => r.id === id);
  const isExist = !(repo === undefined);

  useEffect(() => {
    if (!isExist) {
      nav('/project', { replace: true });
    }
  }, [isExist, nav]);

  if (id === undefined || !isExist)
    return (
      <Section title='Проекты' description='Все проекты (влючая дочерние)'>
        <div className='mt-6 grid grid-cols-1 gap-4 rounded-md md:grid-cols-2 lg:grid-cols-3'>
          {repos
            .sort((r1, r2) => (r2.subprojects?.length || 0) - (r1.subprojects?.length || 0))
            .map((r) => (
              <Link
                key={r.id}
                to={r.id}
                className={
                  'flow overflow-hidden p-0 shadow-sm hover:shadow-md' +
                  (r.sub ? ' opacity-50' : '')
                }
                title={r.name}
              >
                <Image
                  src={`/project/${r.id}/cover.png`}
                  alt={`${r.id}-${r.name}`}
                  className='aspect-[3_/_1] object-cover'
                />
                <div className='px-4 py-2'>
                  <h3 className='line-clamp-2'>{r.name}</h3>
                </div>
              </Link>
            ))}
        </div>
      </Section>
    );
  else
    return (
      <>
        <div className='flex w-full min-w-56 flex-col gap-6 sm:w-[15%] sm:max-w-lg'>
          <Section>
            <button
              onClick={() => nav(-1)}
              className='w-full rounded-lg border-2 border-lilac-500 px-4 py-2 text-lilac-500 shadow-sm hover:shadow-md dark:border-lilac-600 dark:text-lilac-600'
            >
              Вернуться
            </button>
          </Section>
          <Section title={repo?.name}>
            <div className='mt-6 flex flex-col gap-4 rounded-md'>
              <div className='flow overflow-hidden p-0 shadow-sm hover:shadow-md'>
                <Image
                  src={`/project/${id}/logo.png`}
                  alt={`${id}-logo`}
                  className='aspect-square object-cover'
                />
              </div>

              {repo?.language && (
                <span className='flex select-none flex-row items-center justify-center gap-2 rounded-lg border-x-2 border-lilac-500 bg-lilac-100 px-3 py-1 text-sm text-lilac-400 dark:border-lilac-600 dark:bg-lilac-900 dark:text-lilac-600'>
                  <CodeOutlined /> {repo.language}
                </span>
              )}

              {repo && repo.url !== null ? (
                <Link
                  to={repo?.url}
                  target='_blank'
                  className='w-full rounded-lg bg-gradient-to-t from-lilac-500 to-lilac-300 px-4 py-2 text-center text-light-100 shadow-sm hover:shadow-md'
                >
                  Перейти на сайт
                </Link>
              ) : (
                <div className='w-full select-none rounded-lg bg-slate-300 bg-gradient-to-t px-4 py-2 text-center text-slate-500 shadow-none dark:bg-slate-700'>
                  Перейти на сайт
                </div>
              )}
            </div>
          </Section>

          {repo.topics.length > 0 && (
            <Section title='Темы'>
              <div className='flex w-full flex-row flex-wrap items-center justify-center gap-2'>
                {repo.topics.map((t) => (
                  <span
                    key={t}
                    className='min-w-12 select-none rounded-full bg-lilac-100 px-2 py-1 text-center text-xs text-lilac-400 dark:bg-lilac-900 dark:text-lilac-600'
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Section>
          )}

          {repo.images && repo.images.length <= 3 && (
            <Gallery type='column' images={repo.images} id={repo.id} />
          )}
        </div>

        <div className='flex w-full flex-col gap-6'>
          <Section title='Описание' description='Зачем вообще нужен этот продукт'>
            <div className='mt-6 rounded-md'>{repo?.description}</div>
          </Section>

          {repo.images && repo.images.length > 3 && (
            <Gallery type='row' images={repo.images} id={repo.id} />
          )}

          {repo.requirements && (
            <Section
              title='Требования'
              description='Условия, при которых разрабатывался данный продукт'
            >
              <ul className='mt-6 rounded-md'>
                {repo.requirements.map((r, id) => (
                  <li key={id} className='list-inside list-disc marker:text-lilac-500'>
                    {r}
                  </li>
                ))}
              </ul>
            </Section>
          )}
          {repo.subprojects && (
            <Section title='Подпроекты'>
              <div className='mt-6 grid grid-cols-1 gap-4 rounded-md md:grid-cols-2 lg:grid-cols-3'>
                {repo.subprojects.map((p) => {
                  const name = repos.find((rf) => rf.id === p)?.name || '';

                  return (
                    <Link
                      key={p}
                      to={`/project/${p}`}
                      className='flow overflow-hidden p-0 shadow-sm hover:shadow-md'
                      title={name}
                    >
                      <Image
                        src={`/project/${p}/cover.png`}
                        alt={`${p}-${name}`}
                        className='aspect-[3_/_1] object-cover'
                      />
                      <div className='px-4 py-2'>
                        <h3 className='line-clamp-2'>{name}</h3>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </Section>
          )}
        </div>
      </>
    );
}

function Screenshot({ name, onClick }: { name: string; onClick?: () => void }) {
  const { id } = useParams();

  return (
    <button className='flow block aspect-[2_/_1] w-full p-0 shadow-sm hover:shadow-md' title={name}>
      <Image
        src={`/project/${id}/${name}.png`}
        alt={`${id}-${name}`}
        onClick={onClick}
        className='h-full w-full rounded-sm object-cover object-top'
      />
    </button>
  );
}

function Gallery({ images, id, type }: { images: string[]; id: string; type: 'column' | 'row' }) {
  const [fullScreenShot, setFSS] = useState<string>('');

  return (
    <Section
      title='Скриншоты'
      className={
        'flow top-4 flex flex-col bg-lilac-50 text-center text-lilac-800 shadow-lg dark:bg-lilac-950 dark:text-lilac-200'
      }
    >
      {fullScreenShot && (
        <div className='fixed left-0 right-0 top-0 z-50 flex h-full max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden backdrop-blur backdrop-brightness-50 md:inset-0'>
          <div className='relative max-h-full w-full max-w-6xl p-4'>
            <div className='flow relative min-h-16 p-2 shadow-lg'>
              <button
                type='button'
                className='absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-light-100/75 text-lilac-950 dark:bg-dark-100/75 dark:text-lilac-50'
                onClick={() => setFSS('')}
              >
                <CloseCircleOutlined />
              </button>
              <Image src={`/project/${id}/${fullScreenShot}.png`} className='mx-auto rounded-sm' />
            </div>
          </div>
        </div>
      )}

      <div
        className={`mt-6 grid ${
          type === 'column'
            ? 'grid-cols-1'
            : type === 'row'
              ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
              : 'grid-cols-1'
        } gap-4`}
      >
        {images.map((href, id) => (
          <Screenshot key={id} name={href} onClick={() => setFSS(href)} />
        ))}
      </div>
    </Section>
  );
}
