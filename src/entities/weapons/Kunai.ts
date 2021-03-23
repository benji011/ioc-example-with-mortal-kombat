import { injectable } from 'inversify'
import { Weapon } from '~/interfaces/weapons/Weapon'

@injectable()
export class Kunai implements Weapon {
  public name: string
  public constructor() {
    this.name = 'Kunai'
  }
}
