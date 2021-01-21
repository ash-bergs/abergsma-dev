App - Switchboard 

File preceded with _ = partial 

## Typography 

Typography controls the type, of course. I have done my best to keep all styling related to text's color, line-height, font-family, and etc together. This doesn't mean there aren't occassions that I've confused myself and applied these styles in the `component_styles` folder instead. I'll be doing my best to relocate any lost typeface utility classes. 

- Main font family: Lato, 400
I choose this font because it's a smooth, easy on the eyes sans-serif that looks nice with some added letter-spacing. It has 10 weights, meaning it's very forgiving in cases that we need a slightly thicker typeface. It's name in Polish means "summer", and it pairs well with the summery, sunflower theme of the page as a whole. 

- Special/heading font family: Josefin Sans
I liked this font for its bold, geometric feel. It's easy to read and see, and is a variant font. With the Lato font I feel they provide a reliable, but inviting feel. Much as I would want to impress upon an employer. 

## Media Styles: 

How do I want to approach the media styles? 

1. The h2, with className "navAnchor" disappears at mobile size 
2. My name, the main title elements on the page, should stack on top of each other in the center of the header, instead of staggering 
3. FlowerCard component is not visible
    - A note on this: Should I do this using `display: none` or should I do this with conditional rendering in the component that tests for screen width? 
4. Nav becomes a clickable drop down unit? I'm not sure if I want to bother with all of that, especially for an easily navigable site. 

