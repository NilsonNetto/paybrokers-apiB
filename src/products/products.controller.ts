import { Controller, Get, Param, Query } from '@nestjs/common';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './entities/product.entity';

@Controller()
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('products')
  findAll(
    @Query('page') page: number,
    @Query('limit') limit: number,
  ): Promise<Product[]> {
    return this.productsService.findAll(page, limit);
  }

  @Get('products/:nome')
  async findOne(@Param('nome') name: string): Promise<Product> {
    return this.productsService.findOne(name);
  }

  @EventPattern('createProduct')
  create(
    @Payload() createProductDto: CreateProductDto,
    @Ctx() context: RmqContext,
  ) {
    const channel = context.getChannelRef();
    const originalMsg = context.getMessage();

    channel.ack(originalMsg);
    return this.productsService.create(createProductDto);
  }
}
