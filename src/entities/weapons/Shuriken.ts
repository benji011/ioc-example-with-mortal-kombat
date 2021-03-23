import { injectable } from 'inversify'
import { ThrowableWeapon } from '~/interfaces/weapons/ThrowableWeapon'

@injectable()
export class Shuriken implements ThrowableWeapon {
  public name() {
    return 'Shuriken'
  }

  public throw() {
    return 'hit!'
  }
}
