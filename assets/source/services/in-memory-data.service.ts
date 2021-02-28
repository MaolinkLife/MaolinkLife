import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
    providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const bloodElf = {
            name: 'Эльфы крови',
            id: 'bloodElf',
            units: [
                {
                    name: 'Рабочий',
                    id: 'bloodElf_worker'
                },
                {
                    name: 'Мечник',
                    id: 'bloodElf_warrior',
                    discription: {
                        // tslint:disable-next-line: max-line-length
                        primary: 'Рядовой воин из армии Син\'дорай, вооруженный мечом и щитом. Владеет способностью «Сожжение маны». В дальнейшем может научиться укрываться за щитом от магических атак противника.',
                        secondary: 'Может атаковать наземные цели'
                    },
                    image: {
                        url: '../../../assets/ragnarok/content/bloodElf/units/images/BTNBloodElfSwordman.jpg',
                        position: 'center',
                        size: 'cover'
                    }
                },
                {
                    name: 'Лучница',
                    id: 'bloodElf_archer',
                    image: {
                        url: '../../../assets/ragnarok/content/bloodElf/units/images/BTNBloodElfArcher.jpg',
                        position: 'center',
                        size: 'cover'
                    }
                },
                {
                    name: 'Рыцарь',
                    id: 'bloodElf_knight'
                },
                {
                    name: 'Чародейка',
                    id: 'bloodElf_wizzard'
                },
                {
                    name: 'Жрец',
                    id: 'bloodElf_priest'
                },
                {
                    name: 'Ведьмак',
                    id: 'bloodElf_spellBreaker'
                },
                {
                    name: 'Кристальная катапульта',
                    id: 'bloodElf_crystalCatapult'
                },
                {
                    name: 'Магический страж',
                    id: 'bloodElf_arcaneGuardian'
                },
                {
                    name: 'Ястреб',
                    id: 'bloodElf_dragonHuwk'
                },
                {
                    name: 'Феникс',
                    id: 'bloodElf_phoenix'
                }
            ],
            buildings: [
                {
                    name: 'Святилище магии',
                    id: 'bloodElf_'
                },
                {
                    name: 'Святилище силы',
                    id: 'bloodElf_'
                },
                {
                    name: 'Святилище мудрости',
                    id: 'bloodElf_'
                },
                {
                    name: 'Казармы',
                    id: 'bloodElf_barracks'
                },
                {
                    name: 'Лесопилка',
                    id: 'bloodElf_lumberMill'
                },
                {
                    name: 'Кузница',
                    id: 'bloodElf_blacksmith'
                },
                {
                    name: 'Дом',
                    id: 'bloodElf_house'
                },
                {
                    name: 'Алтарь силы',
                    id: 'bloodElf_altar'
                },
                {
                    name: 'Храм магии',
                    id: 'bloodElf_arcaneSanctuary'
                },
                {
                    name: 'Магическая мастерская',
                    id: 'bloodElf_workshop'
                },
                {
                    name: 'Башня',
                    id: 'bloodElf_scoutTower'
                },
                {
                    name: 'Сторожевая башня',
                    id: 'bloodElf_guardTower'
                },
                {
                    name: 'Осадная башня',
                    id: 'bloodElf_cannonTower'
                },
                {
                    name: 'Чародейская башня',
                    id: 'bloodElf_arcaneTower'
                },
                {
                    name: 'Гнезда ястребов',
                    id: 'bloodElf_hatchery'
                },
                {
                    name: 'Магическая лавка',
                    id: 'bloodElf_arcaneVault'
                }
            ],
            heroes: [
                {
                    name: 'Мальком',
                    id: 'bloodElf_swordChampion'
                },
                {
                    name: 'Алексия',
                    id: 'bloodElf_firePriestess'
                },
                {
                    name: 'Вейн',
                    id: 'bloodElf_phoenixRanger'
                },
                {
                    name: 'Кель',
                    id: 'bloodElf_bloodWizzard'
                }
            ],
            abilities: [
                {
                    name: 'Огненный шар',
                    id: 'bloodElf_fireBall',
                    type: 'active'
                },
                {
                    name: 'Огненный дождь',
                    id: 'bloodElf_fireRain',
                    type: 'active'
                },
                {
                    name: 'Огненные стрелы',
                    id: 'bloodElf_fireArrows',
                    type: 'active'
                },
                {
                    name: 'Сожжение маны',
                    id: 'bloodElf_manaBurn',
                    type: 'passive'
                }
            ],
            upgrades: [],
            logo: {
                url: 'assets/ragnarok/content/bloodElf/images/bloodElfLogo.png',
                position: 'center',
                size: 'center'
            }
        };

        const forsaken = {
            name: 'Отрекшиеся',
            id: 'forsaken',
            units: [
                {
                    name: 'Рабочий',
                    id: 'forsaken_worker'
                },
                {
                    name: 'Мечник',
                    id: 'forsaken_warrior',
                    primary: 'Темный воин, сражающийся на стороне отрекшихся. Владеет способностью «Вампиризм»',
                    discription: {
                        secondary: 'Может атаковать наземные цели'
                    },
                    image: {
                        url: '',
                        position: 'center',
                        size: 'cover'
                    }
                },
                {
                    name: 'Темная лучница',
                    id: 'forsaken_archer',
                    image: {
                        url: '',
                        position: 'center',
                        size: 'cover'
                    }
                },
                {
                    name: 'Катапульта',
                    id: 'forsaken_catapult'
                },
                {
                    name: 'Летучая мышь',
                    id: 'forsaken_bat'
                },
                {
                    name: 'Баньши',
                    id: 'forsaken_banshee'
                },
                {
                    name: 'Жнец',
                    id: 'forsaken_reaper'
                },
                {
                    name: 'Темная валькирия',
                    id: 'forsaken_valkyr'
                },
                {
                    name: 'Гомункул',
                    id: 'forsaken_homunculus'
                }
            ],
            buildings: [
                {
                    name: 'Темная ратуша',
                    id: 'forsaken_darkTownHall'
                },
                {
                    name: 'Залы метрвых',
                    id: 'forsaken_darkKeep'
                },
                {
                    name: 'Темный замок',
                    id: 'forsaken_darkCastle'
                },
                {
                    name: 'Заброшенный дом',
                    id: 'forsaken_house'
                },
                {
                    name: 'Мавзолей',
                    id: 'forsaken_mausoleum'
                },
                {
                    name: 'Кладбище',
                    id: 'forsaken_graveyard'
                },
                {
                    name: 'Бойница',
                    id: 'forsaken_slaughterHouse'
                },
                {
                    name: 'Храм проклятых',
                    id: 'forsaken_templeOfDamned'
                },
                {
                    name: 'Лаборатория',
                    id: 'forsaken_plagueatorium'
                },
                {
                    name: 'Башня',
                    id: 'forsaken_scoutTower'
                },
                {
                    name: 'Сторожевая башня',
                    id: 'forsaken_guardTower'
                },
                {
                    name: 'Башня смерти',
                    id: 'forsaken_deathTower'
                },
                {
                    name: 'Морозная башня',
                    id: 'forsaken_frostTower'
                },
                {
                    name: 'Древнее захоронение',
                    id: 'forsaken_tombOfRelict'
                }
            ],
            heroes: [
                {
                    name: 'Викториус',
                    id: 'forsaken_lordVampire'
                },
                {
                    name: 'Вариматас',
                    id: 'forsaken_nightStalker'
                },
                {
                    name: 'Сильвана',
                    id: 'forsaken_bansheeQueen'
                }
            ],
            abilities: [
                {
                    name: 'Броня из плоти',
                    id: 'forsaken_fleshHeap',
                    type: 'passive'
                },
                {
                    name: 'Ночной охотник',
                    id: 'forsaken_hunterInTheNight',
                    type: 'active'
                },
                {
                    name: 'Бессмертие',
                    id: 'forsaken_immortal',
                    type: 'active'
                },
                {
                    name: 'Подчинение',
                    id: 'forsaken_charm',
                    type: 'active'
                }
            ],
            upgrades: [],
            logo: {
                url: 'assets/ragnarok/content/forsaken/images/forsakenLogo.png',
                position: 'center',
                size: 'center'
            }
        };

        const forestGuardians = {
            name: 'Лесные стражи',
            id: 'forestGuardians',
            logo: {
                url: 'assets/ragnarok/content/forestGuardians/images/forestGuardiansLogo.png',
                position: 'center',
                size: 'cover'
            }
        };

        const dwarven = {
            name: 'Дворфы',
            id: 'dwarven',
            logo: {
                url: 'assets/ragnarok/content/dwarven/images/dwarvenLogo.png',
                position: 'center',
                size: 'cover'
            }
        };

        const darkHorde = {
            name: 'Темная Орда',
            id: 'darkHorde',
            logo: {
                url: 'assets/ragnarok/content/darkHorde/images/darkHordeLogo.png',
                position: 'center',
                size: 'cover'
            }
        };

        const lizardman = {
            name: 'Ящеры',
            id: 'lizardman',
            logo: {
                url: 'assets/ragnarok/content/lizardmans/images/lizardmanLogo.png',
                position: 'center',
                size: 'cover'
            }
        };

        const goblin = {
            name: 'Гоблины',
            id: 'goblin',
            logo: {
                url: 'assets/ragnarok/content/goblin/images/goblinLogo.png',
                position: 'center',
                size: 'cover'
            }
        };

        const dalaran = {
            name: 'Даларан',
            id: 'dalaran',
            logo: {
                url: 'assets/ragnarok/content/dalaran/images/dalaranLogo.png',
                position: 'center',
                size: 'cover'
            }
        };

        const eredar = {
            name: 'Эредары',
            id: 'eredar',
            logo: {
                url: 'assets/ragnarok/content/eredar/images/eredarLogo.png',
                position: 'center',
                size: 'center'
            }
        };

        const iceTroll = {
            name: 'Ледяные тролли',
            id: 'iceTroll',
            logo: {
                url: 'assets/ragnarok/content/iceTroll/images/iceTrollLogo.png',
                position: 'center',
                size: 'cover'
            }
        };

        const highElf = {
            name: 'Высшие эльфы',
            id: 'iceTroll',
            logo: {
                url: 'assets/ragnarok/content/highElf/images/highElfLogo.png',
                position: 'center',
                size: 'cover'
            }
        };

        const naga = {
            name: 'Наги',
            id: 'naga',
            logo: {
                url: 'assets/ragnarok/content/naga/images/nagaLogo.png',
                position: 'center',
                size: 'cover'
            }
        };

        const races = [
            bloodElf,
            forsaken,
            forestGuardians,
            goblin,
            dwarven,
            darkHorde,
            iceTroll,
            eredar,
            dalaran,
            lizardman,
            highElf
        ];

        const dataBase = 'src/assets/api/ragnarok/RagnarokData.json';

        return { races };
    }

    constructor() { }

    // Переопределяет метод genId, чтобы гарантировать, что герой всегда имеет идентификатор.
    // Если массив героев пуст, метод ниже возвращает исходное число (11).
    // Если массив героев не пуст, метод ниже возвращает самый высокий - hero id + 1.
    // genId(heroes: Hero[]): number {
    //   return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
    // }
}
