import { EntityRepository, Repository } from "typeorm";
import { Tag } from "../entities/Tag";

// repositorios de usuarios

@EntityRepository(Tag)
class TagsRepositories extends Repository<Tag>{}

export { TagsRepositories };