import { defineConfig } from 'vite'

export default defineConfig({
  esbuild: {
    jsxImportSource: 'hono/jsx/dom',
  },
  publicDir: false,
  build: {
    outDir: 'public',
    emptyOutDir: false,
    rollupOptions: {
      input: {
        app: 'src/client/app/main.tsx',
      },
      output: {
        entryFileNames: 'app/[name].js',
        chunkFileNames: 'app/[name]-[hash].js',
        assetFileNames: 'app/[name][extname]',
      },
    },
  },
})
