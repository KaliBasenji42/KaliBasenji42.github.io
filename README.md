<h1>General</h1>

This is my website. It is hosted by Github.

It is orginized by having a "index.html" at the front that links to projects in "Projects". "Global Refs" are JS and CSS files that are commanly used, and linked to projects when applicable.

<h1>Template</h1>

The python file finds all the HTML files in "Projects" using `os.walk`. It then reads "Template.html".

The Pyhton file finds all the sections, starting with commented "Start" and ending with commented "End". It replaces each one based on order.

The Pyhton file will not affect the following files (either due to being in the wrong directory or not having template syntax setup):
*   "index.html"
*   "Projects/Clock/index.html"
*   "Projects/Resume/index.html"
