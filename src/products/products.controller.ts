import { Controller, Get, Param } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './entities/product.entity';

@Controller()
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('products')
  findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Get('products/:nome')
  async findOne(@Param('nome') name: string): Promise<Product> {
    return this.productsService.findOne(name);
  }

  @EventPattern('createProduct')
  create(@Payload() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }
}
