import { Component,OnInit, Input } from '@angular/core';
import {RouterModule, PreloadAllModules, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { NavService } from '../nav/nav.service';
import { DataService } from '../data.service';
import { Login } from './login';

@Component({
    templateUrl : "./login.html" ,
    // styles: [`
    //     .background-class{
    //       background-image: "./assets/images/author.jpg";
    //     }`
    //     ]
})
export class LoginComponent implements OnInit  {
    wrongUser : boolean= false ;
    wrongPwd : boolean= false ;
    background : boolean  = false;
    isClassVisible : boolean  = false;
    backgroundUrl : string;
    constructor( private loginService : LoginService,
                 private dataService : DataService,
                 private navService:NavService,
                 private router : Router ){};

    ngOnInit(){
        if(this.dataService.loggedStatus() == false){
            sessionStorage.setItem('loggedInUser', "");
            this.background = true ;
            this.isClassVisible = true ;            
            this.backgroundUrl = "url('assets/images/author.jpg')";
           // window.location.href = "login";
        }
        
         //   sessionStorage.setItem('loggedInUser', "");
       
        this.navService.hide();       
    }

    
    
    submit(user : string , password : string){
        if(  user != undefined &&  password != undefined ){
            // if( user != "admin" ){
            //     this.wrongUser = true ;
            //     return ;
            // }
            // if( password != "admin" ){
            //     this.wrongPwd = true ;
            //     return ;
            // }

            sessionStorage.setItem('loggedInUser', user);            
           // var data = sessionStorage.getItem('loggedInUser');         
            this.router.navigateByUrl('dashboard'); 
           //this.loginService.checkUser(user  , password).then( () => this.loggedInUser );
        }
    }
}