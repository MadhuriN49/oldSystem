import { Component,OnInit,Output ,EventEmitter } from '@angular/core';
import {DashboardService} from './dashboard.service';
import { NavService } from '../nav/nav.service';
import { DataService } from '../data.service';

import {Dashboard} from './dashboard';

@Component({
    templateUrl : "./dashboard.html"  
})

export class DashboardComponent implements OnInit{  
    dashboardContents : Dashboard[] ;
    author : any;
    authorId : number ;
    loggedInUser : string ;
    loggedInStatus : boolean = false ;
    canAddDelete : boolean = false ;
    background : boolean = false ;
    constructor ( private dashboardService : DashboardService ,
                  private navService: NavService,
                  private dataService: DataService){};
                     
    ngOnInit() : void{
        
        if(this.dataService.loggedStatus() == true){
            sessionStorage.getItem('loggedInUser');
            // this.background = true ;
            
        }
         else{
            sessionStorage.setItem('loggedInUser', '');
            window.location.href = "login";
         }

        this.getContent();  
        console.log(this.dashboardContents);       
    }
    
    getContent(){
        this.navService.show();
       // this.dashboardContents = this.dashboardService.getDashboardContentService();
        this.loggedInUser = sessionStorage.getItem("loggedInUser");
        if( this.loggedInUser  == "admin"){
            this.canAddDelete = true;
        }
        
        return this.dataService.getDashboard().then(
            dashboardContents => this.dashboardContents = dashboardContents
        );
    //    var newItems = JSON.parse(localStorage.getItem("addMore"));
       
    //     for (let newItem of newItems) {
    //         this.dashboardContents.push(newItem);
    //     }
    //     var addedData = this.dashboardContents;
      //  sessionStorage.setItem("addedData", JSON.stringify(addedData));
       // this.dashboardContents.push(JSON.parse(sessionStorage.getItem("addMore")));
    }

    delete(index : number){
        this.dashboardContents.splice(index , 1 ); 
    }

    deleteAuthor(author : Dashboard){
        this.dataService.deleteAuthor( author.id );
        window.location.reload();       
    }

    readContent(dashboardContent : Dashboard){
      sessionStorage.setItem("readStory", JSON.stringify(dashboardContent));
     // sessionStorage.setItem("readStoryId", );
      window.location.href = "readStory"; 
    }

    rating(value : number){
        //this.dataService
        console.log(value);
    }

}