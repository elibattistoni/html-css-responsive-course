# Responsive Design Principles
There are essentially 4 big ingredients to responsive design:
1. Fluid Layouts
2. Responsive Units
3. Flexible Images
4. Media Queries

# 1. Fluid Layouts
- they allow the webpage to adapt to the current viewport width (or even height)
- flexbox and grid are fluid by default (therefore we have already seen it a few times)
- we can easily create fluid layout simply by using the percentage (% or vh /vw ) units (instead of px) for all elements that should adapt to the viewport (NB usually layout)
- use max-width instead of width

# 2. Responsive Units
- use rem unit instead of pixel for most of the lengths that are in our CSS (they make it really easy to scale the entire page up or down automatically)
- useful trick: set 1rem to 10px because this makes it very easy for us to then calculate this length

# 3. Flexible and fluid images
- by default images do not scale automatically as we change the viewport
- always use % for image dimensions, together with the max-width property

# 4. Media Queries
- media queries bring all the other ingredients together and bring responsive sites to life (without media queries, responsive web design would not work, because media queries allow us to change styles on certain viewport widths, which we call breakpoints)
- basically, they allow us to create different versions of a website for different types of devices because different types of devices have different widths
- NB media queries alone are useless: we need to start creating a fluid layout from the beginning, and the same is true for responsive units and flexible images
- we usually write media queries only at the end of building a certain page or a certain component

##########################################################################################################################################################################
##########################################################################################################################################################################
##########################################################################################################################################################################

# How rem and max-width work