import React, { useEffect, useState } from 'react';
import Lottie from '../Lottie/Lottie';
import loaderAnimation from '../../assets/lottie/loader.json';

const MIN_VISIBLE_MS = 1600;
const FADE_MS = 700;

// Full-screen intro loader: stays until the page has loaded (and at least MIN_VISIBLE_MS), then fades out
export default function Loader() {
  const [phase, setPhase] = useState('visible'); // visible -> leaving -> gone

  useEffect(() => {
    const start = performance.now();
    document.documentElement.classList.add('is-loading');

    let leaveTimer;
    let goneTimer;
    const finish = () => {
      const wait = Math.max(0, MIN_VISIBLE_MS - (performance.now() - start));
      leaveTimer = setTimeout(() => {
        setPhase('leaving');
        document.documentElement.classList.remove('is-loading');
        goneTimer = setTimeout(() => setPhase('gone'), FADE_MS);
      }, wait);
    };

    if (document.readyState === 'complete') finish();
    else window.addEventListener('load', finish, { once: true });

    return () => {
      window.removeEventListener('load', finish);
      clearTimeout(leaveTimer);
      clearTimeout(goneTimer);
      document.documentElement.classList.remove('is-loading');
    };
  }, []);

  if (phase === 'gone') return null;

  return (
    <div className={`loader ${phase === 'leaving' ? 'loader-leave' : ''}`} role="status" aria-live="polite">
      <Lottie animationData={loaderAnimation} className="loader-anim" label="Loading" />
      <span className="sr-only">Loading portfolio…</span>
    </div>
  );
}
