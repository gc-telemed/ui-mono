import type { Prisma } from "@prisma/client";
import type { NTTKey } from "./entities-type";

export interface DeleteArgs {
    User: Prisma.UserDeleteArgs;
    Post: Prisma.PostDeleteArgs;
}

export type DeleteArgType<T extends NTTKey> = DeleteArgs[T];
