import { Observable } from "rxjs";

export abstract class Store<T> {
    public abstract get currentValue(): object
    public abstract setState(name: string, state: T): void
    public abstract getList(): Observable<T[]>
    public abstract delete(data: T, name: string): void
    public abstract update(name: string, data: T): void
}