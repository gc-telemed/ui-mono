import type { Prisma } from "@prisma/client";
import type { NTTKey } from "./entities-type";

export interface CreateManyArgs {
    User: Prisma.UserCreateManyArgs;
    Post: Prisma.PostCreateManyArgs;
}

export type CreateManyArgType<T extends NTTKey> = CreateManyArgs[T];
