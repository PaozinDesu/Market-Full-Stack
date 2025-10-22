import { Footer } from '@/components/footer';
import { Main } from '@/components/home/main/main';
import { Navbar } from '@/components/navbar';
import React from 'react';

const Home: React.FC = () => {
  return (
    <main className="grid h-full grid-cols-1 grid-rows-[80px_1fr_80px] bg-blue-950">
      <Navbar />
      <Main />
      <Footer />
    </main>
  );
};

export default Home;
