import { Link, useParams } from 'react-router-dom';

import Image from '../../components/Image';
import Section from '../../components/Section';

import '../../styles/pages/project.css';

import Project from './ProjectPage';

import { lcRepos as repos } from '../../db/projects';

function useProjectId() {
  const params = useParams();
  return params['*'];
}

export default function Projects() {
  const id = useProjectId();

  if (!id)
    return (
      <Section title='Проекты' description='Все проекты (влючая дочерние)'>
        <div className='repos'>
          {repos
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
