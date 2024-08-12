import type { Prisma } from "@prisma/client";
import type { NTTKey } from "./entities-type";

export interface CreateArgs {
    User: Prisma.UserCreateArgs;
    Post: Prisma.PostCreateArgs;
}

export type CreateArgType<T extends NTTKey> = CreateArgs[T];
