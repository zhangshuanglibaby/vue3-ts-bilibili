declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const Component: DefineComponent<{},{},any>
  export default Component
}


// 环境变量 TypeScript的智能提示
interface ImportMetaEnv {
	VITE_APP_TITLE: string;
	VITE_APP_PORT: string;
	VITE_APP_BASE_API: string;
}
 
interface ImportMeta {
	readonly env: ImportMetaEnv;
}