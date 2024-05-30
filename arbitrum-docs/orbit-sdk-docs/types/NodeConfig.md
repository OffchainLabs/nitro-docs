---
layout: docs
sidebar: true
toc_max_heading_level: 5
---

## Type Aliases

### NodeConfig

```ts
type NodeConfig: object;
```

Nitro node configuration options

#### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `auth` | `object` | - |
| `auth.addr` | `string` | AUTH-RPC server listening interface (default "127.0.0.1") |
| `auth.api` | `string`[] | APIs offered over the AUTH-RPC interface (default [validation]) |
| `auth.jwtsecret` | `string` | Path to file holding JWT secret (32B hex) |
| `auth.origins` | `string`[] | Origins from which to accept AUTH requests (default [localhost]) |
| `auth.port` | `number` | AUTH-RPC server listening port (default 8549) |
| `blocks-reexecutor` | `object` | - |
| `blocks-reexecutor.blocks-per-thread` | `number` | minimum number of blocks to execute per thread. When mode is random this acts as the size of random block range sample (default 10000) |
| `blocks-reexecutor.enable` | `boolean` | enables re-execution of a range of blocks against historic state |
| `blocks-reexecutor.end-block` | `number` | last block number of the block range for re-execution |
| `blocks-reexecutor.mode` | `string` | mode to run the blocks-reexecutor on. Valid modes full and random. full - execute all the blocks in the given range. random - execute a random sample range of blocks with in a given range (default "random") |
| `blocks-reexecutor.room` | `number` | number of threads to parallelize blocks re-execution (default 12) |
| `blocks-reexecutor.start-block` | `number` | first block number of the block range for re-execution |
| `chain` | `object` | - |
| `chain.dev-wallet` | `object` | - |
| `chain.dev-wallet.account` | `string` | account to use (default is first account in keystore) |
| `chain.dev-wallet.only-create-key` | `boolean` | if true, creates new key then exits |
| `chain.dev-wallet.password` | `string` | wallet passphrase (default "PASSWORD_NOT_SET") |
| `chain.dev-wallet.pathname` | `string` | pathname for wallet |
| `chain.dev-wallet.private-key` | `string` | private key for wallet |
| `chain.id` | `number` | L2 chain ID (determines Arbitrum network) |
| `chain.info-files` | `string`[] | L2 chain info json files |
| `chain.info-ipfs-download-path` | `string` | path to save temp downloaded file (default "/tmp/") |
| `chain.info-ipfs-url` | `string` | url to download chain info file |
| `chain.info-json` | `string` | L2 chain info in json string format |
| `chain.name` | `string` | L2 chain name (determines Arbitrum network) |
| `conf` | `object` | - |
| `conf.dump` | `boolean` | print out currently active configuration file |
| `conf.env-prefix` | `string` | environment variables with given prefix will be loaded as configuration values |
| `conf.file` | `string`[] | name of configuration file |
| `conf.reload-interval` | `string` | how often to reload configuration (0=disable periodic reloading) |
| `conf.s3` | `object` | - |
| `conf.s3.access-key` | `string` | S3 access key |
| `conf.s3.bucket` | `string` | S3 bucket |
| `conf.s3.object-key` | `string` | S3 object key |
| `conf.s3.region` | `string` | S3 region |
| `conf.s3.secret-key` | `string` | S3 secret key |
| `conf.string` | `string` | configuration as JSON string |
| `execution` | `object` | - |
| `execution.caching` | `object` | - |
| `execution.caching.archive` | `boolean` | retain past block state |
| `execution.caching.block-age` | `string` | minimum age of recent blocks to keep in memory (default 30m0s) |
| `execution.caching.block-count` | `number` | minimum number of recent blocks to keep in memory (default 128) |
| `execution.caching.database-cache` | `number` | amount of memory in megabytes to cache database contents with (default 2048) |
| `execution.caching.max-amount-of-gas-to-skip-state-saving` | `number` | maximum amount of gas in blocks to skip saving state to Persistent storage (archive node only) -- warning: this option seems to cause issues |
| `execution.caching.max-number-of-blocks-to-skip-state-saving` | `number` | maximum number of blocks to skip state saving to persistent storage (archive node only) -- warning: this option seems to cause issues |
| `execution.caching.snapshot-cache` | `number` | amount of memory in megabytes to cache state snapshots with (default 400) |
| `execution.caching.snapshot-restore-gas-limit` | `number` | maximum gas rolled back to recover snapshot (default 300000000000) |
| `execution.caching.trie-clean-cache` | `number` | amount of memory in megabytes to cache unchanged state trie nodes with (default 600) |
| `execution.caching.trie-dirty-cache` | `number` | amount of memory in megabytes to cache state diffs against disk with (larger cache lowers database growth) (default 1024) |
| `execution.caching.trie-time-limit` | `string` | maximum block processing time before trie is written to hard-disk (default 1h0m0s) |
| `execution.dangerous` | `object` | - |
| `execution.dangerous.reorg-to-block` | `number` | DANGEROUS! forces a reorg to an old block height. To be used for testing only. -1 to disable (default -1) |
| `execution.enable-prefetch-block` | `boolean` | enable prefetching of blocks (default true) |
| `execution.forwarder` | `object` | - |
| `execution.forwarder.connection-timeout` | `string` | total time to wait before cancelling connection (default 30s) |
| `execution.forwarder.idle-connection-timeout` | `string` | time until idle connections are closed (default 15s) |
| `execution.forwarder.max-idle-connections` | `number` | maximum number of idle connections to keep open (default 1) |
| `execution.forwarder.redis-url` | `string` | the Redis URL to recomend target via |
| `execution.forwarder.retry-interval` | `string` | minimal time between update retries (default 100ms) |
| `execution.forwarder.update-interval` | `string` | forwarding target update interval (default 1s) |
| `execution.forwarding-target` | `string` | transaction forwarding target URL, or "null" to disable forwarding (iff not sequencer) |
| `execution.parent-chain-reader` | `object` | - |
| `execution.parent-chain-reader.dangerous` | `object` | - |
| `execution.parent-chain-reader.dangerous.wait-for-tx-approval-safe-poll` | `string` | Dangerous! only meant to be used by system tests |
| `execution.parent-chain-reader.enable` | `boolean` | enable reader connection (default true) |
| `execution.parent-chain-reader.old-header-timeout` | `string` | warns if the latest l1 block is at least this old (default 5m0s) |
| `execution.parent-chain-reader.poll-interval` | `string` | interval when polling endpoint (default 15s) |
| `execution.parent-chain-reader.poll-only` | `boolean` | do not attempt to subscribe to header events |
| `execution.parent-chain-reader.subscribe-err-interval` | `string` | interval for subscribe error (default 5m0s) |
| `execution.parent-chain-reader.tx-timeout` | `string` | timeout when waiting for a transaction (default 5m0s) |
| `execution.parent-chain-reader.use-finality-data` | `boolean` | use l1 data about finalized/safe blocks (default true) |
| `execution.recording-database` | `object` | - |
| `execution.recording-database.trie-clean-cache` | `number` | like trie-clean-cache for the separate, recording database (used for validation) (default 16) |
| `execution.recording-database.trie-dirty-cache` | `number` | like trie-dirty-cache for the separate, recording database (used for validation) (default 1024) |
| `execution.rpc` | `object` | - |
| `execution.rpc.allow-method` | `string`[] | list of whitelisted rpc methods |
| `execution.rpc.arbdebug` | `object` | - |
| `execution.rpc.arbdebug.block-range-bound` | `number` | bounds the number of blocks arbdebug calls may return (default 256) |
| `execution.rpc.arbdebug.timeout-queue-bound` | `number` | bounds the length of timeout queues arbdebug calls may return (default 512) |
| `execution.rpc.bloom-bits-blocks` | `number` | number of blocks a single bloom bit section vector holds (default 16384) |
| `execution.rpc.bloom-confirms` | `number` | number of confirmation blocks before a bloom section is considered final (default 256) |
| `execution.rpc.classic-redirect` | `string` | url to redirect classic requests, use "error:[CODE:]MESSAGE" to return specified error instead of redirecting |
| `execution.rpc.classic-redirect-timeout` | `string` | timeout for forwarded classic requests, where 0 = no timeout |
| `execution.rpc.evm-timeout` | `string` | timeout used for eth_call (0=infinite) (default 5s) |
| `execution.rpc.feehistory-max-block-count` | `number` | max number of blocks a fee history request may cover (default 1024) |
| `execution.rpc.filter-log-cache-size` | `number` | log filter system maximum number of cached blocks (default 32) |
| `execution.rpc.filter-timeout` | `string` | log filter system maximum time filters stay active (default 5m0s) |
| `execution.rpc.gas-cap` | `number` | cap on computation gas that can be used in eth_call/estimateGas (0=infinite) (default 50000000) |
| `execution.rpc.max-recreate-state-depth` | `number` | maximum depth for recreating state, measured in l2 gas (0=don't recreate state, -1=infinite, -2=use default value for archive or non-archive node (whichever is configured)) (default -2) |
| `execution.rpc.tx-allow-unprotected` | `boolean` | allow transactions that aren't EIP-155 replay protected to be submitted over the RPC (default true) |
| `execution.rpc.tx-fee-cap` | `number` | cap on transaction fee (in ether) that can be sent via the RPC APIs (0 = no cap) (default 1) |
| `execution.secondary-forwarding-target` | `string`[] | secondary transaction forwarding target URL |
| `execution.sequencer` | `object` | - |
| `execution.sequencer.enable` | `boolean` | act and post to l1 as sequencer |
| `execution.sequencer.forwarder` | `object` | - |
| `execution.sequencer.forwarder.connection-timeout` | `string` | total time to wait before cancelling connection (default 30s) |
| `execution.sequencer.forwarder.idle-connection-timeout` | `string` | time until idle connections are closed (default 1m0s) |
| `execution.sequencer.forwarder.max-idle-connections` | `number` | maximum number of idle connections to keep open (default 100) |
| `execution.sequencer.forwarder.redis-url` | `string` | the Redis URL to recomend target via |
| `execution.sequencer.forwarder.retry-interval` | `string` | minimal time between update retries (default 100ms) |
| `execution.sequencer.forwarder.update-interval` | `string` | forwarding target update interval (default 1s) |
| `execution.sequencer.max-acceptable-timestamp-delta` | `string` | maximum acceptable time difference between the local time and the latest L1 block's timestamp (default 1h0m0s) |
| `execution.sequencer.max-block-speed` | `string` | minimum delay between blocks (sets a maximum speed of block production) (default 250ms) |
| `execution.sequencer.max-revert-gas-reject` | `number` | maximum gas executed in a revert for the sequencer to reject the transaction instead of posting it (anti-DOS) (default 31000) |
| `execution.sequencer.max-tx-data-size` | `number` | maximum transaction size the sequencer will accept (default 95000) |
| `execution.sequencer.nonce-cache-size` | `number` | size of the tx sender nonce cache (default 1024) |
| `execution.sequencer.nonce-failure-cache-expiry` | `string` | maximum amount of time to wait for a predecessor before rejecting a tx with nonce too high (default 1s) |
| `execution.sequencer.nonce-failure-cache-size` | `number` | number of transactions with too high of a nonce to keep in memory while waiting for their predecessor (default 1024) |
| `execution.sequencer.queue-size` | `number` | size of the pending tx queue (default 1024) |
| `execution.sequencer.queue-timeout` | `string` | maximum amount of time transaction can wait in queue (default 12s) |
| `execution.sequencer.sender-whitelist` | `string` | comma separated whitelist of authorized senders (if empty, everyone is allowed) |
| `execution.tx-lookup-limit` | `number` | retain the ability to lookup transactions by hash for the past N blocks (0 = all blocks) (default 126230400) |
| `execution.tx-pre-checker` | `object` | - |
| `execution.tx-pre-checker.required-state-age` | `number` | how long ago should the storage conditions from eth_SendRawTransactionConditional be true, 0 = don't check old state (default 2) |
| `execution.tx-pre-checker.required-state-max-blocks` | `number` | maximum number of blocks to look back while looking for the \<required-state-age\> seconds old state, 0 = don't limit the search (default 4) |
| `execution.tx-pre-checker.strictness` | `number` | how strict to be when checking txs before forwarding them. 0 = accept anything, 10 = should never reject anything that'd succeed, 20 = likely won't reject anything that'd succeed, 30 = full validation which may reject txs that would succeed |
| `file-logging` | `object` | - |
| `file-logging.buf-size` | `number` | size of intermediate log records buffer (default 512) |
| `file-logging.compress` | `boolean` | enable compression of old log files (default true) |
| `file-logging.enable` | `boolean` | enable logging to file (default true) |
| `file-logging.file` | `string` | path to log file (default "nitro.log") |
| `file-logging.local-time` | `boolean` | if true: local time will be used in old log filename timestamps |
| `file-logging.max-age` | `number` | maximum number of days to retain old log files based on the timestamp encoded in their filename (0 = no limit) |
| `file-logging.max-backups` | `number` | maximum number of old log files to retain (0 = no limit) (default 20) |
| `file-logging.max-size` | `number` | log file size in Mb that will trigger log file rotation (0 = trigger disabled) (default 5) |
| `graphql` | `object` | - |
| `graphql.corsdomain` | `string`[] | Comma separated list of domains from which to accept cross origin requests (browser enforced) |
| `graphql.enable` | `boolean` | Enable graphql endpoint on the rpc endpoint |
| `graphql.vhosts` | `string`[] | Comma separated list of virtual hostnames from which to accept requests (server enforced). Accepts '*' wildcard (default [localhost]) |
| `http` | `object` | - |
| `http.addr` | `string` | HTTP-RPC server listening interface |
| `http.api` | `string`[] | APIs offered over the HTTP-RPC interface (default [net,web3,eth,arb]) |
| `http.corsdomain` | `string`[] | Comma separated list of domains from which to accept cross origin requests (browser enforced) |
| `http.port` | `number` | HTTP-RPC server listening port (default 8547) |
| `http.rpcprefix` | `string` | HTTP path path prefix on which JSON-RPC is served. Use '/' to serve on all paths |
| `http.server-timeouts` | `object` | - |
| `http.server-timeouts.idle-timeout` | `string` | the maximum amount of time to wait for the next request when keep-alives are enabled (http.Server.IdleTimeout) (default 2m0s) |
| `http.server-timeouts.read-header-timeout` | `string` | the amount of time allowed to read the request headers (http.Server.ReadHeaderTimeout) (default 30s) |
| `http.server-timeouts.read-timeout` | `string` | the maximum duration for reading the entire request (http.Server.ReadTimeout) (default 30s) |
| `http.server-timeouts.write-timeout` | `string` | the maximum duration before timing out writes of the response (http.Server.WriteTimeout) (default 30s) |
| `http.vhosts` | `string`[] | Comma separated list of virtual hostnames from which to accept requests (server enforced). Accepts '*' wildcard (default [localhost]) |
| `init` | `object` | - |
| `init.accounts-per-sync` | `number` | during init - sync database every X accounts. Lower value for low-memory systems. 0 disables. (default 100000) |
| `init.dev-init` | `boolean` | init with dev data (1 account with balance) instead of file import |
| `init.dev-init-address` | `string` | Address of dev-account. Leave empty to use the dev-wallet. |
| `init.dev-init-blocknum` | `number` | Number of preinit blocks. Must exist in ancient database. |
| `init.download-path` | `string` | path to save temp downloaded file (default "/tmp/") |
| `init.download-poll` | `string` | how long to wait between polling attempts (default 1m0s) |
| `init.empty` | `boolean` | init with empty state |
| `init.force` | `boolean` | if true: in case database exists init code will be reexecuted and genesis block compared to database |
| `init.import-file` | `string` | path for json data to import |
| `init.prune` | `string` | pruning for a given use: "full" for full nodes serving RPC requests, or "validator" for validators |
| `init.prune-bloom-size` | `number` | the amount of memory in megabytes to use for the pruning bloom filter (higher values prune better) (default 2048) |
| `init.recreate-missing-state-from` | `number` | block number to start recreating missing states from (0 = disabled) |
| `init.reset-to-message` | `number` | forces a reset to an old message height. Also set max-reorg-resequence-depth=0 to force re-reading messages (default -1) |
| `init.then-quit` | `boolean` | quit after init is done |
| `init.url` | `string` | url to download initializtion data - will poll if download fails |
| `ipc` | `object` | - |
| `ipc.path` | `string` | Requested location to place the IPC endpoint. An empty path disables IPC. |
| `log-level` | `number` | log level (default 3) |
| `log-type` | `string` | log type (plaintext or json) (default "plaintext") |
| `metrics` | `boolean` | enable metrics |
| `metrics-server` | `object` | - |
| `metrics-server.addr` | `string` | metrics server address (default "127.0.0.1") |
| `metrics-server.port` | `number` | metrics server port (default 6070) |
| `metrics-server.update-interval` | `string` | metrics server update interval (default 3s) |
| `node` | `object` | - |
| `node.batch-poster` | `object` | - |
| `node.batch-poster.compression-level` | `number` | batch compression level (default 11) |
| `node.batch-poster.das-retention-period` | `string` | In AnyTrust mode, the period which DASes are requested to retain the stored batches. (default 360h0m0s) |
| `node.batch-poster.data-poster` | `object` | - |
| `node.batch-poster.data-poster.allocate-mempool-balance` | `boolean` | if true, don't put transactions in the mempool that spend a total greater than the batch poster's balance (default true) |
| `node.batch-poster.data-poster.blob-tx-replacement-times` | `string` | comma-separated list of durations since first posting a blob transaction to attempt a replace-by-fee (default "5m,10m,30m,1h,4h,8h,16h,22h") |
| `node.batch-poster.data-poster.dangerous` | `object` | - |
| `node.batch-poster.data-poster.dangerous.clear-dbstorage` | `boolean` | clear database storage |
| `node.batch-poster.data-poster.elapsed-time-base` | `string` | unit to measure the time elapsed since creation of transaction used for maximum fee cap calculation (default 10m0s) |
| `node.batch-poster.data-poster.elapsed-time-importance` | `number` | weight given to the units of time elapsed used for maximum fee cap calculation (default 10) |
| `node.batch-poster.data-poster.external-signer` | `object` | - |
| `node.batch-poster.data-poster.external-signer.address` | `string` | external signer address |
| `node.batch-poster.data-poster.external-signer.client-cert` | `string` | rpc client cert |
| `node.batch-poster.data-poster.external-signer.client-private-key` | `string` | rpc client private key |
| `node.batch-poster.data-poster.external-signer.method` | `string` | external signer method (default "eth_signTransaction") |
| `node.batch-poster.data-poster.external-signer.root-ca` | `string` | external signer root CA |
| `node.batch-poster.data-poster.external-signer.url` | `string` | external signer url |
| `node.batch-poster.data-poster.legacy-storage-encoding` | `boolean` | encodes items in a legacy way (as it was before dropping generics) |
| `node.batch-poster.data-poster.max-blob-tx-tip-cap-gwei` | `number` | the maximum tip cap to post EIP-4844 blob carrying transactions at (default 1) |
| `node.batch-poster.data-poster.max-fee-bid-multiple-bips` | `number` | the maximum multiple of the current price to bid for a transaction's fees (may be exceeded due to min rbf increase, 0 = unlimited) (default 100000) |
| `node.batch-poster.data-poster.max-fee-cap-formula` | `string` | mathematical formula to calculate maximum fee cap gwei the result of which would be float64. This expression is expected to be evaluated please refer https://github.com/Knetic/govaluate/blob/master/MANUAL.md to find all available mathematical operators. Currently available variables to construct the formula are BacklogOfBatches, UrgencyGWei, ElapsedTime, ElapsedTimeBase, ElapsedTimeImportance, and TargetPriceGWei (default "((BacklogOfBatches * UrgencyGWei) ** 2) + ((ElapsedTime/ElapsedTimeBase) ** 2) * ElapsedTimeImportance + TargetPriceGWei") |
| `node.batch-poster.data-poster.max-mempool-transactions` | `number` | the maximum number of transactions to have queued in the mempool at once (0 = unlimited) (default 18) |
| `node.batch-poster.data-poster.max-mempool-weight` | `number` | the maximum number of weight (weight = min(1, tx.blobs)) to have queued in the mempool at once (0 = unlimited) (default 18) |
| `node.batch-poster.data-poster.max-queued-transactions` | `number` | the maximum number of unconfirmed transactions to track at once (0 = unlimited) |
| `node.batch-poster.data-poster.max-tip-cap-gwei` | `number` | the maximum tip cap to post transactions at (default 5) |
| `node.batch-poster.data-poster.min-blob-tx-tip-cap-gwei` | `number` | the minimum tip cap to post EIP-4844 blob carrying transactions at (default 1) |
| `node.batch-poster.data-poster.min-tip-cap-gwei` | `number` | the minimum tip cap to post transactions at (default 0.05) |
| `node.batch-poster.data-poster.nonce-rbf-soft-confs` | `number` | the maximum probable reorg depth, used to determine when a transaction will no longer likely need replaced-by-fee (default 1) |
| `node.batch-poster.data-poster.redis-signer` | `object` | - |
| `node.batch-poster.data-poster.redis-signer.dangerous` | `object` | - |
| `node.batch-poster.data-poster.redis-signer.dangerous.disable-signature-verification` | `boolean` | disable message signature verification |
| `node.batch-poster.data-poster.redis-signer.fallback-verification-key` | `string` | a fallback key used for message verification |
| `node.batch-poster.data-poster.redis-signer.signing-key` | `string` | a 32-byte (64-character) hex string used to sign messages, or a path to a file containing it |
| `node.batch-poster.data-poster.replacement-times` | `string` | comma-separated list of durations since first posting to attempt a replace-by-fee (default "5m,10m,20m,30m,1h,2h,4h,6h,8h,12h,16h,18h,20h,22h") |
| `node.batch-poster.data-poster.target-price-gwei` | `number` | the target price to use for maximum fee cap calculation (default 60) |
| `node.batch-poster.data-poster.urgency-gwei` | `number` | the urgency to use for maximum fee cap calculation (default 2) |
| `node.batch-poster.data-poster.use-db-storage` | `boolean` | uses database storage when enabled (default true) |
| `node.batch-poster.data-poster.use-noop-storage` | `boolean` | uses noop storage, it doesn't store anything |
| `node.batch-poster.data-poster.wait-for-l1-finality` | `boolean` | only treat a transaction as confirmed after L1 finality has been achieved (recommended) (default true) |
| `node.batch-poster.disable-das-fallback-store-data-on-chain` | `boolean` | If unable to batch to DAS, disable fallback storing data on chain |
| `node.batch-poster.enable` | `boolean` | enable posting batches to l1 |
| `node.batch-poster.error-delay` | `string` | how long to delay after error posting batch (default 10s) |
| `node.batch-poster.extra-batch-gas` | `number` | use this much more gas than estimation says is necessary to post batches (default 50000) |
| `node.batch-poster.gas-estimate-base-fee-multiple-bips` | `number` | for gas estimation, use this multiple of the basefee (measured in basis points) as the max fee per gas (default 15000) |
| `node.batch-poster.gas-refunder-address` | `string` | The gas refunder contract address (optional) |
| `node.batch-poster.ignore-blob-price` | `boolean` | if the parent chain supports 4844 blobs and ignore-blob-price is true, post 4844 blobs even if it's not price efficient |
| `node.batch-poster.l1-block-bound` | `string` | only post messages to batches when they're within the max future block/timestamp as of this L1 block tag ("safe", "finalized", "latest", or "ignore" to ignore this check) |
| `node.batch-poster.l1-block-bound-bypass` | `string` | post batches even if not within the layer 1 future bounds if we're within this margin of the max delay (default 1h0m0s) |
| `node.batch-poster.max-4844-batch-size` | `number` | maximum 4844 blob enabled batch size (default 779288) |
| `node.batch-poster.max-delay` | `string` | maximum batch posting delay (default 1h0m0s) |
| `node.batch-poster.max-size` | `number` | maximum batch size (default 100000) |
| `node.batch-poster.parent-chain-wallet` | `object` | - |
| `node.batch-poster.parent-chain-wallet.account` | `string` | account to use (default is first account in keystore) |
| `node.batch-poster.parent-chain-wallet.only-create-key` | `boolean` | if true, creates new key then exits |
| `node.batch-poster.parent-chain-wallet.password` | `string` | wallet passphrase (default "PASSWORD_NOT_SET") |
| `node.batch-poster.parent-chain-wallet.pathname` | `string` | pathname for wallet (default "batch-poster-wallet") |
| `node.batch-poster.parent-chain-wallet.private-key` | `string` | private key for wallet |
| `node.batch-poster.poll-interval` | `string` | how long to wait after no batches are ready to be posted before checking again (default 10s) |
| `node.batch-poster.post-4844-blobs` | `boolean` | if the parent chain supports 4844 blobs and they're well priced, post EIP-4844 blobs |
| `node.batch-poster.redis-lock` | `object` | - |
| `node.batch-poster.redis-lock.background-lock` | `boolean` | should node always try grabing lock in background |
| `node.batch-poster.redis-lock.enable` | `boolean` | if false, always treat this as locked and don't write the lock to redis (default true) |
| `node.batch-poster.redis-lock.key` | `string` | key for lock |
| `node.batch-poster.redis-lock.lockout-duration` | `string` | how long lock is held (default 1m0s) |
| `node.batch-poster.redis-lock.my-id` | `string` | this node's id prefix when acquiring the lock (optional) |
| `node.batch-poster.redis-lock.refresh-duration` | `string` | how long between consecutive calls to redis (default 10s) |
| `node.batch-poster.redis-url` | `string` | if non-empty, the Redis URL to store queued transactions in |
| `node.batch-poster.use-access-lists` | `boolean` | post batches with access lists to reduce gas usage (disabled for L3s) (default true) |
| `node.batch-poster.wait-for-max-delay` | `boolean` | wait for the max batch delay, even if the batch is full |
| `node.block-validator` | `object` | - |
| `node.block-validator.current-module-root` | `string` | current wasm module root ('current' read from chain, 'latest' from machines/latest dir, or provide hash) (default "current") |
| `node.block-validator.dangerous` | `object` | - |
| `node.block-validator.dangerous.reset-block-validation` | `boolean` | resets block-by-block validation, starting again at genesis |
| `node.block-validator.enable` | `boolean` | enable block-by-block validation |
| `node.block-validator.failure-is-fatal` | `boolean` | failing a validation is treated as a fatal error (default true) |
| `node.block-validator.forward-blocks` | `number` | prepare entries for up to that many blocks ahead of validation (small footprint) (default 1024) |
| `node.block-validator.memory-free-limit` | `string` | minimum free-memory limit after reaching which the blockvalidator pauses validation. Enabled by default as 1GB, to disable provide empty string (default "default") |
| `node.block-validator.pending-upgrade-module-root` | `string` | pending upgrade wasm module root to additionally validate (hash, 'latest' or empty) (default "latest") |
| `node.block-validator.prerecorded-blocks` | `number` | record that many blocks ahead of validation (larger footprint) (default 24) |
| `node.block-validator.validation-poll` | `string` | poll time to check validations (default 1s) |
| `node.block-validator.validation-server` | `object` | - |
| `node.block-validator.validation-server.arg-log-limit` | `number` | limit size of arguments in log entries (default 2048) |
| `node.block-validator.validation-server.connection-wait` | `string` | how long to wait for initial connection |
| `node.block-validator.validation-server.jwtsecret` | `string` | path to file with jwtsecret for validation - ignored if url is self or self-auth |
| `node.block-validator.validation-server.retries` | `number` | number of retries in case of failure(0 mean one attempt) (default 3) |
| `node.block-validator.validation-server.retry-delay` | `string` | delay between retries |
| `node.block-validator.validation-server.retry-errors` | `string` | Errors matching this regular expression are automatically retried (default "websocket: close.*\|dial tcp .*\|.*i/o timeout\|.*connection reset by peer\|.*connection refused") |
| `node.block-validator.validation-server.timeout` | `string` | per-response timeout (0-disabled) |
| `node.block-validator.validation-server.url` | `string` | url of server, use self for loopback websocket, self-auth for loopback with authentication (default "self-auth") |
| `node.block-validator.validation-server-configs-list` | `string` | array of validation rpc configs given as a json string. time duration should be supplied in number indicating nanoseconds (default "default") |
| `node.dangerous` | `object` | - |
| `node.dangerous.disable-blob-reader` | `boolean` | DANGEROUS! disables the EIP-4844 blob reader, which is necessary to read batches |
| `node.dangerous.no-l1-listener` | `boolean` | DANGEROUS! disables listening to L1. To be used in test nodes only |
| `node.dangerous.no-sequencer-coordinator` | `boolean` | DANGEROUS! allows sequencing without sequencer-coordinator |
| `node.data-availability` | `object` | - |
| `node.data-availability.enable` | `boolean` | enable Anytrust Data Availability mode |
| `node.data-availability.ipfs-storage` | `object` | - |
| `node.data-availability.ipfs-storage.enable` | `boolean` | enable storage/retrieval of sequencer batch data from IPFS |
| `node.data-availability.ipfs-storage.peers` | `string`[] | list of IPFS peers to connect to, eg /ip4/1.2.3.4/tcp/12345/p2p/abc...xyz |
| `node.data-availability.ipfs-storage.pin-after-get` | `boolean` | pin sequencer batch data in IPFS (default true) |
| `node.data-availability.ipfs-storage.pin-percentage` | `number` | percent of sequencer batch data to pin, as a floating point number in the range 0.0 to 100.0 (default 100) |
| `node.data-availability.ipfs-storage.profiles` | `string` | comma separated list of IPFS profiles to use, see https://docs.ipfs.tech/how-to/default-profile |
| `node.data-availability.ipfs-storage.read-timeout` | `string` | timeout for IPFS reads, since by default it will wait forever. Treat timeout as not found (default 1m0s) |
| `node.data-availability.ipfs-storage.repo-dir` | `string` | directory to use to store the local IPFS repo |
| `node.data-availability.panic-on-error` | `boolean` | whether the Data Availability Service should fail immediately on errors (not recommended) |
| `node.data-availability.parent-chain-connection-attempts` | `number` | parent chain RPC connection attempts (spaced out at least 1 second per attempt, 0 to retry infinitely), only used in standalone daserver; when running as part of a node that node's parent chain configuration is used (default 15) |
| `node.data-availability.parent-chain-node-url` | `string` | URL for parent chain node, only used in standalone daserver; when running as part of a node that node's L1 configuration is used |
| `node.data-availability.request-timeout` | `string` | Data Availability Service timeout duration for Store requests (default 5s) |
| `node.data-availability.rest-aggregator` | `object` | - |
| `node.data-availability.rest-aggregator.enable` | `boolean` | enable retrieval of sequencer batch data from a list of remote REST endpoints; if other DAS storage types are enabled, this mode is used as a fallback |
| `node.data-availability.rest-aggregator.max-per-endpoint-stats` | `number` | number of stats entries (latency and success rate) to keep for each REST endpoint; controls whether strategy is faster or slower to respond to changing conditions (default 20) |
| `node.data-availability.rest-aggregator.online-url-list` | `string` | a URL to a list of URLs of REST das endpoints that is checked at startup; additive with the url option |
| `node.data-availability.rest-aggregator.online-url-list-fetch-interval` | `string` | time interval to periodically fetch url list from online-url-list (default 1h0m0s) |
| `node.data-availability.rest-aggregator.simple-explore-exploit-strategy` | `object` | - |
| `node.data-availability.rest-aggregator.simple-explore-exploit-strategy.exploit-iterations` | `number` | number of consecutive GetByHash calls to the aggregator where each call will cause it to select from REST endpoints in order of best latency and success rate, before switching to explore mode (default 1000) |
| `node.data-availability.rest-aggregator.simple-explore-exploit-strategy.explore-iterations` | `number` | number of consecutive GetByHash calls to the aggregator where each call will cause it to randomly select from REST endpoints until one returns successfully, before switching to exploit mode (default 20) |
| `node.data-availability.rest-aggregator.strategy` | `string` | strategy to use to determine order and parallelism of calling REST endpoint URLs; valid options are 'simple-explore-exploit' (default "simple-explore-exploit") |
| `node.data-availability.rest-aggregator.strategy-update-interval` | `string` | how frequently to update the strategy with endpoint latency and error rate data (default 10s) |
| `node.data-availability.rest-aggregator.sync-to-storage` | `object` | - |
| `node.data-availability.rest-aggregator.sync-to-storage.check-already-exists` | `boolean` | check if the data already exists in this DAS's storage. Must be disabled for fast sync with an IPFS backend (default true) |
| `node.data-availability.rest-aggregator.sync-to-storage.delay-on-error` | `string` | time to wait if encountered an error before retrying (default 1s) |
| `node.data-availability.rest-aggregator.sync-to-storage.eager` | `boolean` | eagerly sync batch data to this DAS's storage from the rest endpoints, using L1 as the index of batch data hashes; otherwise only sync lazily |
| `node.data-availability.rest-aggregator.sync-to-storage.eager-lower-bound-block` | `number` | when eagerly syncing, start indexing forward from this L1 block. Only used if there is no sync state |
| `node.data-availability.rest-aggregator.sync-to-storage.ignore-write-errors` | `boolean` | log only on failures to write when syncing; otherwise treat it as an error (default true) |
| `node.data-availability.rest-aggregator.sync-to-storage.parent-chain-blocks-per-read` | `number` | when eagerly syncing, max l1 blocks to read per poll (default 100) |
| `node.data-availability.rest-aggregator.sync-to-storage.retention-period` | `string` | period to retain synced data (defaults to forever) (default 2562047h47m16.854775807s) |
| `node.data-availability.rest-aggregator.sync-to-storage.state-dir` | `string` | directory to store the sync state in, ie the block number currently synced up to, so that we don't sync from scratch each time |
| `node.data-availability.rest-aggregator.urls` | `string`[] | list of URLs including 'http://' or 'https://' prefixes and port numbers to REST DAS endpoints; additive with the online-url-list option |
| `node.data-availability.rest-aggregator.wait-before-try-next` | `string` | time to wait until trying the next set of REST endpoints while waiting for a response; the next set of REST endpoints is determined by the strategy selected (default 2s) |
| `node.data-availability.rpc-aggregator` | `object` | - |
| `node.data-availability.rpc-aggregator.assumed-honest` | `number` | Number of assumed honest backends (H). If there are N backends, K=N+1-H valid responses are required to consider an Store request to be successful. |
| `node.data-availability.rpc-aggregator.backends` | `string` | JSON RPC backend configuration |
| `node.data-availability.rpc-aggregator.enable` | `boolean` | enable storage/retrieval of sequencer batch data from a list of RPC endpoints; this should only be used by the batch poster and not in combination with other DAS storage types |
| `node.data-availability.sequencer-inbox-address` | `string` | parent chain address of SequencerInbox contract |
| `node.delayed-sequencer` | `object` | - |
| `node.delayed-sequencer.enable` | `boolean` | enable delayed sequencer |
| `node.delayed-sequencer.finalize-distance` | `number` | how many blocks in the past L1 block is considered final (ignored when using Merge finality) (default 20) |
| `node.delayed-sequencer.require-full-finality` | `boolean` | whether to wait for full finality before sequencing delayed messages |
| `node.delayed-sequencer.use-merge-finality` | `boolean` | whether to use The Merge's notion of finality before sequencing delayed messages (default true) |
| `node.feed` | `object` | - |
| `node.feed.input` | `object` | - |
| `node.feed.input.enable-compression` | `boolean` | enable per message deflate compression support (default true) |
| `node.feed.input.reconnect-initial-backoff` | `string` | initial duration to wait before reconnect (default 1s) |
| `node.feed.input.reconnect-maximum-backoff` | `string` | maximum duration to wait before reconnect (default 1m4s) |
| `node.feed.input.require-chain-id` | `boolean` | require chain id to be present on connect |
| `node.feed.input.require-feed-version` | `boolean` | require feed version to be present on connect |
| `node.feed.input.secondary-url` | `string`[] | list of secondary URLs of sequencer feed source. Would be started in the order they appear in the list when primary feeds fails |
| `node.feed.input.timeout` | `string` | duration to wait before timing out connection to sequencer feed (default 20s) |
| `node.feed.input.url` | `string`[] | list of primary URLs of sequencer feed source |
| `node.feed.input.verify` | `object` | - |
| `node.feed.input.verify.accept-sequencer` | `boolean` | accept verified message from sequencer (default true) |
| `node.feed.input.verify.allowed-addresses` | `string`[] | a list of allowed addresses |
| `node.feed.input.verify.dangerous` | `object` | - |
| `node.feed.input.verify.dangerous.accept-missing` | `boolean` | accept empty as valid signature (default true) |
| `node.feed.output` | `object` | - |
| `node.feed.output.addr` | `string` | address to bind the relay feed output to |
| `node.feed.output.backlog` | `object` | - |
| `node.feed.output.backlog.segment-limit` | `number` | the maximum number of messages each segment within the backlog can contain (default 240) |
| `node.feed.output.client-delay` | `string` | delay the first messages sent to each client by this amount |
| `node.feed.output.client-timeout` | `string` | duration to wait before timing out connections to client (default 15s) |
| `node.feed.output.connection-limits` | `object` | - |
| `node.feed.output.connection-limits.enable` | `boolean` | enable broadcaster per-client connection limiting |
| `node.feed.output.connection-limits.per-ip-limit` | `number` | limit clients, as identified by IPv4/v6 address, to this many connections to this relay (default 5) |
| `node.feed.output.connection-limits.per-ipv6-cidr-48-limit` | `number` | limit ipv6 clients, as identified by IPv6 address masked with /48, to this many connections to this relay (default 20) |
| `node.feed.output.connection-limits.per-ipv6-cidr-64-limit` | `number` | limit ipv6 clients, as identified by IPv6 address masked with /64, to this many connections to this relay (default 10) |
| `node.feed.output.connection-limits.reconnect-cooldown-period` | `string` | time to wait after a relay client disconnects before the disconnect is registered with respect to the limit for this client |
| `node.feed.output.disable-signing` | `boolean` | don't sign feed messages (default true) |
| `node.feed.output.enable` | `boolean` | enable broadcaster |
| `node.feed.output.enable-compression` | `boolean` | enable per message deflate compression support |
| `node.feed.output.handshake-timeout` | `string` | duration to wait before timing out HTTP to WS upgrade (default 1s) |
| `node.feed.output.limit-catchup` | `boolean` | only supply catchup buffer if requested sequence number is reasonable |
| `node.feed.output.log-connect` | `boolean` | log every client connect |
| `node.feed.output.log-disconnect` | `boolean` | log every client disconnect |
| `node.feed.output.max-catchup` | `number` | the maximum size of the catchup buffer (-1 means unlimited) (default -1) |
| `node.feed.output.max-send-queue` | `number` | maximum number of messages allowed to accumulate before client is disconnected (default 4096) |
| `node.feed.output.ping` | `string` | duration for ping interval (default 5s) |
| `node.feed.output.port` | `string` | port to bind the relay feed output to (default "9642") |
| `node.feed.output.queue` | `number` | queue size for HTTP to WS upgrade (default 100) |
| `node.feed.output.read-timeout` | `string` | duration to wait before timing out reading data (i.e. pings) from clients (default 1s) |
| `node.feed.output.require-compression` | `boolean` | require clients to use compression |
| `node.feed.output.require-version` | `boolean` | don't connect if client version not present |
| `node.feed.output.signed` | `boolean` | sign broadcast messages |
| `node.feed.output.workers` | `number` | number of threads to reserve for HTTP to WS upgrade (default 100) |
| `node.feed.output.write-timeout` | `string` | duration to wait before timing out writing data to clients (default 2s) |
| `node.inbox-reader` | `object` | - |
| `node.inbox-reader.check-delay` | `string` | the maximum time to wait between inbox checks (if not enough new blocks are found) (default 1m0s) |
| `node.inbox-reader.default-blocks-to-read` | `number` | the default number of blocks to read at once (will vary based on traffic by default) (default 100) |
| `node.inbox-reader.delay-blocks` | `number` | number of latest blocks to ignore to reduce reorgs |
| `node.inbox-reader.hard-reorg` | `boolean` | erase future transactions in addition to overwriting existing ones on reorg |
| `node.inbox-reader.max-blocks-to-read` | `number` | if adjust-blocks-to-read is enabled, the maximum number of blocks to read at once (default 2000) |
| `node.inbox-reader.min-blocks-to-read` | `number` | the minimum number of blocks to read at once (when caught up lowers load on L1) (default 1) |
| `node.inbox-reader.read-mode` | `string` | mode to only read latest or safe or finalized L1 blocks. Enabling safe or finalized disables feed input and output. Defaults to latest. Takes string input, valid strings- latest, safe, finalized (default "latest") |
| `node.inbox-reader.target-messages-read` | `number` | if adjust-blocks-to-read is enabled, the target number of messages to read at once (default 500) |
| `node.maintenance` | `object` | - |
| `node.maintenance.lock` | `object` | - |
| `node.maintenance.lock.background-lock` | `boolean` | should node always try grabing lock in background |
| `node.maintenance.lock.enable` | `boolean` | if false, always treat this as locked and don't write the lock to redis (default true) |
| `node.maintenance.lock.key` | `string` | key for lock |
| `node.maintenance.lock.lockout-duration` | `string` | how long lock is held (default 1m0s) |
| `node.maintenance.lock.my-id` | `string` | this node's id prefix when acquiring the lock (optional) |
| `node.maintenance.lock.refresh-duration` | `string` | how long between consecutive calls to redis (default 10s) |
| `node.maintenance.time-of-day` | `string` | UTC 24-hour time of day to run maintenance (currently only db compaction) at (e.g. 15:00) |
| `node.message-pruner` | `object` | - |
| `node.message-pruner.enable` | `boolean` | enable message pruning (default true) |
| `node.message-pruner.min-batches-left` | `number` | min number of batches not pruned (default 2) |
| `node.message-pruner.prune-interval` | `string` | interval for running message pruner (default 1m0s) |
| `node.parent-chain-reader` | `object` | - |
| `node.parent-chain-reader.dangerous` | `object` | - |
| `node.parent-chain-reader.dangerous.wait-for-tx-approval-safe-poll` | `string` | Dangerous! only meant to be used by system tests |
| `node.parent-chain-reader.enable` | `boolean` | enable reader connection (default true) |
| `node.parent-chain-reader.old-header-timeout` | `string` | warns if the latest l1 block is at least this old (default 5m0s) |
| `node.parent-chain-reader.poll-interval` | `string` | interval when polling endpoint (default 15s) |
| `node.parent-chain-reader.poll-only` | `boolean` | do not attempt to subscribe to header events |
| `node.parent-chain-reader.subscribe-err-interval` | `string` | interval for subscribe error (default 5m0s) |
| `node.parent-chain-reader.tx-timeout` | `string` | timeout when waiting for a transaction (default 5m0s) |
| `node.parent-chain-reader.use-finality-data` | `boolean` | use l1 data about finalized/safe blocks (default true) |
| `node.seq-coordinator` | `object` | - |
| `node.seq-coordinator.chosen-healthcheck-addr` | `string` | if non-empty, launch an HTTP service binding to this address that returns status code 200 when chosen and 503 otherwise |
| `node.seq-coordinator.enable` | `boolean` | enable sequence coordinator |
| `node.seq-coordinator.handoff-timeout` | `string` | the maximum amount of time to spend waiting for another sequencer to accept the lockout when handing it off on shutdown or db compaction (default 30s) |
| `node.seq-coordinator.lockout-duration` | `string` | (default 1m0s) |
| `node.seq-coordinator.lockout-spare` | `string` | (default 30s) |
| `node.seq-coordinator.msg-per-poll` | `number` | will only be marked as wanting the lockout if not too far behind (default 2000) |
| `node.seq-coordinator.my-url` | `string` | url for this sequencer if it is the chosen (default "\<?INVALID-URL?\>") |
| `node.seq-coordinator.redis-url` | `string` | the Redis URL to coordinate via |
| `node.seq-coordinator.release-retries` | `number` | the number of times to retry releasing the wants lockout and chosen one status on shutdown (default 4) |
| `node.seq-coordinator.retry-interval` | `string` | (default 50ms) |
| `node.seq-coordinator.safe-shutdown-delay` | `string` | if non-zero will add delay after transferring control (default 5s) |
| `node.seq-coordinator.seq-num-duration` | `string` | (default 24h0m0s) |
| `node.seq-coordinator.signer` | `object` | - |
| `node.seq-coordinator.signer.ecdsa` | `object` | - |
| `node.seq-coordinator.signer.ecdsa.accept-sequencer` | `boolean` | accept verified message from sequencer (default true) |
| `node.seq-coordinator.signer.ecdsa.allowed-addresses` | `string`[] | a list of allowed addresses |
| `node.seq-coordinator.signer.ecdsa.dangerous` | `object` | - |
| `node.seq-coordinator.signer.ecdsa.dangerous.accept-missing` | `boolean` | accept empty as valid signature (default true) |
| `node.seq-coordinator.signer.symmetric` | `object` | - |
| `node.seq-coordinator.signer.symmetric.dangerous` | `object` | - |
| `node.seq-coordinator.signer.symmetric.dangerous.disable-signature-verification` | `boolean` | disable message signature verification |
| `node.seq-coordinator.signer.symmetric.fallback-verification-key` | `string` | a fallback key used for message verification |
| `node.seq-coordinator.signer.symmetric.signing-key` | `string` | a 32-byte (64-character) hex string used to sign messages, or a path to a file containing it |
| `node.seq-coordinator.signer.symmetric-fallback` | `boolean` | if to fall back to symmetric hmac |
| `node.seq-coordinator.signer.symmetric-sign` | `boolean` | if to sign with symmetric hmac |
| `node.seq-coordinator.update-interval` | `string` | (default 250ms) |
| `node.sequencer` | `boolean` | enable sequencer |
| `node.staker` | `object` | - |
| `node.staker.confirmation-blocks` | `number` | confirmation blocks (default 12) |
| `node.staker.contract-wallet-address` | `string` | validator smart contract wallet public address |
| `node.staker.dangerous` | `object` | - |
| `node.staker.dangerous.ignore-rollup-wasm-module-root` | `boolean` | DANGEROUS! make assertions even when the wasm module root is wrong |
| `node.staker.dangerous.without-block-validator` | `boolean` | DANGEROUS! allows running an L1 validator without a block validator |
| `node.staker.data-poster` | `object` | - |
| `node.staker.data-poster.allocate-mempool-balance` | `boolean` | if true, don't put transactions in the mempool that spend a total greater than the batch poster's balance (default true) |
| `node.staker.data-poster.blob-tx-replacement-times` | `string` | comma-separated list of durations since first posting a blob transaction to attempt a replace-by-fee (default "5m,10m,30m,1h,4h,8h,16h,22h") |
| `node.staker.data-poster.dangerous` | `object` | - |
| `node.staker.data-poster.dangerous.clear-dbstorage` | `boolean` | clear database storage |
| `node.staker.data-poster.elapsed-time-base` | `string` | unit to measure the time elapsed since creation of transaction used for maximum fee cap calculation (default 10m0s) |
| `node.staker.data-poster.elapsed-time-importance` | `number` | weight given to the units of time elapsed used for maximum fee cap calculation (default 10) |
| `node.staker.data-poster.external-signer` | `object` | - |
| `node.staker.data-poster.external-signer.address` | `string` | external signer address |
| `node.staker.data-poster.external-signer.client-cert` | `string` | rpc client cert |
| `node.staker.data-poster.external-signer.client-private-key` | `string` | rpc client private key |
| `node.staker.data-poster.external-signer.method` | `string` | external signer method (default "eth_signTransaction") |
| `node.staker.data-poster.external-signer.root-ca` | `string` | external signer root CA |
| `node.staker.data-poster.external-signer.url` | `string` | external signer url |
| `node.staker.data-poster.legacy-storage-encoding` | `boolean` | encodes items in a legacy way (as it was before dropping generics) |
| `node.staker.data-poster.max-blob-tx-tip-cap-gwei` | `number` | the maximum tip cap to post EIP-4844 blob carrying transactions at (default 1) |
| `node.staker.data-poster.max-fee-bid-multiple-bips` | `number` | the maximum multiple of the current price to bid for a transaction's fees (may be exceeded due to min rbf increase, 0 = unlimited) (default 100000) |
| `node.staker.data-poster.max-fee-cap-formula` | `string` | mathematical formula to calculate maximum fee cap gwei the result of which would be float64. This expression is expected to be evaluated please refer https://github.com/Knetic/govaluate/blob/master/MANUAL.md to find all available mathematical operators. Currently available variables to construct the formula are BacklogOfBatches, UrgencyGWei, ElapsedTime, ElapsedTimeBase, ElapsedTimeImportance, and TargetPriceGWei (default "((BacklogOfBatches * UrgencyGWei) ** 2) + ((ElapsedTime/ElapsedTimeBase) ** 2) * ElapsedTimeImportance + TargetPriceGWei") |
| `node.staker.data-poster.max-mempool-transactions` | `number` | the maximum number of transactions to have queued in the mempool at once (0 = unlimited) (default 1) |
| `node.staker.data-poster.max-mempool-weight` | `number` | the maximum number of weight (weight = min(1, tx.blobs)) to have queued in the mempool at once (0 = unlimited) (default 1) |
| `node.staker.data-poster.max-queued-transactions` | `number` | the maximum number of unconfirmed transactions to track at once (0 = unlimited) |
| `node.staker.data-poster.max-tip-cap-gwei` | `number` | the maximum tip cap to post transactions at (default 5) |
| `node.staker.data-poster.min-blob-tx-tip-cap-gwei` | `number` | the minimum tip cap to post EIP-4844 blob carrying transactions at (default 1) |
| `node.staker.data-poster.min-tip-cap-gwei` | `number` | the minimum tip cap to post transactions at (default 0.05) |
| `node.staker.data-poster.nonce-rbf-soft-confs` | `number` | the maximum probable reorg depth, used to determine when a transaction will no longer likely need replaced-by-fee (default 1) |
| `node.staker.data-poster.redis-signer` | `object` | - |
| `node.staker.data-poster.redis-signer.dangerous` | `object` | - |
| `node.staker.data-poster.redis-signer.dangerous.disable-signature-verification` | `boolean` | disable message signature verification |
| `node.staker.data-poster.redis-signer.fallback-verification-key` | `string` | a fallback key used for message verification |
| `node.staker.data-poster.redis-signer.signing-key` | `string` | a 32-byte (64-character) hex string used to sign messages, or a path to a file containing it |
| `node.staker.data-poster.replacement-times` | `string` | comma-separated list of durations since first posting to attempt a replace-by-fee (default "5m,10m,20m,30m,1h,2h,4h,6h,8h,12h,16h,18h,20h,22h") |
| `node.staker.data-poster.target-price-gwei` | `number` | the target price to use for maximum fee cap calculation (default 60) |
| `node.staker.data-poster.urgency-gwei` | `number` | the urgency to use for maximum fee cap calculation (default 2) |
| `node.staker.data-poster.use-db-storage` | `boolean` | uses database storage when enabled (default true) |
| `node.staker.data-poster.use-noop-storage` | `boolean` | uses noop storage, it doesn't store anything |
| `node.staker.data-poster.wait-for-l1-finality` | `boolean` | only treat a transaction as confirmed after L1 finality has been achieved (recommended) (default true) |
| `node.staker.disable-challenge` | `boolean` | disable validator challenge |
| `node.staker.enable` | `boolean` | enable validator (default true) |
| `node.staker.extra-gas` | `number` | use this much more gas than estimation says is necessary to post transactions (default 50000) |
| `node.staker.gas-refunder-address` | `string` | The gas refunder contract address (optional) |
| `node.staker.make-assertion-interval` | `string` | if configured with the makeNodes strategy, how often to create new assertions (bypassed in case of a dispute) (default 1h0m0s) |
| `node.staker.only-create-wallet-contract` | `boolean` | only create smart wallet contract and exit |
| `node.staker.parent-chain-wallet` | `object` | - |
| `node.staker.parent-chain-wallet.account` | `string` | account to use (default is first account in keystore) |
| `node.staker.parent-chain-wallet.only-create-key` | `boolean` | if true, creates new key then exits |
| `node.staker.parent-chain-wallet.password` | `string` | wallet passphrase (default "PASSWORD_NOT_SET") |
| `node.staker.parent-chain-wallet.pathname` | `string` | pathname for wallet (default "validator-wallet") |
| `node.staker.parent-chain-wallet.private-key` | `string` | private key for wallet |
| `node.staker.posting-strategy` | `object` | - |
| `node.staker.posting-strategy.high-gas-delay-blocks` | `number` | high gas delay blocks |
| `node.staker.posting-strategy.high-gas-threshold` | `number` | high gas threshold |
| `node.staker.redis-url` | `string` | redis url for L1 validator |
| `node.staker.staker-interval` | `string` | how often the L1 validator should check the status of the L1 rollup and maybe take action with its stake (default 1m0s) |
| `node.staker.start-validation-from-staked` | `boolean` | assume staked nodes are valid (default true) |
| `node.staker.strategy` | `string` | L1 validator strategy, either watchtower, defensive, stakeLatest, or makeNodes (default "Watchtower") |
| `node.staker.use-smart-contract-wallet` | `boolean` | use a smart contract wallet instead of an EOA address |
| `node.sync-monitor` | `object` | - |
| `node.sync-monitor.block-build-lag` | `number` | allowed lag between messages read and blocks built (default 20) |
| `node.sync-monitor.block-build-sequencer-inbox-lag` | `number` | allowed lag between messages read from sequencer inbox and blocks built |
| `node.sync-monitor.coordinator-msg-lag` | `number` | allowed lag between local and remote messages (default 15) |
| `node.sync-monitor.finalized-block-wait-for-block-validator` | `boolean` | wait for block validator to complete before returning finalized block number |
| `node.sync-monitor.safe-block-wait-for-block-validator` | `boolean` | wait for block validator to complete before returning safe block number |
| `node.transaction-streamer` | `object` | - |
| `node.transaction-streamer.execute-message-loop-delay` | `string` | delay when polling calls to execute messages (default 100ms) |
| `node.transaction-streamer.max-broadcaster-queue-size` | `number` | maximum cache of pending broadcaster messages (default 50000) |
| `node.transaction-streamer.max-reorg-resequence-depth` | `number` | maximum number of messages to attempt to resequence on reorg (0 = never resequence, -1 = always resequence) (default 1024) |
| `p2p` | `object` | - |
| `p2p.bootnodes` | `string`[] | P2P bootnodes |
| `p2p.bootnodes-v5` | `string`[] | P2P bootnodes v5 |
| `p2p.discovery-v4` | `boolean` | P2P discovery v4 |
| `p2p.discovery-v5` | `boolean` | P2P discovery v5 |
| `p2p.listen-addr` | `string` | P2P listen address |
| `p2p.max-peers` | `number` | P2P max peers (default 50) |
| `p2p.no-dial` | `boolean` | P2P no dial (default true) |
| `p2p.no-discovery` | `boolean` | P2P no discovery (default true) |
| `parent-chain` | `object` | - |
| `parent-chain.blob-client` | `object` | - |
| `parent-chain.blob-client.authorization` | `string` | Value to send with the HTTP Authorization: header for Beacon REST requests, must include both scheme and scheme parameters |
| `parent-chain.blob-client.beacon-url` | `string` | Beacon Chain RPC URL to use for fetching blobs (normally on port 3500) |
| `parent-chain.blob-client.blob-directory` | `string` | Full path of the directory to save fetched blobs |
| `parent-chain.blob-client.secondary-beacon-url` | `string` | Backup beacon Chain RPC URL to use for fetching blobs (normally on port 3500) when unable to fetch from primary |
| `parent-chain.connection` | `object` | - |
| `parent-chain.connection.arg-log-limit` | `number` | limit size of arguments in log entries (default 2048) |
| `parent-chain.connection.connection-wait` | `string` | how long to wait for initial connection (default 1m0s) |
| `parent-chain.connection.jwtsecret` | `string` | path to file with jwtsecret for validation - ignored if url is self or self-auth |
| `parent-chain.connection.retries` | `number` | number of retries in case of failure(0 mean one attempt) (default 2) |
| `parent-chain.connection.retry-delay` | `string` | delay between retries |
| `parent-chain.connection.retry-errors` | `string` | Errors matching this regular expression are automatically retried |
| `parent-chain.connection.timeout` | `string` | per-response timeout (0-disabled) (default 1m0s) |
| `parent-chain.connection.url` | `string` | url of server, use self for loopback websocket, self-auth for loopback with authentication |
| `parent-chain.id` | `number` | if set other than 0, will be used to validate database and L1 connection |
| `parent-chain.wallet` | `object` | - |
| `parent-chain.wallet.account` | `string` | account to use (default is first account in keystore) |
| `parent-chain.wallet.only-create-key` | `boolean` | if true, creates new key then exits |
| `parent-chain.wallet.password` | `string` | wallet passphrase (default "PASSWORD_NOT_SET") |
| `parent-chain.wallet.pathname` | `string` | pathname for wallet (default "wallet") |
| `parent-chain.wallet.private-key` | `string` | private key for wallet |
| `persistent` | `object` | - |
| `persistent.ancient` | `string` | directory of ancient where the chain freezer can be opened |
| `persistent.chain` | `string` | directory to store chain state |
| `persistent.db-engine` | `string` | backing database implementation to use ('leveldb' or 'pebble') (default "leveldb") |
| `persistent.global-config` | `string` | directory to store global config (default ".arbitrum") |
| `persistent.handles` | `number` | number of file descriptor handles to use for the database (default 512) |
| `persistent.log-dir` | `string` | directory to store log file |
| `pprof` | `boolean` | enable pprof |
| `pprof-cfg` | `object` | - |
| `pprof-cfg.addr` | `string` | pprof server address (default "127.0.0.1") |
| `pprof-cfg.port` | `number` | pprof server port (default 6071) |
| `rpc` | `object` | - |
| `rpc.batch-request-limit` | `number` | the maximum number of requests in a batch (0 means no limit) (default 1000) |
| `rpc.max-batch-response-size` | `number` | the maximum response size for a JSON-RPC request measured in bytes (0 means no limit) (default 10000000) |
| `validation` | `object` | - |
| `validation.api-auth` | `boolean` | validate is an authenticated API (default true) |
| `validation.api-public` | `boolean` | validate is a public API |
| `validation.arbitrator` | `object` | - |
| `validation.arbitrator.execution` | `object` | - |
| `validation.arbitrator.execution.cached-challenge-machines` | `number` | how many machines to store in cache while working on a challenge (should be even) (default 4) |
| `validation.arbitrator.execution.initial-steps` | `number` | initial steps between machines (default 100000) |
| `validation.arbitrator.execution-run-timeout` | `string` | timeout before discarding execution run (default 15m0s) |
| `validation.arbitrator.output-path` | `string` | path to write machines to (default "./target/output") |
| `validation.arbitrator.workers` | `number` | number of concurrent validation threads |
| `validation.jit` | `object` | - |
| `validation.jit.cranelift` | `boolean` | use Cranelift instead of LLVM when validating blocks using the jit-accelerated block validator (default true) |
| `validation.jit.wasm-memory-usage-limit` | `number` | if memory used by a jit wasm exceeds this limit, a warning is logged (default 4294967296) |
| `validation.jit.workers` | `number` | number of concurrent validation threads |
| `validation.use-jit` | `boolean` | use jit for validation (default true) |
| `validation.wasm` | `object` | - |
| `validation.wasm.allowed-wasm-module-roots` | `string`[] | list of WASM module roots to check if the on-chain WASM module root belongs to on node startup |
| `validation.wasm.enable-wasmroots-check` | `boolean` | enable check for compatibility of on-chain WASM module root with node (default true) |
| `validation.wasm.root-path` | `string` | path to machine folders, each containing wasm files (machine.wavm.br, replay.wasm) |
| `ws` | `object` | - |
| `ws.addr` | `string` | WS-RPC server listening interface |
| `ws.api` | `string`[] | APIs offered over the WS-RPC interface (default [net,web3,eth,arb]) |
| `ws.expose-all` | `boolean` | expose private api via websocket |
| `ws.origins` | `string`[] | Origins from which to accept websockets requests |
| `ws.port` | `number` | WS-RPC server listening port (default 8548) |
| `ws.rpcprefix` | `string` | WS path path prefix on which JSON-RPC is served. Use '/' to serve on all paths |

#### Source

[src/types/NodeConfig.generated.ts:10](https://github.com/OffchainLabs/arbitrum-orbit-sdk/blob/cddcae0078e845771579bdf42f49d1e85568f943/src/types/NodeConfig.generated.ts#L10)