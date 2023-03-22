import { Component } from '@angular/core';

interface Year {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The-Team_SP23';

  years: Year[] = [
    {value: '1999', viewValue: '1999'},
    {value: '2000', viewValue: '2000'},
    {value: '2001', viewValue: '2001'},
    {value: '2002', viewValue: '2002'},
    {value: '2003', viewValue: '2003'},
    {value: '2004', viewValue: '2004'},
    {value: '2005', viewValue: '2005'},
    {value: '2006', viewValue: '2006'},
    {value: '2007', viewValue: '2007'},
    {value: '2008', viewValue: '2008'},
    {value: '2009', viewValue: '2009'},
    {value: '2010', viewValue: '2010'},
    {value: '2011', viewValue: '2011'},
    {value: '2012', viewValue: '2012'},
    {value: '2013', viewValue: '2013'},
    {value: '2013', viewValue: '2014'},
    {value: '2013', viewValue: '2015'},
    {value: '2013', viewValue: '2016'},
    {value: '2013', viewValue: '2017'},
    {value: '2013', viewValue: '2018'},
    {value: '2013', viewValue: '2019'},
    {value: '2013', viewValue: '2020'},
    {value: '2013', viewValue: '2021'},
    {value: '2013', viewValue: '2022'},
  ];
}
