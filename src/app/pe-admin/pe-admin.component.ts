import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../services/api.service';
import { SelectComponentAdmin } from '../select-admin/select-admin.component';

@Component({
  selector: 'app-pe-admin',
  templateUrl: './pe-admin.component.html',
  styleUrls: ['./pe-admin.component.scss']
})
export class PEComponentAdmin implements OnInit {

private petUrl = "https://j1k4keqbsf.execute-api.us-east-2.amazonaws.com/PET"
private getPetIDUrl = "https://j1k4keqbsf.execute-api.us-east-2.amazonaws.com/PET/id/"
private updatePetIDUrl = "https://j1k4keqbsf.execute-api.us-east-2.amazonaws.com/PET/update/"

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

  doPostPet() {

    const data = {
      empName: this.empName,
      superName: this.superName,
      dateCompleted: this.dateCompleted,
      communicationRating: this.communicationRating,
      communicationFeedack: this.communicationFeedack,
      teamworkRating: this.teamworkRating,
      teamworkFeedback: this.teamworkFeedback,
      qualityRating: this.qualityRating,
      qualityFeedback: this.qualityFeedback,
      attendanceRating: this.attendanceRating,
      attendanceFeedback: this.attendanceFeedback,
      goalRating: this.goalRating,
      goalFeedback: this.goalFeedback
    }
  this.http.post<any>(this.petUrl, data).subscribe({
    next: () => {
      console.log('WORKED');
      console.log(data);
    },
    error: (eer) => {
      console.log('ERROR: ' + eer.message);
    },
    })
  }

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
    
    this.http.get<any>(this.getPetIDUrl + this.id).subscribe( 
    res => {
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

  doUpdatePet() {

    const data = {
      empName: this.empName,
      superName: this.superName,
      dateCompleted: this.dateCompleted,
      communicationRating: this.communicationRating,
      communicationFeedack: this.communicationFeedack,
      teamworkRating: this.teamworkRating,
      teamworkFeedback: this.teamworkFeedback,
      qualityRating: this.qualityRating,
      qualityFeedback: this.qualityFeedback,
      attendanceRating: this.attendanceRating,
      attendanceFeedback: this.attendanceFeedback,
      goalRating: this.goalRating,
      goalFeedback: this.goalFeedback
    }

    this.http.put<any>(this.updatePetIDUrl + this.id, data).subscribe({
      next: () => {
        console.log('Updated');
      },
      error: (eer) => {
        console.log('ERROR: ' + eer.message);
      },
      })
  }
}
