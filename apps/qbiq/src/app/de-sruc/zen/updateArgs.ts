import type { Prisma } from "@prisma/client";
import type { NTTKey } from "./entities-type";

export interface UpdateArgs {
    User: Prisma.UserUpdateArgs;
    Post: Prisma.PostUpdateArgs;
}

export type UpdateArgType<T extends NTTKey> = UpdateArgs[T];
