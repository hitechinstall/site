import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import DoorSVG from '../../static/img/entryway.svg';

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
        <a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fhitechinstall.com&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false"/></a>
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
