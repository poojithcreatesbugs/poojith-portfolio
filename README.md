# Poojith Pinnamaraju — Portfolio

A multi-page editorial portfolio built with vanilla HTML, CSS, and JavaScript.

## Pages
- `index.html` — Main hub with hero, about, stats, contact
- `professional.html` — Career timeline, skills, certifications
- `author.html` — The Non-Stop Rollercoaster + research papers
- `anchor.html` — Full anchoring journey with photos + volunteering
- `traveller.html` — Travel destinations gallery

## Adding Photos

### Profile photo (index.html About section)
Place your photo at: `assets/images/shared/profile.jpg`  
Then uncomment the `<img>` tag in index.html about section.

### Travel photos (traveller.html)
Place photos in `assets/images/shared/` and replace the placeholder divs:
```html
<!-- Replace this: -->
<div class="dest-placeholder">...</div>
<!-- With this: -->
<img class="dest-img" src="assets/images/shared/newyork.jpg" alt="New York">
```

Destination filenames to use:
- newyork.jpg, washington.jpg, northcarolina.jpg
- nepal.jpg, auli.jpg, badrinath.jpg, rishikesh.jpg
- mumbai.jpg, delhi.jpg, hyderabad.jpg, bhubaneswar.jpg, puri.jpg

## Deployment (GitHub Pages)
1. Push all files to your repo
2. Go to Settings → Pages → Source: Deploy from branch → main → / (root)
3. Your site will be live at `https://poojithcreatesbugs.github.io/poojith-portfolio`
