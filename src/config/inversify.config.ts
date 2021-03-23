import 'reflect-metadata'
import { Container } from 'inversify'
import { ShiraiRyu, LinKuei, Kunai, IceScepter } from '~/entities/'
import { Warrior, Weapon, Tournament } from '~/interfaces/'
import { MortalKombat } from '~/entities/tournaments/MortalKombat'
import { TAG } from '~/constants/tags'
import { SERVICE_IDENTIFIER as SI } from '~/constants/identifiers'

let container = new Container()
// Fighters
container.bind<Warrior>(SI.WARRIOR).to(LinKuei).whenTargetNamed(TAG.CHINESE)
container.bind<Warrior>(SI.WARRIOR).to(ShiraiRyu).whenTargetNamed(TAG.JAPANESE)
// Weapons
container.bind<Weapon>(SI.WEAPON).to(IceScepter).whenParentNamed(TAG.CHINESE)
container.bind<Weapon>(SI.WEAPON).to(Kunai).whenParentNamed(TAG.JAPANESE)
// Battle
container.bind<Tournament>(SI.TOURNAMENT).to(MortalKombat)
export default container
