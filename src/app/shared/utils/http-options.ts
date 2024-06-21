import { HttpHeaders } from "@angular/common/http";
import { Authentication } from "src/app/modules/authentication/class/authentication";

export class HttpOptions {
    
    static getHttpOptions(): HttpHeaders {
        let headers = new HttpHeaders(); 
        let authentication: Authentication;

        const session = sessionStorage.getItem('BackOffice');
        if (session != null) {
            authentication = JSON.parse(session);
            if (authentication && authentication.token) {
              headers = new HttpHeaders({
                'Content-Type': 'application/json',
                Authorization: `Bearer ${authentication.token}`,
              });
            }
        }

        return headers;
      }
}
