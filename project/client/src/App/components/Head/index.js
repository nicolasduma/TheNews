import { Helmet, HelmetProvider } from 'react-helmet-async'

function Head({ children, ...rest }) {
  return (
    <HelmetProvider>
      <Helmet {...rest}>{children}</Helmet>
    </HelmetProvider>
  )
}

export { Head }
export default Head
