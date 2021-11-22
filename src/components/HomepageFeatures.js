import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Simple and Lightweight',
    description: (
      <>Chic UI is simple to use and lightweight. Say no to bulky bundles!</>
    ),
  },
  {
    title: 'TypeScript Support',
    description: (
      <>
        Chic UI is almost fully TypeScript supported! Use TypeScript with super
        ease.
      </>
    ),
  },
  {
    title: 'Open-Source 💗',
    description: (
      <>
        See something wrong or unclear? Want to make the library better? Contribute to <a href='https://karishmashuklaa.github.io/chic-ui'>Chic UI</a> right away on <a href='https://karishmashuklaa.github.io/chic-ui-docs'>GitHub!</a>💗
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3 className={styles.title}>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
