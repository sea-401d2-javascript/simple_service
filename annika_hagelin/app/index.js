const angular = require('angular');
const app = angular.module('WaterApp', []);

require('./js/services/aqueduct.js')(app);
require('./js/controllers/reservoir.js')(app);
require('./js/controllers/nature.js')(app);
