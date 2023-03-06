import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>,
  ) {}

  create(createProductDto: CreateProductDto) {
    const product = new Product();
    product.nome = createProductDto.nome;
    product.valor = createProductDto.valor;
    product.descrição = createProductDto.descrição;

    return this.productsRepository.save(product);
  }

  async findAll() {
    return this.productsRepository.find();
  }
}
