import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import { ErrorHandler } from './handlers/error.handler';
import { prisma } from './lib/prisma';
import { registerCartsRoutes } from './routes/carts.routes';
import { registerCategoriesRoutes } from './routes/categories.routes';
import { registerProductsRoutes } from './routes/products.routes';
import { registerSubCategoriesRoutes } from './routes/subCategories.routes';

function bootstrap() {
  const app = express();
  const port = process.env.PORT || 4000;

  app.use(cors({ origin: '*' }));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  registerProductsRoutes(app);
  registerCategoriesRoutes(app);
  registerSubCategoriesRoutes(app);
  registerCartsRoutes(app);

  app.use(new ErrorHandler().handle);

  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });

  process.on('beforeExit', async () => {
    prisma.$disconnect();
  });
}

bootstrap();
