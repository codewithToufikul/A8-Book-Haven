import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const getStorageBooks = () => {
    const storedBook = localStorage.getItem('books');
    if (storedBook) {
        return JSON.parse(storedBook);
    } else {
        return [];
    }
};

export const saveBooks = (book) => {
    let storedBook = JSON.parse(localStorage.getItem("books")) || [];
    const isExists = storedBook.find((localBook) => localBook.book_id === book.book_id);
    if (isExists) {
        toast.error('Book already exists');
    } else {
        storedBook.push(book);
        localStorage.setItem("books", JSON.stringify(storedBook));
        toast.success('Book saved successfully');
    }
}

export const getWishesBooks = () => {
    const wishedBook = localStorage.getItem('wishlist');
    if (wishedBook) {
        return JSON.parse(wishedBook);
    } else {
        return [];
    }
};

export const wishBooks = (book) => {
    let wishedBook = JSON.parse(localStorage.getItem("wishlist")) || [];
    const storageBooks = getStorageBooks();
    const readedBook = storageBooks.find((read) => read.book_id == book.book_id);
    const isExists = wishedBook.find((localBook) => localBook.book_id === book.book_id);
    if (isExists || readedBook) {
        toast.error('Book already exists');
    } else {
        wishedBook.push(book);
        localStorage.setItem("wishlist", JSON.stringify(wishedBook));
        toast.success('Book saved successfully');
    }
}
