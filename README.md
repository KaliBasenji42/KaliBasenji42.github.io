<h1>General</h1>

This is my website. It is hosted by Github.

It is structured so that it can by copied to host on a Raspberry Pi using Jekyll. [How to setup Jekyll](https://raspberrypi-guide.github.io/other/installing-jekyll-webserver).

<h1>File Structure</h1>

<code style="white-space: pre; overflow-x: scroll;">

┌─ assetsHome *- For home page*
│  ├─ icon.png
│  ├─ main.js *- JS ran on home page*
│  └─ mainStyle.css *- CSS linked on home page*
├─ assets *- Files used by many HTML files*
│  ├─ areFilesLinked.js *- Sets link warning's disp to 'none'*
│  ├─ chapter.js *- Sets up and gives functions for chapter like navigation*
│  ├─ icon.png *- Default icon*
│  ├─ main.js *- Basic JS ran on most HTML files (such as load animation)*
│  ├─ mainStyle.css *- Basic CSS used on most HTML files*
│  └─ orbitDiagram.js *- Allows for a star system representation graphic*
├─ projects
│  └─ *project - Project Name, so it may be easily copied*
│     ├─ assets
│     │  ├─ *Folder - Other folders, such as "images/"*
│     │  ├─ icon.png
│     │  ├─ main.js *- JS ran on all HTML files in the Project*
│     │  ├─ mainStyle.css *- CSS linked on all HTML files in the Project*
│     │  └─ *file.ext - Other files*
│     ├─ *Folder - Page subfolder*
│     ├─ index.html *- Project's home page*
│     └─ *page.html - Other HTML pages*
├─ index.html *- Home page*
├─ README.md *- This file!*
├─ setup.py *- Explained below*
└─ template.html *- Explained below*

</code>

<h1>Template</h1>

"HTML Template.py" finds all the HTML files in "Projects" using `os.walk`. It then reads "Template.html".

"HTML Template.py" finds all the sections, starting with commented 'Start' and ending with commented 'End'. It replaces each one based on order of appearance.

The script will also find a variable stored as '{Project}' and replace it with the project name based on the file path (Dated).

The Pyhton file will not affect the following files (due to not having template syntax setup or being in the wrong directory):
*   "projects/Resume/index.html"
*   "index.html"
