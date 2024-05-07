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
 * The FilterObject model module.
 * @module model/FilterObject
 * @version 0.0.1
 */
class FilterObject {
    /**
     * Constructs a new <code>FilterObject</code>.
     * @alias module:model/FilterObject
     * @param address {String} The contract address or a list of addresses from which logs should originate
     * @param fromBlock {String} 
     * @param toBlock {String} 
     * @param topics {Array.<String>} 
     */
    constructor(address, fromBlock, toBlock, topics) { 
        
        FilterObject.initialize(this, address, fromBlock, toBlock, topics);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, address, fromBlock, toBlock, topics) { 
        obj['Address'] = address;
        obj['FromBlock'] = fromBlock;
        obj['ToBlock'] = toBlock;
        obj['Topics'] = topics;
    }

    /**
     * Constructs a <code>FilterObject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FilterObject} obj Optional instance to populate.
     * @return {module:model/FilterObject} The populated <code>FilterObject</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FilterObject();

            if (data.hasOwnProperty('Address')) {
                obj['Address'] = ApiClient.convertToType(data['Address'], 'String');
            }
            if (data.hasOwnProperty('FromBlock')) {
                obj['FromBlock'] = ApiClient.convertToType(data['FromBlock'], 'String');
            }
            if (data.hasOwnProperty('ToBlock')) {
                obj['ToBlock'] = ApiClient.convertToType(data['ToBlock'], 'String');
            }
            if (data.hasOwnProperty('Topics')) {
                obj['Topics'] = ApiClient.convertToType(data['Topics'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FilterObject</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FilterObject</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of FilterObject.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['Address'] && !(typeof data['Address'] === 'string' || data['Address'] instanceof String)) {
            throw new Error("Expected the field `Address` to be a primitive type in the JSON string but got " + data['Address']);
        }
        // ensure the json data is a string
        if (data['FromBlock'] && !(typeof data['FromBlock'] === 'string' || data['FromBlock'] instanceof String)) {
            throw new Error("Expected the field `FromBlock` to be a primitive type in the JSON string but got " + data['FromBlock']);
        }
        // ensure the json data is a string
        if (data['ToBlock'] && !(typeof data['ToBlock'] === 'string' || data['ToBlock'] instanceof String)) {
            throw new Error("Expected the field `ToBlock` to be a primitive type in the JSON string but got " + data['ToBlock']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['Topics'])) {
            throw new Error("Expected the field `Topics` to be an array in the JSON data but got " + data['Topics']);
        }

        return true;
    }


}

FilterObject.RequiredProperties = ["Address", "FromBlock", "ToBlock", "Topics"];

/**
 * The contract address or a list of addresses from which logs should originate
 * @member {String} Address
 */
FilterObject.prototype['Address'] = undefined;

/**
 * @member {String} FromBlock
 */
FilterObject.prototype['FromBlock'] = undefined;

/**
 * @member {String} ToBlock
 */
FilterObject.prototype['ToBlock'] = undefined;

/**
 * @member {Array.<String>} Topics
 */
FilterObject.prototype['Topics'] = undefined;






export default FilterObject;

