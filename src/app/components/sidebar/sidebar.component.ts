import { Component } from '@angular/core';

@Component({
    standalone: true,
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
    isActiveList: boolean[] = [false, true, false, false];
    setActive(index: number) {
        if (index === -1) {
            this.isActiveList = this.isActiveList.map(() => false);
            this.isActiveList[1] = true;
        } else {
            this.isActiveList = this.isActiveList.map(() => false);
            this.isActiveList[index] = true;
        }
    }
}