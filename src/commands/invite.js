import { apiEndpoint, interactionResponseType } from '../utils/';

export default {
	name: 'invite',
	handle(interaction) {
		return { 
			type: interactionResponseType.ChannelMessageWithSource,
			data: { content: `${apiEndpoint}/oauth2/authorize?client_id=${interaction.application_id}&scope=applications.commands бот привязан к десолейту лошпед` } 
		}
	}
}
