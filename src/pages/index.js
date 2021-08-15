import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import DoorSVG from '../../static/img/entryway.svg';
import RetroHitCounter from 'react-retro-hit-counter';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <DoorSVG />
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p className="hero__subtitle">{siteConfig.customFields.tagline2}</p>
        <p className="hero__subtitle">{siteConfig.customFields.phone}</p>
        <RetroHitCounter
          hits={1337}
          /* The following are all default values: */
          withBorder={true}
          withGlow={false}
          minLength={4}
          size={40}
          padding={4}
          digitSpacing={3}
          segmentThickness={4}
          segmentSpacing={0.5}
          segmentActiveColor="#76FF03"
          segmentInactiveColor="#315324"
          backgroundColor="#222222"
          borderThickness={7}
          glowStrength={0.5}
        />
        {/* <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/contact">
            Schedule your Consultation Today! ⏱️
          </Link>
        </div> */}
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
