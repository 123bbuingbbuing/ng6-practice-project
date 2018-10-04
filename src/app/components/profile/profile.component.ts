import { Component, OnInit } from '@angular/core';
import { MembersService } from '../../services/members.service';
import { Members } from '../../models/Members';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {

  constructor(
    private memberService: MembersService,
    private route: ActivatedRoute
  ) { }

  member: Members;
  albumInfo: any[];

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.memberService.viewContactInfo(Number(id)).subscribe(members_info =>
      this.member = members_info
    );
   }
   getAlbumData(data) {
     console.log(data);
     return this.albumInfo = data;
   }

}
