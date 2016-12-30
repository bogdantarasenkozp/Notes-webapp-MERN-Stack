'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var connection_url = "mongodb://testuser:testpassport@ds054289.mlab.com:54289/notesdb";

exports.default = function (mongoose) {
  mongoose.connect(connection_url);
  var db = mongoose.connection;

  db.on('error', function (err) {
    console.log('connection err:' + err);
  });
  db.on('open', function () {
    console.log('successful connection');
  });
};
//# sourceMappingURL=mongoose.js.map