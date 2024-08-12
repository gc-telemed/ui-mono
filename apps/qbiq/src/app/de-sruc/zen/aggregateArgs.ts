import type { Prisma } from "@prisma/client";
import type { NTTKey } from "./entities-type";

export interface AggregateArgs {
    User: Prisma.UserAggregateArgs;
    Post: Prisma.PostAggregateArgs;
}

export type AggregateArgType<T extends NTTKey> = AggregateArgs[T];
