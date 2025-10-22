import { Filters } from './filter';
import { Products } from './products';

const Main: React.FC = () => {
  return (
    <section className="grid h-full grid-cols-[300px_1fr] grid-rows-subgrid px-6 pt-6">
      <Filters />
      <Products />
      {/* <Cart /> */}
    </section>
  );
};

export { Main };
