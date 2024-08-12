import type { Prisma } from "@prisma/client";
import type { NTTKey } from "./entities-type";

export interface Delegates {
    User: Prisma.UserDelegate;
    Post: Prisma.PostDelegate;
}

export type DelegateType<T extends NTTKey> = Delegates[T];
