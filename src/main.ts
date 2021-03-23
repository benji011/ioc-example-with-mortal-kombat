import { Tournament } from './interfaces/'
import container from '~/config/inversify.config'
import { SERVICE_IDENTIFIER as SI } from '~/constants/identifiers'

let epicBattle = container.get<Tournament>(SI.TOURNAMENT)

console.log(epicBattle.fight())
