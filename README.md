<h1>General</h1>

This is my website. It is hosted by Github.

It is structured so that it can by copied to host on a Raspberry Pi (Ignore the root index.html when coping).

<h1>File Structure</h1>

<code style="white-space: pre; overflow-x: scroll;">

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
├─ README.md *- This file!*
└─ index.html *- pages landing page. Ignore when coping to Raspi*

</code>

<h1>Template</h1>

"HTML Template.py" finds all the HTML files in "Projects" using `os.walk`. It then reads "Template.html".

"HTML Template.py" finds all the sections, starting with commented 'Start' and ending with commented 'End'. It replaces each one based on order of appearance.

The script will also find a variable stored as '<Project>' and replace it with the project name based on the file path.

The Pyhton file will not affect the following files (due to not having template syntax setup or being in the wrong directory):
*   "polls/templates/polls/Home/index.html"
*   "polls/templates/polls/Clock/index.html"
*   "polls/templates/polls/Resume/index.html"
*   "index.html"
