import type { AggregateArgType } from './zen/aggregateArgs';
import type { CountArgType } from './zen/countArgs';
import type { DelegateType } from './zen/delegates';
import type { NTTKey } from './zen/entities-type';
import type { FieldRefType } from './zen/fieldRefs';
import type { FindFirstArgType } from './zen/findFirstArgs';
import type { FindManyArgType } from './zen/findManyArgs';
import type { FindUniqueArgType } from './zen/findUniqueArgs';
import type { GroupByArgType } from './zen/groupByArgs';

// NB type parameters from input fields not present yet
export interface Query<NTT extends NTTKey> {
	findUnique: (
		ntt: NTT,
		args: FindUniqueArgType<NTT>,
	) => ReturnType<DelegateType<NTT>['findUnique']>;

	findFirst: (
		ntt: NTT,
		args: FindFirstArgType<NTT>,
	) => ReturnType<DelegateType<NTT>['findFirst']>;

	findMany: (
		ntt: NTT,
		args: FindManyArgType<NTT>,
	) => ReturnType<DelegateType<NTT>['findMany']>;

	count: (
		ntt: NTT,
		args: CountArgType<NTT>,
	) => ReturnType<DelegateType<NTT>['count']>;

	aggregate: (
		ntt: NTT,
		args: AggregateArgType<NTT>,
	) => ReturnType<DelegateType<NTT>['aggregate']>;

	fields: (ntt: NTTKey) => FieldRefType<NTTKey>;

	groupBy: (
		ntt: NTT,
		args: GroupByArgType<NTT>,
	) => ReturnType<DelegateType<NTT>['groupBy']>;
}
