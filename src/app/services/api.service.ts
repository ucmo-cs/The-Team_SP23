import { Constants } from '../shared/constants/constants';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PDT } from "../models/pdt";

@Injectable({
    providedIn: 'root',
  })
  export class ApiService {
    private baseUrl = environment.apiUrl;
    private pdtUrl = this.baseUrl + Constants.APIS.PDT;

    constructor(private http: HttpClient) {}

    getPDT(params: any) {
        return this.http.get<any>(this.pdtUrl, params)
    }

    addPDT(requestParams: any) {
        return this.http.post<any>(this.pdtUrl, requestParams);
    }
    
    getPDTByID(id: string) {
        return this.http.get<any>(this.pdtUrl + '/' + id);
    }
  }