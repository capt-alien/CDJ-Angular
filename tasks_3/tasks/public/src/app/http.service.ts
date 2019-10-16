import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class HttpService {
    constructor(private _http: HttpClient){
        // this.getTasks();
        // this.getOnebyID('5da0f20b3b9ae02c379c255f');
        // this.createNew(this.new_task);
        // this.editOneById('5da0f20b3b9ae02c379c255f', this.new_edit);
        // this.deleteOneById('5da0f21c3b9ae02c379c2560')
  };
  new_task={
    'name': "laddy daddy everybody!!",
    'desc': "clean the barraks joe!"
  }
  new_edit={
    'completed': true
  }

   getTasks(){
       // our http response is an Observable, store it in a variable
      // let tempObservable = this._http.get('/tasks');
       // subscribe to the Observable and provide the code we would like to do with our data from the response
      // tempObservable.subscribe(data => console.log("Got our tasks!", data));
      return this._http.get('/tasks');
   };
   getOnebyID(id){
      // let tempObservable = this._http.get('/tasks/'+id);
      // tempObservable.subscribe(data => console.log("Got one task!", data));
      return this._http.get('/tasks/'+id);
   }
   createNew(data){
    // let tempObservable = this._http.post('/tasks', data);
    // tempObservable.subscribe(data => console.log("created new one!", data));
    return this._http.post('/tasks', data);
   }
   editOneById(id, edit){
    // let tempObservable = this._http.put('/tasks/'+id, edit);
    // tempObservable.subscribe(data => console.log("Edited task", data));
    return this._http.put('/tasks/'+id, edit);
   }
   deleteOneById(id){
    // let tempObservable = this._http.delete('/tasks/'+id);
    // tempObservable.subscribe(data => console.log("Deleted task"));
    return this._http.delete('/tasks/'+id);
   }
};