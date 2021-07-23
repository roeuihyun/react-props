import React, {Component} from 'react';
import {List, ListItem, Container} from "@material-ui/core";
import BookListItem from "./BookListItem";

class BookList extends Component{
    //
    render(){
        //
        // const books = this.props.books;
        // destructuring 구조분해 할당 ecma6
        const {books} = this.props;
        const bookItems = books.map(book => {
            // 고유의 키값이 필요하다.
            return(
                <ListItem key = {book.ISBN}>
                    <BookListItem book = {book} />
                </ListItem>
            )
        });

        return(
            //
            <Container maxWidth={'sm'}>
                <List>
                    {bookItems}
                </List>
            </Container>
        );
    }
}

export default BookList;