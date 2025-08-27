import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
      <header className="hero" style={{ backgroundColor: '#73bc45' }}>
        <div className="hero-background">
          <div className="hero-background-pattern"></div>
        </div>

        <div className="container text-center">
          <div className={`hero-content visible`}>
            <h1 className="hero__title" style={{ color: '#fff' }}>
              Welcome to the {siteConfig.title} Help Center
            </h1>
            <p className="hero__subtitle" style={{ color: '#f3f3f3' }}>
              Step-by-step guides to help you accomplish every task with ease.
            </p>

            <div className="hero-buttons">
              <Link
                  className="hero-button button--secondary"
                  to="/get-started/Welcome"
              >
                <span>Get Started</span>
              </Link>
              <Link
                  className="hero-button button--secondary pulse"
                  to="/product-tour/Assessments/Assessment"
              >
                <span>About Assessments Product</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

  );
}

export default function Home() {
  return (
    <Layout title="Help Center" description="Step-by-step guides to help you navigate tasks easily">
      <HomepageHeader />
      <main className="container">
        <section className={styles.section}>
          <Heading as="h2">Explore Topics</Heading>
          <p>Select a category to find detailed guides and solutions.</p>
          <div className={styles.grid}>
            <Link className={styles.card} to="/get-started/Welcome">
              <h3>Getting Started</h3>
              <p>Learn the basics and set up quickly.</p>
            </Link>
            <Link className={styles.card} to="/product-tour/Admin/1userJourney">
              <h3>Features & Tools</h3>
              <p>Explore key functionalities and how to use them.</p>
            </Link>
            <Link className={styles.card} to="/troubleshoot/1submitting_support_requests">
              <h3>Troubleshooting</h3>
              <p>Fix common issues with step-by-step solutions.</p>
            </Link>
            <Link className={styles.card} to="/FAQs/FAQs1">
              <h3>FAQs</h3>
              <p>Find answers to frequently asked questions.</p>
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}