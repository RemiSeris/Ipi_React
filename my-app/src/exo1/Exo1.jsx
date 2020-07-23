import React from 'react';
import './exo1.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Content from './component/Content';

const Exo1 = () => {
    return (
        <div className={"exo1"}>
            <Header appName={"My React App"} />
            <Content>
                {
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia tellus ligula,\
                     ac luctus est aliquam eget. Sed vulputate neque sit amet urna tristique euismod. Pellentesque tincidunt nulla non ipsum tempus, sollicitudin luctus nisi varius. Nulla ut dolor metus. Phasellus in fringilla turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer auctor lectus dui, et tempor neque gravida in. Praesent nisl lectus, varius a mollis sed, ornare vitae dolor. Duis pharetra condimentum nisi id faucibus. Maecenas sed egestas augue, sed lacinia enim. Nam ornare nisl id sagittis porta.\
                     Nam nec lorem et odio consectetur rutrum scelerisque nec nibh. Cras sit amet ligula nibh."
                }
            </Content>
            <Footer legalMention={"Mention Légale"} />
        </div>
    )
}

export default Exo1