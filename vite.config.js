import { defineConfig } from 'vite';
import reactPages from 'vite-plugin-react-pages';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactPages()],
  base: "/vite-react-router/"
});
