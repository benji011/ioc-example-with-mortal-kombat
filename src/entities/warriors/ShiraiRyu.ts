import { inject, injectable } from 'inversify'
import { SERVICE_IDENTIFIER } from '~/constants/identifiers'
import { Warrior, Weapon } from '~/interfaces/'

@injectable()
export class ShiraiRyu implements Warrior {
  public name: string
  public weapon: Weapon
  public constructor(@inject(SERVICE_IDENTIFIER.WEAPON) weapon: Weapon) {
    this.name = 'Scorpion'
    this.weapon = weapon
  }
}
