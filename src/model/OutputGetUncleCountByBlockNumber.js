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
 * The OutputGetUncleCountByBlockNumber model module.
 * @module model/OutputGetUncleCountByBlockNumber
 * @version 0.0.1
 */
class OutputGetUncleCountByBlockNumber {
    /**
     * Constructs a new <code>OutputGetUncleCountByBlockNumber</code>.
     * @alias module:model/OutputGetUncleCountByBlockNumber
     * @param uncleCount {String} 
     */
    constructor(uncleCount) { 
        
        OutputGetUncleCountByBlockNumber.initialize(this, uncleCount);
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
     * Constructs a <code>OutputGetUncleCountByBlockNumber</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OutputGetUncleCountByBlockNumber} obj Optional instance to populate.
     * @return {module:model/OutputGetUncleCountByBlockNumber} The populated <code>OutputGetUncleCountByBlockNumber</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OutputGetUncleCountByBlockNumber();

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
     * Validates the JSON data with respect to <code>OutputGetUncleCountByBlockNumber</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OutputGetUncleCountByBlockNumber</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of OutputGetUncleCountByBlockNumber.RequiredProperties) {
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

OutputGetUncleCountByBlockNumber.RequiredProperties = ["UncleCount"];

/**
 * A URL to the JSON Schema for this object.
 * @member {String} $schema
 */
OutputGetUncleCountByBlockNumber.prototype['$schema'] = undefined;

/**
 * @member {String} UncleCount
 */
OutputGetUncleCountByBlockNumber.prototype['UncleCount'] = undefined;






export default OutputGetUncleCountByBlockNumber;

