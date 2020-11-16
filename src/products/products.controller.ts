import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsDto } from './dto/products.dto';
import { ProductDto } from './dto/product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async findAll(): Promise<ProductsDto> {
    return this.productsService.findAll();
  }

  @Get(':id')
  async find(@Param('id') id: string): Promise<ProductDto> {
    return this.productsService.find(id);
  }

  @Post()
  async create(@Body('product') product: ProductDto): Promise<ProductDto> {
    return await this.productsService.create(product);
  }

  @Put()
  async update(@Body('product') product: ProductDto): Promise<ProductDto> {
    return await this.productsService.update(product);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<any> {
    return await this.productsService.delete(id);
  }
}
