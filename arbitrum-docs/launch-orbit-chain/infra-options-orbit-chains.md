# Infrastructure Options for Orbit Chains

A successful production-grade chain often requires additional surrounding infrastructure to enable app functionality and provide a superb user experience for those interacting with the network. There are multiple options for various components for deployers to choose from, and the below is a non-comprehensive list of providers that Orbit teams can choose to work with if the need should arise.

## Chain Operation

You may not yet have experience deploying, operating, and maintaining an independent, production-grade network. 
In these cases, we highly recommend working with one of the following RaaS (Rollup as a Service) providers who will manage the necessary infrastructure and ensure a high degree of performance and security for your chain:

- [Caldera](https://www.caldera.xyz/)
- [Conduit](https://conduit.xyz/)
- [AltLayer](https://altlayer.io/)
- [Gelato](https://www.gelato.network/)

## Explorers

Explorers are essential for any functional blockchain, providing a transparent view of transactions, blocks, and addresses on the blockchain. Users and developers can access them to verify transactions, check network activity status, and ensure that transactions are being processed correctly. Here are some of the explorer providers you can choose from:

- [Blockscout](https://www.blockscout.com/)
- [Socialscan](https://socialscan.io/)
- [Lore](https://www.lorescan.com/)
- [Routescan](https://routescan.io/)

Additionally, Orbit chains leveraging blobs for data availability may use tools like [Blobscan](https://blobscan.com/) to see which blob/block includes a given transaction.


## Bridges

Orbit chains are easily launched with a canonical token bridge which permits transfers to and from their chain via Arbitrum One, Nova, or Ethereum. However, some applications may desire the ability to transfer to additional chains outside of the Orbit ecosystem or want to offer the ability to transfer across chain more quickly, without waiting for complete finality. In these instances, the following 3rd party bridging providers offer services to meet those needs:

- [LayerZero](https://layerzero.network/)
- [Connext](https://www.connext.network/)
- [Hyperlane](https://www.hyperlane.xyz/)
- [Axelar](https://axelar.network/)
- [Across](https://across.to/)

## Data Availability

Deployers of Orbit chains may offer cheaper fees on their chain by storing the data posted in batches on an alternative Data Availability solution rather than to the parent chain directly. The built in functionality in Anytrust allows these developers to easily configure the cost of transacting and will enable more powerful features with additional chains that are also using Anytrust. However, there are integrations with Orbit that are available for those that would prefer to use one of the following third party services:

- [Celestia](https://celestia.org/)
- [EigenDA](https://www.eigenlayer.xyz/)
- [Avail](https://www.availproject.org/) (coming soon!)
- [Near](https://near.org/data-availability) (coming soon)

## Indexers

Teams frequently require additional indexing capabilities to retrieve historic or application-specific data, but doing so directly from an RPC endpoint is difficult or impossible. Fortunately, multiple data services providers are familiar with operating this type of infrastructure and may be willing to do so for your chain.

- [Alchemy](https://www.alchemy.com/)
- [The Graph](https://thegraph.com/)
- [Goldsky](https://goldsky.com/)
- [Ormi](https://www.ormilabs.xyz/)

## Oracles

Many applications require external data to be published on-chain to function properly. This data usually consists of price feeds related to assets utilized in-app or a source of verifiable randomness. The following Oracle providers may be able to support your chain:

- [Chainlink](https://chain.link/)
- [Pyth](https://pyth.network/)
- [Redstone](https://redstone.finance/)
- [Randomizer](http://Randomizer.ai) (VRF only)
- [Supra](https://supra.com/)

## RPC

RPCs are the primary interface for users and developers to interact with any chain, whether it be for transaction submission, reading state, or indexing historical data. There is often a need for robust RPC services for public consumption as well as for specific projects with higher rate limiting requirements. The following providers may support your Orbit chain:

- [Alchemy](https://www.alchemy.com/)
- [Ankr](https://www.ankr.com/)
- [Chainstack](https://chainstack.com/)
- [QuickNode](https://www.quicknode.com/)