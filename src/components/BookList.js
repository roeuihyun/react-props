import React, {Component} from 'react';
import {List, ListItem} from "@material-ui/core";
import BookListItem from "./BookListItem";

class BookList extends Component{
    //
    render(){
        //
        // const books = this.props.books;
        // destructuring 구조분해 할당 ecma6
        const {books} = this.props;
        const bookItems = books.map(book => {
            return(
                <ListItem>
                    <BookListItem book = {book} />
                </ListItem>
            )
        });

        return(
            //
            <List>
                {bookItems}
            </List>
        );
    }
}

export default BookList;