import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import {v4 as uuid} from "uuid"

// entidade que vai representar nossa tabela no banco de dados, uuid id universal ORM 

@Entity("users")
class User {

    @PrimaryColumn()
    readonly id: string;
    
    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    admin: boolean;

    @Column()
    password: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;


    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}


export { User};

// entidade < - > ORM < - > BD (users)