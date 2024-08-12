import { type OptionalKind, Project, type ImportDeclarationStructure } from 'ts-morph';

import { Prisma } from '@prisma/client';
import type { BaseDMMF, DMMF } from '@prisma/client/runtime/library';

export function firstCharUpper(str: string) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

export function firstCharLower(str: string) {
	return str.charAt(0).toLowerCase() + str.slice(1);
}

export const ModelNames: string[] = Prisma.dmmf.datamodel.models.map(
	(m: DMMF.Model) => m.name,
);

export function getDMMF(): BaseDMMF {
	return Prisma.dmmf;
}

export const essentialImports: readonly OptionalKind<ImportDeclarationStructure>[] = [
	{
		moduleSpecifier: '@prisma/client',
		namedImports: ['Prisma'],
		isTypeOnly: true,
	},
	{
		moduleSpecifier: `./entities-type`,
		namedImports: ['NTTKey'],
		isTypeOnly: true,
	},
];



export function createProperties(suffix: string) {
	return ModelNames.map((ModelName) => ({
		name: ModelName,
		type: `Prisma.${ModelName}${suffix}`,
	}));
}
