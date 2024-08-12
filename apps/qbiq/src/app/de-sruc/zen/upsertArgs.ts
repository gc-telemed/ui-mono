import type { Prisma } from "@prisma/client";
import type { NTTKey } from "./entities-type";

export interface UpsertArgs {
    User: Prisma.UserUpsertArgs;
    Post: Prisma.PostUpsertArgs;
}

export type UpsertArgType<T extends NTTKey> = UpsertArgs[T];
