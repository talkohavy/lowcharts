import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  root: `${process.cwd()}`,
  server: { port: 3000, strictPort: true, open: true },
  plugins: [react()],
});
