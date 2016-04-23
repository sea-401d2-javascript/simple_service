
module.exports = function(app) {

  app.service('loginService', [function() {
    const cache = {};

    this.login = function(user) {
      console.log(user);
      cache[user] = true;
    };

    this.get = function(user) {
      console.log(user);
      return cache[user] || null;
    }
  }]);
}
