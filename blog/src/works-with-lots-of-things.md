title: Another Blog
description: SOmething else here
date: 2/18/2022
metaImage: cat.jpeg
siteName: rysolv
url: https://rysolv.com/blog
@@@

## I probably need one with some images to demo

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
