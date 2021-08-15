import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Residential and Commercial Security Systems',
    Svg: require('../../static/img/sec_system.svg').default,
    description: (
      <>
        Security system sales, service and installation for the home, cabin or business. Or wherever you need a site secured!
      </>
    ),
  },
  {
    title: 'Central Vacuum',
    Svg: require('../../static/img/vacuum.svg').default,
    description: (
      <>
        Hands down, the central vacuum system is the healthiest vacuum choice you can make for your new construction or existing home. Providing sales, upgrades and serivice on existing installations.  
      </>
    ),
  },
  {
    title: 'Intercom Systems',
    Svg: require('../../static/img/intercom.svg').default,
    description: (
      <>
        Video Intercom Systems For Residential homes, Apartments & Multi-Tenant Buildings. Products from the leading international manufacturer of intercom and security systems.
      </>
    ),
  },
  {
    title: 'Low Voltage Landscaping',
    Svg: require('../../static/img/low_voltage1.svg').default,
    description: (
      <>
        Customize your home with outdoor lighting and entertainment systems of any size and scale. Make your home the jewel of your neighborhood!
      </>
    ),
  },
  {
    title: 'High Speed Networking',
    Svg: require('../../static/img/network.svg').default,
    description: (
      <>
        Wired or wireless networking install and services for the fastest connectivity possible.
      </>
    ),
  },
  {
    title: 'Camera Systems',
    Svg: require('../../static/img/cams.svg').default,
    description: (
      <>
        We have you covered – inside and outside · Video doorbell cameras · Outdoor security cameras · Indoor security cameras · Place Anywhere security cameras.
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
