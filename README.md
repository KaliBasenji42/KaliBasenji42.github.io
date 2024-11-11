<style>
  p {
    text-indent: 1rem;
  }
</style>

<h1>General</h1>

<p>This is my website. It is hosted by Github.</p>
<p>It is orginized by having a index at the front that links to projects in the Project folder. Global Refs are .js and .css files that are commanly used, and linked to projects when applicable.</p>

<h1>Template</h1>

<p>The python finds all the .html files in the directory 'Projects' using 'os.walk'. It then reads 'Template.html'.</p>
<p>The Pyhton file finds all the sections, starting with commented 'start' and ending with commented 'end'. It replaces each one based on order.</p>
<p>The Pyhton file will not affect the following files (either due to being in the wrong directory or not having template syntax setup):</p>
- 'index.html'
- 'Projects/Clock/index.html'
- 'Projects/Resume/index.html'
