'use client';

import { useState, useEffect } from 'react';

interface Props extends Omit<React.HTMLProps<HTMLImageElement>, 'src'> {
  src: string;
}

export default function MyImage(props: Props) {

return <Image {...props}  />;
}
