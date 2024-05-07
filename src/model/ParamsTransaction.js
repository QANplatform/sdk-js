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

import ApiClient from '../ApiClient';

/**
 * The ParamsTransaction model module.
 * @module model/ParamsTransaction
 * @version 0.0.1
 */
class ParamsTransaction {
    /**
     * Constructs a new <code>ParamsTransaction</code>.
     * @alias module:model/ParamsTransaction
     * @param to {String} The address to which the transaction is addressed
     */
    constructor(to) { 
        
        ParamsTransaction.initialize(this, to);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, to) { 
        obj['To'] = to;
    }

    /**
     * Constructs a <code>ParamsTransaction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ParamsTransaction} obj Optional instance to populate.
     * @return {module:model/ParamsTransaction} The populated <code>ParamsTransaction</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ParamsTransaction();

            if (data.hasOwnProperty('Data')) {
                obj['Data'] = ApiClient.convertToType(data['Data'], 'String');
            }
            if (data.hasOwnProperty('From')) {
                obj['From'] = ApiClient.convertToType(data['From'], 'String');
            }
            if (data.hasOwnProperty('Gas')) {
                obj['Gas'] = ApiClient.convertToType(data['Gas'], 'String');
            }
            if (data.hasOwnProperty('GasPrice')) {
                obj['GasPrice'] = ApiClient.convertToType(data['GasPrice'], 'String');
            }
            if (data.hasOwnProperty('To')) {
                obj['To'] = ApiClient.convertToType(data['To'], 'String');
            }
            if (data.hasOwnProperty('Value')) {
                obj['Value'] = ApiClient.convertToType(data['Value'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ParamsTransaction</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ParamsTransaction</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ParamsTransaction.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['Data'] && !(typeof data['Data'] === 'string' || data['Data'] instanceof String)) {
            throw new Error("Expected the field `Data` to be a primitive type in the JSON string but got " + data['Data']);
        }
        // ensure the json data is a string
        if (data['From'] && !(typeof data['From'] === 'string' || data['From'] instanceof String)) {
            throw new Error("Expected the field `From` to be a primitive type in the JSON string but got " + data['From']);
        }
        // ensure the json data is a string
        if (data['Gas'] && !(typeof data['Gas'] === 'string' || data['Gas'] instanceof String)) {
            throw new Error("Expected the field `Gas` to be a primitive type in the JSON string but got " + data['Gas']);
        }
        // ensure the json data is a string
        if (data['GasPrice'] && !(typeof data['GasPrice'] === 'string' || data['GasPrice'] instanceof String)) {
            throw new Error("Expected the field `GasPrice` to be a primitive type in the JSON string but got " + data['GasPrice']);
        }
        // ensure the json data is a string
        if (data['To'] && !(typeof data['To'] === 'string' || data['To'] instanceof String)) {
            throw new Error("Expected the field `To` to be a primitive type in the JSON string but got " + data['To']);
        }
        // ensure the json data is a string
        if (data['Value'] && !(typeof data['Value'] === 'string' || data['Value'] instanceof String)) {
            throw new Error("Expected the field `Value` to be a primitive type in the JSON string but got " + data['Value']);
        }

        return true;
    }


}

ParamsTransaction.RequiredProperties = ["To"];

/**
 * The hash of the method signature and encoded parameters. For more information, see the Contract ABI description in the Solidity documentation.
 * @member {String} Data
 */
ParamsTransaction.prototype['Data'] = undefined;

/**
 * The address from which the transaction is sent
 * @member {String} From
 */
ParamsTransaction.prototype['From'] = undefined;

/**
 * The integer of gas provided for the transaction execution
 * @member {String} Gas
 */
ParamsTransaction.prototype['Gas'] = undefined;

/**
 * The integer of gasPrice used for each paid gas encoded as hexadecimal
 * @member {String} GasPrice
 */
ParamsTransaction.prototype['GasPrice'] = undefined;

/**
 * The address to which the transaction is addressed
 * @member {String} To
 */
ParamsTransaction.prototype['To'] = undefined;

/**
 * The integer of value sent with this transaction encoded as hexadecimal
 * @member {String} Value
 */
ParamsTransaction.prototype['Value'] = undefined;






export default ParamsTransaction;

