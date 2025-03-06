// Variables and Constants

let chapter = 0;

for(i = 0; i < chapters.length; i++) {
  
  let current = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
  
  if(chapters[i] == current) chapter = i;
  
}

// Functions

function createNavArrows() {
  
  let prevIndex = chapter - 1;
  let nextIndex = chapter + 1;
  
  let first = '<a class="navArrow" title="First (A)" href="' + chapters[0] + '">&#10913</a>'
  let prev = '<a class="navArrow" title="Prev (a)" href="' + chapters[prevIndex] + '"><</a>'
  let next = '<a class="navArrow" title="Next (d)" href="' + chapters[nextIndex] + '">></a>'
  let last = '<a class="navArrow" title="Last (D)" href="' + chapters[chapters.length - 1] + '">&#10914</a>'
  
  if(prevIndex < 0) {
    first = '<div class="navArrow" title="[First Page]">&#10913</div>';
    prev = '<div class="navArrow" title="[First Page]"><</div>';
  }
  
  if(nextIndex >= chapters.length) {
    next = '<div class="navArrow" title="[Last Page]">></div>';
    last = '<div class="navArrow" title="[Last Page]">&#10914</div>';
  }
  
  let HTMLStr = '<div class="navigation">' + first + prev + next + last + '</div>';
  
  for(let i = 0; i < body.length; i++) {
    body[i].innerHTML += HTMLStr;
  }
  
  document.addEventListener('keypress', function() {
    if(event.key == "a" && chapter > 0) window.location = chapters[prevIndex];
    if(event.key == "d" && chapter < chapters.length - 1) window.location = chapters[nextIndex];
  });
  
}

function TOCList() {
  
  let HTMLStr = '<ul>';
  
  for(let i = 0; i < chapters.length; i++) {
    HTMLStr += '<li><a href="' + chapters[i] + '">' + chapterNames[i] + '</li>';
  }
  
  HTMLStr += '</ul>';
  
  for(let i = 0; i < body.length; i++) {
    body[i].innerHTML += HTMLStr;
  }
  
}

// Set Elements

for(let i = 0; i < head.length; i++) head[i].innerHTML += '<title>' + chapterNames[chapter] + '</title>';

// Events

document.addEventListener('keypress', function() {
  shortcut("A", "A", chapters[0]);
  shortcut("D", "D", chapters[chapters.length - 1]);
});
