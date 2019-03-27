import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { Button } from '@storybook/react/demo';

import Container from './Container';
import InfoButton from './InfoButton';


storiesOf('storyButton', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>, {
    options: { selectedPanel: 'storybook/actions/panel' },
  })
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>, {
    options: { selectedPanel: 'storybook/actions/panel' },
  })
  .add('with notes', () => <Button>Check my notes in the notes panel</Button>, {
    notes: 'A very simple button',
    options: { selectedPanel: 'storybook/notes/panel' },
  })
  .add(
    'with new info',
    withInfo(
      'Use the [info addon](https://github.com/storybooks/storybook/tree/master/addons/info) with its new painless API.'
    )(context => (
      <Container>
        <span>
          click the <InfoButton /> label in top right for info about "{context.name}"
        </span>
      </Container>
    )),
    {
      notes: 'Composition: Info(Notes())',
      options: { selectedPanel: 'storybook/info/panel' },
    }
);