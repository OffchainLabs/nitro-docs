---
title: 'A gentle Introduction: Timeboost'
sidebar_label: 'A gentle introduction'
description: 'Learn how Timeboost works and how it can benefit your Arbitrum-based project.'
author: leeederek
sme: leeederek
user_story: As a current or prospective Arbitrum user, I want to understand how Timeboost works and how to use it.
content_type: gentle-introduction
---

import ImageWithCaption from '@site/src/components/ImageCaptions/';

# A gentle Introduction: Timeboost

This introduction will walk you through <a data-quicklook-from='timeboost'>Arbitrum Timeboost</a>: a novel <a data-quicklook-from='transaction-ordering-policy'>transaction ordering policy</a> for Arbitrum chains that allows chain owners to capture the Maximal Extractable Value (MEV) on their chain and reduce spam, all while preserving fast block times and protecting users from harmful types of MEV, such as sandwich attacks and front-running. 

Timeboost is the culmination of over a year of research and development by the team at Offchain Labs and will soon be available for any Arbitrum chain, including Arbitrum One and Arbitrum Nova (should the Arbitrum DAO choose to adopt it). Like all features and upgrades to the Arbitrum technology stack, Timeboost will be rolled out on Arbitrum Sepolia first for testing and chain owners have the option of adopting Timeboost at any time or customizing Timeboost in any way they choose.

