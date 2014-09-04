bulk-load
=========

Loads and or globalizes all files in a given directory

Install
-------

`npm install bulk-load`

Usage
-----

`var bulk = require('bulk-load')`

Require every js file in lib/routes

``` javascript
bulk.load(__dirname + '/lib/routes')
```

Require every js file in lib/models and globalize the exports. If
the directory contains a user.js file which exports a create
function, the following is possible.

``` javascript
bulk.globalize(__dirname + '/lib/models')
User.create();
```
