import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-github-activity',
  templateUrl: './github-activity.component.html',
  styleUrls: ['./github-activity.component.scss'],
  providers: [HttpClientModule]
})
export class GithubActivityComponent implements OnInit {

  public activity: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>('https://api.github.com/users/JustinG512/events')
      .subscribe(response => {
        this.activity = response.slice(0,3); // get the last three events from the response array
      });
  }
  
  

}
