# Frontend Wonderland v2 <!-- omit in toc -->

# Table of content <!-- omit in toc -->

- [1. Motivation](#1-motivation)
- [2. Motivation for a V2](#2-motivation-for-a-v2)
- [3. Roadmap](#3-roadmap)
- [4. Packages](#4-packages)
  - [4.1. Using Styled Components:](#41-using-styled-components)

# 1. Motivation

I was looking for a portfolio project that would allow me to:

1. Practice with html, css, js and react
2. Be big enough (but not too much) to have to deal with scaling problematics, and imagine how i would deal with it in the context of teamwork.
3. Start a conversation in my job search

Moreover, having articles and content about web devlopment itself makes me deepen my understanding of it by writing articles and creating "cheat sheets".

# 2. Motivation for a V2

As time and knowledge grew in the past weeks, it became evident that the code of the v1 was very redundant and needed a solid brushup.
As this website includes tons of props driven styles, I decided to add styled components, which adds a very simple way to do so.

V1 Here: https://github.com/Gynko/mywebsite

# 3. Roadmap

1. Finishing the flexbox cheatsheet (apart from the flex-grow property which requires a little extra work).
2. Adding a component that allows to display code, like github.
3. Write a couple of articles about javascript: types, coercion, scope, closures, patterns, async
4. Learn and add Typescript
5. Learn and add NextJs?

# 4. Packages

## 4.1. Using Styled Components:

Pros:

- Allows to remove all the styling that is not prop driven from the component.
- Props driven style are easy to set
- NO MORE FUNKY CLASS NAMING HEADACHES

```javascript
<div className="component-container"></div>
/* Becomes */
<ComponentContainer></ComponentContainer>
/* Which may or may not look more readable depending on people's taste and habits :) */
```

Cons:

- Since you replace your jsx tag with the styled variable, it can make the reader think that you are dealing with a classic jsx component. That may have an impact on readability in pages that are component heavy, and confuse people used to pure css.
