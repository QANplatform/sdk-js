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
 * The OutputGetUncleCountByBlockHash model module.
 * @module model/OutputGetUncleCountByBlockHash
 * @version 0.0.1
 */
class OutputGetUncleCountByBlockHash {
    /**
     * Constructs a new <code>OutputGetUncleCountByBlockHash</code>.
     * @alias module:model/OutputGetUncleCountByBlockHash
     * @param uncleCount {String} 
     */
    constructor(uncleCount) { 
        
        OutputGetUncleCountByBlockHash.initialize(this, uncleCount);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, uncleCount) { 
        obj['UncleCount'] = uncleCount;
    }

    /**
     * Constructs a <code>OutputGetUncleCountByBlockHash</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OutputGetUncleCountByBlockHash} obj Optional instance to populate.
     * @return {module:model/OutputGetUncleCountByBlockHash} The populated <code>OutputGetUncleCountByBlockHash</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OutputGetUncleCountByBlockHash();

            if (data.hasOwnProperty('$schema')) {
                obj['$schema'] = ApiClient.convertToType(data['$schema'], 'String');
            }
            if (data.hasOwnProperty('UncleCount')) {
                obj['UncleCount'] = ApiClient.convertToType(data['UncleCount'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OutputGetUncleCountByBlockHash</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OutputGetUncleCountByBlockHash</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of OutputGetUncleCountByBlockHash.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['$schema'] && !(typeof data['$schema'] === 'string' || data['$schema'] instanceof String)) {
            throw new Error("Expected the field `$schema` to be a primitive type in the JSON string but got " + data['$schema']);
        }
        // ensure the json data is a string
        if (data['UncleCount'] && !(typeof data['UncleCount'] === 'string' || data['UncleCount'] instanceof String)) {
            throw new Error("Expected the field `UncleCount` to be a primitive type in the JSON string but got " + data['UncleCount']);
        }

        return true;
    }


}

OutputGetUncleCountByBlockHash.RequiredProperties = ["UncleCount"];

/**
 * A URL to the JSON Schema for this object.
 * @member {String} $schema
 */
OutputGetUncleCountByBlockHash.prototype['$schema'] = undefined;

/**
 * @member {String} UncleCount
 */
OutputGetUncleCountByBlockHash.prototype['UncleCount'] = undefined;






export default OutputGetUncleCountByBlockHash;
