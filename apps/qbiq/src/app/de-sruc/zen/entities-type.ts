import { User, Post } from "./entities";

const Entities = {User, 
    Post} as const;

export type EntitiesType = typeof Entities;
export type NTTKey = keyof EntitiesType;
