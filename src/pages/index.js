import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import React, { useState, useEffect } from 'react';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);
  return (
      <header className="hero" style={{ backgroundColor: '#73bc45' }}>
        <div className="hero-background">
          <div className="hero-background-pattern"></div>
        </div>

        <div className="container text-center">
          <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
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
                  className="hero-button button--primary"
                  to="/features/assessment"
              >
                <span>Try Assessment Feature</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

  );
}

export default function Home() {const [animatedCards, setAnimatedCards] = useState([]);

  useEffect(() => {
    // Simulate staggered animation for cards
    const timer1 = setTimeout(() => setAnimatedCards([0]), 100);
    const timer2 = setTimeout(() => setAnimatedCards([0, 1]), 200);
    const timer3 = setTimeout(() => setAnimatedCards([0, 1, 2]), 300);
    const timer4 = setTimeout(() => setAnimatedCards([0, 1, 2, 3]), 400);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  const topics = [
    {
      title: "Getting Started",
      description: "Learn the basics and set up quickly.",
      path: "/get-started/Welcome",
      icon: "🚀",
      color: "#4f8df9"
    },
    {
      title: "Features & Tools",
      description: "Explore key functionalities and how to use them.",
      path: "/product-tour/Admin/1userJourney",
      icon: "🛠️",
      color: "#ff7e5f"
    },
    {
      title: "Troubleshooting",
      description: "Fix common issues with step-by-step solutions.",
      path: "/troubleshoot/1submitting_support_requests",
      icon: "🔧",
      color: "#2eb872"
    },
    {
      title: "FAQs",
      description: "Find answers to frequently asked questions.",
      path: "/FAQs/FAQs1",
      icon: "❓",
      color: "#9b59b6"
    }
  ];

  return (
      <Layout title="Help Center" description="Step-by-step guides to help you navigate tasks easily">
        <HomepageHeader />
        <main className="help-center-container">
          <section className="help-center-section">
            <div className="section-header">
              <h2 className="section-title">Explore Topics</h2>
              <p className="section-description">Select a category to find detailed guides and solutions.</p>
            </div>

            <div className="topics-grid">
              {topics.map((topic, index) => (
                  <Link
                      key={index}
                      to={topic.path}
                      className={`topic-card ${animatedCards.includes(index) ? 'visible' : ''}`}
                      style={{ '--accent-color': topic.color }}
                  >
                    <div className="card-icon" aria-hidden="true">
                      {topic.icon}
                    </div>
                    <div className="card-content">
                      <h3>{topic.title}</h3>
                      <p>{topic.description}</p>
                    </div>
                    <div className="card-arrow">→</div>
                  </Link>
              ))}
            </div>
          </section>

          {/* Additional helpful section */}
          <section className="additional-help">
            <div className="help-card">
              <div className="help-icon">📞</div>
              <div className="help-content">
                <h3>Need more help?</h3>
                <p>Can't find what you're looking for? Contact our support team for personalized assistance.</p>
                <button className="help-button">Contact Support</button>
              </div>
            </div>
          </section>
        </main>
      </Layout>
  );
};
