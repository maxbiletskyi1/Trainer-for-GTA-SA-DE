/// <reference path='../../../.config/sa.d.ts' />
import { ButtonConfig } from '../../models/index';
import { infiniteAmmo } from '../../functions/index';

const MONEY_LIMIT = 99999999;
const INCREASE_HEALTH_BY = 100;
const WANTED_LEVEL = {
    min: 0,
    max: 6,
};

export const renderMainActions = (char: Char, buttonConfig: ButtonConfig) => {
    if (ImGui.Button('Add Health', buttonConfig.width, buttonConfig.height)) {
        showTextBox('Health added');
        char.setHealth(
            char.getHealth() + INCREASE_HEALTH_BY
        );
    }

    ImGui.SameLine();
    if (ImGui.Button('Add Armor', buttonConfig.width, buttonConfig.height)) {
        showTextBox('Armor added');
        char.addArmor(INCREASE_HEALTH_BY);
    }

    ImGui.SameLine();
    if (ImGui.Button('Add Ammo', buttonConfig.width, buttonConfig.height)) {
        showTextBox('Ammo added');
        infiniteAmmo(char);
    }
}

export const renderWantedLevelSlider = (player: Player, wantedLevel: number): number => {
    const newWantedLevel = ImGui.SliderInt('Wanted Level', wantedLevel, WANTED_LEVEL.min, WANTED_LEVEL.max);

    if (wantedLevel !== newWantedLevel) {
        player.alterWantedLevel(newWantedLevel);
    }

    return newWantedLevel;
}

export const renderMoneySlider = (player: Player) => {
    const moneyInput = ImGui.InputInt('Money', 0, -MONEY_LIMIT, MONEY_LIMIT);
    const isSubtracting = moneyInput < 0;

    if (ImGui.Button(`${ isSubtracting ? 'Subtract' : 'Add' } Money`, 200, 60) && moneyInput) {
        showTextBox(`Money ${ isSubtracting ? 'subtracted' : 'added' }`);
        player.addScore(moneyInput);
    }
}
