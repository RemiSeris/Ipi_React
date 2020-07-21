import React from 'react'
import CreateIcon from '@material-ui/icons/Create';
import Button from "@material-ui/core/Button";

class List extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className={'list'}>
                <div className="listTitle" style={{display: "flex"}}>
                    {this.props.title}
                    <CreateIcon style={{marginLeft: 10, fontSize: 20 , cursor: "pointer" }} onClick={this.props.clickIcon} />
                </div>
                <div className={'listItems'}>
                    {this.props.children}
                </div>
                <div>
                    <Button  variant={'outlined'} size={"medium"} style={{width : 25}}>Add</Button>
                </div>
            </div>
        )


    }


};

export default List
