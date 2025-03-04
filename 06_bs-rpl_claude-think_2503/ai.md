Make a cool looking Sci Fi dashboard UI as a replacement for bootstrap with own styles (no use of bootstrap) that has similar elements (but isn't limited to). At least add:

- page layout features
  - full width top and status bars
    - elements in the bars
      - bars can contain mixed elements: nav links, buttons, elements for status, and so on
    - 3 groups of elements: left, middle, right
    - align groups of elements with sidebar and content area
      - elements that are above/below main content area in top/status bar should move when the size of the left major sidebar changes
      - elements that are above/below the right major sidebar in top/status bar should move with that sidebar when its size changes
    - additional button for hiding left and right major sidebar
      - above the secondary right sidebar in top bar: add a button that hides the right major sidebar
    - top bar
      - has nice logo and a text on the left
  - major sidebars (wide) left and right
    - appear below/above top and status bars
    - inner layout
      - they have their own horizontal bars above and below
      - and a scrollable content area in the middle 
  - secondary right sidebar narrow: to the very right of the page with a few icons
- main content area: in between the sidebars (scrollable)
  - there may be 1 or 2 main content areas side by (make 2 and a button for hiding the right one somewhere)
  - the main content areas can be resized
  - each main content area may have their own (inner) top and status bar above and below the content
  - left main content area contains a grid
    - with widgets
  - right main content area contains some text
- controls
  - input
  - input group
  - select
  - switch
  - range control
  - buttons
  - button group
- alert
- breadcrumb
- collapse
- dropdown
- list group
- modal
- tabs
- popover
- progress
- spinner
- toast

 --

Maybe add some cool elements that are missing in this list.
