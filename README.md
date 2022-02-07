Deciding on an appropriate architecture when dealing with components, their state, their styling, their functionalities.

Separation of concern
Scalability

# Css

## Architecture

In the spirit of separation of concern and reusable self contained components, Css should strive to be contained to the component itself and not rely on external file.
That does not mean (unfortunately?) that styling will only happen in the stylesheet: props driven styles and theming make that impossible.
What about Css variables then? They are practical in the sense that we can group for example all colors in one place, and then affect all our components from one place.
How much do we make things tweakable too? When is it going too far? You can make a component go wild and be able to do everything, but you end up also having to pass a mountain of props, which makes components look really busy..
Finding the right balance is an art!

## Using Styled Components:

Pros:
1- Allows to remove the styles from the components itself: all classes disappear, but you still have to pass props
every now and then.
2- Props driven styles without using ugly string interpolation.
3- Theming.

Cons:
1- Since you replace your jsx tag with the styled variable, it can makes the reader think that you are dealing with a component. That could confuse people?
Solution: Maybe possible to change color with an extension? (made a little research without success).

```javascript
<div className="component-container"></div>
/* Becomes */
<ComponentContainer></ComponentContainer>
/* Which may or may not look more readable depending on people's taste */
```
