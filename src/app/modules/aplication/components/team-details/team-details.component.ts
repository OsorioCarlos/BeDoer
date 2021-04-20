import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {

  userEmail: string;
  members: object = [];

  constructor(private memberService: MemberService) { }

  ngOnInit(): void {
    this.getMembers();
  }

  getMembers(): void {
    this.memberService.get(1).subscribe(members => {
      this.members = members['data'];
    });
  }

  addUser(): void {
    console.log(this.userEmail);
    this.closeModal('add-user-modal');
  }

  deleteUser(): void {
    console.log('Miembro eliminado');
    this.closeModal('delete-user-modal');
  }

  deleteTeam(): void {
    console.log('Equipo eliminado');
    this.closeModal('delete-team-modal');
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

