import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  constructor() { }

  name = "";
  surname = "";
  birthDate = "";
  peopleData = [];
  personData = {};


  ngOnInit() {
  }
  
  alertarNome(){
    if(this.name === "" || this.surname === "" || this.birthDate === ""){
      alert("Há campos não preenchidos");
    } else {
      this.personData = {
        Nome: this.name,
        Sobrenome: this.surname,
        DataNascimento: this.birthDate
      }
      this.peopleData.push(this.personData);
      this.name = "";
      this.surname = "";
      this.birthDate = undefined;
    }

  }


  selectPerson(person, indexPerson){
    this.name = person.Nome
    this.surname = person.Sobrenome
    this.birthDate = person.DataNascimento;

    this.peopleData.splice(indexPerson, 1);
  }

  deletePerson(indexPerson){
    this.peopleData[indexPerson].deleted = true;
  }

  restorePerson(indexPerson){
    delete this.peopleData[indexPerson].deleted;
  }
}
