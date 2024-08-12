import type { Prisma } from "@prisma/client";
import type { NTTKey } from "./entities-type";

export interface CountArgs {
    User: Prisma.UserCountArgs;
    Post: Prisma.PostCountArgs;
}

export type CountArgType<T extends NTTKey> = CountArgs[T];
