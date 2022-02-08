# Frontend Wonderland v2 <!-- omit in toc -->

# Table of content <!-- omit in toc -->

- [1. Motivation](#1-motivation)
- [2. Motivation for a V2](#2-motivation-for-a-v2)
- [3. Roadmap of Features](#3-roadmap-of-features)
- [4. Packages](#4-packages)
  - [4.1. Using Styled Components:](#41-using-styled-components)

# 1. Motivation

During my learning journey, I took some time to "product design" a portfolio project that would allow me to:

1. Practice with Html, Css, Js and React
2. Be big enough (but not too much) to have to deal with scaling problematics
3. Be big enough to force me to wonder how i would deal with it in the context of teamwork
4. Have a topic that makes me investigate web design topics

Frontend Wonderland Checked all these boxes.

# 2. Motivation for a V2

As time and knowledge grew in the past weeks, it became evident that the code of the v1 was very redundant and needed a solid brushup.
As this website includes tons of props driven styles, I decided to add styled components, which adds a very simple way to do so.

Moreover, dynamically updating object properties linked to state allowed to greatly dry the code.

V1 Here: https://github.com/Gynko/mywebsite

# 3. Roadmap of Features

1. Adding a component that allows to display code, like github. I will revisit this draft i made: https://github.com/Gynko/ColoredCodeEditor
2. Write a couple of articles about Javascript and React: types, coercion, scope, closures, patterns, async, hooks and so on.
3. Learn and add Typescript
4. Learn and add NextJs?
5. Learn about testing, add an article

# 4. Packages

## 4.1. Using Styled Components:

🥰 Pros:

- Allows to remove all the styling that is not prop driven from the component.
- Props driven style are easy to set
- NO MORE FUNKY CLASS NAMING HEADACHES

```javascript
<div className="component-container"></div>
/* Becomes */
<ComponentContainer></ComponentContainer>
/* Which may or may not look more readable depending on people's taste and habits :) */
```

🤕 Cons:

- Since you replace your jsx tag with the styled variable, it can make the reader think that you are dealing with a classic jsx component. That may have an impact on readability in pages that are component heavy, and confuse people used to pure css.
