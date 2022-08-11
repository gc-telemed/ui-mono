import { Injectable } from "@angular/core";
import { MenuItem } from 'primeng/api';
import { TooltipOptions } from 'primeng/tooltip';

import { BehaviorSubject, Observable } from "rxjs";

type UsedMenuProps = 'label' | 'tooltipOptions' | 'command' | 'routerLink';

@Injectable()
export class PageService {

    private icons!: MenuItem[];

    private floatingItems!: MenuItem[];

    private showBottomBar = new BehaviorSubject<boolean>(false);

    get dockItems(): MenuItem[] {
        return this.icons.slice();
    }

    get floatItems(): MenuItem[] {
        return this.floatingItems.slice();
    }

    isBottomBarShown(): Observable<boolean> {
        return this.showBottomBar.asObservable();
    }

    setBottomBarShown(shown: boolean): void {
        this.showBottomBar.next(shown);
    }

    private tooltipDefaults: (t: string) => TooltipOptions
        = (tooltipLabel: string) => ({
            tooltipLabel,
            tooltipPosition: 'bottom',
            positionLeft: 10,
            positionTop: 20,
            showDelay: 500,
        });


    private labeler: (l: string) => Pick<MenuItem, UsedMenuProps>
        = (label: string) => ({
            label,
            command: () => this.showBottomBar.next(!this.showBottomBar.value),
            tooltipOptions: this.tooltipDefaults(label),
            routerLink: [{ outlets: { bottomBar: [label.toLowerCase()] } }],
        })

    constructor() {

        this.icons = [
            {
                ...this.labeler('Graph'),
                icon: '/assets/img/cthulhu.png',
            },
            {
                ...this.labeler('Form'),
                icon: '/assets/img/forms.png',
            },
            {
                ...this.labeler('Chart'),
                icon: '/assets/img/pie.png',
            },
            {
                ...this.labeler('Table'),
                icon: '/assets/img/datable.png',
            },
            {
                ...this.labeler('Schedule'),
                icon: '/assets/img/temporal.png',
            },
        ];

        this.floatingItems = [
            {
                icon: 'pi pi-pencil',
                command: () => {
                    console.log({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                }
            },
            {
                icon: 'pi pi-refresh',
                command: () => {
                    console.log({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                }
            },
            {
                icon: 'pi pi-trash',
                command: () => {
                    console.log({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                }
            }
        ];

    }


}


