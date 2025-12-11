import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import React, { useState, useEffect } from 'react';
import img from '../../static/img/Distributor_home.webp'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
      <header className="hero" style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
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
            </div>
          </div>
        </div>
      </header>

  );
}

export default function Home() {
  const [url, setUrl] = useState('/product-tour/Assessments/Assessment');
  if(ExecutionEnvironment.canUseDOM){
    const mode = localStorage.getItem("HelpCenterMode");
    let urrl = mode !== 'Assessment' ? `/product-tour/${mode}/Admin/4addingUsers`: '/product-tour/Assessments/Assessment';
    setUrl(urrl)
  }

  return (
      <Layout title="Help Center" description="Step-by-step guides to help you navigate tasks easily">
        <HomepageHeader />
        <main className="container" style={{padding: '2rem 0'}}>
          <section className="text-center">
            <div className="font-bold text-gray-900 hero__title dark:text-gray-100">Explore Topics</div>
            <p className="hero__subtitle">Select a category to find detailed guides and solutions.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

              <Link to="/get-started/Welcome" style={{transition: 'all 0.5s ease'}} className="text-left group cursor-pointer flex flex-col p-5 border border-gray-100 dark:border-gray-700 rounded-xl dark:bg-gray-800 bg-green-50 hover:border-green-300 dark:hover:border-green-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center mb-3">
                  <div className="text-lg font-bold text-gray-900 m-0">
                    <div className="text-inherit no-underline hover:text-green-600 dark:text-green-200 transition-colors">Getting started</div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">Learn the basics and set up quickly.</p>
              </Link>

              <Link to={url} style={{transition: 'all 0.5s ease'}} className="text-left group cursor-pointer flex flex-col p-5 border border-gray-100 dark:border-gray-700 rounded-xl dark:bg-gray-800 bg-green-50 hover:border-green-300 dark:hover:border-green-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center mb-3">
                  <div className="text-lg font-bold text-gray-900 m-0">
                    <div className="text-inherit no-underline hover:text-green-600 dark:text-green-200 transition-colors">Features & tools</div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">Explore key functionalities and how to use them.</p>
              </Link>

              <Link to="/troubleshoot/1submitting_support_requests" style={{transition: 'all 0.5s ease'}} className="text-left group cursor-pointer flex flex-col p-5 border border-gray-100 dark:border-gray-700 rounded-xl dark:bg-gray-800 bg-green-50 hover:border-green-300 dark:hover:border-green-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">

                <div className="flex items-center mb-3">
                  <div className="text-lg font-bold text-gray-900 m-0">
                    <div className="text-inherit no-underline hover:text-green-600 dark:text-green-200 transition-colors">Troubleshooting tips</div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">Fix common issues with step-by-step solutions.</p>
              </Link>

              <Link to="/FAQs/FAQs1" style={{transition: 'all 0.5s ease'}} className="text-left group cursor-pointer flex flex-col p-5 border border-gray-100 dark:border-gray-700 rounded-xl dark:bg-gray-800 bg-green-50 hover:border-green-300 dark:hover:border-green-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center mb-3">
                  <div className="text-lg font-bold text-gray-900 m-0">
                    <div className="text-inherit no-underline hover:text-green-600 dark:text-green-200 transition-colors">FAQs</div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">Find answers to frequently asked questions.</p>
              </Link></div>
          </section>
        </main>
      </Layout>
  );
}
