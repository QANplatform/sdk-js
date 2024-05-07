/**
 * QAN AutoApi
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.QanAutoApi);
  }
}(this, function(expect, QanAutoApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new QanAutoApi.ResponseBlock();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ResponseBlock', function() {
    it('should create an instance of ResponseBlock', function() {
      // uncomment below and update the code to test ResponseBlock
      //var instance = new QanAutoApi.ResponseBlock();
      //expect(instance).to.be.a(QanAutoApi.ResponseBlock);
    });

    it('should have the property baseFeePerGas (base name: "BaseFeePerGas")', function() {
      // uncomment below and update the code to test the property baseFeePerGas
      //var instance = new QanAutoApi.ResponseBlock();
      //expect(instance).to.be();
    });

    it('should have the property difficulty (base name: "Difficulty")', function() {
      // uncomment below and update the code to test the property difficulty
      //var instance = new QanAutoApi.ResponseBlock();
      //expect(instance).to.be();
    });

    it('should have the property extraData (base name: "ExtraData")', function() {
      // uncomment below and update the code to test the property extraData
      //var instance = new QanAutoApi.ResponseBlock();
      //expect(instance).to.be();
    });

    it('should have the property gasLimit (base name: "GasLimit")', function() {
      // uncomment below and update the code to test the property gasLimit
      //var instance = new QanAutoApi.ResponseBlock();
      //expect(instance).to.be();
    });

    it('should have the property gasUsed (base name: "GasUsed")', function() {
      // uncomment below and update the code to test the property gasUsed
      //var instance = new QanAutoApi.ResponseBlock();
      //expect(instance).to.be();
    });

    it('should have the property hash (base name: "Hash")', function() {
      // uncomment below and update the code to test the property hash
      //var instance = new QanAutoApi.ResponseBlock();
      //expect(instance).to.be();
    });

    it('should have the property logsBloom (base name: "LogsBloom")', function() {
      // uncomment below and update the code to test the property logsBloom
      //var instance = new QanAutoApi.ResponseBlock();
      //expect(instance).to.be();
    });

    it('should have the property miner (base name: "Miner")', function() {
      // uncomment below and update the code to test the property miner
      //var instance = new QanAutoApi.ResponseBlock();
      //expect(instance).to.be();
    });

    it('should have the property mixHash (base name: "MixHash")', function() {
      // uncomment below and update the code to test the property mixHash
      //var instance = new QanAutoApi.ResponseBlock();
      //expect(instance).to.be();
    });

    it('should have the property nonce (base name: "Nonce")', function() {
      // uncomment below and update the code to test the property nonce
      //var instance = new QanAutoApi.ResponseBlock();
      //expect(instance).to.be();
    });

    it('should have the property number (base name: "Number")', function() {
      // uncomment below and update the code to test the property number
      //var instance = new QanAutoApi.ResponseBlock();
      //expect(instance).to.be();
    });

    it('should have the property parentHash (base name: "ParentHash")', function() {
      // uncomment below and update the code to test the property parentHash
      //var instance = new QanAutoApi.ResponseBlock();
      //expect(instance).to.be();
    });

    it('should have the property receiptsRoot (base name: "ReceiptsRoot")', function() {
      // uncomment below and update the code to test the property receiptsRoot
      //var instance = new QanAutoApi.ResponseBlock();
      //expect(instance).to.be();
    });

    it('should have the property sha3Uncles (base name: "Sha3Uncles")', function() {
      // uncomment below and update the code to test the property sha3Uncles
      //var instance = new QanAutoApi.ResponseBlock();
      //expect(instance).to.be();
    });

    it('should have the property size (base name: "Size")', function() {
      // uncomment below and update the code to test the property size
      //var instance = new QanAutoApi.ResponseBlock();
      //expect(instance).to.be();
    });

    it('should have the property stateRoot (base name: "StateRoot")', function() {
      // uncomment below and update the code to test the property stateRoot
      //var instance = new QanAutoApi.ResponseBlock();
      //expect(instance).to.be();
    });

    it('should have the property timestamp (base name: "Timestamp")', function() {
      // uncomment below and update the code to test the property timestamp
      //var instance = new QanAutoApi.ResponseBlock();
      //expect(instance).to.be();
    });

    it('should have the property totalDifficulty (base name: "TotalDifficulty")', function() {
      // uncomment below and update the code to test the property totalDifficulty
      //var instance = new QanAutoApi.ResponseBlock();
      //expect(instance).to.be();
    });

    it('should have the property transactions (base name: "Transactions")', function() {
      // uncomment below and update the code to test the property transactions
      //var instance = new QanAutoApi.ResponseBlock();
      //expect(instance).to.be();
    });

    it('should have the property transactionsRoot (base name: "TransactionsRoot")', function() {
      // uncomment below and update the code to test the property transactionsRoot
      //var instance = new QanAutoApi.ResponseBlock();
      //expect(instance).to.be();
    });

    it('should have the property uncles (base name: "Uncles")', function() {
      // uncomment below and update the code to test the property uncles
      //var instance = new QanAutoApi.ResponseBlock();
      //expect(instance).to.be();
    });

    it('should have the property withdrawals (base name: "Withdrawals")', function() {
      // uncomment below and update the code to test the property withdrawals
      //var instance = new QanAutoApi.ResponseBlock();
      //expect(instance).to.be();
    });

    it('should have the property withdrawalsRoot (base name: "WithdrawalsRoot")', function() {
      // uncomment below and update the code to test the property withdrawalsRoot
      //var instance = new QanAutoApi.ResponseBlock();
      //expect(instance).to.be();
    });

  });

}));