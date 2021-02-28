import { Building } from './building';
import { Upgrade } from './upgrade';
import { Hero } from './hero';
import { Unit } from './unit';
import { Ability } from './ability';
import { Image } from 'src/app/shared/interfaces/image';

export class Race {
    id: string;
    name: string;
    description?: string;
    data: object;
    units: Unit[];
    heroes: Hero[];
    abilities: Ability[];
    upgrades: Upgrade[];
    buildings: Building[];
    screen?: Image;
    logo: Image;
    history?: string[];
}
