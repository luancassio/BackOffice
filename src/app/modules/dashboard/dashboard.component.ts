import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthSession } from 'src/app/shared/utils/auth-session';
import Swal from 'sweetalert2';
import { UserService } from '../user/user.service';
import { User } from '../user/interface/user';
import { UserStore } from 'src/app/core/store/user-store';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  users$!: Observable<User[]>;

  constructor(private router: Router, private userService: UserService, private userStore: UserStore) { }

  ngOnInit() {
    if (!this.userStore.currentValue.users.length) {
      this.users$ = this.userStore.getList();
      this.userService.getUsers().subscribe(list => {
        if(list){ 
          Swal.fire({title: 'Sucesso', html: `${'Usuários Carregados com sucesso!'}`, icon: 'success'})
      }
      }, err =>{
        Swal.fire({title: 'Error', html: `${'Erro ao tentar Carrega os usuários!'}`, icon: 'error'})
      });
      return
    }
    this.users$ = this.userStore.getList().pipe(
      map(users => users.filter(user => user.active === true))
    );
  }

}
