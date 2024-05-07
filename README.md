# QAN JavaScript SDK

This repository is guaranteed up-to-date with the upstream QAN API definitions, and leverages OpenAPI technology to stay consistent.

Versioning is based on SEMVER, meaning:

- Stable releases guarantee backwards compatibility for the same major versions.
- Minor releases will not contain breaking changes.
- Patch releases only focus on fixing issues.

## Documentation for API Endpoints

All URIs are relative to *https://rpc-testnet.qanplatform.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*QanAutoApi.DefaultApi* | [**qanAccounts**](docs/DefaultApi.md#qanAccounts) | **GET** /accounts/ | 
*QanAutoApi.DefaultApi* | [**qanBlobBaseFee**](docs/DefaultApi.md#qanBlobBaseFee) | **GET** /blobBaseFee/ | 
*QanAutoApi.DefaultApi* | [**qanBlockNumber**](docs/DefaultApi.md#qanBlockNumber) | **GET** /blockNumber/ | 
*QanAutoApi.DefaultApi* | [**qanCall**](docs/DefaultApi.md#qanCall) | **POST** /call/ | 
*QanAutoApi.DefaultApi* | [**qanChainId**](docs/DefaultApi.md#qanChainId) | **GET** /chainId/ | 
*QanAutoApi.DefaultApi* | [**qanEstimateGas**](docs/DefaultApi.md#qanEstimateGas) | **POST** /estimateGas/ | 
*QanAutoApi.DefaultApi* | [**qanFeeHistory**](docs/DefaultApi.md#qanFeeHistory) | **POST** /feeHistory/ | 
*QanAutoApi.DefaultApi* | [**qanGasPrice**](docs/DefaultApi.md#qanGasPrice) | **GET** /gasPrice/ | 
*QanAutoApi.DefaultApi* | [**qanGetAccount**](docs/DefaultApi.md#qanGetAccount) | **GET** /getAccount/{Address}/{BlockReference}/ | 
*QanAutoApi.DefaultApi* | [**qanGetBalance**](docs/DefaultApi.md#qanGetBalance) | **GET** /getBalance/{Address}/ | 
*QanAutoApi.DefaultApi* | [**qanGetBlockByHash**](docs/DefaultApi.md#qanGetBlockByHash) | **GET** /getBlockByHash/{Hash}/{TransactionDetailFlag}/ | 
*QanAutoApi.DefaultApi* | [**qanGetBlockByNumber**](docs/DefaultApi.md#qanGetBlockByNumber) | **GET** /getBlockByNumber/{BlockNumber}/{TransactionDetailFlag}/ | 
*QanAutoApi.DefaultApi* | [**qanGetBlockReceipts**](docs/DefaultApi.md#qanGetBlockReceipts) | **GET** /getBlockReceipts/{BlockNumber}/ | 
*QanAutoApi.DefaultApi* | [**qanGetBlockTransactionCountByHash**](docs/DefaultApi.md#qanGetBlockTransactionCountByHash) | **GET** /getBlockTransactionCountByHash/{Hash}/ | 
*QanAutoApi.DefaultApi* | [**qanGetBlockTransactionCountByNumber**](docs/DefaultApi.md#qanGetBlockTransactionCountByNumber) | **GET** /getBlockTransactionCountByNumber/{BlockNumber}/ | 
*QanAutoApi.DefaultApi* | [**qanGetCode**](docs/DefaultApi.md#qanGetCode) | **GET** /getCode/{Address}/ | 
*QanAutoApi.DefaultApi* | [**qanGetFilterChanges**](docs/DefaultApi.md#qanGetFilterChanges) | **GET** /getFilterChanges/{FilterId}/ | 
*QanAutoApi.DefaultApi* | [**qanGetFilterLogs**](docs/DefaultApi.md#qanGetFilterLogs) | **GET** /getFilterLogs/{Id}/ | 
*QanAutoApi.DefaultApi* | [**qanGetLogs**](docs/DefaultApi.md#qanGetLogs) | **POST** /getLogs/ | 
*QanAutoApi.DefaultApi* | [**qanGetProof**](docs/DefaultApi.md#qanGetProof) | **POST** /getProof/ | 
*QanAutoApi.DefaultApi* | [**qanGetStorageAt**](docs/DefaultApi.md#qanGetStorageAt) | **POST** /getStorageAt/ | 
*QanAutoApi.DefaultApi* | [**qanGetTransactionByBlockHashAndIndex**](docs/DefaultApi.md#qanGetTransactionByBlockHashAndIndex) | **GET** /getTransactionByBlockHashAndIndex/{blockHash}/{index}/ | 
*QanAutoApi.DefaultApi* | [**qanGetTransactionByBlockNumberAndIndex**](docs/DefaultApi.md#qanGetTransactionByBlockNumberAndIndex) | **GET** /getTransactionByBlockNumberAndIndex/{blockNumber}/{index}/ | 
*QanAutoApi.DefaultApi* | [**qanGetTransactionByHash**](docs/DefaultApi.md#qanGetTransactionByHash) | **GET** /getTransactionByHash/{hash}/ | 
*QanAutoApi.DefaultApi* | [**qanGetTransactionCount**](docs/DefaultApi.md#qanGetTransactionCount) | **GET** /getTransactionCount/{Address}/{BlockNumber}/ | 
*QanAutoApi.DefaultApi* | [**qanGetTransactionReceipt**](docs/DefaultApi.md#qanGetTransactionReceipt) | **GET** /getTransactionReceipt/{Hash}/ | 
*QanAutoApi.DefaultApi* | [**qanGetUncleCountByBlockHash**](docs/DefaultApi.md#qanGetUncleCountByBlockHash) | **GET** /getUncleCountByBlockHash/{Hash}/ | 
*QanAutoApi.DefaultApi* | [**qanGetUncleCountByBlockNumber**](docs/DefaultApi.md#qanGetUncleCountByBlockNumber) | **GET** /getUncleCountByBlockNumber/{BlockNumber}/ | 
*QanAutoApi.DefaultApi* | [**qanMaxPriorityFeePerGas**](docs/DefaultApi.md#qanMaxPriorityFeePerGas) | **GET** /maxPriorityFeePerGas/ | 
*QanAutoApi.DefaultApi* | [**qanNewBlockFilter**](docs/DefaultApi.md#qanNewBlockFilter) | **GET** /newBlockFilter/ | 
*QanAutoApi.DefaultApi* | [**qanNewFilter**](docs/DefaultApi.md#qanNewFilter) | **POST** /newFilter/ | 
*QanAutoApi.DefaultApi* | [**qanNewPendingTransactionFilter**](docs/DefaultApi.md#qanNewPendingTransactionFilter) | **GET** /newPendingTransactionFilter/ | 
*QanAutoApi.DefaultApi* | [**qanSendRawTransaction**](docs/DefaultApi.md#qanSendRawTransaction) | **POST** /sendRawTransaction/ | 
*QanAutoApi.DefaultApi* | [**qanSubscribe**](docs/DefaultApi.md#qanSubscribe) | **POST** /subscribe/ | 
*QanAutoApi.DefaultApi* | [**qanSyncing**](docs/DefaultApi.md#qanSyncing) | **GET** /syncing/ | 
*QanAutoApi.DefaultApi* | [**qanUninstallFilter**](docs/DefaultApi.md#qanUninstallFilter) | **GET** /uninstallFilter/{FilterId}/ | 
*QanAutoApi.DefaultApi* | [**qanUnsubscribe**](docs/DefaultApi.md#qanUnsubscribe) | **GET** /unsubscribe/{SubscriptionId}/ | 
*QanAutoApi.DefaultApi* | [**qanXlinkValid**](docs/DefaultApi.md#qanXlinkValid) | **GET** /xlinkValid/ | 


## Documentation for Models

 - [QanAutoApi.ErrorDetail](docs/ErrorDetail.md)
 - [QanAutoApi.ErrorModel](docs/ErrorModel.md)
 - [QanAutoApi.EstimateGasObject](docs/EstimateGasObject.md)
 - [QanAutoApi.FilterObject](docs/FilterObject.md)
 - [QanAutoApi.InputCall](docs/InputCall.md)
 - [QanAutoApi.InputEstimateGas](docs/InputEstimateGas.md)
 - [QanAutoApi.InputFeeHistory](docs/InputFeeHistory.md)
 - [QanAutoApi.InputGetLogs](docs/InputGetLogs.md)
 - [QanAutoApi.InputGetProof](docs/InputGetProof.md)
 - [QanAutoApi.InputGetStorageAt](docs/InputGetStorageAt.md)
 - [QanAutoApi.InputNewFilter](docs/InputNewFilter.md)
 - [QanAutoApi.InputSendRawTransaction](docs/InputSendRawTransaction.md)
 - [QanAutoApi.InputSubscribe](docs/InputSubscribe.md)
 - [QanAutoApi.OutputAccounts](docs/OutputAccounts.md)
 - [QanAutoApi.OutputBlobBaseFee](docs/OutputBlobBaseFee.md)
 - [QanAutoApi.OutputBlockNumber](docs/OutputBlockNumber.md)
 - [QanAutoApi.OutputCall](docs/OutputCall.md)
 - [QanAutoApi.OutputChainId](docs/OutputChainId.md)
 - [QanAutoApi.OutputEstimateGas](docs/OutputEstimateGas.md)
 - [QanAutoApi.OutputFeeHistory](docs/OutputFeeHistory.md)
 - [QanAutoApi.OutputGasPrice](docs/OutputGasPrice.md)
 - [QanAutoApi.OutputGetAccount](docs/OutputGetAccount.md)
 - [QanAutoApi.OutputGetBalance](docs/OutputGetBalance.md)
 - [QanAutoApi.OutputGetBlockByHash](docs/OutputGetBlockByHash.md)
 - [QanAutoApi.OutputGetBlockByNumber](docs/OutputGetBlockByNumber.md)
 - [QanAutoApi.OutputGetBlockReceipts](docs/OutputGetBlockReceipts.md)
 - [QanAutoApi.OutputGetBlockTransactionCountByHash](docs/OutputGetBlockTransactionCountByHash.md)
 - [QanAutoApi.OutputGetBlockTransactionCountByNumber](docs/OutputGetBlockTransactionCountByNumber.md)
 - [QanAutoApi.OutputGetCode](docs/OutputGetCode.md)
 - [QanAutoApi.OutputGetFilterChanges](docs/OutputGetFilterChanges.md)
 - [QanAutoApi.OutputGetFilterLogs](docs/OutputGetFilterLogs.md)
 - [QanAutoApi.OutputGetLogs](docs/OutputGetLogs.md)
 - [QanAutoApi.OutputGetProof](docs/OutputGetProof.md)
 - [QanAutoApi.OutputGetStorageAt](docs/OutputGetStorageAt.md)
 - [QanAutoApi.OutputGetTransactionByBlockHashAndIndex](docs/OutputGetTransactionByBlockHashAndIndex.md)
 - [QanAutoApi.OutputGetTransactionByBlockNumberAndIndex](docs/OutputGetTransactionByBlockNumberAndIndex.md)
 - [QanAutoApi.OutputGetTransactionByHash](docs/OutputGetTransactionByHash.md)
 - [QanAutoApi.OutputGetTransactionCount](docs/OutputGetTransactionCount.md)
 - [QanAutoApi.OutputGetTransactionReceipt](docs/OutputGetTransactionReceipt.md)
 - [QanAutoApi.OutputGetUncleCountByBlockHash](docs/OutputGetUncleCountByBlockHash.md)
 - [QanAutoApi.OutputGetUncleCountByBlockNumber](docs/OutputGetUncleCountByBlockNumber.md)
 - [QanAutoApi.OutputMaxPriorityFeePerGas](docs/OutputMaxPriorityFeePerGas.md)
 - [QanAutoApi.OutputNewBlockFilter](docs/OutputNewBlockFilter.md)
 - [QanAutoApi.OutputNewFilter](docs/OutputNewFilter.md)
 - [QanAutoApi.OutputNewPendingTransactionFilter](docs/OutputNewPendingTransactionFilter.md)
 - [QanAutoApi.OutputSendRawTransaction](docs/OutputSendRawTransaction.md)
 - [QanAutoApi.OutputSubscribe](docs/OutputSubscribe.md)
 - [QanAutoApi.OutputSyncing](docs/OutputSyncing.md)
 - [QanAutoApi.OutputUninstallFilter](docs/OutputUninstallFilter.md)
 - [QanAutoApi.OutputUnsubscribe](docs/OutputUnsubscribe.md)
 - [QanAutoApi.ParamsTransaction](docs/ParamsTransaction.md)
 - [QanAutoApi.QanXlinkValidResponse](docs/QanXlinkValidResponse.md)
 - [QanAutoApi.ResponseBlock](docs/ResponseBlock.md)
 - [QanAutoApi.ResponseLog](docs/ResponseLog.md)
 - [QanAutoApi.ResponseStorageEntry](docs/ResponseStorageEntry.md)
 - [QanAutoApi.ResponseTransaction](docs/ResponseTransaction.md)
 - [QanAutoApi.ResponseTransactionReceipt](docs/ResponseTransactionReceipt.md)
 - [QanAutoApi.ResponseWithdrawals](docs/ResponseWithdrawals.md)
 - [QanAutoApi.SyncStatus](docs/SyncStatus.md)

## Acknowledgements

We would like to thank Smartbear and OpenAPITools tech for making building declarative APIs possible.
A huge benefit for the whole industry!
