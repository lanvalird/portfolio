import { useParams, useNavigate } from 'react-router-dom';
import { Section } from '../components/Section';
import posts from '../db/posts';
import Image from '../components/Image';
import { useEffect } from 'react';
import { CalendarOutlined } from '@ant-design/icons';

export default function Blog() {
  const { id } = useParams();
  const nav = useNavigate();

  const post = posts.find((p) => p.id === parseInt(id || ''));
  const isExist = post === undefined;

  useEffect(() => {
    if (isExist) {
      nav('/', { replace: true });
    }
  }, [isExist, nav]);

  // Чтобы в дальнейшем не писать "repo?."
  if (isExist) return null;
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
      </div>

      <div className='flex w-full flex-col gap-6'>
        <Section title={post.title}>
          {post.image && (
            <>
              <hr className='my-2' />

              <div className='overflow-hidden rounded-b-none rounded-t-lg p-0 shadow-sm hover:shadow-md'>
                <Image
                  src={post.image}
                  alt={`${id}-${post.title}-cover`}
                  className='aspect-[2_/_1] rounded-none object-cover'
                />
              </div>
            </>
          )}

          <span
            className={`flex select-none flex-row items-center justify-center gap-2 ${post.image ? 'rounded-b-lg rounded-t-none' : 'mx-auto max-w-32 rounded-lg'} border-x-2 border-lilac-500 bg-lilac-100 px-3 py-1 text-sm text-lilac-400 dark:border-lilac-600 dark:bg-lilac-900 dark:text-lilac-600`}
          >
            <CalendarOutlined /> {post.date}
          </span>

          <div className='select-none text-center text-sm'>
            <hr className='my-2' />
            {post.description}
            <hr className='my-2' />
          </div>

          <div className='mt-6 rounded-md'>
            {post.content.map((r, id) => (
              <p key={id} className='list-inside list-disc marker:text-lilac-500'>
                {r}
              </p>
            ))}
          </div>
        </Section>
      </div>
    </>
  );
}
