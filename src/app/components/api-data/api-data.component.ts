import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-api-data',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './api-data.component.html',
  styleUrl: './api-data.component.css',
})
export class ApiDataComponent implements OnInit {
  data: any;

  constructor(private apiService: ApiService) {}
  
  apiForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(2)]),
  });
  
  ngOnInit(): void {}

  getControl() {
    return this.apiForm.controls;
  }

  fetchData() {
    this.apiService.getData(this.apiForm.controls.title.value!).subscribe((response) => {
      console.log(response);
      this.data = response.docs;
    });
    
  }
}
