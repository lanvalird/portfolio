/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GITHUB_PROFILE_URL: string;
  readonly VITE_BACKEND_API: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
