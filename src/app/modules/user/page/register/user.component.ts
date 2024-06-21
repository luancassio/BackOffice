import { User } from 'src/app/modules/user/interface/user';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { UserService } from '../../user.service';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  cpf_cnpj = '';
  public formUser!: FormGroup;

  get name() { return this.formUser.get('name') }
  get email() { return this.formUser.get('email') }
  get password() { return this.formUser.get('password') }

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.createForm()
  }

  //Cria o formulario
  createForm() {
    this.formUser = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });

  }
  getParamsObjetoFilter(): User {
    const user: User = {
      active: true,
      email: this.email?.value,
      img: '',
      name: this.name?.value,
      password: this.password?.value,
      id: Math.floor(Math.random() * 1000).toString()

    };
    return user;
  }

  validForm(): string[] {
    const listErro: string[] = [];
    if (this.name?.value.trim() == '' || this.name?.value.trim() == null) {
      listErro.push('O campo nome não pode ser vazio.')
    }
    if (this.email?.value.trim() == '' || this.email?.value.trim() == null) {
      listErro.push('O campo email não pode ser vazio.')
    }
    if (this.password?.value.trim() == '' || this.password?.value.trim() == null) {
      listErro.push('O campo senha não pode ser vazio.')
    }

    return listErro
  }

  submit() {
    this.userService.addUser(this.getParamsObjetoFilter()).subscribe(
      response => {
        if (response) {
          Swal.fire({ title: 'Sucesso', html: 'Usuário cadastrado com sucesso!', icon: 'success' });
        }
      },
      err => {
        Swal.fire({ title: 'Erro', html: 'Erro ao tentar cadastrar usuários!', icon: 'error' });
      }
    );
  }

}
