import { Container } from 'inversify'
import TYPES from '~/types/Types'
import { Ninja, Katana, Shuriken } from '~/entities/'
import { Warrior, Weapon, ThrowableWeapon, Battle } from '~/interfaces/'
import { EpicBattle } from '~/entities/battles/EpicBattle'

var container = new Container()
container.bind<Warrior>(TYPES.Warrior).to(Ninja)
container.bind<Weapon>(TYPES.Weapon).to(Katana)
container.bind<ThrowableWeapon>(TYPES.ThrowableWeapon).to(Shuriken)
container.bind<Battle>(TYPES.Battle).to(EpicBattle)
export default container
