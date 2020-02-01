import { Entity } from './entity'
import { Completable } from './completable'

export class Task extends Entity implements Completable {
  private _completed: boolean
  private _priority: number

  get completed(): boolean {
    return this._completed
  }

  set completed(value: boolean) {
    this._completed = value
  }

  get priority(): number {
    return this._priority
  }

  set priority(value: number) {
    this._priority = value
  }
}
