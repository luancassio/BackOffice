import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TypeUser, TypeUserEnum } from 'src/app/modules/user/enum/type-user.enum';
import { User } from 'src/app/modules/user/interface/user';
import { UserService } from 'src/app/modules/user/user.service';
import { AuthSession } from 'src/app/shared/utils/auth-session';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  dataUser?: User;
  
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  //   this.userService.getUserById(AuthSession.authGetId()).subscribe({
  //     next: (user) => {
  //       if (user) {
  //         this.dataUser = user;
  //       }
  //      },
  //     error: (e: HttpErrorResponse) => {
  //        Swal.fire({title: 'Error', html: `${e.error.messages.join('<br />')}`, icon: 'error'})
  //     },
  //     complete: () => {},
  //   })
  const user: User = {
    email: 'lcassio@email.com',
    id: '57a67d49-7780-4848-933b-db1e9e2f5426',
    name: 'Luan Cássio',
    password: "12341234",
    active: true,
    img: "",
  }
  this.dataUser =  user
   }
  logout(){
    if (!AuthSession.removeAuthenticationSession()) {
        this.router.navigate(['/authentication'])
    }

  }

}
