import { Tournament } from './interfaces/'
import container from '~/config/inversify.config'
import { SERVICE_IDENTIFIER as SI } from '~/constants/identifiers'

let mortalKombat = container.get<Tournament>(SI.TOURNAMENT)

console.log(mortalKombat.fight())
