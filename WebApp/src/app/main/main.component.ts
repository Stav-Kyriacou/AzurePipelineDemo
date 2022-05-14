import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  students: Student[] = [];
  players: Player[] = [];

  constructor(private _httpService: StudentService) { }

  ngOnInit(): void {
    // this._httpService.getAllStudents().subscribe(unpackedStudents => this.students = unpackedStudents);
    this._httpService.getAllPlayers().subscribe(response => this.players = response);
  }
}