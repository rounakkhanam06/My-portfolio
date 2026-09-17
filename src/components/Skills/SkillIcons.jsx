import React from 'react';

export default function SkillIcon({ name, size = 52 }) {
  switch (name.toUpperCase()) {
    case 'HTML':
    case 'HTML5':
      return (
        <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
          <path d="M19.4 114.7L8 0h112l-11.4 114.7L64 128l-44.6-13.3z" fill="#E44D26"/>
          <path d="M64 117.5l35.8-10.7 9.5-95.6H64v106.3z" fill="#F16529"/>
          <path d="M64 50.8H46.5l-1.2-13.9H64V23H30.4l3.6 41.7H64V50.8zm0 35.6l-19.8-5.3-1.3-14.3H29.1l2.4 27.5L64 103.4v-17z" fill="#EBEBEB"/>
          <path d="M64 50.8h17.5l-1.6 18.5-15.9 4.3v13.8l28.6-7.7 3.8-42.8H64v13.9zm0-27.8v13.9h33.6l1.2-13.9H64z" fill="#FFFFFF"/>
        </svg>
      );

    case 'CSS':
    case 'CSS3':
      return (
        <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
          <path d="M19.4 114.7L8 0h112l-11.4 114.7L64 128l-44.6-13.3z" fill="#1572B6"/>
          <path d="M64 117.5l35.8-10.7 9.5-95.6H64v106.3z" fill="#33A9DC"/>
          <path d="M64 50.8H46.5l-1.2-13.9H64V23H30.4l3.6 41.7H64V50.8zm0 35.6l-19.8-5.3-1.3-14.3H29.1l2.4 27.5L64 103.4v-17z" fill="#EBEBEB"/>
          <path d="M64 50.8h17.5l-1.6 18.5-15.9 4.3v13.8l28.6-7.7 3.8-42.8H64v13.9zm0-27.8v13.9h33.6l1.2-13.9H64z" fill="#FFFFFF"/>
        </svg>
      );

    case 'JS':
    case 'JAVASCRIPT':
      return (
        <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
          <rect width="128" height="128" rx="16" fill="#F7DF1E"/>
          <path d="M67.9 99.8c3.3 5.4 7.8 9.4 15.6 9.4 6.5 0 10.7-3.2 10.7-7.7 0-5.3-4.3-7.2-11.4-10.4l-3.9-1.7c-11.3-4.8-18.8-10.8-18.8-23.4 0-11.6 8.9-20.4 22.8-20.4 9.9 0 17 3.6 22 12.3l-10.7 6.9c-2.4-4.3-5.2-6-11.3-6-4.9 0-8.2 3.1-8.2 6.9 0 4.8 3.3 6.8 9.8 9.5l3.9 1.7c13.3 5.7 20.7 11.4 20.7 24.5 0 14-11 21.6-25.7 21.6-14.5 0-23.8-7-28-16.1l12.5-7.1zM28.4 100.9l12.5-7.7c2.7 4.7 5.2 8.7 10.5 8.7 5.4 0 8.9-2.2 8.9-10.8V47.5h14.8v43.7c0 16.8-9.8 24.4-23.4 24.4-12.7 0-19.9-6.9-23.3-14.7z" fill="#000000"/>
        </svg>
      );

    case 'REACT':
    case 'REACT JS':
    case 'REACT.JS':
      return (
        <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
          <ellipse cx="64" cy="64" rx="48" ry="18" stroke="#61DAFB" strokeWidth="6" transform="rotate(30 64 64)"/>
          <ellipse cx="64" cy="64" rx="48" ry="18" stroke="#61DAFB" strokeWidth="6" transform="rotate(90 64 64)"/>
          <ellipse cx="64" cy="64" rx="48" ry="18" stroke="#61DAFB" strokeWidth="6" transform="rotate(150 64 64)"/>
          <circle cx="64" cy="64" r="10" fill="#61DAFB"/>
        </svg>
      );

    case 'NODE':
    case 'NODE JS':
    case 'NODE.JS':
      return (
        <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
          <path d="M64 12l48 27.7v55.4L64 122.8 16 95.1V39.7L64 12z" fill="#333333"/>
          <path d="M64 18.5l42.4 24.5v49L64 116.5 21.6 92V43L64 18.5z" fill="#5FA04E"/>
          <path d="M64 36c-15.5 0-28 12.5-28 28s12.5 28 28 28 28-12.5 28-28-12.5-28-28-28zm0 46c-9.9 0-18-8.1-18-18s8.1-18 18-18 18 8.1 18 18-8.1 18-18 18z" fill="#FFFFFF"/>
          <path d="M60 48h8v24h-8zm-16 8h8v16h-8zm32 0h8v16h-8z" fill="#FFFFFF"/>
        </svg>
      );

    case 'EXPRESS':
    case 'EXPRESS JS':
    case 'EXPRESS.JS':
      return (
        <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
          <rect width="128" height="128" rx="16" fill="#111827" stroke="#374151" strokeWidth="4"/>
          <text x="64" y="74" textAnchor="middle" fill="#FFFFFF" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="38" letterSpacing="1">
            ex
          </text>
          <path d="M36 88h56" stroke="#00F5D4" strokeWidth="4" strokeLinecap="round"/>
        </svg>
      );

    case 'GITHUB':
      return (
        <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
          <circle cx="64" cy="64" r="56" fill="#FFFFFF"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M64 16C37.5 16 16 37.5 16 64c0 21.2 13.7 39.2 32.8 45.6 2.4.4 3.3-1 3.3-2.3v-8.2c-13.4 2.9-16.2-6.4-16.2-6.4-2.2-5.6-5.4-7-5.4-7-4.4-3 .3-3 .3-3 4.8.3 7.4 5 7.4 5 4.3 7.4 11.3 5.3 14 4 0.4-3.1 1.7-5.3 3.1-6.5-10.7-1.2-21.9-5.3-21.9-23.7 0-5.2 1.9-9.5 5-12.9-.5-1.2-2.2-6.1.5-12.8 0 0 4-.1.3 1.3 13.2 5 13.2 5 3.8-1.1 7.9-1.6 12-1.6 4.1 0 8.2.5 12 1.6 0 0 9.2-8.2 13.2-5 2.7 6.7 1 11.6.5 12.8 3.1 3.4 5 7.7 5 12.9 0 18.5-11.3 22.5-22 23.7 1.7 1.5 3.3 4.4 3.3 8.9v13.2c0 1.3.9 2.8 3.3 2.3C98.3 103.2 112 85.2 112 64c0-26.5-21.5-48-48-48z" fill="#181717"/>
        </svg>
      );

    case 'TAILWIND':
    case 'TAILWIND CSS':
      return (
        <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
          <path d="M32 44c4.8-19.2 16.8-24 36-14.4 11 5.5 17.8 12.5 24 19.2 8.1 8.7 17.2 18.4 36 21.6-4.8 19.2-16.8 24-36 14.4-11-5.5-17.8-12.5-24-19.2-8.1-8.7-17.2-18.4-36-21.6zm-32 36c4.8-19.2 16.8-24 36-14.4 11 5.5 17.8 12.5 24 19.2 8.1 8.7 17.2 18.4 36 21.6-4.8 19.2-16.8 24-36 14.4-11-5.5-17.8-12.5-24-19.2-8.1-8.7-17.2-18.4-36-21.6z" fill="#38BDF8"/>
        </svg>
      );

    case 'MONGO':
    case 'MONGODB':
    case 'MONGO DB':
      return (
        <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
          <path d="M64 12c-2.4 14.8-18.4 32.2-22.7 54.7-5.5 28.5 12.3 49.3 22.7 57.3 10.4-8 28.2-28.8 22.7-57.3C82.4 44.2 66.4 26.8 64 12z" fill="#47A248"/>
          <path d="M64 12v112c10.4-8 28.2-28.8 22.7-57.3C82.4 44.2 66.4 26.8 64 12z" fill="#499D4A"/>
          <path d="M64 112c-0.8-1-1.6-2.2-2.4-3.5-0.5-0.8-1-1.6-1.5-2.5-4-7.4-5.8-16.5-5.3-26.6 0.9-19.4 10.2-34.9 9.2-46.4v79z" fill="#FFFFFF" opacity="0.3"/>
        </svg>
      );

    case 'REDIS':
      return (
        <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
          <path d="M64 16l48 18-48 18-48-18 48-18z" fill="#DC382D"/>
          <path d="M16 34l48 18v58L16 92V34z" fill="#B71C1C"/>
          <path d="M112 34l-48 18v58l48-18V34z" fill="#E53935"/>
          <ellipse cx="64" cy="34" rx="28" ry="10" fill="#EF5350"/>
        </svg>
      );

    case 'NEXT':
    case 'NEXT JS':
    case 'NEXT.JS':
      return (
        <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
          <rect width="128" height="128" rx="16" fill="#000000" stroke="#27272a" strokeWidth="4"/>
          <path d="M40 38h10v52H40V38zm38 0h10v52H78V38z" fill="#FFFFFF"/>
          <path d="M44 38l44 52h-12L38 42l6-4z" fill="url(#nextGrad)"/>
          <defs>
            <linearGradient id="nextGrad" x1="40" y1="38" x2="88" y2="90" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFFFFF"/>
              <stop offset="1" stopColor="#FFFFFF" stopOpacity="0"/>
            </linearGradient>
          </defs>
        </svg>
      );

    case 'GIT':
      return (
        <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
          <path d="M123.6 57.2L70.8 4.4c-3.6-3.6-9.5-3.6-13.1 0L42.2 19.9l16.6 16.6c3.9-1.3 8.4-.4 11.5 2.7 3.1 3.1 4 7.6 2.7 11.5l16 16c3.9-1.3 8.4-.4 11.5 2.7 4.3 4.3 4.3 11.4 0 15.7-4.3 4.3-11.4 4.3-15.7 0-3.4-3.4-4.2-8.3-2.3-12.4L67.1 57.3v34.4c1.2.6 2.3 1.4 3.2 2.3 4.3 4.3 4.3 11.4 0 15.7-4.3 4.3-11.4 4.3-15.7 0-4.3-4.3-4.3-11.4 0-15.7 1.2-1.2 2.7-2.1 4.3-2.6V56.6c-1.6-.5-3.1-1.4-4.3-2.6-3.4-3.4-4.2-8.4-2.2-12.5L35.9 24.9 4.4 56.4c-3.6 3.6-3.6 9.5 0 13.1l52.8 52.8c3.6 3.6 9.5 3.6 13.1 0l53.3-53.3c3.6-3.5 3.6-9.4 0-11.8z" fill="#F05032"/>
        </svg>
      );

    case 'POSTMAN':
      return (
        <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
          <circle cx="64" cy="64" r="56" fill="#FF6C37"/>
          <path d="M84 44l-40 24 16 6 24-30z" fill="#FFFFFF"/>
          <path d="M60 74l-16-6 4-12 12 18z" fill="#FFE0B2"/>
          <circle cx="50" cy="52" r="6" fill="#FFFFFF"/>
        </svg>
      );

    case 'THREE JS':
    case 'THREE.JS':
      return (
        <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
          <path d="M64 16L16 104h96L64 16z" stroke="#00F5D4" strokeWidth="6" fill="rgba(0, 245, 212, 0.1)"/>
          <path d="M64 16v88M16 104l48-40M112 104L64 64" stroke="#00F5D4" strokeWidth="4"/>
          <circle cx="64" cy="64" r="8" fill="#00F5D4"/>
        </svg>
      );

    case 'DOCKER':
      return (
        <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
          <path d="M120 62c-2.8-1.9-8.7-2.4-13.4-.8-.8-6.1-5.1-11-10.8-11-1.3 0-2.6.3-3.8.8-4.5-9.3-14-15.8-25-15.8-3.4 0-6.6.6-9.6 1.7L54 44h-8V36h-8v8h-8V36h-8v8H14v16h10v8H14v16c0 17.7 14.3 32 32 32h32c24.3 0 44-19.7 44-44v-4l-2-2z" fill="#2496ED"/>
          <rect x="38" y="48" width="10" height="8" fill="#FFFFFF"/>
          <rect x="52" y="48" width="10" height="8" fill="#FFFFFF"/>
          <rect x="66" y="48" width="10" height="8" fill="#FFFFFF"/>
          <rect x="52" y="36" width="10" height="8" fill="#FFFFFF"/>
          <rect x="66" y="36" width="10" height="8" fill="#FFFFFF"/>
        </svg>
      );

    case 'JAVA':
      return (
        <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
          <path d="M48 18c-8 12 8 22 2 34" stroke="#EA2D2E" strokeWidth="5" strokeLinecap="round" fill="none"/>
          <path d="M64 10c-10 14 10 26 2 40" stroke="#5382A1" strokeWidth="5" strokeLinecap="round" fill="none"/>
          <path d="M80 18c-8 12 8 22 2 34" stroke="#EA2D2E" strokeWidth="5" strokeLinecap="round" fill="none"/>
          <path d="M30 62h54c0 0 2 30-27 30s-27-30-27-30z" fill="#5382A1"/>
          <path d="M84 66h12a10 10 0 0110 10v2a10 10 0 01-10 10H80" stroke="#5382A1" strokeWidth="5" strokeLinecap="round" fill="none"/>
          <ellipse cx="57" cy="99" rx="38" ry="8" fill="#EA2D2E"/>
          <ellipse cx="57" cy="99" rx="28" ry="4" fill="#F89820"/>
        </svg>
      );

    case 'NGINX':
      return (
        <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
          <path d="M64 12l48 27.7v55.4L64 122.8 16 95.1V39.7L64 12z" fill="#009639"/>
          <path d="M42 42h10l34 44V42h10v44H86L52 42v44H42V42z" fill="#FFFFFF"/>
        </svg>
      );

    case 'PM2':
      return (
        <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
          <rect width="128" height="128" rx="20" fill="#2B037A" stroke="#4C1D95" strokeWidth="4"/>
          <text x="64" y="68" textAnchor="middle" fill="#00F5D4" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="32" letterSpacing="1">
            PM2
          </text>
          <path d="M40 82h48" stroke="#00F5D4" strokeWidth="4" strokeLinecap="round"/>
        </svg>
      );

    case 'VPS / LINUX':
    case 'LINUX':
    case 'VPS':
    case 'VPS DEPLOYMENT':
      return (
        <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
          <rect x="20" y="24" width="88" height="24" rx="6" fill="#0B132B" stroke="#00F5D4" strokeWidth="3"/>
          <circle cx="32" cy="36" r="3.5" fill="#00F5D4"/>
          <circle cx="42" cy="36" r="3.5" fill="#00F5D4"/>
          <line x1="58" y1="36" x2="96" y2="36" stroke="#475569" strokeWidth="3" strokeLinecap="round"/>
          <rect x="20" y="54" width="88" height="24" rx="6" fill="#0B132B" stroke="#00F5D4" strokeWidth="3"/>
          <circle cx="32" cy="66" r="3.5" fill="#00F5D4"/>
          <circle cx="42" cy="66" r="3.5" fill="#00F5D4"/>
          <line x1="58" y1="66" x2="96" y2="66" stroke="#475569" strokeWidth="3" strokeLinecap="round"/>
          <rect x="20" y="84" width="88" height="24" rx="6" fill="#0B132B" stroke="#00F5D4" strokeWidth="3"/>
          <circle cx="32" cy="96" r="3.5" fill="#00F5D4"/>
          <circle cx="42" cy="96" r="3.5" fill="#00F5D4"/>
          <line x1="58" y1="96" x2="96" y2="96" stroke="#475569" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      );

    default:
      return (
        <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
          <rect width="128" height="128" rx="16" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" strokeWidth="4"/>
          <text x="64" y="72" textAnchor="middle" fill="#00F5D4" fontFamily="monospace" fontWeight="bold" fontSize="26">
            {name.slice(0, 4).toUpperCase()}
          </text>
        </svg>
      );
  }
}
