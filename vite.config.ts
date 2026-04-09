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
        aboutIsland: 'src/client/islands/about.tsx',
        contactIsland: 'src/client/islands/contact.tsx',
        app: 'src/client/app/main.tsx',
      },
      output: {
        entryFileNames: (chunkInfo) => {
          if (chunkInfo.name === 'aboutIsland') {
            return 'islands/about.js'
          }

          if (chunkInfo.name === 'contactIsland') {
            return 'islands/contact.js'
          }

          return 'app/[name].js'
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name][extname]',
      },
    },
  },
})
