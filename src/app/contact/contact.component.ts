import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    trigger('slideUpDown', [
      state(
        'up',
        style({
          transform: 'translateY(50%)',
          opacity: 0,
        })
      ),
      state(
        'down',
        style({
          transform: 'translateY(-0%)',
          opacity: 1,
        })
      ),
      transition('up => down', [animate('0.3s ease')]),
      transition('down => up', [animate('0.3s ease')]),
    ]),
  ],
})
export class ContactComponent {
  showLabel: boolean = false;
}
