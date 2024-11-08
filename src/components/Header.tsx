import { Link } from 'react-router-dom';

export default function Header(params: React.HTMLProps<HTMLDivElement>) {
  return (
    <header {...params}>
      <h1 className='text-center'>
        <Link to='/'>aculaOne's Portfolio</Link>
      </h1>
    </header>
  );
}
