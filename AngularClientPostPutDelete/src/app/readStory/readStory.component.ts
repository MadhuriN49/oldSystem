import { Component,OnInit } from '@angular/core';
import {DashboardService} from '../dashboard/dashboard.service';
import { NavService } from '../nav/nav.service';
import { DataService } from '../data.service';
import  { Dashboard } from '../dashboard/dashboard';

@Component({  
    moduleId : module.id,
    selector : "DataService",
    templateUrl : "./readStory.html" 
}) 

export class ReadStoryComponent implements OnInit{
    content : any ;
    dashboard : Dashboard ;
    loggedInUser : string;
    canAddDelete : boolean = false;
    constructor(private  dataService : DataService ){
        //this.content =  sessionStorage.getItem("readStory"); 
        this.dashboard =  JSON.parse(sessionStorage.getItem('readStory')); 
       // this.content = this.dashboard.content;   
    };
    ngOnInit(){
        this.loggedInUser = sessionStorage.getItem("loggedInUser");
        if( this.loggedInUser  == "admin"){
            this.canAddDelete = true;
        }
    }
  
    goBack(){
        window.history.back();
        sessionStorage.setItem('readStory', "");
    }
    updateStory(dashboard : Dashboard){
        this.dataService.updateAuthor(dashboard);
    }
    
}