import { Component, OnInit } from '@angular/core';
import {User} from "../model/user";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})

export class ListUserComponent implements OnInit {
  allUser: User[];
  list: User[];
  inputCategory: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.allUser= [
      {
        idUser: 1,
        firstName: "Mila",
        lastName: " Kunis",
        birthDate: "30-06-1999",
        accountCategory: "Admin",
        email: "mila@kunis.com",
        password: "test",
        picture: "https://bootdey.com/img/Content/avatar/avatar3.png",
        profession: "Software Engineer"
      },
      {
        idUser: 2,
        firstName: "George",
        lastName: "Clooney",
        birthDate: "10-02-1981",
        accountCategory: "Customer",
        email: "marlon@brando.com",
        password: "test",
        picture: "https://bootdey.com/img/Content/avatar/avatar2.png",
        profession: "Software Engineer"
      },
      {
        idUser: 3,
        firstName: "George",
        lastName:  "Clooney",
        birthDate: "10-02-1981",
        accountCategory: "Customer",
        email: "marlon@brando.com",
        password: "test",
        picture: "https://bootdey.com/img/Content/avatar/avatar1.png",
        profession: "Software Engineer"
      },
      {
        idUser: 4,
        firstName: "Ryan",
        lastName:  "Gossling",
        birthDate: "05-03-1987",
        accountCategory: "Golden",
        email: "Ryan@nicholson.com",
        password: "test",
        picture: "https://bootdey.com/img/Content/avatar/avatar4.png",
        profession: "Software Engineer"
      },
      {
        idUser: 4,
        firstName: "Robert",
        lastName:  "Downey",
        birthDate: "05-03-2002",
        accountCategory: "Blocked Account",
        email: "robert@nicholson.com",
        password: "test",
        picture: "https://bootdey.com/img/Content/avatar/avatar5.png",
        profession: "Software Engineer"
      },
      { idUser: 12,
        firstName: "Ahmed",
        lastName:"ben Foulen",
        accountCategory:"Admin",
        birthDate: "10-10-1988",
        email: "ahmed@gmail.com",
        password:"test",
        profession:"Teacher",
        picture:"https://bootdey.com/img/Content/avatar/avatar5.png"},

      {idUser: 13,
        firstName: "Amina",
        lastName:"ben Foulen",
        accountCategory:"Customer",
        birthDate: "10-10-1988",
        email: "ahmed@gmail.com",
        password:"test",
        profession:"Teacher",
        picture:"https://bootdey.com/img/Content/avatar/avatar5.png"}
    ];
    this.route.paramMap.subscribe(
      (params)=>
      {
        let category= params.get('category')
        this.list= this.allUser.filter(user=>user.accountCategory === category)}
    );


  }
  delete(user:User){
    let i = this.list.indexOf(user);
    this.list.splice(i,1);
  }
  getColor(user:User){
    if(user.accountCategory=='Admin')
    return 'red';
    else if(user.accountCategory=='Golden')
      return 'yellow';
    else return 'green'
  }
}