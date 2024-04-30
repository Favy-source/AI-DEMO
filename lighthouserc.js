module.exports = {
    ci: {
        collect: {
            url: ['http://localhost:3000/'],
            startServerCommand: 'pnpm run start',
            numberOfRuns: 5,
    },
      assert: {
        assertions: {
          'categories:performance': ['warn', {minScore: 1}],
          'categories:accessibility': ['error', {minScore: 1}]
        }
      },
        upload: {
          target: 'temporary-public-storage',
        },
      },
  };