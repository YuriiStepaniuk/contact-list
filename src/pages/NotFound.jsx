import React, { useEffect } from 'react';

export default function NotFound() {
  useEffect(() => {
    // Disable scrolling when the component mounts
    document.body.style.overflow = 'hidden';

    // Re-enable scrolling when the component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className='bg-sky-900'>
      <div className="flex flex-col items-center justify-center max-w-screen-xl mx-auto h-screen text-sky-400">
      <div className="flex my-4">
        <i className="bx bx-message-alt-error text-5xl mr-2"></i>
        <h1 className="text-5xl font-bold">Not Found</h1>
      </div>
      <p className="text-4xl my-4">404</p>
      <p className="text-2xl my-4">Please, visit any other page</p>
    </div>
    </div>
    
  );
}
