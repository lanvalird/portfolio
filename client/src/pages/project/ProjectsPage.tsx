import { Link, useParams } from 'react-router-dom';

import Image from '../../components/Image';
import Section from '../../components/Section';

import '../../styles/pages/project.css';

import Project from './ProjectPage';
import { useEffect, useState } from 'react';

function useProjectId() {
  const params = useParams();
  return params['*'];
}

export default function Projects() {
  const id = useProjectId();

  const [projects, setProjects] = useState<any[]>([]);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: any[] = await fetch(`${import.meta.env.VITE_BACKEND_API}/projects/local`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }).then((r) =>
          r.json().then((data) => {
            data.forEach((p) => {
              p.cover = `/project/${p.id}/cover.png`;
              p.href = `/project/${p.id}`;
            });
            return data;
          }),
        );

        setProjects(data);
      } catch {
        setError(true);
      }
    };

    fetchData();
  }, []);

  if (error)
    return (
      <div className='projects-list grid grid-cols-1 text-center text-rose-500'>
        Произошла ошибка
      </div>
    );

  if (!id)
    return (
      <Section title='Проекты' description='Все проекты (влючая дочерние)'>
        <div className='repos'>
          {projects
            .sort((r1, r2) => (r2.subprojects?.length || 0) - (r1.subprojects?.length || 0))
            .map((r) => (
              <Link
                key={r.id}
                to={r.id}
                className={'repo' + (r.sub ? ' subrepo' : '')}
                title={r.name}
              >
                <Image
                  src={`/project/${r.id}/cover.png`}
                  alt={`${r.id}-${r.name}`}
                  className='cover'
                />
                <div className='name'>
                  <h3>{r.name}</h3>
                </div>
              </Link>
            ))}
        </div>
      </Section>
    );
  else return <Project projectId={id} />;
}
