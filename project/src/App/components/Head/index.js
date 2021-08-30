import { Helmet, HelmetProvider } from 'react-helmet-async'

export function Head({ children, ...rest }) {
  return (
    <HelmetProvider>
      <Helmet {...rest}>{children}</Helmet>
    </HelmetProvider>
  )
}
