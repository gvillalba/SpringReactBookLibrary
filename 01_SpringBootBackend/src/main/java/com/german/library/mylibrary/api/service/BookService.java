package com.german.library.mylibrary.api.service;

import com.german.library.mylibrary.api.Model.BookFilter;
import com.german.library.mylibrary.dal.entities.Book;
import com.german.library.mylibrary.dal.entities.Subject;
import com.german.library.mylibrary.dal.repositories.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BookService implements IBookService
{
	@Autowired
	private BookRepository bookRepository;

	@Override
	public Book createBook(Book book)
	{
		return bookRepository.save(book);
	}

	@Override
	public List<Book> getAllBooks()
	{
		Iterable<Book> iterBooks = bookRepository.findAll();
		List<Book> bookList = new ArrayList<>();

		for (Book book: iterBooks)
			bookList.add(book);

		return bookList;
	}

	@Override
	public List<Book> getBooksByYear(Integer year)
	{
		return this.bookRepository.findByYearOfPublication(year);
	}


	@Override
	public List<Book> getBooksByFilter(BookFilter bookFilter)
	{
		return this.getAllBooks(); // TODO: IMPLEMENT
	}

	@Override
	public List<Book> getBooksBySubjectId(Long subjectId)
	{
		Subject subject = new Subject();
		subject.setId(subjectId);
		return this.bookRepository.findBySubject(subject);
	}

	@Override
	public List<Integer> getDistinctYears()
	{
		return this.bookRepository.getDistinctYears();
	}
}
