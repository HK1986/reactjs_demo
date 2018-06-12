import NextHead from 'next/head'

const Head = (props) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{props.title || 'Demo'}</title>
    <meta name="description" content={props.description || ''} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Zilla+Slab:400,700" />
    <link rel="stylesheet"  rel='stylesheet' type='text/css'  href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.1/css/bootstrap.css" />
  </NextHead>
)

export default Head