import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import { useColorMode } from '@docusaurus/theme-common';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: string;
  href?: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Quickstart: Stylus',
    Svg: require('@site/static/img/stylus-logo.svg').default,
    href: '/stylus/stylus-quickstart',
    description: 'Use Stylus to write an EVM-compatible smart contract in Rust.',
  },
  {
    title: 'Quickstart: Build a dApp (Solidity)',
    Svg: require('@site/static/img/cupcake_icon.svg').default,
    href: '/for-devs/quickstart-solidity-hardhat',
    description:
      'Deploy a cupcake vending machine contract locally, then to Arbitrum Goerli, then to Arbitrum Mainnet.',
  },
  {
    title: 'Quickstart: Run a node',
    Svg: require('@site/static/img/node.svg').default,
    href: '/node-running/quickstart-running-a-node',
    description: 'Learn how to run a node to interact with any Arbitrum network.',
  },
  {
    title: 'Quickstart: Bridge tokens',
    Svg: require('@site/static/img/bridge_token.svg').default,
    href: '/getting-started-users',
    description:
      "Learn how to transfer tokens between Ethereum's L1 chain and Arbitrum's L2 chains using Arbitrum Bridge.",
  },
  {
    title: 'The Arbitrum DAO',
    Svg: require('@site/static/img/logo_black.svg').default,
    href: 'https://docs.arbitrum.foundation/',
    description: 'Learn about the decentralized organization that governs the One and Nova chains.',
  },
  {
    title: 'Quickstart: Launch an Orbit chain',
    Svg: require('@site/static/img/quickstart.svg').default,
    href: '/launch-orbit-chain/orbit-quickstart',
    description:
      ' Learn how to launch a local Orbit chain that settles to the public Arbitrum Goerli testnet.',
  },
];

function Feature({ title, Svg, description, href }: FeatureItem) {
  const { colorMode } = useColorMode();
  const isDarkTheme = colorMode === 'dark';
  return (
    <Link href={href}>
      <div className={styles.featureCard}>
        <div className={styles.svgWrapper}>
          <Svg className={clsx(styles.featureSvg, isDarkTheme && 'invert')} role="img" />
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <h3>Resources</h3>
      <div className={styles.featureCardsWrapper}>
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
