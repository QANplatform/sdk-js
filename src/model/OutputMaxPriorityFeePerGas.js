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
 * The OutputMaxPriorityFeePerGas model module.
 * @module model/OutputMaxPriorityFeePerGas
 * @version 0.0.1
 */
class OutputMaxPriorityFeePerGas {
    /**
     * Constructs a new <code>OutputMaxPriorityFeePerGas</code>.
     * @alias module:model/OutputMaxPriorityFeePerGas
     * @param maxPriorityFeePerGas {String} The hex value of the priority fee needed to be included in a block
     */
    constructor(maxPriorityFeePerGas) { 
        
        OutputMaxPriorityFeePerGas.initialize(this, maxPriorityFeePerGas);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, maxPriorityFeePerGas) { 
        obj['MaxPriorityFeePerGas'] = maxPriorityFeePerGas;
    }

    /**
     * Constructs a <code>OutputMaxPriorityFeePerGas</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OutputMaxPriorityFeePerGas} obj Optional instance to populate.
     * @return {module:model/OutputMaxPriorityFeePerGas} The populated <code>OutputMaxPriorityFeePerGas</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OutputMaxPriorityFeePerGas();

            if (data.hasOwnProperty('$schema')) {
                obj['$schema'] = ApiClient.convertToType(data['$schema'], 'String');
            }
            if (data.hasOwnProperty('MaxPriorityFeePerGas')) {
                obj['MaxPriorityFeePerGas'] = ApiClient.convertToType(data['MaxPriorityFeePerGas'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OutputMaxPriorityFeePerGas</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OutputMaxPriorityFeePerGas</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of OutputMaxPriorityFeePerGas.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['$schema'] && !(typeof data['$schema'] === 'string' || data['$schema'] instanceof String)) {
            throw new Error("Expected the field `$schema` to be a primitive type in the JSON string but got " + data['$schema']);
        }
        // ensure the json data is a string
        if (data['MaxPriorityFeePerGas'] && !(typeof data['MaxPriorityFeePerGas'] === 'string' || data['MaxPriorityFeePerGas'] instanceof String)) {
            throw new Error("Expected the field `MaxPriorityFeePerGas` to be a primitive type in the JSON string but got " + data['MaxPriorityFeePerGas']);
        }

        return true;
    }


}

OutputMaxPriorityFeePerGas.RequiredProperties = ["MaxPriorityFeePerGas"];

/**
 * A URL to the JSON Schema for this object.
 * @member {String} $schema
 */
OutputMaxPriorityFeePerGas.prototype['$schema'] = undefined;

/**
 * The hex value of the priority fee needed to be included in a block
 * @member {String} MaxPriorityFeePerGas
 */
OutputMaxPriorityFeePerGas.prototype['MaxPriorityFeePerGas'] = undefined;






export default OutputMaxPriorityFeePerGas;

