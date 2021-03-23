import { Battle } from './interfaces/'
import container from '~/config/inversify.config'
import SERVICE_IDENTIFIER from '~/constants/identifiers'

let epicBattle = container.get<Battle>(SERVICE_IDENTIFIER.BATTLE)

console.log(epicBattle.fight())
