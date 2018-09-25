// Head funziona come Helmet e serve a settare l'Head di una pagina
import Head from '@zeit/next-preact'
// Head funziona come il Link del router e serve a settare l'Head di una pagina
import Link from 'next/link'
import { Button } from 'semantic-ui-react'

// il css va importato in ogni pagina dove server
import '../styles/base.scss'
import '../styles/style.css'
import 'semantic-ui-css/semantic.min.css'

// index.js viene automaticamente messo come home, tutti gli altri component 
// corrispondono ad un link in base al loro nome
const Home = (props) =>
    <div>
        <Head>
            <title>Home</title>
        </Head>

        <Link href='/about'>
            <Button>Vai ad About</Button>
        </Link>
        <Link href='/multi-component'>
            <Button>Vai alla pagina con più parole nel link e component importato</Button>
        </Link>
        <h1 className='example-css'>H1 stylato con css normale</h1>
        <h1 className='example-scss'>H1 stylato con scss normale</h1>
    </div>

export default Home

