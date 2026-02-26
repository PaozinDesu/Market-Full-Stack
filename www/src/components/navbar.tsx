import { Cog, Hamburger, ShoppingCart } from 'lucide-react';

interface NavbarProps {
  setCartModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ setCartModalOpened }) => {
  return (
    <nav className="flex h-20 items-center justify-between bg-zinc-950 px-16">
      <div className="flex items-center gap-3 text-cyan-500">
        <Hamburger
          size={48}
          strokeWidth={2}
          className="text-cyan-500"
        />
        <h1 className="text-[32px] font-medium">DTI Lunchs</h1>
      </div>
      <div className="flex gap-4">
        <Cog
          size={32}
          strokeWidth={2}
          className="icons text-slate-200"
        />
        <ShoppingCart
          strokeWidth={2}
          size={32}
          className="icons text-slate-200"
          onClick={() => setCartModalOpened(true)}
        />
      </div>
    </nav>
  );
};

export { Navbar };
