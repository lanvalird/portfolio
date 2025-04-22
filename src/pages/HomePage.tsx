import { Link } from 'react-router-dom';
import Section from '../components/Section';
import Image from '../components/Image';

import faceImg from '../assets/face.png';

import { ghRepos, lcRepos } from '../db/projects';
import skills from '../db/skills';

import '../styles/pages/home.css';

export default function Home() {
  return (
    <div className='flex w-full flex-col gap-6'>
      <Section className='welcome'>
        <img src={faceImg} alt='Me' width='200' height='200' />
        <div className='heading'>
          Привет, меня зовут <span>Валентином Бёрдэ</span>
          <div className='roles'>
            {['Фронтенд-разработчик', 'Веб-дизайнер'].map((role) => (
              <span key={role}>{role}</span>
            ))}
          </div>
        </div>
      </Section>
      <div className='skills-section'>
        <h2>Навыки:</h2>
        <div className='skills'>
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </div>
      <Section title='Мои репозитории' description='Все мои публичные репозитории на GitHub'>
        <div className='projects-list'>
          {ghRepos.map((p) => (
            <Post
              key={p.id}
              type='minimaze'
              post={{
                id: p.id,
                name: p.name,
                href: `${import.meta.env.VITE_GITHUB_PROFILE_NAME}/${p.name}`,
              }}
            />
          ))}
        </div>
      </Section>
      <Section title='Другое' description='Что-то, что не попало в предыдущую секцию'>
        <div className='projects-list'>
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
