# 2024 Demos

## Leaflet js

[Leaflet.js an open-source JavaScript library for mobile-friendly interactive map](<https://leafletjs.com/>)

## iykyk

`AIzaSyAOKsQNZ3FsAta_dB9UhkrUv93M9_Xc3jA`

***make sure you are on the live server when checking if it works***

## maps api

<https://developers.google.com/maps/documentation/javascript/add-google-map-wc-tut>

## object-fit

[object-fit on mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)

## PhotoSwipe

[PhotoSwipe](https://photoswipe.com/)

## headless wordpress

[Wordpress API](https://developer.wordpress.org/rest-api/reference/)

[view demo file](/demos-24/headless.html)

Change permalinks setting if API is not visible, go to `Dashboard > Settings > Permalinks` and set it to `Post Name` (would work, or try other settings and check the path below).

Path to wordpress API: `{headless-wordpress-folder}/wp-json/wp/v2/{pages/posts/etc}`
Example: `https://ngy.582mi.com/headless/wp-json/wp/v2/posts`

## stripe payment processing

[Stripe API](https://docs.stripe.com/api)

## react

Notes

[Quick Start](https://react.dev/learn)

[Add React to an Existing Project](https://react.dev/learn/add-react-to-an-existing-project#using-react-for-a-part-of-your-existing-page)

[Try React locally](https://react.dev/learn/installation#try-react-locally)

[Writing Markup with JSX](https://react.dev/learn/writing-markup-with-jsx)

[Rendering Lists](https://react.dev/learn/rendering-lists)

``` html
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script async src="https://ga.jspm.io/npm:es-module-shims@1.7.0/dist/es-module-shims.js"></script>
    <script type="importmap">
    {
      "imports": {
        "react": "https://esm.sh/react?dev",
        "react-dom/client": "https://esm.sh/react-dom/client?dev"
      }
    }
    </script>
    <script type="text/babel" data-type="module">
        import React, { StrictMode } from 'react';
        import { createRoot } from 'react-dom/client';

        let App = function App() {
            return <>
                <h1>React</h1>
            </>;
        }

        const root = createRoot(document.getElementById('root'));
        root.render(
            <StrictMode>
                <App />
            </StrictMode>
        );
    </script>
```

```
let projects = [
    {
        id: 1, name: 'Project 1', description: 'Description 1', images: [
            { id: 1, src: 'https://placehold.co/600x400?text=1-1' },
            { id: 2, src: 'https://placehold.co/600x400?text=1-2' },
            { id: 3, src: 'https://placehold.co/600x400?text=1-3' },
        ]
    },
    {
        id: 2, name: 'Project 2', description: 'Description 2', images: [
            { id: 1, src: 'https://placehold.co/600x400?text=2-1' },
            { id: 2, src: 'https://placehold.co/600x400?text=2-2' },
            { id: 3, src: 'https://placehold.co/600x400?text=2-3' },
        ]
    },
    {
        id: 3, name: 'Project 3', description: 'Description 3', images: [
            { id: 1, src: 'https://placehold.co/600x400?text=3-1' },
            { id: 2, src: 'https://placehold.co/600x400?text=3-2' },
            { id: 3, src: 'https://placehold.co/600x400?text=3-3' },
        ]
    },
]
```

```
    const Project = ({ project }) => {
        return <div>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <div>
                {project.images.map(image => (
                    <img key={image.id} src={image.src} alt={project.name} />
                ))}
            </div>
        </div>
    }
```

## column

[columns](https://developer.mozilla.org/en-US/docs/Web/CSS/columns)

## grid

[Auto-fit Vs Auto-fill](https://defensivecss.dev/tip/auto-fit-fill/)

## index

Notes
