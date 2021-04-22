import { Component, OnInit } from '@angular/core';
import { fillTeams } from 'src/app/mockup.db';

/* Servicio*/
import { AuthService } from 'src/app/services/authentication/auth.service';
import { MemberService } from 'src/app/services/member.service';
import { TeamService } from '../../../../services/team.service';

declare let $: any;

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  private teamSelected: any;

  myTeams: object[];
  otherTeams: object[];

  teamName: string;
  teamDescription: string;

  constructor(private teamService: TeamService, private authService: AuthService, private memberService: MemberService) { }

  ngOnInit(): void {
    this.getTeams();
  }

  getTeams(): void {
    const identification = this.authService.getIdentification();
    this.teamService.get(identification).subscribe(teams => {
      this.myTeams = teams['data']['my_teams'];
      this.otherTeams = teams['data']['other_teams'];
    });
  }

  createTeam(): void {
    let team =  {
      name: this.teamName,
      description: this.teamDescription,
      user_id: this.authService.getIdentification()
    }
    this.teamService.post(team).subscribe( () => {
      this.closeModal('create-team-modal');
      this.getTeams();
    });
    this.teamName = '';
    this.teamDescription = '';
  }

  deleteTeam(team?: object): void {
    if (team) {
      this.teamSelected = team;
      this.openModal('delete-team-modal');
    }
    else {
      this.teamService.delete(this.teamSelected.id).subscribe(msg => {
        console.log(this.teamSelected.id);
        this.closeModal('delete-team-modal');
        this.getTeams();
      })
    }
  }
  
  deleteUser(team?: object): void {
    if (team) {
      this.teamSelected = team;
      this.openModal('delete-user-modal');
    }
    else {
      const identification = this.authService.getIdentification();
      this.memberService.put({team_id: this.teamSelected.id, user_id: identification}).subscribe(msg => {
        console.log(msg);
        this.closeModal('delete-user-modal');
        this.getTeams();
      });
    }
  }

  openModal(name: string): void {
    const modal = document.getElementById(name);
    modal.style.display = 'block';
  }

  closeModal(name: string): void {
    const modal = document.getElementById(name);
    modal.style.display = 'none';
  }

}
