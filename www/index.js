'use strict';

var _helmet = require('helmet');

var _helmet2 = _interopRequireDefault(_helmet);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _hbs = require('hbs');

var _hbs2 = _interopRequireDefault(_hbs);

var _cookieSession = require('cookie-session');

var _cookieSession2 = _interopRequireDefault(_cookieSession);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WWW = _path2.default.join(__dirname, '../www');

var app = (0, _express2.default)();
if (process.env.NODE_ENV === 'production') {
  app.listen(3002, '127.0.0.1');
  console.log('RUNNING ON http://127.0.0.1:3002/');
} else {
  app.listen(3000, '127.0.0.1');
  console.log('RUNNING ON http://0.0.0.0:3000/');
}

app.set('view engine', 'html');
app.engine('html', _hbs2.default.__express);
app.set('views', WWW);

app.use((0, _helmet2.default)());
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use((0, _cookieSession2.default)({ keys: ['23jflkjaf', 'd329fjwae', '3419245'] }));