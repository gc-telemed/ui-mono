import type { Prisma } from "@prisma/client";
import type { NTTKey } from "./entities-type";

export interface FindFirstArgs {
    User: Prisma.UserFindFirstArgs;
    Post: Prisma.PostFindFirstArgs;
}

export type FindFirstArgType<T extends NTTKey> = FindFirstArgs[T];
