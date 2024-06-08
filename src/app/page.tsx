'use client'
import React from 'react';

const Page: React.FC = () => {
  return (
    <div className="container">
      <style jsx>{`
        .container {
          margin:0;
          padding:0;
          width: 100vw;
          height: 100vh;
          --color: rgba(114, 114, 114, 0.3);
          background-color: #191a1a;
          background-image: linear-gradient(
              0deg,
              transparent 24%,
              var(--color) 25%,
              var(--color) 26%,
              transparent 27%,
              transparent 74%,
              var(--color) 75%,
              var(--color) 76%,
              transparent 77%,
              transparent
            ),
            linear-gradient(
              90deg,
              transparent 24%,
              var(--color) 25%,
              var(--color) 26%,
              transparent 27%,
              transparent 74%,
              var(--color) 75%,
              var(--color) 76%,
              transparent 77%,
              transparent
            );
          background-size: 55px 55px;
        }
      `}</style>
    </div>
  );
};

export default Page;
