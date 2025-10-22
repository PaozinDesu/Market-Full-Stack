import { Filters } from './filter';
import { Products } from './products';

interface MainProps {
  cartModalOpened: boolean;
  setCartModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const Main: React.FC<MainProps> = ({ cartModalOpened, setCartModalOpened }) => {
  return (
    <section className="grid h-full grid-cols-[300px_1fr] grid-rows-subgrid px-6 pt-6">
      <Filters />
      <Products
        cartModalOpened={cartModalOpened}
        setCartModalOpened={setCartModalOpened}
      />
    </section>
  );
};

export { Main };
