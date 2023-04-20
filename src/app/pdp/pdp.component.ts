import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../services/api.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-pdp',
  templateUrl: './pdp.component.html',
  styleUrls: ['./pdp.component.scss']
})
export class PDPComponent {
  private baseUrl = environment.apiUrl;
  private pdtUrl = "https://j1k4keqbsf.execute-api.us-east-2.amazonaws.com/PDT"

  public empName = ''
  public completeDate = new Date();
  public checkinDate = new Date();
  public futureCheckin = new Date(this.checkinDate.setMonth(this.checkinDate.getMonth()+6))
  public shortGoals = ''
  public mediumGoals = ''
  public longGoals = ''
  public devNeeds = ''
  public actionPlan = ''
  public empSign = ''
  public empSignDate = new Date();
  public superSign = ''
  public superSignDate = new Date();

  constructor(
    private http: HttpClient,
    private api: ApiService,
  ) {} 

  ngOnInit() {}
  
  

  doPostPDT() {
    const data = {
      empName: this.empName,
      shortTermGoals: this.shortGoals,
      mediumTermGoals: this.mediumGoals,
      longTermGoals: this.longGoals,
      developmentNeeds: this.devNeeds,
      actionPlan: this.actionPlan,
      empSignature: this.empSign,
      empSigDate: this.empSignDate,
      superSignature: this.superSign,
      superSignDate: this.superSignDate
    }
    
    this.http.post<any>(this.pdtUrl, data).subscribe({
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
