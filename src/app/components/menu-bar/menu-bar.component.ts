import { Component, EventEmitter, Output } from '@angular/core';
import { FormCreateEventComponent } from '../form-create-event/form-create-event.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [FormCreateEventComponent, CommonModule],
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {
  isCreateOpen: boolean = false;

  @Output() updateList = new EventEmitter<void>();

  toggleEventCreateForm() {
    this.isCreateOpen = !this.isCreateOpen;
  }

  updateListEvents() {
    this.updateList.emit();
  }
}
