import { useState, useEffect } from 'react';

export function Image(props: React.HTMLProps<HTMLImageElement>) {
  const [cover, setCover] = useState<string>('/blog/cover.png');
  useEffect(() => {
    const url = props.src || '';
    const fetchCover = async () => {
      const res = await fetch(url);
      const data = await res.blob();
      if (data.type === 'image/png') setCover(url);
      else setCover('/blog/cover.png');
    };

    try {
      fetchCover();
    } catch {
      /* … */
    }
  }, [props.src]);
  return <img {...props} src={cover} />;
}
