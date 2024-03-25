// eslint.config.js
import antfu from '@antfu/eslint-config'

export default antfu({
  stylistic: {
    quotes: 'single',
    typescript: true,
    overrides: {
      'style/comma-dangle': ['error', 'never']
    }
  }
})
