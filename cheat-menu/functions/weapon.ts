/// <reference path='../../.config/sa.d.ts' />
import { WeaponType } from '../../.config/enums';

import { INFINITE_WEAPON_AMMO } from '../data/index';

export const infiniteAmmo = (char: Char): Char => 
    char.setAmmo(char.getCurrentWeapon(), char.getAmmoInWeapon(char.getCurrentWeapon())+INFINITE_WEAPON_AMMO);

    
