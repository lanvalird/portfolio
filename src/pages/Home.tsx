import { Link } from 'react-router-dom';

import posts from '../db/posts';
import { ghRepos, lcRepos } from '../db/projects';
import { Section } from '../components/Section';
import { Image } from '../components/Image';

export default function Home() {
  return (
    <>
      <Section
        title='Последние посты'
        className='flow top-4 flex w-full min-w-56 flex-col bg-lilac-50 text-center text-lilac-800 shadow-lg sm:sticky sm:w-[15%] sm:max-w-lg dark:bg-lilac-950 dark:text-lilac-200'
      >
        <div className='mt-6 flex flex-col gap-4 rounded-md'>
          {posts
            .slice(-5)
            .reverse()
            .map((p) => (
              <Post
                key={p.id}
                post={{
                  id: p.id,
                  name: p.title,
                  href: `/blog/${p.id}`,
                }}
              />
            ))}
        </div>
      </Section>

      <div className='flex w-full flex-col gap-6'>
        <Section title='Мои репозитории' description='Все мои публичные репозитории на GitHub'>
          <div className='mt-6 grid grid-cols-1 gap-4 rounded-md md:grid-cols-2 lg:grid-cols-3'>
            {ghRepos.map((p) => (
              <Post
                key={p.id}
                post={{
                  id: p.id,
                  name: p.name,
                  href: `https://github.com/aculaOne/${p.name}`,
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
    </>
  );
}

function Post({
  post,
  post: { cover: originCover },
}: {
  post: { name: string; id: number | string; href: string; cover?: string };
}) {
  return (
    <Link
      to={post.href}
      className='flow overflow-hidden p-0 shadow-sm hover:shadow-md'
      title={post.name}
    >
      <Image
        src={originCover || `/repos/covers/${post.name}.png` || `/blog/cover.png`}
        alt={`${post.id}-${post.name}`}
        className='aspect-[3_/_1] object-cover'
      />
      <div className='px-4 py-2'>
        <h3 className='line-clamp-2'>{post.name}</h3>
      </div>
    </Link>
  );
}
