title: markdown ssg
description: Making a stupid simple static site generator
date: 2/18/2022
image: cat.jpeg
siteName: rysolv
url: rysolv.com
@@@

## Writing markdown for fun and profit

I'm a blog written in markdown. I can do lots of cool things.

Are the paragraphs too close now?

### smaller headers

We can make lists:

-   something
-   like
-   this

what does code look like?

```
1   // im a block of code
2   // hello world!
3   const whatever = () => {
4       console.log('Ooh nice indentions');
5   }
```

There's even some table functions

| Syntax    | Description |
| --------- | ----------- |
| Header    | Title       |
| Paragraph | Text        |

I probably need one with some images to demo
SOmething sometthing something

Why markdown?

Well I'm in a code editor all day anyway. I like the syntax.

And the indention is really nice. Especially when I want to provide code snippits. Which I do a lot of when I write tutorials. Since I'm staying in VS code the whole time I can just copy over snippits, and I don't have to worry about the formatting being wrong.

```
// Convert Meta tags to object
const metaObj = meta.split(/\n/).reduce((acc, el) => {
if (el.length) {
const [key, value] = el.split(':');
acc[key] = value.trim();
}
return acc;
}, {});
```

It's not the perfect site generator. But I think it's the best you can do in 100 lines of js
