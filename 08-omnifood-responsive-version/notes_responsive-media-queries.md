# How media queries work

Desktop-first approach: you are going to target max-width

Mobile-first approach: you are going to target min-width

## Media query with the property max-width

example: you want to apply a certain style for the range between 0 and 600px. we could write a media query like this:

```
@media (max-width: 600px)

```
"maximum width at which the media query still applies"

This media query checks whether the current viewport width is smaller or equal than 600px. If it is, then the CSS code inside this media query will apply.


Inside these media queries we simply override some specific parts of the global CSS, i.e. the code that is outside of any media query, but the rest of the global code still applies.

MEDIA QUERIES = tools for basically overriding specific parts of our CSS at certain viewport widths


imagine that we have another media query which covers the range between 0 and 1200px.

```
@media (max-width: 600px)

```

Imagine that a certain phone has a width of 400px: which media query applies?
Both apply, because both are true.
IMPORTANT if you have conflicting css declarations inside the media queries (which is usually the case), then the one which appears LAST in the code is the one that will apply (last meaning in terms of cascading, i.e. after, the last one).

If you have a phone with width 1000ps, then the second media query will apply.

# Breakpoints: what they are and how to select them

Breakpoints = viewport widths at which we want our design to change, i.e. the pixel values that we want to put in our media queries

there are 2 strategies for selecting media queries:
1. the old one, based on populare devices ==> **BAD STRATEGY!!**
2. **GOOD STRATEGY** the strategy based on screen width ranges: we look at the most used widths for different categories of devices (phones, tablets, desktop computers) and then we try to group them together in some logical way to then pick our breakpoints from that ==> we set breakpoints between similar device sizes
   - 300px - 500px ==> most phones are between 300 and 500px ==> breakpoint at 600px
   - 600px - 900px ==> most tablets are between 600 and 900px ==> breakpoint at 900px
   - 900px - 1100px ==> most landscape tablets are between 900 and 1100px ==> breakpoint at 1200px
   - bigger than 1200px ==> most desktop computers
3. **PERFECT STRATEGY** setting breakpoints at places where the design breaks down: in this strategy we can try to completely ignore devices and device categories, and only look at our content and our design:
    - we begin at one screen size (either desktop or mobile size) then we start decreasing our screen width (or increasing for mobile-first)
    - as soon as the design breaks (i.e. when the design is no longer acceptable), we create a new breakpoint, and that's it
So with this strategy we put breakpoints whenever the design starts to look weird, out of place, and try not to think about devides at all.

We will use this perfect strategy together with the good strategy (because it's quite hard to implement the perfect strategy completely without thinking about devices)




IMPORTANT: create a new file for the media queries!!!