import type { Prisma } from "@prisma/client";
import type { NTTKey } from "./entities-type";

export interface Inclusions {
    User: Prisma.UserInclude;
    Post: Prisma.PostInclude;
}

export type InclusionType<T extends NTTKey> = Inclusions[T];
