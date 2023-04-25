import { interactionResponseType } from '../utils/';

export default {
	name: 'makarlox',
	async handle() {
		return {
			type: interactionResponseType.ChannelMessageWithSource,
			data: {
				content: `согл`,
			}
		}
	}
}
