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
        this.activity = [response[0]]; // get the first (most recent) event from the response array
      });
  }
  

}
