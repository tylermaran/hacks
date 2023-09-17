# Untitled Space Game

## Libraries

-   https://github.com/tokio-rs/axum
-   https://github.com/ratatui-org/ratatui

## Key mechanics

-   Civilization builder in space
-   Multiplayer
-   All terminal / text based
-   Websockets, so live events

## Gameplay

-   Start off on a colony ship
-   Select a starting planet
-   Planets will have a number of fields on them (8, 16, 32, 64, 128, etc.)
-   Multiple players can inhabit one planet
-   Different fields will have different properties (i.e. water, ice, rock, forest)
-   Different planets will have different properties (icey, gas giant, proximity to the sun, etc.)
-   The "ship ai" will select a good starting planet / location for you. (i.e. matching your species / game level / resource needs). You will be able to yolo it and choose your own location if you wish.
-   There will be different species. Some will be human like (i.e. prefer earth planets) others will live on icy methane worlds, or within gas giants. This will help protect new players from players trying to colonize their planets. I.e. if a human want to colonize a icy planet, they will need a higher technology level to overcome the cold / food production.

## Resource Gathering

-   I want to have slightly more resource options than ogame (which had metal, crystal, deuterium). I think there should at least be: [iron, titanium, uranium, lithium, silicone, hydrocarbons, methane, etc.]. With each planet having comparatively higher / lower quantities of each.

## Species

-   Humans
    -   Normal humans. Need agriculture and normal temperature ranges.
-   Siku
    -   Live on the icy planets. Eat methane or some other hydrocarbon.
-   Mercs
    -   Whatever kind of species that would enjoy Mercury
-   Titans
    -   Live within gas giants

## Terraforming planets

-   Each species should have some unique ability to terraform a planet to their liking. i.e. mercs want to burn off the atmosphere and increase the temperature to their liking. Titans should have some way of vaporizing the planets surface and increasing gravity.
-   Any cross species terraforming would be disasterous to the other species on the planet.

## Trading resources

-   Should be possible, but no idea yet

## Combat

-   Gonna take a lot of work. Ideally there is ground and space combat. You can fight for control of a planet, or to defend a planet from an interstellar attack

## Planets

-   Sizing:
-   Each planet will have a number of fields. Thinking this will be powers of 2. So 2, 4, 6, 8, 16, 32, 64, 128, 256, 512.
-   An earthlike planet will be 64 fields. And a mars will be 32 fields (since earth is roughly 2x the size of mars). An earth size moon would be 8 (1/8th the size of earth)
-   The 256 / 512s will be reserved for the gas giants.
-   The 2-8 range will be moons and asteroids

# Notes from original game idea

## Not sure if any of these are still valid, but nice to review

### Game time options

-   Shorter time frame
    -   2 day game, 7 day game, 30 day game
    -   Shorter games have faster mining time, shipbuilding and transit time
-   Different number of players
    -   Min 4, max 32
-   Space is a cube, each player spawns in their own sector.
    -   Visualization of the cube and the player’s location
    -   Zoom in to just see individual sector. This is where the player’s starting planet will be, as well as any nearby asteroids for mining.
    -   Sectors in the center will have much more valuable resources, allowing the players to build more quickly, but they will also be a greater target for aggression. - Meanwhile the players at the edge will need to move towards the center to mine more resources
    -   Each sector will have one big communication antenna. If you capture this, you can see all actions within that sector.
    -   You need planets, or colonies, to refine resources and build ships.
    -   Random encounters - aliens attack. Can set you back, but if you defeat them you get cool loot.
    -   Any space battles result in debri clouds that are very valuable to mine
-   Different research abilities
    -   Ship speed
    -   Armour rating
    -   Weapon rating
    -   Strategy - how well your ships engage in auto-combat
        -   Ship rotation / max firing distance / kamikaze
        -   Is there a way to visualize this?
    -   Stealth, intercept ships without them knowing until it is too late
