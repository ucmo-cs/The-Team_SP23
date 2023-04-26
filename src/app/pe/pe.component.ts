import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-pe',
  templateUrl: './pe.component.html',
  styleUrls: ['./pe.component.scss']
})
export class PEComponent {
  private getPetIDUrl = "https://j1k4keqbsf.execute-api.us-east-2.amazonaws.com/PET/id/"

  public id = ''

  public empName = ''
  public superName = ''
  public dateCompleted = new Date();
  public communicationRating = ''
  public communicationFeedack = ''
  public teamworkRating = ''
  public teamworkFeedback = ''
  public qualityRating = ''
  public qualityFeedback = ''
  public attendanceRating = ''
  public attendanceFeedback = ''
  public goalRating = ''
  public goalFeedback = ''
  
    constructor(
      private http: HttpClient,
      private api: ApiService,
    ) {}
  
    ngOnInit() {}

    doGetPETById(selection: string) {
      
      if (selection == "Nikolos") {
        this.id = "8e1277b0-e305-11ed-8420-e92cbbec4c41" 
      } else if (selection == "Lily") {
        this.id = "b86fa6e0-e305-11ed-8420-e92cbbec4c41"
      } else if (selection == "Ashlea") {
        this.id = "a37db6a0-e305-11ed-8420-e92cbbec4c41"
      } else if (selection == "Alexis") {
        this.id = "b294ef00-e305-11ed-8420-e92cbbec4c41"
      } else if (selection == "Max") {
        this.id = "b6376a20-e305-11ed-8420-e92cbbec4c41"
      }
      console.log(this.id);
      
      this.http.get<any>(this.getPetIDUrl + this.id).subscribe( 
      res => {
        console.log(res);
        this.empName = res.empName;
        this.superName = res.superName;
        this.dateCompleted = res.dateCompleted;
        this.communicationRating = res.communicationRating;
        this.communicationFeedack = res.communicationFeedack;
        this.teamworkRating = res.teamworkRating;
        this.teamworkFeedback = res.teamworkFeedback;
        this.qualityRating = res.qualityRating;
        this.qualityFeedback = res.qualityFeedback;
        this.attendanceRating = res.attendanceRating;
        this.attendanceFeedback = res.attendanceFeedback;
        this.goalRating = res.goalRating;
        this.goalFeedback = res.goalFeedback;
      },
      err => {console.log("Error Occured" + err.message);}
      );
    }


}
