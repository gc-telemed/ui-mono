import { Project, VariableDeclarationKind } from 'ts-morph';
import {
	createProperties,
	essentialImports,
	firstCharLower,
	ModelNames,
} from './apps/qbiq/src/app/de-sruc/utils';

const zenPath = "./apps/qbiq/src/app/de-sruc/zen";

export function createTypeFile(
	project: Project,
	fileName: string,
	interfaceName: string,
	typeName: string,
	properties: { name: string; type: string }[],
) {
	const typeFile = project.createSourceFile(`${zenPath}/${fileName}.ts`, '', {
		overwrite: true,
	});

	typeFile.addImportDeclarations(essentialImports);

	typeFile.addInterface({
		name: interfaceName,
		isExported: true,
		properties,
	});

	typeFile.addTypeAlias({
		name: typeName,
		typeParameters: [`T extends NTTKey`],
		type: `${interfaceName}[T]`,
		isExported: true,
	});

	typeFile.saveSync();
}

function statements(lCase = false) {
	return ModelNames.map((ModelName) => {
		const name = lCase ? firstCharLower(ModelName) : ModelName;
		return {
			declarationKind: VariableDeclarationKind.Const,
			declarations: [
				{
					name,
					initializer: `"${name}" as const`,
				},
			],
			isExported: true,
		};
	});
}

function createEntities(project: Project): void {
	const entitiesTsFile = project.createSourceFile(`${zenPath}/entities.ts`, '', {
		overwrite: true,
	});

	entitiesTsFile.addVariableStatements(statements());
	entitiesTsFile.addVariableStatements(statements(true));
	entitiesTsFile.saveSync();
}

function createEntitiesType(project: Project): void {
	const entitiesTypeTsFile = project.createSourceFile(
		`${zenPath}/entities-type.ts`,
		'',
		{
			overwrite: true,
		},
	);

	entitiesTypeTsFile.addImportDeclarations([
		{
			moduleSpecifier: './entities',
			namedImports: [...ModelNames],
		},
	]);

	entitiesTypeTsFile.addVariableStatement({
		declarationKind: VariableDeclarationKind.Const,
		declarations: [
			{
				name: 'Entities',
				initializer: `{${ModelNames.join(', \n')}} as const`,
			},
		],
	});

	entitiesTypeTsFile.addTypeAlias({
		name: 'EntitiesType',
		type: 'typeof Entities',
		isExported: true,
	});
	entitiesTypeTsFile.addTypeAlias({
		name: 'NTTKey',
		type: 'keyof EntitiesType',
		isExported: true,
	});

	entitiesTypeTsFile.saveSync();
}

function createDelegates(project: Project): void {
	createTypeFile(
		project,
		'delegates',
		'Delegates',
		'DelegateType',
		createProperties('Delegate'),
	);
}

function createSelections(project: Project): void {
	createTypeFile(
		project,
		'selections',
		'Selections',
		'SelectionType',
		createProperties('Select'),
	);
}

function createInclusions(project: Project): void {
	createTypeFile(
		project,
		'inclusions',
		'Inclusions',
		'InclusionType',
		createProperties('Include'),
	);
}

function createArgs(project: Project) {
	createTypeFile(
		project,
		'findUniqueArgs',
		'FindUniqueArgs',
		'FindUniqueArgType',
		createProperties('FindUniqueArgs'),
	);
	createTypeFile(
		project,
		'findFirstArgs',
		'FindFirstArgs',
		'FindFirstArgType',
		createProperties('FindFirstArgs'),
	);
	createTypeFile(
		project,
		'findManyArgs',
		'FindManyArgs',
		'FindManyArgType',
		createProperties('FindManyArgs'),
	);
	createTypeFile(
		project,
		'createArgs',
		'CreateArgs',
		'CreateArgType',
		createProperties('CreateArgs'),
	);
	createTypeFile(
		project,
		'createManyArgs',
		'CreateManyArgs',
		'CreateManyArgType',
		createProperties('CreateManyArgs'),
	);
	createTypeFile(
		project,
		'updateArgs',
		'UpdateArgs',
		'UpdateArgType',
		createProperties('UpdateArgs'),
	);
	createTypeFile(
		project,
		'deleteArgs',
		'DeleteArgs',
		'DeleteArgType',
		createProperties('DeleteArgs'),
	);
	createTypeFile(
		project,
		'updateManyArgs',
		'UpdateManyArgs',
		'UpdateManyArgType',
		createProperties('UpdateManyArgs'),
	);
	createTypeFile(
		project,
		'deleteManyArgs',
		'DeleteManyArgs',
		'DeleteManyArgType',
		createProperties('DeleteManyArgs'),
	);

	createTypeFile(
		project,
		'upsertArgs',
		'UpsertArgs',
		'UpsertArgType',
		createProperties('UpsertArgs'),
	);
	createTypeFile(
		project,
		'aggregateArgs',
		'AggregateArgs',
		'AggregateArgType',
		createProperties('AggregateArgs'),
	);
	createTypeFile(
		project,
		'countArgs',
		'CountArgs',
		'CountArgType',
		createProperties('CountArgs'),
	);
	createTypeFile(
		project,
		'groupByArgs',
		'GroupByArgs',
		'GroupByArgType',
		createProperties('GroupByArgs'),
	);
	createTypeFile(
		project,
		'fieldRefs',
		'FieldRefs',
		'FieldRefType',
		createProperties('FieldRefs'),
	);
}

export function initiateQb(): void {
	const project = new Project({
		tsConfigFilePath: './tsconfig.base.json',
		skipAddingFilesFromTsConfig: true,
	});

	createEntities(project);
	createEntitiesType(project);
	createDelegates(project);
	createSelections(project);
	createInclusions(project);
	createArgs(project);

	project.saveSync();
}
initiateQb();
