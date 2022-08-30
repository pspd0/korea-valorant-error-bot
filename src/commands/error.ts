import { SlashCommandBuilder, CommandInteraction, Client, EmbedBuilder } from "discord.js";
import {Valorant_error} from "../modules/errorlist"


module.exports = {
    data: new SlashCommandBuilder()
        .setName("error")
        .setDescription("오류 코드를 적어주면 무슨 오류인지 알려줌.")
        .addNumberOption(option => option.setName("code")
            .setDescription("발로란트 오류 코드를 적어주세요")
            .setRequired(true)),
    async execute(interaction : CommandInteraction, client: Client) {
        const code : any = interaction.options.get('code')?.value;
        const embed = new EmbedBuilder()
            .setTitle("Valorant Code")
            .setColor("Red")
            .setTimestamp()
            .setDescription(`**오류 코드 : ${code}**\n\n발생 원인 : **${Valorant_error.meaning(code)}**\n\n해결 방법 : **${Valorant_error.solution(code)}**`);

        await interaction.reply({embeds: [embed]});
    },
};