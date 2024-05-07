# QanAutoApi.DefaultApi

All URIs are relative to *https://rpc-testnet.qanplatform.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**qanAccounts**](DefaultApi.md#qanAccounts) | **GET** /accounts/ | 
[**qanBlobBaseFee**](DefaultApi.md#qanBlobBaseFee) | **GET** /blobBaseFee/ | 
[**qanBlockNumber**](DefaultApi.md#qanBlockNumber) | **GET** /blockNumber/ | 
[**qanCall**](DefaultApi.md#qanCall) | **POST** /call/ | 
[**qanChainId**](DefaultApi.md#qanChainId) | **GET** /chainId/ | 
[**qanEstimateGas**](DefaultApi.md#qanEstimateGas) | **POST** /estimateGas/ | 
[**qanFeeHistory**](DefaultApi.md#qanFeeHistory) | **POST** /feeHistory/ | 
[**qanGasPrice**](DefaultApi.md#qanGasPrice) | **GET** /gasPrice/ | 
[**qanGetAccount**](DefaultApi.md#qanGetAccount) | **GET** /getAccount/{Address}/{BlockReference}/ | 
[**qanGetBalance**](DefaultApi.md#qanGetBalance) | **GET** /getBalance/{Address}/ | 
[**qanGetBlockByHash**](DefaultApi.md#qanGetBlockByHash) | **GET** /getBlockByHash/{Hash}/{TransactionDetailFlag}/ | 
[**qanGetBlockByNumber**](DefaultApi.md#qanGetBlockByNumber) | **GET** /getBlockByNumber/{BlockNumber}/{TransactionDetailFlag}/ | 
[**qanGetBlockReceipts**](DefaultApi.md#qanGetBlockReceipts) | **GET** /getBlockReceipts/{BlockNumber}/ | 
[**qanGetBlockTransactionCountByHash**](DefaultApi.md#qanGetBlockTransactionCountByHash) | **GET** /getBlockTransactionCountByHash/{Hash}/ | 
[**qanGetBlockTransactionCountByNumber**](DefaultApi.md#qanGetBlockTransactionCountByNumber) | **GET** /getBlockTransactionCountByNumber/{BlockNumber}/ | 
[**qanGetCode**](DefaultApi.md#qanGetCode) | **GET** /getCode/{Address}/ | 
[**qanGetFilterChanges**](DefaultApi.md#qanGetFilterChanges) | **GET** /getFilterChanges/{FilterId}/ | 
[**qanGetFilterLogs**](DefaultApi.md#qanGetFilterLogs) | **GET** /getFilterLogs/{Id}/ | 
[**qanGetLogs**](DefaultApi.md#qanGetLogs) | **POST** /getLogs/ | 
[**qanGetProof**](DefaultApi.md#qanGetProof) | **POST** /getProof/ | 
[**qanGetStorageAt**](DefaultApi.md#qanGetStorageAt) | **POST** /getStorageAt/ | 
[**qanGetTransactionByBlockHashAndIndex**](DefaultApi.md#qanGetTransactionByBlockHashAndIndex) | **GET** /getTransactionByBlockHashAndIndex/{blockHash}/{index}/ | 
[**qanGetTransactionByBlockNumberAndIndex**](DefaultApi.md#qanGetTransactionByBlockNumberAndIndex) | **GET** /getTransactionByBlockNumberAndIndex/{blockNumber}/{index}/ | 
[**qanGetTransactionByHash**](DefaultApi.md#qanGetTransactionByHash) | **GET** /getTransactionByHash/{hash}/ | 
[**qanGetTransactionCount**](DefaultApi.md#qanGetTransactionCount) | **GET** /getTransactionCount/{Address}/{BlockNumber}/ | 
[**qanGetTransactionReceipt**](DefaultApi.md#qanGetTransactionReceipt) | **GET** /getTransactionReceipt/{Hash}/ | 
[**qanGetUncleCountByBlockHash**](DefaultApi.md#qanGetUncleCountByBlockHash) | **GET** /getUncleCountByBlockHash/{Hash}/ | 
[**qanGetUncleCountByBlockNumber**](DefaultApi.md#qanGetUncleCountByBlockNumber) | **GET** /getUncleCountByBlockNumber/{BlockNumber}/ | 
[**qanMaxPriorityFeePerGas**](DefaultApi.md#qanMaxPriorityFeePerGas) | **GET** /maxPriorityFeePerGas/ | 
[**qanNewBlockFilter**](DefaultApi.md#qanNewBlockFilter) | **GET** /newBlockFilter/ | 
[**qanNewFilter**](DefaultApi.md#qanNewFilter) | **POST** /newFilter/ | 
[**qanNewPendingTransactionFilter**](DefaultApi.md#qanNewPendingTransactionFilter) | **GET** /newPendingTransactionFilter/ | 
[**qanSendRawTransaction**](DefaultApi.md#qanSendRawTransaction) | **POST** /sendRawTransaction/ | 
[**qanSubscribe**](DefaultApi.md#qanSubscribe) | **POST** /subscribe/ | 
[**qanSyncing**](DefaultApi.md#qanSyncing) | **GET** /syncing/ | 
[**qanUninstallFilter**](DefaultApi.md#qanUninstallFilter) | **GET** /uninstallFilter/{FilterId}/ | 
[**qanUnsubscribe**](DefaultApi.md#qanUnsubscribe) | **GET** /unsubscribe/{SubscriptionId}/ | 
[**qanXlinkValid**](DefaultApi.md#qanXlinkValid) | **GET** /xlinkValid/ | 



## qanAccounts

> OutputAccounts qanAccounts()



Returns a list of addresses owned by client.

### Example

```javascript
import QanAutoApi from 'qan_auto_api';

let apiInstance = new QanAutoApi.DefaultApi();
apiInstance.qanAccounts((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**OutputAccounts**](OutputAccounts.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## qanBlobBaseFee

> OutputBlobBaseFee qanBlobBaseFee()



Returns the expected base fee for blobs in the next block.

### Example

```javascript
import QanAutoApi from 'qan_auto_api';

let apiInstance = new QanAutoApi.DefaultApi();
apiInstance.qanBlobBaseFee((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**OutputBlobBaseFee**](OutputBlobBaseFee.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## qanBlockNumber

> OutputBlockNumber qanBlockNumber()



Returns the latest block number of the blockchain.

### Example

```javascript
import QanAutoApi from 'qan_auto_api';

let apiInstance = new QanAutoApi.DefaultApi();
apiInstance.qanBlockNumber((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**OutputBlockNumber**](OutputBlockNumber.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## qanCall

> OutputCall qanCall(inputCall)



Executes a new message call immediately without creating a transaction on the block chain.

### Example

```javascript
import QanAutoApi from 'qan_auto_api';

let apiInstance = new QanAutoApi.DefaultApi();
let inputCall = new QanAutoApi.InputCall(); // InputCall | 
apiInstance.qanCall(inputCall, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputCall** | [**InputCall**](InputCall.md)|  | 

### Return type

[**OutputCall**](OutputCall.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## qanChainId

> OutputChainId qanChainId()



Returns the current network/chain ID, used to sign replay-protected transaction introduced in EIP-155.

### Example

```javascript
import QanAutoApi from 'qan_auto_api';

let apiInstance = new QanAutoApi.DefaultApi();
apiInstance.qanChainId((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**OutputChainId**](OutputChainId.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## qanEstimateGas

> OutputEstimateGas qanEstimateGas(inputEstimateGas)



Returns an estimation of gas for a given transaction.

### Example

```javascript
import QanAutoApi from 'qan_auto_api';

let apiInstance = new QanAutoApi.DefaultApi();
let inputEstimateGas = new QanAutoApi.InputEstimateGas(); // InputEstimateGas | 
apiInstance.qanEstimateGas(inputEstimateGas, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputEstimateGas** | [**InputEstimateGas**](InputEstimateGas.md)|  | 

### Return type

[**OutputEstimateGas**](OutputEstimateGas.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## qanFeeHistory

> OutputFeeHistory qanFeeHistory(inputFeeHistory)



Returns the collection of historical gas information.

### Example

```javascript
import QanAutoApi from 'qan_auto_api';

let apiInstance = new QanAutoApi.DefaultApi();
let inputFeeHistory = new QanAutoApi.InputFeeHistory(); // InputFeeHistory | 
apiInstance.qanFeeHistory(inputFeeHistory, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputFeeHistory** | [**InputFeeHistory**](InputFeeHistory.md)|  | 

### Return type

[**OutputFeeHistory**](OutputFeeHistory.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## qanGasPrice

> OutputGasPrice qanGasPrice()



Returns the current gas price on the network in wei.

### Example

```javascript
import QanAutoApi from 'qan_auto_api';

let apiInstance = new QanAutoApi.DefaultApi();
apiInstance.qanGasPrice((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**OutputGasPrice**](OutputGasPrice.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## qanGetAccount

> OutputGetAccount qanGetAccount(address, blockReference)



Retrieves account details by specifying an address and a block number/tag.

### Example

```javascript
import QanAutoApi from 'qan_auto_api';

let apiInstance = new QanAutoApi.DefaultApi();
let address = 0xa1e4380a3b1f749673e270229993ee55f35663b4; // String | The account address for which the information is to be retrieved
let blockReference = latest; // String | The block number in hexadecimal or decimal format or the string latest, earliest, pending, see the default block parameter description in the official Ethereum documentation
apiInstance.qanGetAccount(address, blockReference, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | **String**| The account address for which the information is to be retrieved | 
 **blockReference** | **String**| The block number in hexadecimal or decimal format or the string latest, earliest, pending, see the default block parameter description in the official Ethereum documentation | 

### Return type

[**OutputGetAccount**](OutputGetAccount.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## qanGetBalance

> OutputGetBalance qanGetBalance(address, opts)



Returns the balance of the account of given address.

### Example

```javascript
import QanAutoApi from 'qan_auto_api';

let apiInstance = new QanAutoApi.DefaultApi();
let address = 0xa1e4380a3b1f749673e270229993ee55f35663b4; // String | A 20 bytes long hexadecimal value representing an Ethereum address
let opts = {
  'blockNumber': "'latest'" // String | The block number in hexadecimal or decimal format or the string latest, earliest, pending, see the default block parameter description in the official Ethereum documentation
};
apiInstance.qanGetBalance(address, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | **String**| A 20 bytes long hexadecimal value representing an Ethereum address | 
 **blockNumber** | **String**| The block number in hexadecimal or decimal format or the string latest, earliest, pending, see the default block parameter description in the official Ethereum documentation | [optional] [default to &#39;latest&#39;]

### Return type

[**OutputGetBalance**](OutputGetBalance.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## qanGetBlockByHash

> OutputGetBlockByHash qanGetBlockByHash(hash, transactionDetailFlag)



Returns information of the block matching the given block hash.

### Example

```javascript
import QanAutoApi from 'qan_auto_api';

let apiInstance = new QanAutoApi.DefaultApi();
let hash = 0x4e3a3754410177e6937ef1f84bba68ea139e8d1a2258c5f85db9f1cd715a1bdd; // String | The hash (32 bytes) of the block
let transactionDetailFlag = false; // Boolean | The method returns the full transaction objects when this value is true otherwise, it returns only the hashes of the transactions
apiInstance.qanGetBlockByHash(hash, transactionDetailFlag, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hash** | **String**| The hash (32 bytes) of the block | 
 **transactionDetailFlag** | **Boolean**| The method returns the full transaction objects when this value is true otherwise, it returns only the hashes of the transactions | [default to false]

### Return type

[**OutputGetBlockByHash**](OutputGetBlockByHash.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## qanGetBlockByNumber

> OutputGetBlockByNumber qanGetBlockByNumber(blockNumber, transactionDetailFlag)



Returns information of the block matching the given block number.

### Example

```javascript
import QanAutoApi from 'qan_auto_api';

let apiInstance = new QanAutoApi.DefaultApi();
let blockNumber = "'latest'"; // String | The block number in hexadecimal or decimal format or the string latest, earliest, pending, see the default block parameter description in the official Ethereum documentation
let transactionDetailFlag = false; // Boolean | The method returns the full transaction objects when this value is true otherwise, it returns only the hashes of the transactions
apiInstance.qanGetBlockByNumber(blockNumber, transactionDetailFlag, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockNumber** | **String**| The block number in hexadecimal or decimal format or the string latest, earliest, pending, see the default block parameter description in the official Ethereum documentation | [default to &#39;latest&#39;]
 **transactionDetailFlag** | **Boolean**| The method returns the full transaction objects when this value is true otherwise, it returns only the hashes of the transactions | [default to false]

### Return type

[**OutputGetBlockByNumber**](OutputGetBlockByNumber.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## qanGetBlockReceipts

> OutputGetBlockReceipts qanGetBlockReceipts(blockNumber)



Returns all transaction receipts for a given block.

### Example

```javascript
import QanAutoApi from 'qan_auto_api';

let apiInstance = new QanAutoApi.DefaultApi();
let blockNumber = "'latest'"; // String | The block number in hexadecimal or decimal format or the string latest, earliest, pending, see the default block parameter description in the official Ethereum documentation
apiInstance.qanGetBlockReceipts(blockNumber, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockNumber** | **String**| The block number in hexadecimal or decimal format or the string latest, earliest, pending, see the default block parameter description in the official Ethereum documentation | [default to &#39;latest&#39;]

### Return type

[**OutputGetBlockReceipts**](OutputGetBlockReceipts.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## qanGetBlockTransactionCountByHash

> OutputGetBlockTransactionCountByHash qanGetBlockTransactionCountByHash(hash)



Returns the number of transactions for the block matching the given block hash.

### Example

```javascript
import QanAutoApi from 'qan_auto_api';

let apiInstance = new QanAutoApi.DefaultApi();
let hash = 0x4e3a3754410177e6937ef1f84bba68ea139e8d1a2258c5f85db9f1cd715a1bdd; // String | The hash of the block
apiInstance.qanGetBlockTransactionCountByHash(hash, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hash** | **String**| The hash of the block | 

### Return type

[**OutputGetBlockTransactionCountByHash**](OutputGetBlockTransactionCountByHash.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## qanGetBlockTransactionCountByNumber

> OutputGetBlockTransactionCountByNumber qanGetBlockTransactionCountByNumber(blockNumber)



Returns the number of transactions for the block matching the given block number.

### Example

```javascript
import QanAutoApi from 'qan_auto_api';

let apiInstance = new QanAutoApi.DefaultApi();
let blockNumber = latest; // String | The block number in hexadecimal or decimal format or the string latest, earliest, pending, see the default block parameter description in the official Ethereum documentation
apiInstance.qanGetBlockTransactionCountByNumber(blockNumber, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockNumber** | **String**| The block number in hexadecimal or decimal format or the string latest, earliest, pending, see the default block parameter description in the official Ethereum documentation | 

### Return type

[**OutputGetBlockTransactionCountByNumber**](OutputGetBlockTransactionCountByNumber.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## qanGetCode

> OutputGetCode qanGetCode(address, opts)



Returns the compiled bytecode of a smart contract.

### Example

```javascript
import QanAutoApi from 'qan_auto_api';

let apiInstance = new QanAutoApi.DefaultApi();
let address = 0xa1e4380a3b1f749673e270229993ee55f35663b4; // String | The address of the smart contract from which the bytecode will be obtained
let opts = {
  'blockNumber': latest // String | The block number in hexadecimal or decimal format or the string latest, earliest, pending, see the default block parameter description in the official Ethereum documentation
};
apiInstance.qanGetCode(address, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | **String**| The address of the smart contract from which the bytecode will be obtained | 
 **blockNumber** | **String**| The block number in hexadecimal or decimal format or the string latest, earliest, pending, see the default block parameter description in the official Ethereum documentation | [optional] [default to &#39;latest&#39;]

### Return type

[**OutputGetCode**](OutputGetCode.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## qanGetFilterChanges

> OutputGetFilterChanges qanGetFilterChanges(filterId)



Polling method for a filter, which returns an array of events that have occurred since the last poll.

### Example

```javascript
import QanAutoApi from 'qan_auto_api';

let apiInstance = new QanAutoApi.DefaultApi();
let filterId = "filterId_example"; // String | The filter id that is returned from eth_newFilter, eth_newBlockFilter or eth_newPendingTransactionFilter
apiInstance.qanGetFilterChanges(filterId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterId** | **String**| The filter id that is returned from eth_newFilter, eth_newBlockFilter or eth_newPendingTransactionFilter | 

### Return type

[**OutputGetFilterChanges**](OutputGetFilterChanges.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## qanGetFilterLogs

> OutputGetFilterLogs qanGetFilterLogs(id)



Returns an array of all logs matching filter with given id.

### Example

```javascript
import QanAutoApi from 'qan_auto_api';

let apiInstance = new QanAutoApi.DefaultApi();
let id = "id_example"; // String | The filter ID
apiInstance.qanGetFilterLogs(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The filter ID | 

### Return type

[**OutputGetFilterLogs**](OutputGetFilterLogs.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## qanGetLogs

> OutputGetLogs qanGetLogs(inputGetLogs)



Returns an array of all logs matching a given filter object.

### Example

```javascript
import QanAutoApi from 'qan_auto_api';

let apiInstance = new QanAutoApi.DefaultApi();
let inputGetLogs = new QanAutoApi.InputGetLogs(); // InputGetLogs | 
apiInstance.qanGetLogs(inputGetLogs, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputGetLogs** | [**InputGetLogs**](InputGetLogs.md)|  | 

### Return type

[**OutputGetLogs**](OutputGetLogs.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## qanGetProof

> OutputGetProof qanGetProof(inputGetProof)



Returns the account and storage values of the specified account including the Merkle-proof.

### Example

```javascript
import QanAutoApi from 'qan_auto_api';

let apiInstance = new QanAutoApi.DefaultApi();
let inputGetProof = new QanAutoApi.InputGetProof(); // InputGetProof | 
apiInstance.qanGetProof(inputGetProof, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputGetProof** | [**InputGetProof**](InputGetProof.md)|  | 

### Return type

[**OutputGetProof**](OutputGetProof.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## qanGetStorageAt

> OutputGetStorageAt qanGetStorageAt(inputGetStorageAt)



Returns the value from a storage position at a given address.

### Example

```javascript
import QanAutoApi from 'qan_auto_api';

let apiInstance = new QanAutoApi.DefaultApi();
let inputGetStorageAt = new QanAutoApi.InputGetStorageAt(); // InputGetStorageAt | 
apiInstance.qanGetStorageAt(inputGetStorageAt, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputGetStorageAt** | [**InputGetStorageAt**](InputGetStorageAt.md)|  | 

### Return type

[**OutputGetStorageAt**](OutputGetStorageAt.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## qanGetTransactionByBlockHashAndIndex

> OutputGetTransactionByBlockHashAndIndex qanGetTransactionByBlockHashAndIndex(blockHash, index)



Returns information about a transaction given a blockhash and transaction index position.

### Example

```javascript
import QanAutoApi from 'qan_auto_api';

let apiInstance = new QanAutoApi.DefaultApi();
let blockHash = 0x4e3a3754410177e6937ef1f84bba68ea139e8d1a2258c5f85db9f1cd715a1bdd; // String | 
let index = 0; // String | An integer of the transaction index position
apiInstance.qanGetTransactionByBlockHashAndIndex(blockHash, index, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockHash** | **String**|  | 
 **index** | **String**| An integer of the transaction index position | 

### Return type

[**OutputGetTransactionByBlockHashAndIndex**](OutputGetTransactionByBlockHashAndIndex.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## qanGetTransactionByBlockNumberAndIndex

> OutputGetTransactionByBlockNumberAndIndex qanGetTransactionByBlockNumberAndIndex(blockNumber, index)



Returns information about a transaction given a block number and transaction index position.

### Example

```javascript
import QanAutoApi from 'qan_auto_api';

let apiInstance = new QanAutoApi.DefaultApi();
let blockNumber = latest; // String | The block number in hexadecimal or decimal format or the string latest, earliest, pending, see the default block parameter description in the official Ethereum documentation
let index = 0; // String | An integer of the transaction index position
apiInstance.qanGetTransactionByBlockNumberAndIndex(blockNumber, index, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockNumber** | **String**| The block number in hexadecimal or decimal format or the string latest, earliest, pending, see the default block parameter description in the official Ethereum documentation | 
 **index** | **String**| An integer of the transaction index position | 

### Return type

[**OutputGetTransactionByBlockNumberAndIndex**](OutputGetTransactionByBlockNumberAndIndex.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## qanGetTransactionByHash

> OutputGetTransactionByHash qanGetTransactionByHash(hash)



Returns the information about a transaction from a transaction hash.

### Example

```javascript
import QanAutoApi from 'qan_auto_api';

let apiInstance = new QanAutoApi.DefaultApi();
let hash = 0x5c504ed432cb51138bcf09aa5e8a410dd4a1e204ef84bfed1be16dfba1b22060; // String | The hash of a transaction
apiInstance.qanGetTransactionByHash(hash, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hash** | **String**| The hash of a transaction | 

### Return type

[**OutputGetTransactionByHash**](OutputGetTransactionByHash.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## qanGetTransactionCount

> OutputGetTransactionCount qanGetTransactionCount(address, blockNumber)



Returns the number of transactions sent from an address.

### Example

```javascript
import QanAutoApi from 'qan_auto_api';

let apiInstance = new QanAutoApi.DefaultApi();
let address = 0xa1e4380a3b1f749673e270229993ee55f35663b4; // String | The address from which the transaction count to be checked
let blockNumber = latest; // String | The block number in hexadecimal or decimal format or the string latest, earliest, pending, see the default block parameter description in the official Ethereum documentation
apiInstance.qanGetTransactionCount(address, blockNumber, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | **String**| The address from which the transaction count to be checked | 
 **blockNumber** | **String**| The block number in hexadecimal or decimal format or the string latest, earliest, pending, see the default block parameter description in the official Ethereum documentation | 

### Return type

[**OutputGetTransactionCount**](OutputGetTransactionCount.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## qanGetTransactionReceipt

> OutputGetTransactionReceipt qanGetTransactionReceipt(hash)



Returns the receipt of a transaction by transaction hash.

### Example

```javascript
import QanAutoApi from 'qan_auto_api';

let apiInstance = new QanAutoApi.DefaultApi();
let hash = 0x4e3a3754410177e6937ef1f84bba68ea139e8d1a2258c5f85db9f1cd715a1bdd; // String | The hash of a transaction
apiInstance.qanGetTransactionReceipt(hash, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hash** | **String**| The hash of a transaction | 

### Return type

[**OutputGetTransactionReceipt**](OutputGetTransactionReceipt.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## qanGetUncleCountByBlockHash

> OutputGetUncleCountByBlockHash qanGetUncleCountByBlockHash(hash)



Returns the number of uncles for the block matching the given block hash.

### Example

```javascript
import QanAutoApi from 'qan_auto_api';

let apiInstance = new QanAutoApi.DefaultApi();
let hash = 0x4e216c95f527e9ba0f1161a1c4609b893302c704f05a520da8141ca91878f63e; // String | The hash of the block to get uncles for
apiInstance.qanGetUncleCountByBlockHash(hash, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hash** | **String**| The hash of the block to get uncles for | 

### Return type

[**OutputGetUncleCountByBlockHash**](OutputGetUncleCountByBlockHash.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## qanGetUncleCountByBlockNumber

> OutputGetUncleCountByBlockNumber qanGetUncleCountByBlockNumber(blockNumber)



Returns the number of uncles for the block matching the given block number.

### Example

```javascript
import QanAutoApi from 'qan_auto_api';

let apiInstance = new QanAutoApi.DefaultApi();
let blockNumber = 15537381; // String | The block number in hexadecimal or decimal format or the string latest, earliest, pending, see the default block parameter description in the official Ethereum documentation
apiInstance.qanGetUncleCountByBlockNumber(blockNumber, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockNumber** | **String**| The block number in hexadecimal or decimal format or the string latest, earliest, pending, see the default block parameter description in the official Ethereum documentation | 

### Return type

[**OutputGetUncleCountByBlockNumber**](OutputGetUncleCountByBlockNumber.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## qanMaxPriorityFeePerGas

> OutputMaxPriorityFeePerGas qanMaxPriorityFeePerGas()



Get the priority fee needed to be included in a block.

### Example

```javascript
import QanAutoApi from 'qan_auto_api';

let apiInstance = new QanAutoApi.DefaultApi();
apiInstance.qanMaxPriorityFeePerGas((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**OutputMaxPriorityFeePerGas**](OutputMaxPriorityFeePerGas.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## qanNewBlockFilter

> OutputNewBlockFilter qanNewBlockFilter()



Creates a filter in the node, to notify when a new block arrives.

### Example

```javascript
import QanAutoApi from 'qan_auto_api';

let apiInstance = new QanAutoApi.DefaultApi();
apiInstance.qanNewBlockFilter((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**OutputNewBlockFilter**](OutputNewBlockFilter.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## qanNewFilter

> OutputNewFilter qanNewFilter(inputNewFilter)



Creates a filter object, based on filter options, to notify when the state changes (logs).

### Example

```javascript
import QanAutoApi from 'qan_auto_api';

let apiInstance = new QanAutoApi.DefaultApi();
let inputNewFilter = new QanAutoApi.InputNewFilter(); // InputNewFilter | 
apiInstance.qanNewFilter(inputNewFilter, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputNewFilter** | [**InputNewFilter**](InputNewFilter.md)|  | 

### Return type

[**OutputNewFilter**](OutputNewFilter.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## qanNewPendingTransactionFilter

> OutputNewPendingTransactionFilter qanNewPendingTransactionFilter()



Creates a filter in the node to notify when new pending transactions arrive.

### Example

```javascript
import QanAutoApi from 'qan_auto_api';

let apiInstance = new QanAutoApi.DefaultApi();
apiInstance.qanNewPendingTransactionFilter((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**OutputNewPendingTransactionFilter**](OutputNewPendingTransactionFilter.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## qanSendRawTransaction

> OutputSendRawTransaction qanSendRawTransaction(inputSendRawTransaction)



Creates new message call transaction or a contract creation for signed transactions.

### Example

```javascript
import QanAutoApi from 'qan_auto_api';

let apiInstance = new QanAutoApi.DefaultApi();
let inputSendRawTransaction = new QanAutoApi.InputSendRawTransaction(); // InputSendRawTransaction | 
apiInstance.qanSendRawTransaction(inputSendRawTransaction, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputSendRawTransaction** | [**InputSendRawTransaction**](InputSendRawTransaction.md)|  | 

### Return type

[**OutputSendRawTransaction**](OutputSendRawTransaction.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## qanSubscribe

> OutputSubscribe qanSubscribe(inputSubscribe)



Starts a subscription to a specific event.

### Example

```javascript
import QanAutoApi from 'qan_auto_api';

let apiInstance = new QanAutoApi.DefaultApi();
let inputSubscribe = new QanAutoApi.InputSubscribe(); // InputSubscribe | 
apiInstance.qanSubscribe(inputSubscribe, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputSubscribe** | [**InputSubscribe**](InputSubscribe.md)|  | 

### Return type

[**OutputSubscribe**](OutputSubscribe.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## qanSyncing

> OutputSyncing qanSyncing()



Returns an object with the sync status of the node if the node is out-of-sync and is syncing. Returns null when the node is already in sync.

### Example

```javascript
import QanAutoApi from 'qan_auto_api';

let apiInstance = new QanAutoApi.DefaultApi();
apiInstance.qanSyncing((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**OutputSyncing**](OutputSyncing.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## qanUninstallFilter

> OutputUninstallFilter qanUninstallFilter(filterId)



Uninstalls a filter with the given filter id.

### Example

```javascript
import QanAutoApi from 'qan_auto_api';

let apiInstance = new QanAutoApi.DefaultApi();
let filterId = "filterId_example"; // String | The filter ID that needs to be uninstalled. It should always be called when watch is no longer needed. Additionally, Filters timeout when they aren't requested with eth_getFilterChanges for a period of time
apiInstance.qanUninstallFilter(filterId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterId** | **String**| The filter ID that needs to be uninstalled. It should always be called when watch is no longer needed. Additionally, Filters timeout when they aren&#39;t requested with eth_getFilterChanges for a period of time | 

### Return type

[**OutputUninstallFilter**](OutputUninstallFilter.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## qanUnsubscribe

> OutputUnsubscribe qanUnsubscribe(subscriptionId)



Cancels an existing subscription so that no further events are sent.

### Example

```javascript
import QanAutoApi from 'qan_auto_api';

let apiInstance = new QanAutoApi.DefaultApi();
let subscriptionId = "subscriptionId_example"; // String | A subscription ID that was previously generated in a eth_subscribe RPC request
apiInstance.qanUnsubscribe(subscriptionId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionId** | **String**| A subscription ID that was previously generated in a eth_subscribe RPC request | 

### Return type

[**OutputUnsubscribe**](OutputUnsubscribe.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## qanXlinkValid

> QanXlinkValidResponse qanXlinkValid()



### Example

```javascript
import QanAutoApi from 'qan_auto_api';

let apiInstance = new QanAutoApi.DefaultApi();
apiInstance.qanXlinkValid((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**QanXlinkValidResponse**](QanXlinkValidResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

