import type { Prisma } from "@prisma/client";
import type { NTTKey } from "./entities-type";

export interface FindUniqueArgs {
    User: Prisma.UserFindUniqueArgs;
    Post: Prisma.PostFindUniqueArgs;
}

export type FindUniqueArgType<T extends NTTKey> = FindUniqueArgs[T];
