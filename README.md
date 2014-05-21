## Ember + Rails + ES6 modules

This sample app uses

1. `es6_module_transpiler-rails` gem by Dockyard to transpile application modules
1. Stefan Penner's `ember-loader` module to load the transpiled modules into the browser
1. Stefan Penner's `ember-resolver` module for resolving Ember modules
1. Stefan Penner's `ember-load-initializers` module to load initializers in app/assets/javascripts/initializers

### Issues

1. Can't figure out how to compile the templates. EAKR used the `barber` gem, but I'm not sure how to implement that yet.
1. Ember modules don't seem to register with the App container. They are loading in the browser, but are not being used by the application.
