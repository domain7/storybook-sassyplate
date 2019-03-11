import { storiesOf } from '@storybook/html'
import centered from '@storybook/addon-centered/html'

import '../../styles/style.scss'
import './style.scss'

storiesOf('Typography', module)
  .addDecorator(centered)
  .add('Headings', () => `
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h5>Heading 5</h5>
  `)
  .add('Paragraph', () => `
    <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur blandit tempus porttitor. Donec id elit non mi porta gravida at eget metus. Curabitur blandit tempus porttitor. Donec id elit non mi porta gravida at eget metus.</p>
    <p>Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nulla vitae elit libero, a pharetra augue. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
  `)
