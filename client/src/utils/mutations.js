import {gql} from '@apollo/client';

// login user
export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user{
                _id
                username
            
            }
        }
    }
`;

// add a new user
export const ADD_USER =gql`
    mutation addUser($username: String!, $password: String!, $email: String!) {
        addUser(username: $username, password: $password, email: $email) {
            token
            user{
                _id
                username
            }
        }
    }
`;

// save a book
export const SAVE_BOOK = gql`
    mutation ($input:SaveBookInput!){
        saveBook(input:$input){
            username
            savedBooks{
                bookId
                authors
                description
                title
                image
                link
            }
        }
    }
`;

// Delete a book
export const REMOVE_BOOK = gql`
    mutation removeBook($bookId:String!){
        removeBook(bookId:$bookId){
            username
            savedBooks{
                bookId
                authors
                description
                title
                image
                link
            }
        }
    }
`;