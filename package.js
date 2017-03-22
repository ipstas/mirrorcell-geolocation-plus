Package.describe({
  name:          '37d:mirrorcell-geolocation-plus',
  version:       '1.2.0',
  // Brief, one-line summary of the package.
  summary:       'A Geolocation Abstraction with Manual Starting / Stopping and location storage',
  // URL to the Git repository containing the source code for this package.
  git:           'https://github.com/37d/mirrorcell-geolocation-plus',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Cordova.depends({
  "cordova-plugin-geolocation": "2.4.2",
  "org.flybuy.nativeutils":     "https://github.com/pmwisdom/NativeUtils/tarball/64460ce4e28a346245beb2c5a7413bd67a6c148d"
});

Package.onUse(function (api) {
  api.versionsFrom('1.4');

  api.use(['session', 'reactive-var']);

  api.addFiles('lib/location.js');

  api.export('Location');
});

Package.onTest(function (api) {
});
