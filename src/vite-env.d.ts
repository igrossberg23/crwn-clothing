/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_STRIPE_PUBLISHABLE_KEY: string;
	readonly VITE_NODE_ENV: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
