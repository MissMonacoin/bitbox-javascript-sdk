'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _bitcoincashjsLib = require('bitcoincashjs-lib');

var _bitcoincashjsLib2 = _interopRequireDefault(_bitcoincashjsLib);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Transaction = function () {
  function Transaction(restURL) {
    _classCallCheck(this, Transaction);

    this.restURL = restURL;
  }

  _createClass(Transaction, [{
    key: 'transaction',
    value: function transaction() {
      return new _bitcoincashjsLib2.default.Transaction();
    }
  }, {
    key: 'fromHex',
    value: function fromHex(hex) {
      return _bitcoincashjsLib2.default.Transaction.fromHex(hex);
    }
  }, {
    key: 'transactionBuilder',
    value: function transactionBuilder() {
      var network = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'bitcoin';

      return new _bitcoincashjsLib2.default.TransactionBuilder(_bitcoincashjsLib2.default.networks[network]);
    }
  }, {
    key: 'fromTransaction',
    value: function fromTransaction(tx) {
      return _bitcoincashjsLib2.default.TransactionBuilder.fromTransaction(tx);
    }
  }, {
    key: 'details',
    value: function details(txid) {
      if (typeof txid !== 'string') {
        txid = JSON.stringify(txid);
      }

      return _axios2.default.get(this.restURL + 'transaction/details/' + txid).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }]);

  return Transaction;
}();

exports.default = Transaction;