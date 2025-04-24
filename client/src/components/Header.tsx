import { Link } from 'react-router-dom';

export default function Header(params: React.HTMLProps<HTMLDivElement>) {
  return (
    <header {...params}>
      <h1 className='text-center'>
        <Link to='/'>{import.meta.env.VITE_GITHUB_PROFILE_NAME}</Link>
      </h1>
    </header>
  );
}