### In a nutshell
- The current <a data-quicklook-from='first-come-first-serve-fcfs'>"First-Come, First-Serve (FCFS)"</a> ordering policy has many benefits, including a great UX and protection from harmful types of MEV. However, nearly all MEV on the chain is extracted by searchers who invest wastefully in hardware and spamming to win latency races (which negatively strains the network and leads to congestion). Timeboost is a new transaction ordering policy that preserves many of the great benefits of FCFS while unlocking a path for chain owners to capture some of the available MEV on their network and introducing an auction to reduce latency racing, and ultimately, spam.
- Timeboost introduces a few new components to an Arbitrum chain’s infrastructure: a sealed-bid second-price auction and a new <a data-quicklook-from='express-lane'>"express lane"</a> at an Arbitrum chain’s sequencer. Valid transactions submitted to the express lane will be sequenced immediately with no delay, while all other transactions submitted to the chain’s sequencer will experience a nominal delay (default: 200ms). The winner of the auction is granted the sole right to control the express lane for pre-defined, temporary time interval.
- Timeboost is an optional feature for Arbitrum chains aimed at two types of groups of entities: (1) chain owners and their ecosystems and (2) sophisticated on-chain actors and searchers. Chain owners can use Timeboost to capture additional revenue from the MEV their chain generates already and sophisticated on-chain actors and searchers will spend their resources on buying rights for the express lane (instead of spending those resources on winning latency races, which otherwise leads to spam and congestion on the network).
- Timeboost will work with both centralized and [decentralized sequencer setups](https://medium.com/@espressosys/espresso-systems-and-offchain-labs-publish-decentralized-timeboost-specification-b29ff20c5db8). The specification for a centralized sequencer is public ([here](https://github.com/OffchainLabs/timeboost-design)) and the [proposal before the Arbitrum DAO](https://forum.arbitrum.foundation/t/constitutional-aip-proposal-to-adopt-timeboost-a-new-transaction-ordering-policy/25167/1) allows us to deliver Timeboost to market sooner, rather than waiting until the design with a decentralized sequencer set up and its implementation are complete.

## Why do Arbitrum chains need Timeboost?

Today, Arbitrum chains order incoming transactions on a First-Come, First-Serve (FCFS) basis. This ordering policy was chosen as the default for Arbitrum chains because it is simple to understand and implement, enables fast block times (starting at 250ms and down to 100ms if so desired), and protects users from harmful types of MEV like front-running & sandwich attacks. 

However, there are a few downsides to a FCFS ordering policy. Under FCFS, searchers  are incentivized to participate in and try to win latency races through investments in off-chain hardware. This means that for seachers on Arbitrum chains, generating a profit from arbitrage and liquidation opportunities involves a lot of spam, placing stress on chain infrastructure and contributing to congestion. Additionally, all of the captured MEV on an Arbitrum chain today under FCFS goes to searchers - returning none of the available MEV to the chain owner or the applications on the chain. 

Timeboost retains most FCFS benefits while addressing FCFS limitations. 

#### Timeboost preserves the great UX that Arbitrum chains are known for
- The default block time for Arbitrum chains will continue to be industry leading at 250ms, even after Timeboost. What will change with Timeboost instead is that some transactions not in the express lane will be delayed to the next block.
#### With Timeboost, Arbitrum chains will continue to protect users from harmful types of MEV
- Timeboost only grants the auction winner a _temporary time-advantage_ - not the power to view or re-order incoming transactions or be the first in every block. Furthermore, the mempool for transactions will continue to be private, which means users, with Timeboost enabled, will continue to be protected from harmful MEV like front-running and sandwich attacks.
#### Timeboost unlocks a new value accrual path for chain owners
- Chain owners may use Timeboost to capture a portion of the available MEV on their chain that would have otherwise went entirely to searchers. There are many flavors of this too - including the use of custom gas tokens and/or redistribution of these proceeds back to the applications and users on the chain.
#### Timeboost may help reduce spam and congestion on a network
- By introducing the ability to “purchase a time-advantage” through the Timeboost auction, it is expected that rational, profit-seeking actors will spend on auctions _instead of_ investing on hardware or infrastructure to win latency races. This diversion of resources by these actors is expected to reduce FCFS MEV-driven spam on the network. 

## What is Timeboost and how does it work?

Timeboost is a _transaction ordering policy_. It's a set of rules that the sequencer of an Arbitrum chain is trusted to follow when ordering transactions that are submitted by users. In the near future, multiple sequencers will be able to enforce those rules with decentralized Timeboost.

For Arbitrum chains, the sequencer’s sole job is to take arriving, valid transactions from users, place them into an order dictated by the transaction ordering policy, and then publish the final sequence to a real-time feed and in compressed batches to the chain’s data availability layer. The current transaction ordering policy is **F**irst **C**ome **F**irst **S**erve (FCFS) and Timeboost is a modified FCFS ordering policy.

Timeboost is implemented using three separate components that work together: 
- **A special “express lane”** which allows valid transactions to be sequenced as soon as the sequencer receives them for a given round.
- **An off-chain auction** for determining the controller of the express lane for a given round. This auction is managed by an <a data-quicklook-from='autonomous-auctioneer'>autonomous auctioneer</a>.
- **An <a data-quicklook-from='auction-contract'>auction contract</a>**, deployed on the target chain, to serve as the canonical source of truth for the auction results and handling of auction proceeds.

To start, the default duration of a round is 60 seconds. Transactions not in the express lane will be subject to a default 200 milisecond “speed bump” for their transaction to be sequenced, which means that non-express lane transactions may get delayed to the next block. It’s important to call out that the default Arbitrum block time will remain at 250 milliseconds (which can be adjusted down to 100 milliseconds, if desired). Let’s dive in to how each of these components work.

### The express lane

The express lane is implemented using a special end point on the sequencer, formally titled `timeboost_sendExpressLaneTransaction`. This endpoint is special because transactions submitted to it will be sequenced immediately by the sequencer, hence the name, express lane. The sequencer will only accept valid transaction payloads to this endpoint if they are correctly signed by the current round’s <a data-quicklook-from='express-lane-controller'>express lane controller</a>. Other transactions can still be submitted to the sequencer as normal, but these will be considered as non-express lane transactions and will therefore have their arrival timestamp delayed by 200 miliseconds. It is important to call out that transactions from both the express lane and the non-express lane are eventually sequenced together into a single, ordered stream of transactions for node operators to produce an assertion and for eventual posting of the data to a data availability layer. The express lane controller does not have the right to re-order transactions, have a guarantee that their transactions will always be first at the “top-of-the-block”, or guarantee a profit at all. The value of the express lane will essentially be 

### The Timeboost auction

Control of the express lane in each round (default: 60 seconds) is determined by a per-round auction, which is a sealed-bid, second-price auction. This auction is held to determine the express lane controller for the next round. In other words, the express lane controller at any point in time was determined in the previous auction round. Bids for the auction can be made with any ERC20 token, in any amount, and be collected by any address - at the full discretion of the chain owner.


![Timeboost auction workflow](assets/timeboost-auction-workflow.png)

The auction for a round has a closing time that is `auctionClosingSeconds` (default: 15) seconds before the beginning of the round. This means that, in the default parameters, parties have 45 seconds to submit bids before the auction will no longer accept bids. In the 15 seconds between when bids are no longer accepted and when the new round begins, the autonomous auctioneer will verify all bids, determine the winner, and make a call to the on-chain auction contract to formally resolve the auction. 

### Auction contract

Before bidding in the auction, a party must deposit funds into the Auction Contract. Deposits can be made, or funds added to an existing deposit, at any time. There is no minimum deposit amount but there is a starting minimum bid of 0.001 ETH (default amount and token). These deposits are fully withdrawable, with some nominal delay to not impact the outcome of an existing round.

Once an auction winner is determined by the autonomous auctioneer, the auction contract will deduct the second-highest bid amount from the account of the highest bidder, and transfer those funds to a `beneficiary` account designated by the chain owner, by default. 

The `expressLaneControllerAddress` specified in the highest bid will become the express lane controller for the round.

The auction contract also has functions that enable the express lane controller to update the address they wish to use for the express lane, which enables unique express lane control re-selling use cases.

### Default parameters

Tabulated below are a few of the default Timeboost parameters that were mentioned earlier. All of these parameters, and more, are configurable by the chain owner. 
| Parameter name         | Description                                                                                                                                                                                                                | Recommended default value                  |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| `roundDurationSeconds` | Duration of time that the sequencer will honor the express lane privileges for transactions signed by the current round’s express lane controller.                                                                         | 60 seconds                                 |
| `auctionClosingSeconds`| Time before the start of the next round. Bids will not be accepted by the autonomous auctioneer during this time interval.                                                                                                 | 15 seconds                                 |
| `beneficiary`          | Address where proceeds from the Timeboost auction are sent to when `flushBeneficiaryBalance()` gets called on the auction contract.                                                                                        | An address controlled by the chain's owner |
| `_biddingToken`        | Address of the token used to make bids in the Timeboost auction. Can be any ERC20 token (assumes the token address chosen does not have fee-on-transfer, rebasing, transfer hooks, or otherwise non-standard ERC20 logic). | WETH                                       |
| `nonExpressDelayMsec`  | The artificial delay applied to the arrival timestamp of non-express lane transactions *before* the non-express lane transactions are sequenced.                                                                           | 0.2 seconds, or 200 miliseconds            |
| `reservePrice`         | The minimum bid amount accepted by the auction contract for Timeboost auctions, denominated in `_biddingToken`.                                                                                                            | None                                       |
| `_minReservePrice`     | A value that must be equal to or below the `reservePrice` to act as an "floor minimum" for Timeboost bids. Enforced by the auction contract.                                                                               | 0.001 WETH                                 |

## Who is Timeboost for and how do I use it?

Timeboost is an optional addition to an Arbitrum chain’s infrastructure - meaning that enabling Timeboost is at the discretion of the chain owner and that an Arbitrum chain can fully function normally without Timeboost too.

When enabled, Timeboost is meant to serve different groups of parties, with varying degrees of impact and benefits. Let’s go through them below:

#### For regular users:
Timeboost will have a minimal impact. Non-express lane transactions will be delayed by a nominal 200ms, which means to the average user, their transactions will take up to 450ms to be sequenced (up from 200ms). Regular users will continue to be protected from harmful MEV activity, such as sandwich attacks and front-running.
#### For chain owners:
Timeboost represents a unique way to accrue value to their token and/or generate revenue for the chain. Explicitly, chain owners can set up their Timeboost auction to collect bid proceeds in the same token used for gas on their network and then choose what to do with these proceeds afterwards.
#### For searchers/arbitrageurs:
Timeboost adds a unique twist to your existing or prospective MEV strategies that may end up becoming more profitable than before. For instance, purchasing the time advantage offered by Timeboost’s auction may end up costing *less* than the costs to invest in hardware and win latency races. Another example is the potential new business model of reselling express lane rights to other parties, either in time slots or as granular asa per-transaction basis.

### Special note on Timeboost for chain owners
As with many of the new features and upgrades to Arbitrum Nitro, Timeboost is an optional feature that chain owners may choose to deploy and customize in any way they see fit. Deploying and enabling/disabling Timeboost on a live Arbitrum chain will not halt or impact the chain but will instead influence the transaction ordering policy of the chain. An Arbitrum chain will, by default, fall back to FCFS if Timeboost is deployed but disabled or if there is no express lane controller for a given round.

It is recommended that Arbitrum teams holistically assess the applicability and use cases of Timeboost for their chain before deploying and enabling Timeboost. This is because some Arbitrum chains may not have that much MEV (e.g. arbitrage) to begin with. Furthermore, we recommend Arbitrum chains to start with the default parameters recommended by Offchain Labs and closely monitor the results and impacts on your chain’s ecosystem over time before considering adjusting any of the parameters.

### Wen mainnet?

Timeboost’s auction contract has completed a third-party audit and is rapidly approaching production readiness. Specifically for Arbitrum One and Arbitrum Nova, a [temperature check vote on Snapshot](https://snapshot.box/#/s:arbitrumfoundation.eth/proposal/0xffe9bb38228fdaf3d121140856fd2d51c2ca7f8e0d1021c07e791cebb541129a) has already passed and the AIP will move towards an on-chain Tally vote next hopefully before the end of Q4 2024.

In the meantime, please read the following resources to learn more about Timeboost:

- [Arbitrum DAO Forum Post on Timeboost](https://forum.arbitrum.foundation/t/constitutional-aip-proposal-to-adopt-timeboost-a-new-transaction-ordering-policy/25167/86)
- [Timeboost FAQ](https://www.notion.so/bba234acf92e476b8ca5db6855d7da45?pvs=21)
- [Debunking common misconceptions about Timeboost](https://medium.com/offchainlabs/debunking-common-misconceptions-about-timeboost-92d937568494)
- [Technical specification for Timeboost with a centralized sequencer](https://github.com/OffchainLabs/timeboost-design/blob/main/research_spec.md)
- [Engineering design of Timeboost with a centralized sequencer](https://github.com/OffchainLabs/timeboost-design/blob/main/implementation_design.md)
- [Implementation of Timeboost with a centralized sequencer](https://github.com/OffchainLabs/nitro/pull/2561)
- [Technical specification for Timeboost with a decentralized sequencer](https://github.com/OffchainLabs/decentralized-timeboost-spec)