import type { Prisma } from "@prisma/client";
import type { NTTKey } from "./entities-type";

export interface Selections {
    User: Prisma.UserSelect;
    Post: Prisma.PostSelect;
}

export type SelectionType<T extends NTTKey> = Selections[T];
