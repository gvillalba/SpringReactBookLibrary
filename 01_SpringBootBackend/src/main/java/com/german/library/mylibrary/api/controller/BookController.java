package com.german.library.mylibrary.api.controller;

import com.german.library.mylibrary.api.Model.BookFilter;
import com.german.library.mylibrary.api.service.IBookService;
import com.german.library.mylibrary.dal.entities.Book;
import com.german.library.mylibrary.dal.entities.Subject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/books")
public class BookController
{
	private final IBookService bookService;

	@Autowired
	public BookController(IBookService bookService)
	{
		this.bookService = bookService;
	}

	@GetMapping(value={"", "/"})
	public ResponseEntity<List<Book>> getBooks()
	{
		List<Book> bookList = this.bookService.getAllBooks();
		return new ResponseEntity<List<Book>>(bookList, bookList != null ? HttpStatus.OK : HttpStatus.NOT_FOUND);
	}

	@GetMapping(value={"/year/{year}","/year/{year}"})
	public ResponseEntity<List<Book>> getBooksByYear(@PathVariable Integer year)
	{
		List<Book> bookList = this.bookService.getBooksByYear(year);
		return new ResponseEntity<List<Book>>(bookList, bookList != null ? HttpStatus.OK : HttpStatus.NOT_FOUND);
	}

	@GetMapping(value={"/years","/years"})
	public ResponseEntity<List<Integer>> getYearsFromBooks()
	{
		List<Integer> yearList = this.bookService.getDistinctYears();
		return new ResponseEntity<List<Integer>>(yearList, yearList != null ? HttpStatus.OK : HttpStatus.NOT_FOUND);
	}

	@GetMapping(value={"/subject/{subjectId}","/subject/{subjectId}"})
	public ResponseEntity<List<Book>> getBooksBySubject(@PathVariable Long subjectId)
	{
		List<Book> bookList = this.bookService.getBooksBySubjectId(subjectId);
		return new ResponseEntity<List<Book>>(bookList, bookList != null ? HttpStatus.OK : HttpStatus.NOT_FOUND);
	}

	@PostMapping(value={"/filter", "/filter/"})
	public ResponseEntity<List<Book>> getBooksByFilter(@RequestBody BookFilter bookFilter)
	{
		List<Book> bookList = this.bookService.getBooksByFilter(bookFilter);
		return new ResponseEntity<List<Book>>(bookList, bookList != null ? HttpStatus.OK : HttpStatus.NOT_FOUND);
	}

	@PostMapping(value={"", "/"})
	public ResponseEntity<Book> createBook(@RequestBody Book book)
	{
		Book savedBook = this.bookService.createBook(book);
		return new ResponseEntity<Book>(savedBook, savedBook != null ? HttpStatus.CREATED : HttpStatus.NOT_FOUND);
	}
}
