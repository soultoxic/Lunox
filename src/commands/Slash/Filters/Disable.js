const { EmbedBuilder } = require("discord.js");
const delay = require("delay");

module.exports = {
    name: "disable",
    description: "Clear the current player filters.",
    category: "Filters",
    permissions: {
        bot: [],
        channel: [],
        user: [],
    },
    settings: {
        inVc: false,
        sameVc: true,
        player: true,
        current: true,
        owner: false,
        premium: false,
    },
    run: async (client, interaction) => {
        await interaction.deferReply({ ephemeral: true });

        const player = client.poru.players.get(interaction.guild.id);

        await player.filters.clearFilters();
        await player.setVolume(100);

        const embed = new EmbedBuilder().setDescription(`\`☑️\` | Filters has been: \`Cleared\``).setColor(client.color);

        await delay(2000);
        return interaction.editReply({ embeds: [embed] });
    },
};
