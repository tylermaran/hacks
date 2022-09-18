Here's a little fiddle
I think that instead of the xy corresponding to pixels, they should
correspond to flat values (i.e. 1,1; 1,2; etc.) and those values
get mapped to a grid.

Also you should have a wall selector, and you can hotkey (or mousewheel)
through different wall settings (corner, flat, left, bottom, etc.)

Maybe try out this library: https://github.com/fabricjs/fabric.js

Tutorial: https://www.creativebloq.com/html5/build-tile-based-html5-game-31410992

Movable grid: https://stackoverflow.com/questions/53310138/creating-a-draggable-and-scaleable-grid-in-html5
Non-blurry canvas grid: https://xon5.medium.com/flexible-canvas-grid-without-blurred-lines-907fcadf5bfc

# DB Design

```
tiles: {
    id: ID
    image: ID references images table
    type: ID references tile_types table
}

images {
    id: ID
    url: VARCHAR(64) (ex: s3.aws.com/grass_block)
}

tile_positions {
    map: ID references maps table
    tile_id: ID references tiles table
    x: INT
    y: INT
}

maps {
    id: ID
}

tile_types {
    id: ID
    key: VARCHAR 32 (ex: 'stone_wall')
    name: VARCHAR 32  (ex: 'Stone Wall')
    properties: ID references tile_properties table
}

tile_properties {
    id: ID
    height: INT
    opaque: BOOLEAN
    passable: BOOLEAN
    hidden: BOOLEAN
    interactive: BOOLEAN
    action: ID references actions table
}

-- actions may be a little overzealous at this point,
-- are we building a map generator or a video game??
actions {
    id: ID
    key: VARCHAR 32 (ex: 'open')
    name: VARCHAR 32  (ex: 'Open Door')
    response: TEXT ("The door creaks open")
}
```
