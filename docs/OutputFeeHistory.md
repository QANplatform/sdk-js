# QanAutoApi.OutputFeeHistory

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | **String** | A URL to the JSON Schema for this object. | [optional] [readonly] 
**baseFeePerGas** | **[String]** | An array of block base fees per gas. This includes the next block after the newest of the returned range, because this value can be derived from the newest block. Zeroes are returned for pre-EIP-1559 blocks | 
**gasUsedRatio** | **[Number]** | An array of block gas used ratios. These are calculated as the ratio of gasUsed and gasLimit | 
**oldestBlock** | **String** | The lowest number block of the returned range encoded in decimal format | 
**reward** | **[[String]]** | An array of effective priority fees per gas data points from a single block. All zeroes are returned if the block is empty | 


