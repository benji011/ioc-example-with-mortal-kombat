import { Battle } from './interfaces/'
import container from '~/config/inversify.config'
import { SERVICE_IDENTIFIER as SI } from '~/constants/identifiers'

let epicBattle = container.get<Battle>(SI.BATTLE)

console.log(epicBattle.fight())
