import type { Prisma } from "@prisma/client";
import type { NTTKey } from "./entities-type";

export interface FindManyArgs {
    User: Prisma.UserFindManyArgs;
    Post: Prisma.PostFindManyArgs;
}

export type FindManyArgType<T extends NTTKey> = FindManyArgs[T];
