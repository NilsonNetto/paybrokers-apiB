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

  async create(createProductDto: CreateProductDto) {
    const productExists = await this.findOne(createProductDto.nome);

    if (productExists) {
      console.log('Produto já existe no banco => Descartar entrada');
      return;
    }

    const product = new Product();
    product.nome = createProductDto.nome;
    product.valor = createProductDto.valor;
    product.descrição = createProductDto.descrição;

    return await this.productsRepository.save(product);
  }

  async findAll(): Promise<Product[]> {
    return this.productsRepository.find();
  }

  async findOne(name: string): Promise<Product> {
    return this.productsRepository.findOneBy({ nome: name });
  }
}
