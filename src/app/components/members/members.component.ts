import { Component, OnInit } from '@angular/core';
import { Members } from '../../models/Members';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  constructor() { }
  members: Members[];
  ngOnInit() {
    this.members = [
      {
        id: 1,
        hangeul: '강다니엘' ,
        name: 'Kang Daniel' ,
        birthday: '1996-12-10' ,
        height: '180 cm' ,
        nationality: 'Korean' ,
        bloodtype: 'B' ,
        hometown: 'Busan, South Korea' ,
        languages: 'Korean, English' ,
        entertainment: 'MMO Entertainment' ,
        profilePic: 'http://www.kpopfans.net/wp-content/uploads/2018/05/DcqMfUJV4AAbw9J.jpg-orig.jpeg',
        position: 'Center, Main Dancer, Lead Rapper, Lead Vocal'
      },
      {
        id: 2,
        hangeul: '박지훈' ,
        name: 'Park Ji Hoon' ,
        birthday: '1999-' ,
        height: '174 cm' ,
        nationality: 'Korean' ,
        bloodtype: 'A' ,
        hometown: 'Busan, South Korea' ,
        languages: 'Korean' ,
        entertainment: 'Maroo Entertainment' ,
        profilePic: 'https://pbs.twimg.com/media/DcqOtJ1V0AUjrh1.jpg',
        position: 'Rapper, Dancer'
      },
      {
        id: 3,
        hangeul: '이대휘' ,
        name: 'Lee Dae Hwi' ,
        birthday: '2001' ,
        height: '174 cm' ,
        nationality: 'Korean, American' ,
        bloodtype: 'A' ,
        hometown: 'L.A' ,
        languages: 'Korean, English, Japanese' ,
        entertainment: 'Brand New Music' ,
        profilePic: 'https://daebak.tokyo/wp-content/uploads/2018/04/lee-dehwi.jpg',
        position: 'Lead Vocal'
      },
      {
        id: 4,
        hangeul: '김재환' ,
        name: 'Kim Jae Hwan' ,
        birthday: '1996-05-27' ,
        height: '174 cm' ,
        nationality: 'Korean' ,
        bloodtype: 'b' ,
        hometown: 'Seoul, South Korea' ,
        languages: 'Korean' ,
        entertainment: 'CJE' ,
        profilePic: 'https://img.kpopmap.com/2018/05/wanna-one-world-tour-poster-2.jpg',
        position: 'Main Vocal'
      },
      {
        id: 5,
        hangeul: '옹성우' ,
        name: 'Ong Sung Wu' ,
        birthday: '1995-08-25' ,
        height: '180 cm' ,
        nationality: 'Korean' ,
        bloodtype: 'O' ,
        hometown: 'Seoul, South Korea' ,
        languages: 'Korean' ,
        entertainment: 'Fantagio' ,
        profilePic: 'https://sm1.narvii.com/6823/018864112e07250e9c3638b49731703375ff129bv2_00.jpg',
        position: 'Lead Vocal'
      },
      {
        id: 6,
        hangeul: '박우진' ,
        name: 'Park Woo Jin' ,
        birthday: '1999-11-22' ,
        height: '174 cm' ,
        nationality: 'Korean' ,
        bloodtype: 'AB' ,
        hometown: 'Busan, South Korea' ,
        languages: 'Korean' ,
        entertainment: 'Brand New Music' ,
        profilePic: 'https://pbs.twimg.com/media/DcvdwoSXUAU80op.jpg',
        position: 'Main Rapper, Lead Dancer'
      },
      {
        id: 7,
        hangeul: '라이관린' ,
        name: 'Lai Guan Lin' ,
        birthday: '2001-09-15' ,
        height: '184 cm' ,
        nationality: 'Chinese' ,
        bloodtype: 'O' ,
        hometown: 'Hong Kong' ,
        languages: 'Mandarin, English, Korean' ,
        entertainment: 'Cube Entertainment' ,
        profilePic: 'https://img.kpopmap.com/2018/05/wanna-one-world-tour-poster-3.jpg',
        position: 'Rapper'
      },
      {
        id: 8,
        hangeul: '윤지성' ,
        name: 'Yoon Ji Sung' ,
        birthday: '1991-03-21' ,
        height: '173 cm' ,
        nationality: 'Korean' ,
        bloodtype: 'O' ,
        hometown: '' ,
        languages: 'Korean' ,
        entertainment: 'MMO Entertainment' ,
        profilePic: 'https://i.pinimg.com/originals/c7/92/19/c79219ebcf5a2c9c573f559efb2a10d9.jpg',
        position: 'Leader, Lead Vocal'
      },
      {
        id: 9,
        hangeul: '황민현' ,
        name: 'Hwang Min Hyun' ,
        birthday: '1995-08-09' ,
        height: '180 cm' ,
        nationality: 'Korean' ,
        bloodtype: 'A' ,
        hometown: 'Busan, South Korea' ,
        languages: 'Korean, Japanese' ,
        entertainment: 'Pledis Entertainment' ,
        profilePic: 'https://i.pinimg.com/originals/75/29/08/752908b010b5239acb256bf68cdc1948.jpg',
        position: 'Lead Vocal'
      },
      {
        id: 10,
        hangeul: '배진영' ,
        name: 'Bae Jin Young' ,
        birthday: '2000-05-10' ,
        height: '178 cm' ,
        nationality: 'Korean' ,
        bloodtype: 'O' ,
        hometown: 'South Korea' ,
        languages: 'Korean' ,
        entertainment: 'C9 Entertainment' ,
        profilePic: 'http://www.kpopfans.net/wp-content/uploads/2018/05/DcqMdMXV4AI8vJE.jpg-orig.jpeg',
        position: 'Vocal'
      },
      {
        id: 11,
        hangeul: '하성운' ,
        name: 'Ha Sung Woon' ,
        birthday: '1994-03-24' ,
        height: '168 cm' ,
        nationality: 'Korean' ,
        bloodtype: 'O' ,
        hometown: 'South Korea' ,
        languages: 'Korean' ,
        entertainment: 'Ador and Able Entertainment' ,
        profilePic: 'http://www.kpopfans.net/wp-content/uploads/2018/05/DcqMZusUwAATqBo.jpg-orig.jpeg',
        position: 'Main Vocal'
      }
    ];
  }

}
