import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tableData: any = [];
  showEditTable: boolean = false;
  editRowID: any = '';

  valueForm = new FormGroup({
    id: new FormControl(''),
    mobile: new FormControl(''),
    email: new FormControl(''),
  });

  constructor() {
    this.tableData = [
      { id: 1, mobile: '1234', email: 'Nawab@gmail.com' },
      { id: 2, mobile: '5678', email: 'Pathan@gmail.com' },
      { id: 3, mobile: '91011', email: 'Malik@gmail.com' },
    ];
  }

  Edit(val) {
    this.editRowID = val;
  }
  onSave(id) {
    let value = {
      id: id,
      mobile: this.valueForm.get('mobile').value,
      email: this.valueForm.get('email').value,
    };

    console.table(value);
  }
}
