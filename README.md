<h1>General</h1>

This is my website. It is hosted by Github.

It is orginized by having a "index.html" at the front that links to projects in "Projects". "Global Refs" are JS and CSS files that are commanly used, and linked to projects when applicable.

<h1>File Structure (Old)</h1>

<code style="white-space: pre;">

┌─ Global Ref *- Files used by many HTML files*
│  ├─ AreFilesLinked.js *- Sets link warning's disp to 'none'*
│  ├─ Chapter.js *- Sets up and gives functions for chapter like navigation*
│  ├─ Main.js *- Basic JS ran on most HTML files (such as load animation)*
│  └─ MainStyle.css *- Basic CSS used on most HTML files*
├─ Projects
│  └─ *Project - Project Name*
│     ├─ References *- Files linked/referenced in HTML files*
│     │  ├─ *Folder - Other folders*
│     │  ├─ Icon.png
│     │  ├─ Main.js *- JS ran on all HTML files in the Project*
│     │  ├─ MainStyle.css *- CSS linked on all HTML files in the Project*
│     │  └─ *File.ext - Other files*
│     ├─ index.html *- Project's home page*
│     └─ *page.html - Other HTML pages*
├─ References *- Files linked/referenced in home page*
│  ├─ Icon.png
│  ├─ Main.js *- JS ran on home page*
│  └─ MainStyle.css *- CSS linked on home page*
├─ HTML Template.py *- Explained below*
├─ README.md *- This file!*
├─ Template.html *- Explained below*
└─ index.html *- Home page*

</code>

<h1>File Structure (New)</h1>

<code style="white-space: pre;">

Structured so that it can by copied to run on a Raspberry Pi

┌─ polls/templates/polls *- where .html files are stored*
│  ├─ *Project - Project Name*
│  │  ├─ index.html *- Project's home page*
│  │  └─ *page.html - Other HTML pages*
│  ├─ HTML Template.py *- Explained below*
│  ├─ index.html *- Home page*
│  └─ Template.html *- Explained below*
├─ staticfiles *- where all other files are stored*
│  ├─ Global Ref *- Files used by many HTML files*
│  │  ├─ AreFilesLinked.js *- Sets link warning's disp to 'none'*
│  │  ├─ Chapter.js *- Sets up and gives functions for chapter like navigation*
│  │  ├─ Main.js *- Basic JS ran on most HTML files (such as load animation)*
│  │  └─ MainStyle.css *- Basic CSS used on most HTML files*
│  └─ *Project - Project Name, includes home page*
│     ├─ *Folder - Other folders*
│     ├─ Icon.png
│     ├─ Main.js *- JS ran on all HTML files in the Project*
│     ├─ MainStyle.css *- CSS linked on all HTML files in the Project*
│     └─ *File.ext - Other files*
└─ README.md *- This file!*

</code>

<h1>Template</h1>

"HTML Template.py" finds all the HTML files in "Projects" using `os.walk`. It then reads "Template.html".

"HTML Template.py" finds all the sections, starting with commented 'Start' and ending with commented 'End'. It replaces each one based on order of appearance.

The Pyhton file will not affect the following files (either due to being in the wrong directory or not having template syntax setup):
*   "index.html"
*   "Projects/Clock/index.html"
*   "Projects/Resume/index.html"
