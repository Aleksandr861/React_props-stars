import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig({
  plugins: [react()],
  base: "https://aleksandr861.github.io/React_state-layouts/",
  server: {
    open: true,
  },
});
