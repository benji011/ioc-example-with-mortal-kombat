import { inject, injectable, named } from 'inversify'

import { Tournament, Warrior } from '~/interfaces'
import { SERVICE_IDENTIFIER as SI } from '~/constants/identifiers'
import { TAG } from '~/constants/tags'

@injectable()
export class MortalKombat implements Tournament {
  @inject(SI.WARRIOR)
  @named(TAG.CHINESE)
  public subzero: Warrior
  @inject(SI.WARRIOR)
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
