import { TreatmentEntity } from './../../model/treatment.model';

export interface TreatmentListConfig {
    pageSize: number;
}

export interface TreatmentListMeta {
    entities: TreatmentEntity[];
    count: number;
    loaded: boolean;
    loading: boolean;
    currentPage: number;
}

export interface TreatmentMeta {
    selected: number,
    inlineEditTriggered: boolean,
    modalEditTriggered: boolean
}

export interface TreatmentListState {
    config: TreatmentListConfig;
    treatments: TreatmentListMeta;
    selection: TreatmentMeta;
}

export const treatmentListInitialState: TreatmentListState = {
    treatments: {
        entities: [],
        count: 0,
        currentPage: 0,
        loaded: false,
        loading: false
    },
    config: {
        pageSize: 13,
    },
    selection: {
        selected: -1,
        inlineEditTriggered: false,
        modalEditTriggered: false
    }
}