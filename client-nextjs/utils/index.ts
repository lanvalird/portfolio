"use client";

import { useEffect } from 'react';
import { usePathname, useRouter, useNavigate } from 'next/navigation';

export const ChangeTitle = () => {
  const pathname = usePathname();

  useEffect(() => {
    const path = pathname.split('/');
    if (path.length >= 1 && path[1] !== '')
      document.title = `@${process.env.NEXT_GITHUB_PROFILE_NAME} – ${
        path[1] === 'project' && 'мои проекты' + (path[2] !== undefined ? ` (#${path[2]})` : '')
      }`;
    else document.title = '◊ lanvalird • Valentin Bird ◊';
  }, [pathname]);

  return null;
};

export const GoToNotFound = () => {
  const nav = useNavigate();

  useEffect(() => {
    nav('/not-found', { replace: true });
  }, [nav]);

  return null;
};
