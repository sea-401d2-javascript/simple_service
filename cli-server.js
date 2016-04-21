'use strict';

require('express')().use(require('express').static('build'))
  .listen(8080, ()=> console.log('Client Server is listening at port 8080..'));
