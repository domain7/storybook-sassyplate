import { storiesOf } from '@storybook/html'
import centered from '@storybook/addon-centered/html'

import '../../styles/style.scss'

storiesOf('Colours', module)
  .addDecorator(centered)
  .add('Primary', () => `
    <ul>
      <li>#FFFFFF</li>
    <ul>
  `)
