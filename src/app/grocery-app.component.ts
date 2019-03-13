import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-grocery-app",
  templateUrl: "./grocery-app.component.html",
  styleUrls: ["./grocery-app.component.css"]
})
export class GroceryAppComponent implements OnInit {
  task = {
    name: "",
    id: 0
  };
  tasks = [];

  constructor() {}

  ngOnInit() {}

  onClick() {

    if(this.task.id==0){
      this.tasks.push({ id: new Date().getTime(), name: this.task.name,strike:false });
    }
    
    this.task ={
      name:"",
      id:0
    };
    //this.task='';
  }

  onEdit(item) {
    this.task = item;
  }

  onDelete(item) {
    for(var i=0;i<this.tasks.length;i++){
      if(item.id==this.tasks[i].id){
        this.tasks.splice(i,1);
        break;
        
      }
    }
  }

  onStrike(item){
    for(var i=0;i<this.tasks.length;i++){
      if(item.id==this.tasks[i].id){
        if(this.tasks[i].strike){
          this.tasks[i].strike=false;
        }else{
          this.tasks[i].strike=true;
        }
        break;
      }
    }
  }


}
