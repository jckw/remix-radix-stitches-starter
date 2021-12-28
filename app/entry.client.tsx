import { hydrate } from 'react-dom'
import { RemixBrowser, RemixBrowserProps } from 'remix'

import globalStyles from '~/styles/globalStyles'

function EntryClient(props: RemixBrowserProps) {
  globalStyles()
  return <RemixBrowser {...props} />
}

hydrate(<EntryClient />, document)
