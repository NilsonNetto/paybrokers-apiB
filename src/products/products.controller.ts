import { Controller, Get } from '@nestjs/common';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller()
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('products')
  findAll() {
    return this.productsService.findAll();
  }

  @MessagePattern({ cmd: 'createProduct' })
  create(
    @Payload() createProductDto: CreateProductDto,
    @Ctx() context: RmqContext,
  ) {
    const channel = context.getChannelRef();
    const message = context.getMessage();

    channel.ack(message);

    return this.productsService.create(createProductDto);
  }
}
