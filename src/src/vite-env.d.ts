/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly MODE: string
  readonly PROD: boolean
  readonly DEV: boolean
  readonly SSR: boolean
  readonly BASE_URL: string
  // Add other env variables here if needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}