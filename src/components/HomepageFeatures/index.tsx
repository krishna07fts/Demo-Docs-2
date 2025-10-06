import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Img: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Streamlined Workflow Management',
    Img: require('@site/static/img/ManPowerImg-1.png').default,
    description: (
      <>
        Easily create, edit, and manage workflows with defined stages and actions.
        Automate your business processes for smooth and efficient operations.
      </>
    ),
  },
  {
    title: 'Smart Access Control',
    Img: require('@site/static/img/ManPowerImg-2.png').default,
    description: (
      <>
        Manage users, roles, and privileges with precision.
        Control who accesses which module and ensure secure system usage.
      </>
    ),
  },
  {
    title: 'Simplified Finance & Operations',
    Img: require('@site/static/img/ManPowerImg-3.png').default,
    description: (
      <>
        Handle payments, refunds, and contract transactions effortlessly.
        Integrated tools like Sadad, Wallet, and Voucher setups make finance management easy.
      </>
    ),
  },
];

function Feature({title, Img, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Img} className={styles.featureImg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
