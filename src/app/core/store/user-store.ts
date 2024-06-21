import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { UserState } from "./user-state";
import { User } from "src/app/modules/user/interface/user";
import { Store } from "./stores";


const state: UserState = {
  users: []
}
export class UserStore extends Store<User> {
  private subject = new BehaviorSubject<UserState>(state);
  private store$ = this.subject.asObservable();

  public override get currentValue() {
    return this.subject.value;
  }

  public override setState(name: string, user: any): void {
    this.subject.next({
      ...this.currentValue,
      [name]: user
    })
    console.log(this.currentValue)
  }

  public override getList(): Observable<User[]> {
    return this.store$.pipe(
      map(store => store.users)
    )
  }

  public override delete(data: User, name: string): void {
    const dataUpdateUserCurrent = this.currentValue.users.filter(user => user.id !== data.id)
    this.setState(name, dataUpdateUserCurrent)
  }

  public override update(name: string, data: User): void {
    const dataUpdateUserCurrent = this.currentValue.users.map(user => {
      if (user.id === data.id) {
        return { ...data };
      }
      return user;
    });

    this.setState(name, dataUpdateUserCurrent);
  }
}
