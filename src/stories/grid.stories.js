import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered/react';
import { withInfo } from '@storybook/addon-info';
import Container from './Container';
import InfoButton from './InfoButton'
import {Grid, Col, Row} from '../'; 

storiesOf('Grid', module)
    .add('One Row, Many Columns',
        withInfo( "use Broke React Grid for simplified flexbox based grid system") ( context => 
        <div className="container">
            <span>
                click the <InfoButton /> label in top right for info about "{context.name}"
            </span>
        <Grid>
            <Row>
                <Col colSize='12' outline="outline">
                    colSize='12'
                </Col>
                <Col colSize='10' outline="outline">
                    colSize='10'
                </Col>
                <Col colSize='2' outline="outline">
                    colSize='2'
                </Col>
                <Col colSize='9' outline="outline">
                    colSize='9'
                </Col>
                <Col colSize='3' outline="outline">
                    colSize='3'
                </Col>
                <Col colSize='8' outline="outline">
                    colSize='8'
                </Col>
                <Col colSize='4' outline="outline">
                    colSize='4'
                </Col>
                <Col colSize='7' outline="outline">
                    colSize='7'
                </Col>
                <Col colSize='5' outline="outline">
                    colSize='5'
                </Col>
                <Col colSize='6' outline="outline">
                    colSize='6'
                </Col>
                <Col colSize='6' outline="outline">
                    colSize='6'
                </Col>
                <Col colSize='5' outline="outline">
                    colSize='5'
                </Col>
                <Col colSize='2' outline="outline">
                    colSize='2'
                </Col>
                <Col colSize='5' outline="outline">
                    colSize='5'
                </Col>
                <Col colSize='4' outline="outline">
                    colSize='4'
                </Col>
                <Col colSize='4' outline="outline">
                    colSize='4'
                </Col>
                <Col colSize='4' outline="outline">
                    colSize='4'
                </Col>
                <Col colSize='4' outline="outline">
                    colSize='4'
                </Col>
                <Col colSize='4' offset="col-offset-4" outline="outline">
                    colSize='4' offset="col-offset-4"
                </Col>
            </Row>
        </Grid>
        </div>
        ));