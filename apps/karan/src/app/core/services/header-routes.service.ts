import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { MenuItem } from 'primeng/api';
import { setView } from '../../pages/appointments/store/calendar.actions';



@Injectable({
    providedIn: 'root'
})
export class HeaderRoutesService {

    headerNavItems: MenuItem[] = [
        {
            label: 'Patients',
            icon: 'pi pi-fw pi-users',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-fw pi-plus',
                    items: [
                        {
                            label: 'Quick',
                            icon: 'pi pi-fw pi-align-left',
                            command: () => this.store.dispatch(setView({ option: 'day' }))
                        },
                        {
                            label: 'Detailed',
                            icon: 'pi pi-fw pi-align-right',
                            command: () => this.store.dispatch(setView({ option: 'week' }))
                        },
                    ]
                },
                {
                    label: 'View',
                    icon: 'pi pi-fw pi-sliders-h',
                    items: [
                        {
                            label: 'Day',
                            icon: 'pi pi-fw pi-align-left',
                            command: () => this.store.dispatch(setView({ option: 'day' }))
                        },
                        {
                            label: 'Week',
                            icon: 'pi pi-fw pi-align-right',
                            command: () => this.store.dispatch(setView({ option: 'week' }))
                        },
                    ]
                },
                {
                    label: 'Sort By',
                    icon: 'pi pi-fw pi-sliders-h',
                    items: [
                        {
                            label: 'Appointment',
                            icon: 'pi pi-fw pi-align-left',
                            command: () => this.store.dispatch(setView({ option: 'day' }))
                        },
                        {
                            label: 'Name',
                            icon: 'pi pi-fw pi-align-right',
                            command: () => this.store.dispatch(setView({ option: 'week' }))
                        },
                        {
                            label: 'Payment',
                            icon: 'pi pi-fw pi-align-right',
                            command: () => this.store.dispatch(setView({ option: 'week' }))
                        },
                    ]
                },
                {
                    separator: true
                },
                {
                    label: 'Export',
                    icon: 'pi pi-fw pi-external-link'
                }
            ]
        },
        {
            label: 'Appointments',
            icon: 'pi pi-fw pi-calendar',
            items: [
                {
                    label: 'View',
                    icon: 'pi pi-fw pi-sliders-h',
                    items: [
                        {
                            label: 'Day',
                            icon: 'pi pi-fw pi-align-left',
                            command: () => this.store.dispatch(setView({ option: 'day' }))
                        },
                        {
                            label: 'Week',
                            icon: 'pi pi-fw pi-align-right',
                            command: () => this.store.dispatch(setView({ option: 'week' }))
                        },
                        {
                            label: 'Month',
                            icon: 'pi pi-fw pi-align-center',
                            command: () => this.store.dispatch(setView({ option: 'month' }))
                        },
                        {
                            label: 'List',
                            icon: 'pi pi-fw pi-align-justify',
                            command: () => this.store.dispatch(setView({ option: 'list' }))
                        },

                    ]
                },
                {
                    label: 'Edit',
                    icon: 'pi pi-fw pi-pencil',
                    items: [
                        {
                            label: 'Save',
                            icon: 'pi pi-fw pi-calendar-plus'
                        },
                        {
                            label: 'Delete',
                            icon: 'pi pi-fw pi-calendar-minus'
                        },


                    ]
                },
                {
                    label: 'Archive',
                    icon: 'pi pi-fw pi-calendar-times',
                    items: [
                        {
                            label: 'Remove',
                            icon: 'pi pi-fw pi-calendar-minus'
                        }
                    ]
                }
            ]
        },

        {
            label: 'Payments',
            icon: 'pi pi-fw pi-wallet',
            items: [
                {
                    label: 'Day',
                    icon: 'pi pi-fw pi-align-left',
                    command: () => this.store.dispatch(setView({ option: 'day' }))
                },
                {
                    label: 'Week',
                    icon: 'pi pi-fw pi-align-right',
                    command: () => this.store.dispatch(setView({ option: 'week' }))
                },
                {
                    label: 'Month',
                    icon: 'pi pi-fw pi-align-center',
                    command: () => this.store.dispatch(setView({ option: 'month' }))
                },
                {
                    label: 'List',
                    icon: 'pi pi-fw pi-align-justify',
                    command: () => this.store.dispatch(setView({ option: 'list' }))
                },

            ]
        },

        {
            label: 'Equipments',
            icon: 'pi pi-fw pi-link',
            items: [
                {
                    label: 'Edit',
                    icon: 'pi pi-fw pi-pencil',
                    items: [
                        {
                            label: 'Save',
                            icon: 'pi pi-fw pi-calendar-plus'
                        },
                        {
                            label: 'Delete',
                            icon: 'pi pi-fw pi-calendar-minus'
                        },

                    ]
                },
                {
                    label: 'Archive',
                    icon: 'pi pi-fw pi-calendar-times',
                    items: [
                        {
                            label: 'Remove',
                            icon: 'pi pi-fw pi-calendar-minus'
                        }
                    ]
                }
            ]
        },
    ];

    constructor(private store: Store) { }

}

