import { useState, useEffect } from 'react';

export default function MyImage(props: React.HTMLProps<HTMLImageElement>) {
  const [cover, setCover] = useState<string>('');
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);

    const url = props.src || '';
    const fetchCover = async () => {
      try {
        const res = await fetch(url);
        const data = await res.blob();
        if (data.type === 'image/png') setCover(url);
        else throw new Error('Not an image');
      } catch {
        setCover('/blog/cover.png');
      }
    };

    fetchCover();
  }, [props.src]);

  useEffect(() => {
    setLoading(true);

    const img = new Image();
    img.onload = () => setLoading(false);
    img.src = cover;
  }, [cover]);

  if (isLoading || !cover)
    return (
      <div
        {...props}
        className={'animate-pulse bg-lilac-100 dark:bg-lilac-900 ' + (props.className || '')}
      />
    );
  else return <img {...props} src={cover} />;
}
