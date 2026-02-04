import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-project-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './project-form.html',
  styleUrl: './project-form.scss',
})
export class ProjectForm implements OnChanges{
  @Input() project: any = null;
  @Input() techStacks: any[] = [];
  @Input() isSubmitting = false;
  @Output() save = new EventEmitter<any>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      id: [null],
      name: ['', Validators.required],
      description: ['',],
      goal: [''],
      source_code: ['', Validators.required],
      live_demo: [''],
      tech_stack_ids: [[]]
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['techStacks']) {
    }
    if (this.project) {
      this.form.patchValue(this.project);
    } else {
      this.form.reset();
    }
  }

  onSubmit() {
    if (this.form.valid) {
      this.save.emit(this.form.value);
    }
  }


}
