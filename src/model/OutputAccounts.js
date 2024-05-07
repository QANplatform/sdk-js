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
 * The OutputAccounts model module.
 * @module model/OutputAccounts
 * @version 0.0.1
 */
class OutputAccounts {
    /**
     * Constructs a new <code>OutputAccounts</code>.
     * @alias module:model/OutputAccounts
     * @param accounts {Array.<String>} An array of addresses owned by the client
     */
    constructor(accounts) { 
        
        OutputAccounts.initialize(this, accounts);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, accounts) { 
        obj['Accounts'] = accounts;
    }

    /**
     * Constructs a <code>OutputAccounts</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OutputAccounts} obj Optional instance to populate.
     * @return {module:model/OutputAccounts} The populated <code>OutputAccounts</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OutputAccounts();

            if (data.hasOwnProperty('$schema')) {
                obj['$schema'] = ApiClient.convertToType(data['$schema'], 'String');
            }
            if (data.hasOwnProperty('Accounts')) {
                obj['Accounts'] = ApiClient.convertToType(data['Accounts'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OutputAccounts</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OutputAccounts</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of OutputAccounts.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['$schema'] && !(typeof data['$schema'] === 'string' || data['$schema'] instanceof String)) {
            throw new Error("Expected the field `$schema` to be a primitive type in the JSON string but got " + data['$schema']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['Accounts'])) {
            throw new Error("Expected the field `Accounts` to be an array in the JSON data but got " + data['Accounts']);
        }

        return true;
    }


}

OutputAccounts.RequiredProperties = ["Accounts"];

/**
 * A URL to the JSON Schema for this object.
 * @member {String} $schema
 */
OutputAccounts.prototype['$schema'] = undefined;

/**
 * An array of addresses owned by the client
 * @member {Array.<String>} Accounts
 */
OutputAccounts.prototype['Accounts'] = undefined;






export default OutputAccounts;

