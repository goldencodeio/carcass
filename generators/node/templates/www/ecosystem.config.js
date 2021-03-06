const ENVIRONMENT = process.env.ENVIRONMENT;

if (!ENVIRONMENT) {
  console.error('ENVIRONMENT variable not defined!');
  process.exit(1);
}

let apps = [
  {
    name: '<%=appnameSlug%>',
    script: 'index.js'
  }
];

let defaults = {};

if (ENVIRONMENT === 'development') {
  // Watcher
  defaults = Object.assign(defaults, {
    watch: true,
    ignore_watch: [
      'node_modules',
      'public/**',
      'templates/**',
      'logs',
      './**/*.pug',
      './**/*.php',
      './**/*.md',
      'ecosystem.config.js'
    ],
    watch_options: {
      usePolling: true
    },
    max_restarts: 5
  });

  // Add debug params
  const appForDebug = process.env.DEBUG_APP || '<%=appnameSlug%>';
  let debugApp = apps.findIndex((element) => element.name === appForDebug);
  if (debugApp >= 0)
    apps[debugApp].interpreter_args = ['--inspect=0.0.0.0:9229'];
}

// Auto Restart apps on server
if (['production', 'staging'].indexOf(ENVIRONMENT) >= 0)
  defaults = Object.assign(defaults, {autorestart: true});

// Assign default props to apps
apps = apps.map((item) => Object.assign(item, defaults));

module.exports = {apps};
