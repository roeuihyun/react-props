import React, {Component} from 'react';
import {List, ListItem} from "@material-ui/core";

class BookList extends Component{
    //
    render(){
        //
        // const books = this.props.books;
        // destructuring 구조분해 할당
        const {books} = this.props;

        return(
            //
            <List>
                <ListItem>
                    {books[0].title}
                </ListItem>
                <ListItem>
                    Item 02
                </ListItem>
                <ListItem>
                    Item 03
                </ListItem>
            </List>
        );
    }
}

export default BookList;