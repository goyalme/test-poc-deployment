import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tableData = [];
  constructor(private http: HttpService) {

  }

  ngOnInit() {
    this.http.get().subscribe(res => {
      this.tableData = res;
      console.log('dfdsfsfas', this.tableData);
  });
  }
}

