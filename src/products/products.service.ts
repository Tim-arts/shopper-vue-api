import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductDto } from './dto/product.dto';
import { Product } from './product.schema';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<Product>,
  ) {}

  findAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  create(ProductDto: ProductDto): Promise<Product> {
    const createdProduct = new this.productModel(ProductDto);
    return createdProduct.save();
  }

  find(id: string): Promise<Product> {
    return this.productModel.findById({ _id: id }).exec();
  }

  update(updatedProduct: ProductDto): Promise<Product> {
    return this.productModel
      .findOneAndUpdate(this.productModel[updatedProduct._id], updatedProduct, {
        upsert: true,
      })
      .exec();
  }

  delete(id: string): Promise<any> {
    return this.productModel.remove({ _id: id }).exec();
  }
}
