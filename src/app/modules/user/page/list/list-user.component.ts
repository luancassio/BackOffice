import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserStore } from 'src/app/core/store/user-store';
import Swal from 'sweetalert2';
import { User } from '../../interface/user';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  users$!: Observable<User[]>;

  constructor(private router: Router, private userService: UserService, private userStore: UserStore) { }

  ngOnInit() {
    console.log(this.userStore.currentValue.users.length, 'this.userStore.currentValue.users.length')
    if (!this.userStore.currentValue.users.length) {
      this.users$ = this.userStore.getList();
      this.userService.getUsers().subscribe(list => {
        if(list){ 
          Swal.fire({title: 'Sucesso', html: `${'Usuários Carregados com sucesso!'}`, icon: 'success'})
        }
        }, err =>{
        Swal.fire({title: 'Error', html: `${'Erro ao tentar Carrega os usuários!'}`, icon: 'error'})
      });
    }
    this.users$ = this.userStore.getList();
  }

  updateStatus(user: User){
    user.active = !user.active;
    this.userService.putStatusUsers(user).subscribe(response => {
      if(response){ 
        Swal.fire({title: 'Sucesso', html: `${'Status atualizado com sucesso!'}`, icon: 'success'})
      }
      }, err =>{
      Swal.fire({title: 'Error', html: `${'Erro ao tentar atualizar status do usuários!'}`, icon: 'error'})
    });
  }

  setImage(img: string): string{
    if(img.trim().length > 0){
      return img
    }
    return 'assets/user-without-photo.jpg'
  }

}
