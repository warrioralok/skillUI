import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './course.component';
import { CourseComponent } from './course/course.component';
import { Services } from '@angular/core/src/view';
import { CouseServices } from './course.service';
import { from } from 'rxjs';
import { pipeComponent } from './pipe.component';
import { SummaryPipe } from './summary.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent,
    pipeComponent,
    SummaryPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CouseServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
