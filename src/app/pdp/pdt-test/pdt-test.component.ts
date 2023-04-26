import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../../services/api.service';
import { MatInputModule } from '@angular/material/input';
import { PDT } from "../../models/pdt";

@Component({
    selector: 'pdppage-test',
    templateUrl: './pdt-test.component.html',
    styleUrls: ['./pdt-test.component.css'],
  })

  export class PdtTestComponent implements OnInit {
    id = '';
    idDel = '';
    year = '';

    displayedColumns = ['ID', 'Date', 'Time Stamp', 'Name', 'Short Term Goals', 'Medium Term Goals', 'Long Term Goals', 'Development Needs', 'Action Plan',  'Emp Signature', 'Super Signature'];
    dataSource = new MatTableDataSource([{id: "", createdDate: "", createdTimestamp: "", empName: "", shortTermGoals: "", mediumTermGoals: "", longTermGoals: "", developmentNeeds: "", actionPlan: "", empSignature: "", superSignature: ""}]);

    getPdtIDUrl = "https://j1k4keqbsf.execute-api.us-east-2.amazonaws.com/PDT/id/"
    delPdtIDUrl = "https://j1k4keqbsf.execute-api.us-east-2.amazonaws.com/PDT/id/"
    getPdtYearUrl = "https://j1k4keqbsf.execute-api.us-east-2.amazonaws.com/PDT/year/"
    getPdtListUrl = "https://j1k4keqbsf.execute-api.us-east-2.amazonaws.com/PDT"

    constructor(
      private http: HttpClient,
      private api: ApiService,
    ) {} 

    ngOnInit() {}

    doDelPDTById(id: string) {
      this.http.delete<any>(this.delPdtIDUrl + '/' + id).subscribe( 
      res => {this.dataSource = new MatTableDataSource(res);},
      err => {console.log("Error Occured" + err.message);}
      );
      console.log("TEST")
    }

    doGetPDTById() {
      
      this.http.get<any>(this.getPdtIDUrl + this.id).subscribe( 
      res => {this.dataSource = new MatTableDataSource(res); console.log(res);},
      err => {console.log("Error Occured" + err.message);}
      );
    }

    doGetPDTByYear(year: string) {
      this.http.get<any>(this.getPdtYearUrl + '/' + year).subscribe( 
      res => {this.dataSource = new MatTableDataSource(res)},
      err => {console.log("Error Occured" + err.message);}
      );
    }

    doGetPDTList() {
      this.http.get<any>(this.getPdtListUrl).subscribe( 
      res => {this.dataSource = new MatTableDataSource(res)},
      err => {console.log("Error Occured" + err.message);}
      );
    }

  }