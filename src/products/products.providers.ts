import { Connection } from 'mongoose';
import { Product, ProductSchema } from './product.schema';
import constants from '../constants';

export const ProductsProviders = [
  {
    provide: constants.PRODUCT_MODEL,
    useFactory: (connection: Connection) =>
      connection.model(Product.name, ProductSchema),
    inject: [constants.DATABASE_CONNECTION],
  },
];
