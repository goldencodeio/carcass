module.exports = {
  base: [
    '.editorconfig',
    '.eslintrc',
    '.htmllintrc',
    '.stylelintrc',
    '.dockerignore',
    '.gitignore',
    '.gitlab-ci.yml',
    'package.json'
  ],
  web: [
    'www/index.php',
    'docker-compose.override.yml',
    'docker-compose.prod.yml',
    'docker-compose.yml',
    'Dockerfile',
    'Dockerfile-prod',
    'entrypoint.sh'
  ],
  bitrix: [
    'www/bitrix/.settings.php',
    'www/migrations/.gitkeep',
    'www/bitrixsetup.php',
    'www/composer.json',
    'custom-xdebug.ini',
    'docker-compose.override.yml',
    'docker-compose.prod.yml',
    'docker-compose.yml',
    'Dockerfile',
    'Dockerfile-prod',
    'entrypoint.sh'
  ],
  node: [
    'nginx/conf.d/default.conf',
    'nginx/Dockerfile',
    'www/lib/middleware.js',
    'www/lib/nav.js',
    'www/lib/wasNew.js',
    'www/logs/.gitkeep',
    'www/models/AppConfig.js',
    'www/models/index.js',
    'www/models/Mail.js',
    'www/models/Page.js',
    'www/models/ResetPasswordRequest.js',
    'www/models/User.js',
    'www/public/uploads/.gitkeep',
    'www/routes/api/index.js',
    'www/routes/api/User.js',
    'www/routes/index.js',
    'www/templates/emails/enquiry-default.pug',
    'www/templates/layouts/default.pug',
    'www/templates/layouts/email.pug',
    'www/templates/mixins/flash-messages.pug',
    'www/templates/views/ng/.gitkeep',
    'www/templates/views/index.pug',
    'www/updates/0.0.1-admins.js',
    'www/updates/0.0.2-app-config.js',
    'www/.eslintrc',
    'www/ecosystem.config.js',
    'www/index.js',
    'www/package.json',
    '.pug-lintrc',
    'docker-compose.override.yml',
    'entrypoint.sh',
    'Dockerfile-prod',
    'Dockerfile',
    'docker-compose.yml',
    'docker-compose.prod.yml'
  ]
};