import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { withInfo } from '@storybook/addon-info';

import InfoButton from './InfoButton';

import { Nav } from '../';

storiesOf('Nav', module).add(
	'Base',
	withInfo(
		'Base nav utilizes sub-component system with static properties similar to semantic-ui'
	)(context => (
		
			<Nav>Nav</Nav>
	))
);