import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Security Systems',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Security system sales, service and installation! 
      </>
    ),
  },
  {
    title: 'Central Vacuum',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Hands down, the central vacuum system is the healthiest vacuum choice you can make for your new construction or existing home. 
      </>
    ),
  },
  {
    title: 'Intercom Systems',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Video Intercom Systems For Apartments & Multi-Tenant Buildings. Aiphone, the leading international manufacturer of intercom and security
      </>
    ),
  },
  {
    title: 'Low Voltage Landscaping',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Customize your home with outdoor lighting and entertainment systems
      </>
    ),
  },
  {
    title: 'High Speed Networking',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
      Wired or wireless networking install and service 
      </>
    ),
  },
  {
    title: 'Camera Systems',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
       We have you covered – inside and outside · ADT video doorbell camera · Outdoor security cameras · Indoor security cameras · DIY security cameras.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
