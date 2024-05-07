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
 * The OutputNewFilter model module.
 * @module model/OutputNewFilter
 * @version 0.0.1
 */
class OutputNewFilter {
    /**
     * Constructs a new <code>OutputNewFilter</code>.
     * @alias module:model/OutputNewFilter
     * @param filterId {String} A filter id to be used when calling eth_getFilterChanges
     */
    constructor(filterId) { 
        
        OutputNewFilter.initialize(this, filterId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, filterId) { 
        obj['FilterId'] = filterId;
    }

    /**
     * Constructs a <code>OutputNewFilter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OutputNewFilter} obj Optional instance to populate.
     * @return {module:model/OutputNewFilter} The populated <code>OutputNewFilter</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OutputNewFilter();

            if (data.hasOwnProperty('$schema')) {
                obj['$schema'] = ApiClient.convertToType(data['$schema'], 'String');
            }
            if (data.hasOwnProperty('FilterId')) {
                obj['FilterId'] = ApiClient.convertToType(data['FilterId'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OutputNewFilter</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OutputNewFilter</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of OutputNewFilter.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['$schema'] && !(typeof data['$schema'] === 'string' || data['$schema'] instanceof String)) {
            throw new Error("Expected the field `$schema` to be a primitive type in the JSON string but got " + data['$schema']);
        }
        // ensure the json data is a string
        if (data['FilterId'] && !(typeof data['FilterId'] === 'string' || data['FilterId'] instanceof String)) {
            throw new Error("Expected the field `FilterId` to be a primitive type in the JSON string but got " + data['FilterId']);
        }

        return true;
    }


}

OutputNewFilter.RequiredProperties = ["FilterId"];

/**
 * A URL to the JSON Schema for this object.
 * @member {String} $schema
 */
OutputNewFilter.prototype['$schema'] = undefined;

/**
 * A filter id to be used when calling eth_getFilterChanges
 * @member {String} FilterId
 */
OutputNewFilter.prototype['FilterId'] = undefined;






export default OutputNewFilter;
