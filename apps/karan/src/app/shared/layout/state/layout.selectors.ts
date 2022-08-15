import { createFeatureSelector } from "@ngrx/store";
import { Layout } from './layout.model';

export const selectLayout = createFeatureSelector<Layout>('layout');