import { createReducer, on } from "@ngrx/store";
import { collapseHeader, collapseSidebar, expandSidebar, hideDock, hideSidebar, showDock, showHeader } from "./layout.actions";
import { Layout } from "./layout.model";

export const initialState: Layout = {
    sidebar: 'collapsed',
    dock: 'hidden',
    header: 'shown'
}

export const layoutReducer = createReducer(
    initialState,

    on(expandSidebar, (state): Layout => ({ ...state, sidebar: 'shown' })),
    on(collapseSidebar, (state): Layout => ({ ...state, sidebar: 'collapsed' })),
    on(hideSidebar, (state): Layout => ({ ...state, sidebar: 'hidden' })),

    on(showDock, (state): Layout => ({ ...state, dock: 'shown' })),
    on(hideDock, (state): Layout => ({ ...state, dock: 'hidden' })),

    on(collapseHeader, (state): Layout => ({ ...state, header: 'collapsed' })),
    on(showHeader, (state): Layout => ({ ...state, header: 'shown' }))
)