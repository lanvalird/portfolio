import { useState, useEffect } from 'react';
import notFoundImage from '../assets/nfi.png';

interface Props extends Omit<React.HTMLProps<HTMLImageElement>, 'src'> {
  src: string;
}

export default function MyImage(props: Props) {
  const [cover, setCover] = useState<string | null>(null);

  useEffect(() => {
    setCover(null);
    const loadListener = (e: Event) => {
      if (e.target === null) setCover(notFoundImage);
      setCover(props.src);
    };
    const errorListener = () => {
      setCover(notFoundImage);
    };

    const image = new Image();
    image.addEventListener('load', loadListener);
    image.addEventListener('error', errorListener);
    image.src = props.src;

    return () => {
      image.removeEventListener('load', loadListener);
      image.removeEventListener('error', errorListener);
    };
  }, [props.src]);

  if (cover) return <img {...props} src={cover} />;
  else
    return (
      <div
        {...props}
        className={'animate-pulse bg-lilac-100 dark:bg-lilac-900 ' + (props.className || '')}
      />
    );
}
