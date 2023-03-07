import { Controller, Get } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller()
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('products')
  findAll() {
    return this.productsService.findAll();
  }

  @EventPattern('createProduct')
  create(@Payload() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }
}
