import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  incomingItems = ['Carrots', 'Tomatoes', 'Onions', 'Apples', 'Avocados'];

  availableItems = ['Oranges', 'Bananas', 'Cucumbers', 'Try to move me'];

  soldItems = ['Pears', 'Strawberries', 'Limes', 'Mangoes'];

  items = [
    {value: 'Oranges', disabled: false},
    {value: 'Bananas', disabled: true},
    {value: 'Mangoes', disabled: false},
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}


// For a Disabled Drag and Drop

// import {Component} from '@angular/core';
// import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   items = [
//     {value: 'Oranges', disabled: false},
//     {value: 'Bananas', disabled: true},
//     {value: 'Mangoes', disabled: false},
//   ];

//   drop(event: CdkDragDrop<string[]>) {
//     moveItemInArray(this.items, event.previousIndex, event.currentIndex);
//   }
// }
