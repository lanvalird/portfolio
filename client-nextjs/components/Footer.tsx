export default function Footer(params: React.HTMLProps<HTMLDivElement>) {
  return (
    <footer {...params}>
      <span>
        Моя GitHub страница –{' '}
        <a
          href={`https://github.com/${process.env.NEXT_GITHUB_PROFILE_NAME}`}
          style={{
            color: 'var(--bg-color-light)',
          }}
          className='transition-opacity hover:opacity-75'
        >
          @{process.env.NEXT_GITHUB_PROFILE_NAME}
        </a>
      </span>
    </footer>
  );
}
