# Space Game!

No idea how to make a video game, but has that every stopped anyone before?

Starting out by collecting a list of elements the game should have (i.e the easy stuff). Then I suppose it'll be about building out an engine.

## Engine

#

It should allow for:

-   movement in 3d space
-   interactions with objects
-   collision detection

Can you make a game engine entirely out of objects at a point in space?
Reminds me a bit of early League of Legends where _everything is a minion!_

From my javascript oriented mind I'm imagining something like this

```
[{
    id: 12345,
    class: player,
    boundingBox: [geometry]
    position: [X, Y, Z],
    orientation: [0, 0, 180]
},
{
    id: 54321,
    class: ship,
    boundingBox: [geometry]
    position: [X, Y, Z],
    orientation: [0, 0, 180]
}]
```

## Cryptocurrency

#

The currency is REAL!

Everyone is mining coins in the background. And that's the currency.
To receive the currency you have to be mining it in a designated area. You'll get a higher percentage of the currency depending on how dangerous the area is:

-   Transportation runs (80%)
-   Mining asteroids (60%)
-   General labor areas (40%)
-   Safe zones (0%)

## Economy

#

Players are incentivised to spend more time in risky areas (Transportation, Mining, etc.)

## Bot api

#

Make an open botting api. And allow players to buy and sell the code as AI chips.

Ex: Mining runs

-   Travel to nearest asteroid
-   Mine until inventory full
-   Travel back to docking area

The user can buy this chip at some exchange. And have mining runs going in the background. The initial logic will be pretty dumb. So the mining runs will be vulnerable to attacks. As a result they'll need some improvements (collision avoidance, evasive actions, etc.). Users who develop these bots can sell them on the store.

Players and ships will have to have some LIDAR type data that gets fed back to the bot script.

-   Ships get radar. Which can be improved via addons (i.e. 50m, 100m, 1000m)
-   Players have vision. 180 degrees ahead.

## Mod market

#

Get people to build your graphics / aliens / ships for you!
