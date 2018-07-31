package com.german.library.mylibrary.api.service;

import com.german.library.mylibrary.api.Model.BookFilter;
import com.german.library.mylibrary.dal.entities.Book;

import java.util.List;

public interface IBookService
{
	Book createBook(Book book);
	List<Book> getAllBooks();
	List<Book> getBooksByYear(Integer year);
	List<Book> getBooksByFilter(BookFilter bookFilter);
	List<Book> getBooksBySubjectId(Long subjectId);
	List<Integer> getDistinctYears();
}
