import { Ability } from './ability';

export class Hero {
    name: string;
    heroType: string;
    id: string;
    image: object;
    unitType: string;
    defaultChar: object;
    defaultDamage: string;
    str: object;
    agi: object;
    int: object;
    armor: number;
    hotkey: string;
    speedMovement: number;
    abilities: Ability[];
}
