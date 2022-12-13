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