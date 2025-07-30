import Link from 'next/link';

export default function Header(params: React.HTMLProps<HTMLDivElement>) {
  return (
    <header {...params}>
      <h1 className='text-center'>
        <Link href='/'>{process.env.NEXT_GITHUB_PROFILE_NAME}</Link>
      </h1>
    </header>
  );
}
