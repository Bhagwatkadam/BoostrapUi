import { Component } from "@angular/core";

@Component({
    selector: 'app-test',
    template: `
    <ul>
    <li *ngFor="let i of items;let inx= "index" (click)="remove(inx)"> {{i}}</li>
    </ul>
    `
})
export class TestComponent {
    items = [1, 2, 3, 4];
    remove(i: any) {
        this.items.splice(i, 1);
    }
}
