# General

This is my website. It is hosted by Github.

It is structured so that it can by copied to host on a Raspberry Pi using Jekyll. [How to setup Jekyll](https://raspberrypi-guide.github.io/other/installing-jekyll-webserver).

# File Structure

<pre style="white-space: pre; overflow-x: scroll;">
.
├── assets <i>- Files used by many HTML files</i>
│   ├── areFilesLinked.js <i>- Sets link warning's disp to 'none'</i>
│   ├── chapter.js <i>- Sets up and gives functions for chapter like navigation</i>
│   ├── embedHTML.js <i>- Allows for embedding of external HTML</i>
│   ├── icon.png <i>- Default icon</i>
│   ├── main.js <i>- Basic JS ran on most HTML files (such as load animation)</i>
│   ├── mainStyle.css <i>- Basic CSS used on most HTML files</i>
│   ├── orbitDiagram.js <i>- Codes for a star system representation graphic</i>
│   └── wordCount.js <i>- Declares word count functionality</i>
├── assetsHome <i>- Files used by index/home page</i>
│   ├── main.js <i>- JS for home page</i>
│   └── mainStyle.css <i>- CSS for home page</i>
├── download <i>- Folder containing download-ables</i>
│   └── <i>downloads</i>
├── projects <i>- Folder for Projects</i>
│   └── <i>project - Project name, so it may be easily copied</i>
│       ├── assets
│       │   ├── <i>folder - Other folders, such as "images/"</i>
│       │   ├── icon.png <i>- Icon image</i>
│       │   ├── main.js <i>- JS ran on all HTML files in the Project</i>
│       │   ├── mainStyle.css <i>- CSS linked on all HTML files in the Project</i>
│       │   └── <i>file.ext - Other files</i>
│       ├── <i>folder - Page subfolder</i>
│       ├── index.html <i>- Project's home page</i>
│       └── <i>page.html - Other HTML pages</i>
├── 404.html <i>- Served when HTML file is not found</i>
├── LICENSE.md
├── README.md <i>- This file!</i>
├── _config.yml <i>- Jekyll config</i>
├── index.html <i>- Home page</i>
├── kill_jekyll.sh <i>- Kills server (Raspi)</i>
├── restart_jekyll.sh <i>- Restarts server (Raspi)</i>
├── setup.py <i>- Explained below</i>
├── status.txt <i>- Used to return server status</i>
├── template.html <i>- Explained below</i>
└── warning.json <i>- Used to display website wide message (EX: Restart Warning)</i>
</pre>

# Template

"setup.py" finds all the HTML files in "projects" using `os.walk`. It then reads "template.html".  

"setup.py"'s *template* command finds all the sections, starting with commented 'Start' and ending with commented 'End'. It replaces each one based on order of appearance.

The script's *template* command will also find a variable stored as '{project}' and replace it with the project name based on the file path (This feature is currently unused).  

The script file will not affect the following files (due to not having template syntax setup or being in the wrong directory):  
* "index.html"

"setup.py" also has a find and replace function.  