## Ember + Rails + ES6 modules

This sample app uses

1. `es6_module_transpiler-rails` gem by Dockyard to transpile application modules
1. Stefan Penner's `ember-loader` module to load the transpiled modules into the browser
1. Stefan Penner's `ember-resolver` module for resolving Ember modules
1. Stefan Penner's `ember-load-initializers` module to load initializers in app/assets/javascripts/initializers

### Issues

Main blocker to making this usable is figuring out how to
precompile templates. See [issue #1](/issues/1)


### Set it up

Make sure Node and Ruby are installed.

1. Clone
1. `bundle install`
1. `rails s`
1. `open http://localhost:3000`
