import type { Prisma } from "@prisma/client";
import type { NTTKey } from "./entities-type";

export interface GroupByArgs {
    User: Prisma.UserGroupByArgs;
    Post: Prisma.PostGroupByArgs;
}

export type GroupByArgType<T extends NTTKey> = GroupByArgs[T];
