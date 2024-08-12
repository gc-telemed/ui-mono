import type { CreateArgType } from './zen/createArgs';
import type { CreateManyArgType } from './zen/createManyArgs';
import type { DelegateType } from './zen/delegates';
import type { DeleteArgType } from './zen/deleteArgs';
import type { DeleteManyArgType } from './zen/deleteManyArgs';
import type { NTTKey } from './zen/entities-type';
import type { UpdateArgType } from './zen/updateArgs';
import type { UpdateManyArgType } from './zen/updateManyArgs';
import type { UpsertArgType } from './zen/upsertArgs';

// NB type parameters from input fields not present yet
export interface Mutation<NTT extends NTTKey> {
	create: (
		ntt: NTT,
		args: CreateArgType<NTT>,
	) => ReturnType<DelegateType<NTT>['create']>;
	createMany: (
		ntt: NTT,
		args: CreateManyArgType<NTT>,
	) => ReturnType<DelegateType<NTT>['createMany']>;

	update: (
		ntt: NTT,
		args: UpdateArgType<NTT>,
	) => ReturnType<DelegateType<NTT>['update']>;
	updateMany: (
		ntt: NTT,
		args: UpdateManyArgType<NTT>,
	) => ReturnType<DelegateType<NTT>['updateMany']>;

	delete: (
		ntt: NTT,
		args: DeleteArgType<NTT>,
	) => ReturnType<DelegateType<NTT>['delete']>;
	deleteMany: (
		ntt: NTT,
		args: DeleteManyArgType<NTT>,
	) => ReturnType<DelegateType<NTT>['deleteMany']>;

	upsert: (
		ntt: NTT,
		args: UpsertArgType<NTT>,
	) => ReturnType<DelegateType<NTT>['upsert']>;
}
