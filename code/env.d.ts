/**
 * Tipos para variables de entorno
 * Extiende las definiciones de NodeJS.ProcessEnv
 */
declare namespace NodeJS {
  interface ProcessEnv {
    /**
     * Habilita Vercel Analytics explícitamente
     * @default undefined
     */
    NEXT_PUBLIC_ENABLE_VERCEL_ANALYTICS?: string
    
    /**
     * Entorno de ejecución
     * @default 'development'
     */
    NODE_ENV: 'development' | 'production' | 'test'
    
    /**
     * Indica si está ejecutándose en Vercel
     * @default undefined
     */
    VERCEL?: string
    
    /**
     * Para exportación estática (GitHub Pages)
     * @default undefined
     */
    EXPORT_STATIC?: string
    
    /**
     * Base path para el sitio
     * @default ''
     */
    BASE_PATH?: string
  }
}

