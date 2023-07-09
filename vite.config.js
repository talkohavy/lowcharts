import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  root: `${process.cwd()}`,
  server: { port: 3000, strictPort: true, open: true },
  plugins: [react()],
  preview: { port: 3001, strictPort: true, open: true },
  resolve: { alias: { '@src': path.resolve(__dirname, 'src') } },
});
