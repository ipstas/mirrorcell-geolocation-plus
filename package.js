Package.describe({
  name:          'ipstas:mirrorcell-geolocation-plus',
  version:       '1.2.2',
  // Brief, one-line summary of the package.
  summary:       'A Geolocation Abstraction with Manual Starting / Stopping and location storage',
  // URL to the Git repository containing the source code for this package.
  git:           'https://github.com/ipstas/mirrorcell-geolocation-plus',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Cordova.depends({
  "cordova-plugin-geolocation": "4.0.1",
});

Package.onUse(function (api) {
  api.versionsFrom('1.7');

  api.use(['session', 'reactive-var']);

  api.addFiles('lib/location.js');

  api.export('Location');
});

Package.onTest(function (api) {
});
