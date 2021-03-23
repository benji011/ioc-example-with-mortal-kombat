import { Container } from 'inversify'
import { Ninja, Katana, Shuriken } from '~/entities/'
import { Warrior, Weapon, ThrowableWeapon, Battle } from '~/interfaces/'
import { EpicBattle } from '~/entities/battles/EpicBattle'
import TAG from '~/constants/tags'
import { SERVICE_IDENTIFIER as SI } from '~/constants/identifiers'

var container = new Container()
container.bind<Warrior>(SI.WARRIOR).to(Ninja).whenTargetNamed(TAG.JAPANESE)
container.bind<Warrior>(SI.WARRIOR).to(Ninja).whenTargetNamed(TAG.CHINESE)
container
  .bind<ThrowableWeapon>(SI.WEAPON)
  .to(Shuriken)
  .whenParentNamed(TAG.CHINESE)
container.bind<Weapon>(SI.WEAPON).to(Katana).whenParentNamed(TAG.JAPANESE)
container.bind<Battle>(SI.BATTLE).to(EpicBattle)
export default container
