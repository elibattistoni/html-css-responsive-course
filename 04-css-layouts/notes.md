# Page layout and component layout

Layout == the way text, images, and other content, is placed and arranged on a webpage; the layout gives the page a visual structure, into which we place our content.

Building a layout == arranging page elements into a visual structure, instead of simply having them placed one after another (normal flow)

**PAGE LAYOUT** == laying out the elements, i.e. the big pieces of content inside of a webpage. But big pages layout are made up of components; and these components need to have some kind of layout themselves, because they are made out of smaller pieces of content, which also need to be arranged in some way (i.e. components themselves have also a layout **COMPONENT LAYOUT**)

## 3 techniques for building with CSS:
1. using **float layouts** ==> it is the old way of building layouts using the float CSS property (still used, but getting outdated fast). These types of layouts are getting replaced by newer technologies like Flexbox and CSS Grid
1. using **flexbox** ==> it is the modern way of laying out elements in a 1-dimensional row using floats (perfect for **component layouts**)
1. using **CSS Grid** ==> other modern way; with it we can build complete two dimensional layouts (perfect for big page layouts and more complex components)