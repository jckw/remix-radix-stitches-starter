import { globalCss } from '~/stitches.config'

const customStyles = {
  html: {},
  body: {},
}

const styles = () => {
  globalCss(customStyles)()
}

export default styles
