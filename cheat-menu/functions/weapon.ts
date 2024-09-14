/// <reference path='../../.config/sa.d.ts' />
import { WeaponType } from '../../.config/enums';

import { INFINITE_WEAPON_AMMO } from '../data/index';

export const infiniteAmmo = (char: Char): Char =>
    
    char.setAmmo(WeaponType.Pistol, char.getAmmoInWeapon(WeaponType.Pistol)+INFINITE_WEAPON_AMMO)
        .setAmmo(WeaponType.Shotgun, char.getAmmoInWeapon(WeaponType.Shotgun)+INFINITE_WEAPON_AMMO)
        .setAmmo(WeaponType.Mp5, char.getAmmoInWeapon(WeaponType.Mp5)+INFINITE_WEAPON_AMMO)
        .setAmmo(WeaponType.M4, char.getAmmoInWeapon(WeaponType.M4)+INFINITE_WEAPON_AMMO)
        .setAmmo(WeaponType.Sniper, char.getAmmoInWeapon(WeaponType.Sniper)+INFINITE_WEAPON_AMMO)
        .setAmmo(WeaponType.RocketLauncher, char.getAmmoInWeapon(WeaponType.RocketLauncher)+INFINITE_WEAPON_AMMO)
        .setAmmo(WeaponType.Satchel, char.getAmmoInWeapon(WeaponType.Satchel)+INFINITE_WEAPON_AMMO)
        .setAmmo(WeaponType.SprayCan, char.getAmmoInWeapon(WeaponType.SprayCan)+INFINITE_WEAPON_AMMO);
