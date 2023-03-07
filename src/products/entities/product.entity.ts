import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  nome: string;

  @Column()
  valor: number;

  @Column({ nullable: true })
  descrição: string;
}
