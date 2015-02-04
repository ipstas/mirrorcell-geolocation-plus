Package.describe({
    name: 'mirrorcell:geolocation-plus',
    version: '0.0.1',
    // Brief, one-line summary of the package.
    summary: 'A geolocation package that goes far beyond meteors core geolocation package',
    // URL to the Git repository containing the source code for this package.
    git: '',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Cordova.depends({
    "org.apache.cordova.geolocation": "0.3.11"
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');

    api.use(['session', 'reactive-var']);

    api.addFiles('lib/location.js');

    api.export('Location');
});

Package.onTest(function(api) {
});
