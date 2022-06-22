import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
// import { DialogBoxComponent } from './dialog-box/dialog-box.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mini-project-3';
  Array: any = [];
  headers = new HttpHeaders();
  searchText:any;
  a:any=[];
  constructor(private httpClient: HttpClient,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.getUser();
  }
  // openDialog(){
    
  //   this.dialog.open(DialogBoxComponent,{
  //     width:'400px'
  //   })
  // }
  getUser() {
    this.getHeaders();
    this.httpClient.get('https://api.airtable.com/v0/appzoLh5b0y8mV3WF/Angular-Test-Users',
      { headers: this.headers }).subscribe((data: any) => {
        for (var i = 0; i < data.records.length; i++) {

          this.Array.push(data.records[i])
         
        }

      })
      console.log(this.Array)
  }
  getHeaders() {
    this.headers = this.headers.set('Authorization', 'Bearer key3GnfHvdYoWedr5')
    return this.headers
  }
  view(i:number){
    
      this.a.push(this.Array[i])
      console.log(this.a)
    
   
  }
  

}
