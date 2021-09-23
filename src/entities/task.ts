import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  task_id: number;

  @Column()
  task_name: string;

  @Column()
  start_time: number;

  @Column()
  end_time: number;

  @Column()
  state: number;

  @Column()
  creater: string;

  @Column()
  type: string;

  @Column()
  target: string;
}
