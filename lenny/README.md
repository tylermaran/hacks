## Lemnny

Lenny is a multipart project to play around with knowledge graphs and neural nets.

### Part 1: Personal brain mapping.

I want to use a graph database as a personal notetaking tool. This should allow me to log various people/places/events as nodes, and the connections between them as edges.

#### TODO

-   [ ] Find out how to parse subject / noun / verb / etc. out of a sentence. Likely a library.
-   [ ] Build some basic graph structure for events (i.e. went to store, ate an apple)
-   [ ] Type out freeform blobs and try to parse some sentences out of it.
-   [ ] Put together a front-end that encourages me to keep writing
-   [ ] Update the front-end to ping me for definitions (i.e. If I say "I went to walmart", it should ask for a definition or category for walmart.)

### Part 2: Lenny

Lenny will be a robot. He'll start off with part of the schema I define in Part 1, and will learn from there. Ideally I'll be able to teach him most things through a question & answer format. With Lenny able to create schemas for new terms that he doesn't know.

### Sentence structure

Ex: I went to the store

I: Person. The individual currently speaking to you.
Went: Verb. Travel. Involves at least 2 points.
To: article adjective - irrelevant
The: article adjective - irrelevant
Store: Location. Object. Place.
