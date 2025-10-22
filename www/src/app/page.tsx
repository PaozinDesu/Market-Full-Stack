'use client';

import { Footer } from '@/components/footer';
import { Main } from '@/components/home/main/main';
import { CartModal } from '@/components/modals/cart.modal';
import { Navbar } from '@/components/navbar';
import React, { useState } from 'react';


const Home: React.FC = () => {
  const [cartModalOpened, setCartModalOpened] = useState(false);

  return (
    <main className="grid h-full grid-cols-1 grid-rows-[80px_1fr_80px] bg-blue-950">
      <Navbar setCartModalOpened={setCartModalOpened} />
      <Main
        cartModalOpened={cartModalOpened}
        setCartModalOpened={setCartModalOpened}
      />
      <Footer />
      <CartModal
        cartModalOpened={cartModalOpened}
        setCartModalOpened={setCartModalOpened}
      />
    </main>
  );
};

export default Home;
