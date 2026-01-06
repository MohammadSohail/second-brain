module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'chore',
        'ci',
        'build',
        'revert',
      ],
    ],
    'scope-enum': [
      2,
      'always',
      [
        'api-gateway',
        'user-service',
        'document-service',
        'knowledge-service',
        'ai-service',
        'web',
        'mobile',
        'shared',
        'infra',
        'docs',
        'deps',
        'root'
      ],
    ],
    'subject-case': [2, 'always', 'lower-case'],
    'header-max-length': [2, 'always', 100],
  },
};
