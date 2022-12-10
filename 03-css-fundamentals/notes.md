Here I copied the final code of this section.

# Classes vs. IDs
Usually in the real world, we never muse ids. We always use classes because by using classes we are prepared for the future, i.e. maybe in the future we will want to add another element with the exact same styling, and we would already have a class for that. So we simply avoid this by ALWAYS USING CLASSES (even if we use that class only once)

# Margin collapsing
when we have two margins that occupy the same space, only one of them is actually visible on the page, and that is usually the larger of the two.

# Different types of boxes
- inline boxes == boxes that occupy exactly the space that they need for their content (default elements: a, img, strong, em, button, ...)
- block-level boxes or block-level elements == boxes that occupy all the horizontal space that they can and create line breaks after them (they cannot be side by side with one another) (default elements: body, main, header, footer, section, nav, aside, div, h1-h6, p, ul, ol, li,...)

NB the box model applies to block level elements, whereas the same is not true for inline elements: the height and width properties for inline elements do not have any effect, and headings and margins are only applied horizontally (i.e. on left and right, but not on the top or bottom) NB this is VERY IMPORTANT

NB with CSS we can change from inline boxes to block-level boxes, and we can do that with **display: block**; we can transform any block level element to an inline element with **display: inline**

NB most of the time we will not edit the display property, and simply use the predefined box type because by default they make sense. Howver we can set the display property to block if for example we want to make a small inline element occupy an entire line (which sometimes need in he real world). Then the other way around, sometimes we don't want a block level element to push all the other elements into a new line. So, basically, we don't always want them to occupy all the available blank space that there is to fill. And so, in that case, we can set them to an inline element or, probably even more useful, we can set them to an inline block element because then we can still apply the box model as usual.

# Positioning modes
NB `position: absolute` use this for single elements like this button or other small things; but in the real world you should not use it to position the menu on the top of the page, or the e.g. author image anywjere on the page: for these things we use specal techniques for building layouts

# Pseudo-elements
pseudo elements are elements that don't exist in the HTML bu that we can select and style in CSS.

e.g. you can select the very first letter of a paragraph a style it differently.
`h1::first-letter`

**NB pseudo-classes are written with just one colon `:`, and pseudo-elements are written with two colons `::`**

- `::first-letter`
- `::first-line`
- `h3 + p` adjacent sibling == sibling that is the very next element ==> the p element that is the exact next sibling of h3
- `::after` and `::before` these are the most used and important pseudo elements; `::after` creates a pseudo element that will automatically be the very last child of the selected element (h2::after will create a last pseudo element) and `::before` creates a pseudo element that is the very first child of the selected element (NB if you use position:absolute it does not matter if you create it with ::after or ::before)
```
h2::after {
  content: "HALLOOO"
}
```
# Debugging
- HTML validator online if you find bugs in the HTML https://validator.w3.org/
- diffchecker to find differences between two texts / HTML https://www.diffchecker.com/
- CSS BEST PRACTICE: KEEP YOUR SELECTORS SIMPLE!!!