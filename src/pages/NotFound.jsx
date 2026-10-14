import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Lottie from '../components/Lottie/Lottie';
import notFoundAnimation from '../assets/lottie/not-found.json';

export default function NotFound() {
  return (
    <main className="not-found">
      <a href="/" className="brand not-found-brand">
        rounak<span className="brand-dot">.</span>
      </a>

      <div className="not-found-inner">
        <Lottie
          animationData={notFoundAnimation}
          className="not-found-anim"
          label="A cat jumping out of a 404 sign"
        />
        <p className="eyebrow"><span>404</span>Page not found</p>
        <h1 className="section-title">This page wandered off.</h1>
        <p className="section-subtitle">
          The link may be broken, or the page may have moved. Let's get you back home.
        </p>
        <a href="/" className="btn btn-primary">
          <ArrowLeft size={16} /> Back to home
        </a>
      </div>
    </main>
  );
}
