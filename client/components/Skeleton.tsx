export default function Skeleton(props: React.HTMLProps<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={'animate-pulse bg-lilac-100 dark:bg-lilac-900 ' + (props.className || '')}
    />
  );
}
