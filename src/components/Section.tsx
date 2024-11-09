export function Section(
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
        'flow w-full bg-light-100 shadow-lg dark:bg-dark-100 dark:shadow-black/5' +
        (props.className !== undefined ? ` ${props.className}` : '')
      }
    >
      {props.title && <h1 className='mb-2 text-center font-semibold'>{props.title}</h1>}
      {props.description && <p className='mb-2 text-center'>{props.description}</p>}
      {props.children}
    </section>
  );
}
