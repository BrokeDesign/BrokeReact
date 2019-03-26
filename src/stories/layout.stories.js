import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { withInfo } from '@storybook/addon-info';

import InfoButton from './InfoButton'

import { Container, Header, Footer, Main } from '../'

storiesOf('Layout', module)
.add('with Header, Footer, and Main',
    withInfo( "use Broke React Grid for simplified flexbox based grid system") ( context => 
        <Container>
            <Header>
                30px header
            </Header>
            <Main>
                Non ullamco nulla tempor esse Lorem. Culpa pariatur duis duis commodo. Nostrud ex ea ea veniam proident esse excepteur culpa laboris culpa laborum. Quis Lorem aliquip dolore id dolor mollit eu ea. Elit id reprehenderit exercitation in cupidatat esse Lorem. Elit reprehenderit occaecat culpa deserunt ullamco irure aliquip irure fugiat magna proident aute est. Eu exercitation cillum ea fugiat dolor officia sunt sunt.
                <br /><br />
                Ullamco et in qui ullamco. Sint et cillum eiusmod sunt ad ex laborum pariatur sint irure laboris adipisicing irure. Aute mollit irure id voluptate. Duis incididunt ex est deserunt tempor.
                <br /><br />
                Cupidatat adipisicing commodo exercitation consectetur dolore ullamco. Qui voluptate et in consequat aliquip tempor excepteur incididunt ea deserunt et. Qui est nisi aute elit occaecat. Magna qui ex id proident incididunt commodo officia sit dolor labore consectetur. Id dolore labore mollit incididunt veniam minim id commodo voluptate voluptate dolor mollit. Cillum duis ad veniam eu pariatur ea nisi ea. Duis pariatur reprehenderit do tempor elit aliquip dolor quis magna id laborum veniam.
            </Main>
            <Footer>
                30px footer
            </Footer>
        </Container>
    ));