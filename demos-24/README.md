# 2024 Demos

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

## column

[columns](https://developer.mozilla.org/en-US/docs/Web/CSS/columns)

## grid

[Auto-fit Vs Auto-fill](https://defensivecss.dev/tip/auto-fit-fill/)

## index

Notes
