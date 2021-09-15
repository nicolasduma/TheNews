import { Helmet } from 'react-helmet'

export function Head({ children, ...rest }) {
  return <Helmet {...rest}>{children}</Helmet>
}
