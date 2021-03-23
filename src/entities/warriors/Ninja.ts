import { inject, injectable } from 'inversify'
import { Warrior, Weapon, ThrowableWeapon } from '~/interfaces/'
import TYPES from '~/types/Types'

@injectable()
export class Ninja implements Warrior {
  private _name: string
  private _katana: Weapon
  private _shuriken: ThrowableWeapon

  public constructor(
    @inject(TYPES.Weapon) katana: Weapon,
    @inject(TYPES.ThrowableWeapon) shuriken: ThrowableWeapon
  ) {
    this._name = 'ninja'
    this._katana = katana
    this._shuriken = shuriken
  }

  public name() {
    return this._name
  }

  public weapon() {
    return this._katana.name()
  }

  public fight() {
    return this._katana.hit()
  }
  public sneak() {
    return this._shuriken.throw()
  }
}
