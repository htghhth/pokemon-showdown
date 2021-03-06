'use strict';

/**@type {{[k: string]: ModdedFormatsData}} */
let BattleFormats = {
	standard: {
		inherit: true,
		ruleset: ['Species Clause', 'Nickname Clause', 'OHKO Clause', 'Moody Clause', 'Evasion Moves Clause', 'Endless Battle Clause', 'HP Percentage Mod', 'Cancel Mod'],
	},
	obtainablemoves: {
		inherit: true,
		banlist: [
			// Shell Smash: Clamperl Gen 5+ level-up
			// Sucker Punch: Huntail Gen 4 tutor
			'Huntail + Shell Smash + Sucker Punch',
		],
	},
};

exports.BattleFormats = BattleFormats;
