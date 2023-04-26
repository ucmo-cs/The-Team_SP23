import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-sa',
  templateUrl: './sa.component.html',
  styleUrls: ['./sa.component.scss']
})
export class SAComponent implements OnInit{

  private satUrl = "https://j1k4keqbsf.execute-api.us-east-2.amazonaws.com/SAT"

  public empName = ''
  public dateCompleted = new Date();
  public accomplishmentOne = ''
  public accomplishmentTwo = ''
  public accomplishmentThree = ''
  public biggestTakeAway = ''
  public hardTask = ''
  public improvement = ''
  public actions = ''
  public barriers = ''
  public milestones = ''
  public accountable = ''
  public neededImprovement = ''
  public imporvementActions = ''
  public oneYearGoal = ''
  public leadershipImprovement = ''
  public feedback = ''
  public positivePreformanceExamples = ''
  public improvementPreformanceExamples = ''
  public strengthen = ''

  constructor(
    private http: HttpClient,
    private api: ApiService,
  ) {} 

  ngOnInit() {}

  doPostSAT() {

    const data = {
      empName: this.empName,
      dateCompleted: this.dateCompleted,
      accomplishmentOne: this.accomplishmentOne,
      accomplishmentTwo: this.accomplishmentTwo,
      accomplishmentThree: this.accomplishmentThree,
      biggestTakeAway: this.biggestTakeAway,
      hardTask: this.hardTask,
      improvement: this.improvement,
      actions: this.actions,
      barriers: this.barriers,
      milestons: this.milestones,
      accountable: this.accountable,
      neededImprovement: this.neededImprovement,
      imporvementActions: this.imporvementActions,
      positivePreformanceExamples: this.positivePreformanceExamples,
      improvementPreformanceExamples: this.improvementPreformanceExamples,
      strengthen: this.strengthen,
      oneYearGoal: this.oneYearGoal,
      leadershipImprovement: this.leadershipImprovement,
      feedback: this.feedback
    }
  this.http.post<any>(this.satUrl, data).subscribe({
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