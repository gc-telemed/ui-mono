import type { Prisma } from "@prisma/client";
import type { NTTKey } from "./entities-type";

export interface FieldRefs {
    User: Prisma.UserFieldRefs;
    Post: Prisma.PostFieldRefs;
}

export type FieldRefType<T extends NTTKey> = FieldRefs[T];
