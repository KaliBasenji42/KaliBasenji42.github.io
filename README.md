<h1>General</h1>

<p style="text-indent: 1rem;">This is my website. It is hosted by Github.</p>
<p style="text-indent: 1rem;">It is orginized by having a index at the front that links to projects in the Project folder. Global Refs are .js and .css files that are commanly used, and linked to projects when applicable.</p>

<h1>Template</h1>

<p style="text-indent: 1rem;">The python finds all the .html files in the directory 'Projects' using 'os.walk'. It then reads 'Template.html'.</p>
<p style="text-indent: 1rem;">The Pyhton file finds all the sections, starting with commented 'start' and ending with commented 'end'. It replaces each one based on order.</p>
<p style="text-indent: 1rem;">The Pyhton file will not affect the following files (either due to being in the wrong directory or not having template syntax setup):</p>
<ul>
<li>'index.html'</li>
<li>'Projects/Clock/index.html'</li>
<li>'Projects/Resume/index.html'</li>
</ul>
