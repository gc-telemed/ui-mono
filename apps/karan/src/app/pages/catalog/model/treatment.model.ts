import { IdEntity } from "../../../core/models/entity.model";

export interface TreatmentCreate {
    commonName: string;
    type: string | null;
    visits: number;
    expense: number | null;
}

export type TreatmentUpdate = IdEntity & TreatmentCreate;