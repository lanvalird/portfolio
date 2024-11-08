import { Link, useParams } from 'react-router-dom';
import { Section } from '../components/Section';
import { lcRepos as repos } from '../db/repos';
import NotFound from './NotFound';
import { Image } from '../components/Image';

export default function Project() {
  const { id } = useParams();
  const repo = repos.find((r) => r.id === id);

  if (repo === undefined) return <NotFound />;

  return (
    <>
      <div className='flex w-full min-w-56 flex-col gap-6 sm:w-[15%] sm:max-w-lg'>
        <Section title={repo.name}>
          <div className='mt-6 flex flex-col gap-4 rounded-md'>
            <div className='flow overflow-hidden p-0 shadow-sm hover:shadow-md'>
              <Image
                src={`/projects/${id}/logo.png`}
                alt={`${id}-logo`}
                className='aspect-square object-cover'
              />
            </div>
          </div>
        </Section>

        <Section
          title='Скриншоты'
          className='flow top-4 flex flex-col bg-lilac-50 text-center text-lilac-800 shadow-lg'
        >
          <div className='mt-6 flex flex-col gap-4 rounded-md'>
            {repo.images?.map((href, id) => <Screenshot name={href} key={id} />)}
            {repo.url !== null ? (
              <Link
                to={repo.url}
                target='_blank'
                className='rounded-lg bg-gradient-to-t from-lilac-500 to-lilac-300 px-4 py-2 text-light-100 shadow-sm hover:shadow-md'
              >
                Смотреть превью
              </Link>
            ) : (
              <div className='select-none rounded-lg bg-slate-300 bg-gradient-to-t px-4 py-2 text-slate-500 shadow-none'>
                Смотреть превью
              </div>
            )}
          </div>
        </Section>
      </div>

      <div className='flex w-full flex-col gap-6'>
        <Section title='Описание' description='Зачем вообще нужен этот продукт'>
          <div className='mt-6 rounded-md'>{repo.description}</div>
        </Section>
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
      </div>
    </>
  );
}

function Screenshot({ name }: { name: string }) {
  const { id } = useParams();
  return (
    <div className='flow overflow-hidden p-0 shadow-sm hover:shadow-md' title={name}>
      <Image
        src={`/projects/${id}/${name}.png`}
        alt={`${id}-${name}`}
        className='aspect-[2_/_1] object-cover'
      />
    </div>
  );
}