-   Include full system view:
    -   All planets, asteroids, ships, etc.
    -   You cannot steal someone else’s planet without sending a colony ship along with attack. Colony ships are slow though
    -   Somehow there needs to be a levelup strategy. Or some benefit from playing multiple games.
    -   Also a paid element, because developers need to eat. But not pay to win like ogame
    -   Buy skins?
    -   Make online free, but the app cost money?
    -   Micro ability cost money?
    -   Maybe the ability to pay for in-game reinforcements. You can spend these credits anytime past the 50% game mark.
    -   We do not want to split the fan base. That makes it generally less competitive.
    -   Points for reaching certain checkpoints in the game. Won battles grant points victory points even if you lose the overall game.
    -   Resource collection grants the fewest points.
    -   Maybe some point changes to alliances. If you win as an alliance you split the points.
    -   Actually have a world that you can build out - scratch this
    -   Kinda clash of clans style, where you can select how buildings are laid out.
    -   But there has to be some advantage to the layout, otherwise is it just a pointless addition
    -   The different game types ideally will allow for different play styles
    -   The two day game should be good for almost constant play. Taking a couple hours off, and then setting instructions.
    -   30 day games should allow for much more break time and strategizing
    -   Counteracting espionage strategies
    -   If espionage tech is high enough, you will be able to detect incoming attacks from a much greater range
    -   Space Combat
        -   Have starcraft style micro available for your ships. When you engage in ship on ship combat you have the option to use auto strategy, or manual control
        -   Fleets engage when you send your fleet on an intercepting path
        -   Fleets engage over a planet or asteroid when it is attacked
        -   During the combat over a planet, the ground based defenses will auto attack the fleet above the planet. If the attacking fleet has bombers, the bombers can damage the ground defenses while the fleets are engaging each other.
            If there are no bombers present, the attacking fleet cannot engage ground defenses unless it first defeats the opposing fleet, meaning sustained damage during the entire conflict.
            Different research objectives would allow for better bomber aim, or ability to prioritize defense targets.
            Desktop play has to sync with mobile site play and app play
            The ability to take first person control would be unreal, but awesome
            When you take control of a ship, the computer continues from wherever you left off
            You can only take control of a hero ship. You have to own the game to have this option, and you have to build this ship
            How to add a time limit to the game
            Escape the supernova? You have a jump gate you are trying to reach
            Single player elimination?
            We don’t want a bunch of games spiraling down to stalemate
            Unlike OGame, attacking an undefended planet should damage the production on that planet. But buff ground based defenses to compensate. It should not be easy to conquer someone’s planet during early game.
            Gotta be multilingual. At least english and korean
            Open chat board within the game. You can also DM and make alliance requests
            Friends page
            You add friends (username or email). You can chat. View profile.
            Maybe spectate games? Or does that give too much of an advantage.
            Nvm, you can spectate, just not games for which you are currently active.
            Stick to 2d for the ship battles. Similar to the starcraft space battle gamemode.
            How to build:
            Ask john
            Unity3D for mobile development and WebGL for in-browser development
            Release targets:
            React based OGame knockoff. Same text based game. Add some better graphics for visualizing your planet and bases.
            Same React based game but with a WebGL RTS component for fleet engagements.
            Mobile game launch that has cross platform support and can be accessed on browser and app.
            Have an overall ‘Under Construction’ page
            Research, ship building, construction
            Have option for single player games with bots only. Also custom games with any number of people and bots.
            Have varying levels of difficulties to the bots. And create different types of them.
            Overwhelming zerg type boss that just throws vast quantities of small ships at you
            More sophisticated aliens that have a higher speed and better tactics
            Some form of ancient tech can be found. You can pick up bits of lore and research points by exploring new locations (especially dangerous ones)
            The found weapons can be very powerful. But you need to find the weapon, and understand enough technology to get it working
            Giant death star level gun
            Planetary shield
            Portable fleet shield
            Wormhole generator - teleports you to a random location until you max out the research
            Perhaps this is only a feature on the perpetual universe
            Colonization of planets requires a lot of costs
            You need to defeat the existing army. As well as sending along all your civilian ships
            Have an ability to scout planets before colonization

Espionage
Ogame uses a php server. Does not use react or anything like it.
Looks like part of the Ogame site is using React and Redux, but the game itself is not.
Every time you finish a building it refreshes everything, and is pretty slow about it
Need a better overall “under construction/research” tab
Definitely include ICBMs and anti ICMBs from Ogame
For raiding people - there should be an autoraid option
Just sends enough units to mine/pick up the resources

Apeiron would be a cool name
Infinite or boundless
The apeiron.com domain is taken by some german CRE group
Apeiron.online is available

Cool animations:
HERE API has a cool planet looking animation
https://developer.here.com/

Veteran Status
Ships that survive combat get veteran status. 10% all combat improvements per level (maybe 3 levels)
