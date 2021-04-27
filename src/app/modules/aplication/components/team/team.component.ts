import {Component, OnInit} from '@angular/core';

/* Servicio*/
import {MemberService} from 'src/app/services/member.service';
import {TeamService} from '../../../../services/team.service';
import {ToastrService} from 'ngx-toastr';

import {NgxSpinnerService} from 'ngx-spinner';

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

  constructor(
    private spinner: NgxSpinnerService,
    private teamService: TeamService,
    private memberService: MemberService,
    private toast: ToastrService

  ) {}

  ngOnInit(): void {
    this.getTeams();
  }

  getTeams(): void {
    this.spinner.show();
    this.teamService.get().subscribe(teams => {
      this.myTeams = teams['data']['my_teams'];
      this.otherTeams = teams['data']['other_teams'];
      this.spinner.hide();
    });
  }

  createTeam(): void {
    let team = {
      name: this.teamName,
      description: this.teamDescription
    };
    this.spinner.show();
    this.teamService.post(team).subscribe(() => {
      this.closeModal('create-team-modal');
      this.spinner.hide();
      this.getTeams();
    }, ()=>{
      this.spinner.hide();
      this.toast.error('Por favor llena el campo', 'campo vacio',{
        timeOut: 2500,
        progressBar: true
      });
    });
    this.teamName = '';
    this.teamDescription = '';
  }

  deleteTeam(team?: object): void {
    if (team) {
      this.teamSelected = team;
      this.openModal('delete-team-modal');
    } else {
      this.spinner.show();
      this.teamService.delete(this.teamSelected.id).subscribe(() => {
        console.log(this.teamSelected.id);
        this.closeModal('delete-team-modal');
        this.spinner.hide();
        this.getTeams();
      });
    }
  }

  deleteUser(team?: object): void {
    if (team) {
      this.teamSelected = team;
      this.openModal('delete-user-modal');
    } else {
      this.spinner.show();
      this.memberService.put({team_id: this.teamSelected.id, user_id: 0}).subscribe(() => {
        this.closeModal('delete-user-modal');
        this.spinner.hide();
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
