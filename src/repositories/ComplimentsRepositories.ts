import {Repository, EntityRepository } from "typeorm";
import { Compliment } from "../entities/Compliment";

// repositorios de usuarios

@EntityRepository(Compliment)
class ComplimentsRepositories extends Repository<Compliment>{}

export {ComplimentsRepositories };