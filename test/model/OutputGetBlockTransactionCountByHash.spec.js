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
    instance = new QanAutoApi.OutputGetBlockTransactionCountByHash();
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

  describe('OutputGetBlockTransactionCountByHash', function() {
    it('should create an instance of OutputGetBlockTransactionCountByHash', function() {
      // uncomment below and update the code to test OutputGetBlockTransactionCountByHash
      //var instance = new QanAutoApi.OutputGetBlockTransactionCountByHash();
      //expect(instance).to.be.a(QanAutoApi.OutputGetBlockTransactionCountByHash);
    });

    it('should have the property schema (base name: "$schema")', function() {
      // uncomment below and update the code to test the property schema
      //var instance = new QanAutoApi.OutputGetBlockTransactionCountByHash();
      //expect(instance).to.be();
    });

    it('should have the property transactionCount (base name: "TransactionCount")', function() {
      // uncomment below and update the code to test the property transactionCount
      //var instance = new QanAutoApi.OutputGetBlockTransactionCountByHash();
      //expect(instance).to.be();
    });

  });

}));
