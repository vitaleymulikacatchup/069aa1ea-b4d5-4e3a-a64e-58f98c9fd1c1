import React, { useState } from 'react';
import Header from './Header';
import SignInForm from './SignInForm';
import Footer from './Footer';
import MovieBackground from './MovieBackground';

const SignInPage: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Movie Background */}
      <MovieBackground />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
      
      {/* Content */}
      <div className="relative z-20 min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1 flex items-center justify-center px-4 py-8">
          <SignInForm />
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default SignInPage;