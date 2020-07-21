import React, {useContext} from 'react'
import CreateIcon from '@material-ui/icons/Create';
import Button from "@material-ui/core/Button";
import {appContext} from "./appContextProvider";

class List extends React.Component {
    static contextType = appContext;
    constructor(props) {
        super(props);
    }


    render() {
        const {myLists, setMyList} = this.context;

        const addItem = () => {
            myLists.forEach(x => {
                if ( x.items === this.props){
                    x.items.push({title : 'new item'});
                }
            });
        };

        return (
            <div className={'list'}>
                <div className="listTitle" style={{display: "flex"}}>
                    {this.props.title}
                    <CreateIcon style={{marginLeft: 10, fontSize: 20, cursor: "pointer"}}
                                onClick={this.props.clickIcon}/>
                </div>
                <div className={'listItems'}>
                    {this.props.children}
                </div>
                <div>
                    <Button variant={'outlined'} size={"medium"} style={{width: 25}}
                            onClick={addItem}>Add</Button>
                </div>
            </div>
        )


    }


};

export default List
