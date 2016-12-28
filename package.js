Package.describe({
  name: 'accounts-phone',
  version: '0.0.24',
  summary: 'A login service based on mobile phone number, For Meteor.',
  git: 'https://github.com/productiveme/accounts-phone.git',
  documentation: 'README.md',
});

Npm.depends({
  'phone': '1.0.5',
  'stream-buffers': '3.0.0',
});

Package.onUse(function (api) {
  api.use('npm-bcrypt@0.7.8_2', 'server');

  api.use('accounts-base@1.2.5', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base@1.2.5', ['client', 'server']);
  api.use('srp@1.0.7', ['client', 'server']);
  api.use('sha@1.0.6', ['client', 'server']);
  api.use('random@1.0.8', ['server']);
  api.use('ejson@1.0.10', 'server');
  api.use('callback-hook@1.0.7', 'server');
  api.use('check@1.1.3');
  api.use('underscore@1.0.7');
  api.use('ddp@1.2.4', ['client', 'server']);
  api.addFiles('sms_server.js', 'server');
  api.addFiles('phone_server.js', 'server');
  api.addFiles('phone_client.js', 'client');

  api.export('SMS', 'server');
  api.export('SMSTest', 'server', { testOnly: true });
});

Package.onTest(function (api) {
  api.use([
    'tinytest',
    'test-helpers',
    'tracker',
    'accounts-base',
    'random',
    'underscore',
    'check',
    'ddp',
  ]);
  api.addFiles('phone_tests_setup.js', 'server');
  api.addFiles('phone_tests.js', ['client', 'server']);
  api.addFiles('sms_tests_setup.js', 'server');
  api.addFiles('sms_tests.js', 'client');
});
