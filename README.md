![Lyelt](../master/EncounterSimulator/src/assets/lyelt-logo-sm.png)
# EncounterSimulator
Simulator for creating D&amp;D encounters and tracking information during play. Written using .NET Core + Web API + Angular 6

## Features

#### Manage your characters
Whether you're the Dungeon Master or a player, simply log in and create a character with some basic information to be used during the encounter. If you need to track some monsters, there is a comprehensive list of all 5E monsters that are found in the monster manual. Choose one, and all of the relevant combat statistics will be populated for you.

#### Review an encounter 
Perhaps you're reliving a previous session's encounter, or you just need to remember what happened in that last fight. You can easily review the battle as an overview or turn-by-turn to recall exactly what happened.

## For Dungeon Masters

#### Select your combatants 
From your list of configured characters, you can select all of the monsters and players that will be taking part in this encounter.

#### Roll initiative
Enter your manually-rolled initiative, or roll it automatically using each character's provided dexterity modifier.

#### Fight!
Track your monsters' and players' initiative order, combat actions, statuses, and combat statistics in a way that helps visualize exactly what is happening in combat. Never miss a turn or forget a saving throw again!

#### Review battle statistics
Look at all of the combat statistics for a given battle or character to help balance and fine-tune your encounters for next time.

## For Players

#### Enter the battle
See exactly what your DM is seeing as each round progresses. You'll have a live view of the encounter and you can see each player's turn unravel. Plan exactly what you want to do on your next turn, or view your party's health and statuses in real time so you can prioritize exactly what you need to do next!

#### View your character's statistics
Did you almost die? Did you deal a ton of damage? You can keep track of all your character's statistics from a given battle or across their entire career. 

## TODO

- [x] Allow management of characters with basic combat information
- [x] Allow selection of characters and monsters in the first step of preparation
- [x] Roll initiative or enter it manually to prepare for the encounter
- [x] Show all selected characters in order of initiative roll, with basic combat information displayed
- [x] Show an indicator for whose turn it currently is
- [x] Display the number of turns, rounds, and in-game seconds that have elapsed in the current fight
- [x] In a given action, enter the type of action, target, and value (e.g. damage or health) along with any inflicted statuses and flavor text
- [x] Implement all possible combat actions and character statuses with descriptions
- [ ] Allow management of these actions and statuses, including add/delete custom ones
- [x] Allow multiple actions to be entered per turn
- [ ] Show character statuses on turn overview
- [ ] Track health automatically based on damage and healing during the encounter
- [x] Disable all forms except the current player's turn
- [ ] Import character sheets from another source (perhaps dndbeyond pdf sheets)
- [ ] Allow source URL or image to be entered for a given character sheet
- [ ] Enter other preliminary fields for the encounter such as location and time of day
- [ ] Show statistics from the fight after it is over
- [x] Log all turns and encounters
- [ ] Allow management and viewing of the logs
- [ ] Implement all possible Monster Manual monsters as default options
- [ ] Implement authentication and management of account as either a player or DM
- [ ] Implement live viewing of encounter from a player's perspective
