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
 * The ResponseStorageEntry model module.
 * @module model/ResponseStorageEntry
 * @version 0.0.1
 */
class ResponseStorageEntry {
    /**
     * Constructs a new <code>ResponseStorageEntry</code>.
     * @alias module:model/ResponseStorageEntry
     * @param key {String} The requested storage key
     * @param proof {String} An array of rlp-serialized MerkleTree-Nodes which starts with the stateRoot-Node and follows the path of the SHA3 address as key
     * @param value {String} The storage value
     */
    constructor(key, proof, value) { 
        
        ResponseStorageEntry.initialize(this, key, proof, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, key, proof, value) { 
        obj['Key'] = key;
        obj['Proof'] = proof;
        obj['Value'] = value;
    }

    /**
     * Constructs a <code>ResponseStorageEntry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResponseStorageEntry} obj Optional instance to populate.
     * @return {module:model/ResponseStorageEntry} The populated <code>ResponseStorageEntry</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ResponseStorageEntry();

            if (data.hasOwnProperty('Key')) {
                obj['Key'] = ApiClient.convertToType(data['Key'], 'String');
            }
            if (data.hasOwnProperty('Proof')) {
                obj['Proof'] = ApiClient.convertToType(data['Proof'], 'String');
            }
            if (data.hasOwnProperty('Value')) {
                obj['Value'] = ApiClient.convertToType(data['Value'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ResponseStorageEntry</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ResponseStorageEntry</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ResponseStorageEntry.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['Key'] && !(typeof data['Key'] === 'string' || data['Key'] instanceof String)) {
            throw new Error("Expected the field `Key` to be a primitive type in the JSON string but got " + data['Key']);
        }
        // ensure the json data is a string
        if (data['Proof'] && !(typeof data['Proof'] === 'string' || data['Proof'] instanceof String)) {
            throw new Error("Expected the field `Proof` to be a primitive type in the JSON string but got " + data['Proof']);
        }
        // ensure the json data is a string
        if (data['Value'] && !(typeof data['Value'] === 'string' || data['Value'] instanceof String)) {
            throw new Error("Expected the field `Value` to be a primitive type in the JSON string but got " + data['Value']);
        }

        return true;
    }


}

ResponseStorageEntry.RequiredProperties = ["Key", "Proof", "Value"];

/**
 * The requested storage key
 * @member {String} Key
 */
ResponseStorageEntry.prototype['Key'] = undefined;

/**
 * An array of rlp-serialized MerkleTree-Nodes which starts with the stateRoot-Node and follows the path of the SHA3 address as key
 * @member {String} Proof
 */
ResponseStorageEntry.prototype['Proof'] = undefined;

/**
 * The storage value
 * @member {String} Value
 */
ResponseStorageEntry.prototype['Value'] = undefined;






export default ResponseStorageEntry;

