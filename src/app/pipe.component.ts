import {Component} from '@angular/core';

@Component({
    selector: "pipeExample",
    template: `<div>
        <p>{{ course.title | uppercase | lowercase}}</p>
        <p>{{ course.rating | number:'1.1-1' }}</p>
        <p>{{ course.students | number }}</p>
        <p>{{ course.price | currency:'INR':true}}</p>
        <p>{{ course.releaseDate | date:'shortDate'}}</p>
    </div>`
})

export class pipeComponent{
    course ={
        title  : "The Complete Angular Course",
        rating : 4.975,
        students:30123,
        price :197.30,
        releaseDate : new Date(2018,3,21) 

    }
}
