import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { withInfo } from '@storybook/addon-info';

import {Button} from '../'

storiesOf('Button', module)
.add('with Text',
withInfo( "Simple button component") ( context => 
        <div className="container">
            <Button bgColor="alpha">Button!</Button>
        </div>
        ));