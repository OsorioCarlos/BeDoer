import { Component, OnInit } from '@angular/core';

// Services
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  myTeams: object[];
  otherTeams: object[];

  teamName: string;
  teamDescription: string;

  constructor(private teamSercive: TeamService) { }

  ngOnInit(): void {
    this.getTeam();
  };

  getTeam(): void {
    this.teamSercive.get(2).subscribe(teams =>{
      this.myTeams = teams['data']['my_teams'];
      this.otherTeams = teams['data']['other_teams'];
    });
  }

  createTeam(): void {
    console.log(this.teamName);
    console.log(this.teamDescription);
    this.closeModal();
  }

  openModal(): void {
    let modal = document.getElementById('create-team-modal');
    modal.style.display = 'block';
  }
  
  closeModal(): void {
    let modal = document.getElementById('create-team-modal');
    modal.style.display = 'none';
  }

}
