import { injectable } from 'inversify'
import 'reflect-metadata'
import { Weapon } from '~/interfaces/weapons/Weapon'

@injectable()
export class Katana implements Weapon {
  public name() {
    return 'Katana'
  }

  public hit() {
    return 'cut!'
  }
}
