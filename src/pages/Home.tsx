import { Link } from 'react-router-dom';

import posts from '../db/posts';
import projects from '../db/projects';
import { useState, useEffect } from 'react';

export default function Home() {
  return (
    <>
      <Section
        title='Последние посты'
        description='Последние пять постов из моего блога'
        className='flow top-4 flex w-full min-w-56 flex-col bg-lilac-50 text-center text-lilac-800 shadow-lg sm:sticky sm:w-[15%] sm:max-w-lg'
      >
        <div className='mt-6 flex flex-col gap-4 rounded-md'>
          {posts.slice(0, 5).map((p) => (
            <Post
              post={{
                id: p.id,
                name: p.title,
                href: `/blog/${p.id}`,
              }}
            />
          ))}
        </div>
      </Section>

      <div className='flex flex-col gap-6'>
        <Section title='Мои репозитории' description='Все мои публичные репозитории на GitHub'>
          <div className='mt-6 grid grid-cols-1 gap-4 rounded-md md:grid-cols-2 lg:grid-cols-3'>
            {projects.map((p) => (
              <Post
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
            {[
              {
                name: 'GevaUI',
                id: 'gevaui',
                href: '/gevaui',
              },
              {
                name: 'LAF Site',
                id: 'laf-info-site',
                href: 'https://laf-info.netlify.app',
              },
            ].map((p) => (
              <Post post={p} />
            ))}
          </div>
        </Section>
      </div>
    </>
  );
}

function Section(
  props: React.HTMLProps<HTMLDivElement> & {
    title?: string;
    description?: string;
  },
) {
  return (
    <section
      {...props}
      title={undefined}
      className={
        'flow w-full bg-light-100 text-center shadow-lg' +
        (props.className !== undefined ? ` ${props.className}` : '')
      }
    >
      {props.title && <h1 className='mb-2 font-semibold'>{props.title}</h1>}
      {props.description && <p className='mb-2'>{props.description}</p>}
      {props.children}
    </section>
  );
}

function Post({ post }: { post: { name: string; id: number | string; href: string } }) {
  const [cover, setCover] = useState<string | null>(null);
  useEffect(() => {
    const url = `/repos/covers/${post.name}.png`;
    const fetchCover = async () => {
      const res = await fetch(url);
      const data = await res.blob();
      if (data.type === 'image/png') setCover(url);
    };

    try {
      fetchCover();
    } catch {
      /* empty */
    }
  }, [post.name]);

  return (
    <Link
      to={post.href}
      className='flow overflow-hidden p-0 shadow-sm hover:shadow-md'
      title={post.name}
    >
      <img
        src={cover || `/blog/cover.png`}
        alt={`${post.id}-${post.name}`}
        className='aspect-[3_/_1] object-cover'
      />
      <div className='px-4 py-2'>
        <h3 className='line-clamp-2'>{post.name}</h3>
      </div>
    </Link>
  );
}
