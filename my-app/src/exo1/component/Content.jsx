import React from 'react'
import {Card} from 'react-bootstrap';

const Content = ({children}) =>  {
return (<div>
            <Card.Text>{children}</Card.Text>
        </div>)
}

export default Content;