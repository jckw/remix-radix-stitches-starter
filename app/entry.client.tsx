import { hydrate } from 'react-dom'
import { RemixBrowser, RemixBrowserProps } from 'remix'

function EntryClient(props: RemixBrowserProps) {
  return <RemixBrowser {...props} />
}

hydrate(<EntryClient />, document)
