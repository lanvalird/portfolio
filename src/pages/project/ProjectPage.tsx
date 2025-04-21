import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Image from '../../components/Image';
import Section from '../../components/Section';

import { CloseCircleOutlined, CodeOutlined } from '@ant-design/icons';

import '../../styles/pages/project.css';

import { lcRepos as repos } from '../../db/projects';

export default function Project(params: { projectId: string }) {
  const id = params.projectId;
  const project = repos.find((r) => r.id === id);

  const nav = useNavigate();

  useEffect(() => {
    if (!project) {
      nav('/project', { replace: true });
    }
  }, [project, nav]);

  if (!project) return <>Loading</>;
  else
    return (
      <>
        <div className='left-column'>
          <Section>
            <button onClick={() => nav(-1)} className='btn btn-outline w-full'>
              Вернуться
            </button>
          </Section>
          <Section title={project?.name}>
            <div className='mt-6 flex flex-col gap-4 rounded-md'>
              <div className='flow overflow-hidden p-0 shadow-sm hover:shadow-md'>
                <Image
                  src={`/project/${id}/logo.png`}
                  alt={`${id}-logo`}
                  className='aspect-square object-cover'
                />
              </div>

              {project?.language && (
                <span className='flex select-none flex-row items-center justify-center gap-2 rounded-lg border-x-2 border-lilac-500 bg-lilac-100 px-3 py-1 text-sm text-lilac-400 dark:border-lilac-600 dark:bg-lilac-900 dark:text-lilac-600'>
                  <CodeOutlined /> {project.language}
                </span>
              )}

              {project && project.url !== null ? (
                <Link to={project?.url} target='_blank' className='btn btn-primary w-full'>
                  Перейти на сайт
                </Link>
              ) : (
                <button className='btn btn-primary w-full' disabled>
                  Перейти на сайт
                </button>
              )}
            </div>
          </Section>

          {project.topics.length > 0 && (
            <Section title='Темы'>
              <div className='topics'>
                {project.topics.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </Section>
          )}

          {project.images && project.images.length <= 3 && (
            <Gallery type='column' images={project.images} projectId={project.id} />
          )}
        </div>

        <div className='flex w-full flex-col gap-6'>
          <Section title='Описание' description='Зачем вообще нужен этот продукт'>
            <div className='mt-6 rounded-md'>{project?.description}</div>
          </Section>

          {project.images && project.images.length > 3 && (
            <Gallery type='row' images={project.images} projectId={project.id} />
          )}

          {project.requirements && (
            <Section
              title='Требования'
              description='Условия, при которых разрабатывался данный продукт'
            >
              <ul className='mt-6 rounded-md'>
                {project.requirements.map((r, id) => (
                  <li key={id} className='list-inside list-disc marker:text-lilac-500'>
                    {r}
                  </li>
                ))}
              </ul>
            </Section>
          )}
          {project.subprojects && (
            <Section title='Подпроекты'>
              <div className='repos'>
                {project.subprojects.map((p) => {
                  const name = repos.find((rf) => rf.id === p)?.name || '';

                  return (
                    <Link key={p} to={`/project/${p}`} className='repo' title={name}>
                      <Image
                        src={`/project/${p}/cover.png`}
                        alt={`${p}-${name}`}
                        className='cover'
                      />
                      <div className='name'>
                        <h3>{name}</h3>
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

function Screenshot({ href, alt, onClick }: { href: string; alt?: string; onClick?: () => void }) {
  return (
    <button className='flow block aspect-[2_/_1] w-full p-0 shadow-sm hover:shadow-md' title={href}>
      <Image
        src={`/project/${href}.png`}
        alt={alt ?? href}
        onClick={onClick}
        className='h-full w-full rounded-sm object-cover object-top'
      />
    </button>
  );
}

function Gallery({
  images,
  projectId,
  type,
}: {
  images: string[];
  projectId: string;
  type: 'column' | 'row';
}) {
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
              <Image
                src={`/project/${projectId}/${fullScreenShot}.png`}
                className='mx-auto rounded-sm'
              />
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
          <Screenshot key={id} href={`${projectId}/${href}`} onClick={() => setFSS(href)} />
        ))}
      </div>
    </Section>
  );
}
