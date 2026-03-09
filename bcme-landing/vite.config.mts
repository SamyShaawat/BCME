import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin';
import path from 'path';

export default defineConfig(() => ({
  root: import.meta.dirname,
  base: './',
  cacheDir: './node_modules/.vite/bcme-landing',

  resolve: {
    alias: {
      '@constants': path.resolve(import.meta.dirname, './src/constants'),
      '@enums': path.resolve(import.meta.dirname, './src/enums'),
      '@app-types': path.resolve(import.meta.dirname, './src/types'),
      '@hooks': path.resolve(import.meta.dirname, './src/hooks'),
      '@utils': path.resolve(import.meta.dirname, './src/utils'),
      '@components': path.resolve(import.meta.dirname, './src/app/components'),
      '@ui': path.resolve(import.meta.dirname, './src/app/components/ui'),
      '@app': path.resolve(import.meta.dirname, './src/app'),
    },
  },

  server: {
    port: 4700,
    host: 'localhost',
    watch: {
      usePolling: true,
      interval: 1000,
    },
  },

  preview: {
    port: 4600,
    host: 'localhost',
  },

  plugins: [
    tailwindcss(),
    react(),
    nxViteTsPaths(),
    nxCopyAssetsPlugin(['*.md']),
  ],

  build: {
    outDir: './dist',
    emptyOutDir: false,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          seo: ['react-helmet-async'],
        },
      },
    },
  },
}));
