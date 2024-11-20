<h1>General</h1>

This is my website. It is hosted by Github.

It is orginized by having a "index.html" at the front that links to projects in "Projects". "Global Refs" are JS and CSS files that are commanly used, and linked to projects when applicable.

<h1>File Structure</h1>

<code>

┌─ Global Ref *- Files used by many HTML files* 
│  ├─ AreFilesLinked.js *- Checks if files are linked, if so sets warning's disp to 'none'* 
│  ├─ Chapter.js *- Sets up and gives functions for chapter like navigation, requires some set up on both ends* 
│  ├─ Main.js *- Basic JS ran on most HTML files (such as load animation)* 
│  └─ MainStyle.css *- Basic CSS used on most HTML files* 
├─ Projects 
│  └─ *Project* *- Project Name* 
├─ HTML Template.py *- Explained Below* 
├─ README.md *- This File!* 
├─ Template.html *- Explained Below* 
└─ index.html *- Home Page* 

</code>

<h1>Template</h1>

"HTML Template.py" finds all the HTML files in "Projects" using `os.walk`. It then reads "Template.html".

"HTML Template.py" finds all the sections, starting with commented 'Start' and ending with commented 'End'. It replaces each one based on order of appearance.

The Pyhton file will not affect the following files (either due to being in the wrong directory or not having template syntax setup):
*   "index.html"
*   "Projects/Clock/index.html"
*   "Projects/Resume/index.html"
