import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
  return {
    base: mode === 'development' ? '/' : '/test-project-update/',
  };
});
