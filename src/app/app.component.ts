import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  title = 'todoList';
  taskArray = [{taskName: 'do smth', isCompleted: false}]

  onSubmit(form: NgForm){
    console.log(form);

    this.taskArray.push({
       taskName: form.controls['task'].value,
       isCompleted: false
    })
  }
  onDelete(index: number){
    this.taskArray.splice(index, 1);
    console.log(index);
  }
  onCheck(index: number) {
    console.log(this.taskArray)
    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;
  }
}

