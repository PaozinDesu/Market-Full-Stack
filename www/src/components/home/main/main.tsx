import { Products } from './products';

interface MainProps {
  cartModalOpened: boolean;
  setCartModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const Main: React.FC<MainProps> = ({ cartModalOpened, setCartModalOpened }) => {
  return (
    <section className="grid h-full grid-cols-[1fr] grid-rows-subgrid px-6 pt-6">
      <Products
        cartModalOpened={cartModalOpened}
        setCartModalOpened={setCartModalOpened}
      />
    </section>
  );
};

export { Main };
