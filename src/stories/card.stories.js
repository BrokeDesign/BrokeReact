import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { withInfo } from '@storybook/addon-info';

import InfoButton from './InfoButton'

import { Card, CardHead, CardFoot, CardContent } from '../'

storiesOf('Card', module)
.add('with Full Layout',
withInfo( "use Broke React Grid for simplified flexbox based grid system") ( context => 
        <div className="container">
            <span>
                click the <InfoButton /> label in top right for info about "{context.name}"
            </span>
            <Card>
                <CardHead><h2> Card Header </h2></CardHead>
                <CardContent> 
                    Consectetur reprehenderit anim velit dolor occaecat reprehenderit est sint in culpa est dolor qui. Consectetur ex velit fugiat reprehenderit in amet sit. Eu quis occaecat qui elit sunt minim voluptate mollit. Et sunt fugiat voluptate ex ea esse enim mollit tempor.
                    <br /><br />
                    Aute laborum velit ad ipsum do ea velit nisi laborum. Duis laborum culpa aute voluptate anim enim velit id. Magna elit exercitation cupidatat nulla veniam occaecat nisi. Sit ea commodo quis mollit ea mollit incididunt est exercitation ad et.
                    <br /><br />
                    In id sunt eiusmod fugiat voluptate. Cupidatat nulla minim occaecat quis sit dolor amet. Magna irure sint laboris officia culpa ex sint. Et magna in consequat amet reprehenderit dolore ad veniam ea do magna.
                </CardContent>
                <CardFoot><h3>Card Footer</h3></CardFoot>
            </Card>
        </div>
        ));