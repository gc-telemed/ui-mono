import type { Prisma } from "@prisma/client";
import type { NTTKey } from "./entities-type";

export interface UpdateManyArgs {
    User: Prisma.UserUpdateManyArgs;
    Post: Prisma.PostUpdateManyArgs;
}

export type UpdateManyArgType<T extends NTTKey> = UpdateManyArgs[T];
