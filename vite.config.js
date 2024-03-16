import reactRefresh from '@vitejs/plugin-react-refresh';
import { defineConfig } from 'vite';
import reactPages from 'vite-plugin-react-pages';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), reactPages()],
  base: "/vite-react-router/"
});
