import { inject, injectable, named } from 'inversify'

import { Battle, Warrior } from '~/interfaces'
import SERVICE_IDENTIFIER from '~/constants/identifiers'
import TAG from '~/constants/tags'

@injectable()
export class EpicBattle implements Battle {
  @inject(SERVICE_IDENTIFIER.WARRIOR)
  @named(TAG.CHINESE)
  public subzero: Warrior
  @inject(SERVICE_IDENTIFIER.WARRIOR)
  @named(TAG.JAPANESE)
  public scorpion: Warrior

  public fight() {
    let desc = `FIGHT!
                ${this.subzero.name} (${this.subzero.weapon.name})
                vs
                ${this.scorpion.name} (${this.scorpion.weapon.name})`
    return desc
  }
}
