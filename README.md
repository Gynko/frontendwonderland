# Frontend Wonderland v2 <!-- omit in toc -->

# Table of content <!-- omit in toc -->

- [Motivation behind Frontend Wonderland](#motivation-behind-frontend-wonderland)
- [1. Motivation for a V2](#1-motivation-for-a-v2)
- [2. Roadmap](#2-roadmap)
  - [2.1. Using Styled Components:](#21-using-styled-components)

# Motivation behind Frontend Wonderland

I was looking for a portfolio project that would allow me to:

1. Practice with html, css, js and react
2. Be big enough (but not too much) to have to deal with scaling problematics

Moreover, having a topic about web devlopment makes me deepen my understanding of it.

# 1. Motivation for a V2

As time and knowledge grew in the past weeks, it became evident that the code of the v1 was very redundant and needed a solid brushup.
As this website includes tons of props driven styles, I decided to add styled components, which adds a very simple way to do so.

# 2. Roadmap

1. Finishing the flexbox cheatsheet (apart from the flex-grow property which requires a little extra work).
2. Adding a component that allows to display code, like github.
3. Write a couple of articles about javascript: types, coercion, scope, closures, patterns, async
4. Learn and add Typescript
5. Learn and add NextJs?

## 2.1. Using Styled Components:

Pros:

- Allows to remove all the styling that is not prop driven from the component.
- Props driven style are easy to set
- NO MORE CLASS NAMING HEADACHES

Cons:

- Since you replace your jsx tag with the styled variable, it can make the reader think that you are dealing with a classic jsx component. That could confuse people?

```javascript
<div className="component-container"></div>
/* Becomes */
<ComponentContainer></ComponentContainer>
/* Which may or may not look more readable depending on people's taste and habits :) */
```
