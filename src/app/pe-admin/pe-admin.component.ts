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

  doPostSAT() {

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
}
