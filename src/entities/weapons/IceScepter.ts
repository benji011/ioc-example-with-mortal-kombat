import { injectable } from 'inversify'
import { Weapon } from '~/interfaces/weapons/Weapon'

@injectable()
export class IceScepter implements Weapon {
  public name: string
  public constructor() {
    this.name = 'Ice Scepter'
  }
}
