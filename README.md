# Boilerplate per next-preact-styledcomponents-css-scss

perchè Next.js ?

Pro :
- Bundle e transpilazione tramite babel in automatico (come create-react-app)
- Automatico Server Side Rendering dei componenti in /pages in automatico invece di dover fare questo : https://medium.freecodecamp.org/demystifying-reacts-server-side-render-de335d408fe4
- Automatico code-splitting invece di dover fare questo https://medium.freecodecamp.org/straightforward-code-splitting-with-react-and-webpack-4b94c28f6c3f
- Niente React Router
- Ha già delle utility incorporate tipo <Link /> per il routing ed <Head /> per inserire roba nell'head dell'html

Contro :
- L'utilizzo del Redux non è così "naturale", nel senso che si può aggiungere ma non ha molto senso e/o l'utilizzo sarebbe molto limitato

Cosa ho aggiunto : 
- Preact, esattamente come React ma pesa solo 3K, si può usare seplicemente "class" per il css invece di className e this.props e this.state vengono passati automaticamente al metodo render()  https://preactjs.com/
- Loader per CSS e SCSS
- configurazione di semantic-ui (per non utilizzare il CDN)
- styled components https://www.styled-components.com/
- configurazione del server custom e del transpiler per babel
