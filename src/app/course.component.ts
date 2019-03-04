import { Component } from '@angular/core';
import { CouseServices } from './course.service';
@Component({
    selector: "courses",
    template:`<h2>{{get()}}</h2>

        <ul>
            <li *ngFor="let courses of course">{{courses}}</li>
        </ul>
        <hr/>
        <input [(ngModel)]="box"  (keyup.enter)="kytry()"/>
        <hr/>
        <img src="{{image}}"/>
        <button class="btn btn-primary" [class.active]="isActive" (click)="callMe($event)" [style.backgroundColr]="isActive ? 'blue' : 'white'">Save</button>
        <p>{{text | summary:10}}</p>
        <span class="glyphicon glyphicon-star"></span>
    `
})
export class CoursesComponent{
    box = "me@example.com";
    title = 'List Of Courses';
    image = 'http://lorempixel.com/400/200/';
    isActive = true;
    course :any;
    text = "Hello I am exmaple of custom pipe.";
    callMe($event){
        console.log('test',$event)
        this.isActive = !this.isActive;
    }

    kytry(box){
        console.log(this.box);

    }
    get(){
        return this.title;
    }

    /*getImage(){
        return this.image;
    }*/

    constructor(service:CouseServices){
        
        this.course = service.getCourses();

    }
}