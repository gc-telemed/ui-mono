import type { Prisma } from "@prisma/client";
import type { NTTKey } from "./entities-type";

export interface DeleteManyArgs {
    User: Prisma.UserDeleteManyArgs;
    Post: Prisma.PostDeleteManyArgs;
}

export type DeleteManyArgType<T extends NTTKey> = DeleteManyArgs[T];
