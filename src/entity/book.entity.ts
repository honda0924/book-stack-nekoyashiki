import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  isbn: string;

  @Column()
  description: string;
  
  @Column()
  getDate: string;

  @Column()
  currentPage: number;

  @Column()
  allPages: number;

  @Column({ default: false })
  isDone: boolean;
}