import { Authentication } from "src/app/modules/authentication/class/authentication";

export class AuthSession {


    static createAuthenticationSession(auth: Authentication): boolean{
        let isAuth = false;
        if (auth && auth.token) {
          const  sesseion = sessionStorage;
          sesseion.setItem('BackOffice', JSON.stringify(auth));
          isAuth = true
        }
        return isAuth;
      }
    static removeAuthenticationSession(): boolean { // FORÇA AQUI SÓ PARA CONSEGUIR ACESSAR
        //sessionStorage.removeItem('BackOffice');
        // if (this.authenticated()) { return true }
        // return false;
        return false
      }

      
    static authenticated(): boolean{
        let isAuth = false;
        let auth: Authentication;
        const session = sessionStorage.getItem('BackOffice');
        if (session != null) {
            auth = JSON.parse(session);
            if (auth.token) {
              isAuth = true
            }
        }
        return true
        //return isAuth;// COMO NÃO VOU SUBIR A API QUE GERAR O TOKEN VOU FORÇA AQUI SÓ PARA CONSEGUIR ACESSAR
      }

    static authGEtToken(): string{
        let token = '';
        let auth: Authentication;
        const session = sessionStorage.getItem('BackOffice');
        if (session != null) {
            auth = JSON.parse(session);
            if (auth.token) {
                token = auth.token;
            }
        }
        return token;
      }

    static authGetId(): string{
        let id = '';
        let auth: Authentication;
        const session = sessionStorage.getItem('BackOffice');
        if (session != null) {
            auth = JSON.parse(session);
            if (auth.token) {
                id = auth.id;
            }
        }
        return id;
      }

    static authGetInformationUserLogged(): Authentication{
        let authLogged!: Authentication;
        const session = sessionStorage.getItem('BackOffice');
        if (session != null) {
            const auth = JSON.parse(session);
            if (auth) {
                authLogged = auth;
            }
        }
        return authLogged;
      }

    

}
