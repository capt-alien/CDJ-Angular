import { Component,OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  newTask: any;
  task: any;
  tasks = [];
  errors: any = [];

  constructor(private _httpService:HttpService){}

  ngOnInit(): void {
    // This is where new tasks is instantied
    this.newTask = { title: "",
                     desc: "" }
  }
  // READ
  showAllTasksOnClick(){
    let observable = this._httpService.getTasks();
    observable.subscribe((data:any) => {
       console.log("Got our tasks!", data)
       this.tasks = data;
    });
  }
  // READ ONE
  showTaskDetails(id){
    const observable = this._httpService.getOnebyID(id);
    observable.subscribe((data:any)=>{
      console.log("got task", data);
      this.task = data
    })
  }
  // DELETE
  deleteTask(id){
    const observable = this._httpService.deleteOneById(id);
    console.log(id+" deleted");
    observable.subscribe((data: any)=>{
      this.showAllTasksOnClick();
    })
  }
  // EDIT
  completeTask(id){
    const observable = this._httpService.editOneById(id, {"completed":"true"})
    console.log(id+": finished")
    observable.subscribe((data: any)=>{
      this.showTaskDetails(id);
  })}

  // CREATE
  onSubmit(){
    // debugger;
    const observable = this._httpService.createNew(this.newTask);
    observable.subscribe((data: any) => {
      // tslint:disable-next-line:no-debugger
      // debugger;
      if (data.message === 'fail') {
        this.errors = data.errors;
        console.log(this.errors);
      };
    this.newTask = { title: "",
                     desc: "" ,}
  });
  };
};