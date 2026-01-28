import {
  Facebook,
  Hamburger,
  Instagram,
  Linkedin,
  Youtube,
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="flex h-20 items-center justify-between bg-zinc-950 px-16">
      <div className="flex items-center gap-2">
        <Hamburger
          size={24}
          strokeWidth={2}
          className="icons text-slate-200"
        />
        <h1 className="text-2xl text-slate-200">Dti</h1>
      </div>
      <div className="flex gap-3">
        <Instagram
          strokeWidth={2.5}
          className="icons text-slate-200"
        />
        <Facebook
          strokeWidth={2}
          className="icons text-slate-200"
        />
        <Linkedin
          strokeWidth={2}
          className="icons text-slate-200"
        />
        <Youtube
          strokeWidth={2}
          className="icons text-slate-200"
        />
      </div>
    </footer>
  );
};

export { Footer };
