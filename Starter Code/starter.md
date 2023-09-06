[Figma File](https://www.figma.com/community/file/1268100719044054170)

## HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>NFTHUB</title>
    <link rel="shortcut icon" href="images/favicon.png" type="image/x-icon" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css"
    />

    <link rel="stylesheet" href="style.css" />
  </head>

  <body>
    <!-- Script-start -->
    <script
      type="module"
      src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
    ></script>
    <script
      nomodule
      src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
    ></script>
    <script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>
    <script src="script.js"></script>
    <!-- Script-end -->
  </body>
</html>
```

## CSS

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap');
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style-type: none;
  text-decoration: none;
}

:root {
  --scrollbar-track: #f1f1f1;
  --scrollbar-thumb: #885af3;
  --text-dark: #0f051d;
  --text-light: #7b7583;
  --white: #fff;
  --gradient: linear-gradient(7deg, #2600fc 0%, #ff00ea 100%);
  --border: rgba(131, 131, 131, 0.267);
  --gr-bg: #872bff;
  --input-bg: rgba(0, 0, 0, 0.05);
  --back-to-top: #e6e6ff;
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}

body {
  font-size: 1.6rem;
  font-family: 'Inter', sans-serif;
  overflow-x: hidden;
}

::-webkit-scrollbar {
  width: 1rem;
}

::-webkit-scrollbar-track {
  background: var(--scrollbar-track);
}

::-webkit-scrollbar-thumb {
  background: var(--scrollbar-thumb);
  border-radius: 1rem;
}

.container {
  max-width: 144rem;
  margin: 0 auto;
  padding: 0 1rem;
}
```
