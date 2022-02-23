import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-pacient',
  templateUrl: './add-pacient.component.html',
  styleUrls: ['./add-pacient.component.css']
})
export class AddPacientComponent implements OnInit {

  public users!: User[];
  currentUser!: any;
  loggedInUser!: any;

  constructor(private userService:UserService, private notifyService:NotificationService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  public getUsers(): void {
    this.userService.getUsers().subscribe({
      next:(response: User[]) => {
        this.users = response;
        console.log(this.users);
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    });
  }

  public searchUsers(key: string) : void{
    const results: User[] = [];
    for(const user of this.users){
      if(user.last_name.toLowerCase().indexOf(key.toLowerCase()) !== -1 || 
      user.first_name.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
      user.email.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(user);
      }
    }
    this.users = results;
    if(results.length === 0 || !key){
      this.getUsers();
    }
  }
  showToasterSuccess(){
    this.notifyService.showSuccess("Pacient adaugat cu succes !!")
  }

  public onAddPacient(){
    //nu stiu sa adaug emailu pacientului respectiv
    this.userService.updatePacient(this.currentUser.email,this.loggedInUser.id).subscribe({
      next: (response: User) => {
        console.log(response);
        this.showToasterSuccess();
        window.location.reload();
      },
      error: (error:HttpErrorResponse) => {
        alert(error.message);
      }
    });
  }

}
