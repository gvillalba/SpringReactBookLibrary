package com.german.library.mylibrary.dal.repositories;

import com.german.library.mylibrary.dal.entities.Book;
import com.german.library.mylibrary.dal.entities.Subject;
import com.german.library.mylibrary.dal.repositories.custom.BookRepositoryCustom;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface BookRepository extends CrudRepository<Book, Long>, BookRepositoryCustom
{
	List<Book> findByYearOfPublication(Integer year);
	List<Book> findBySubject(Subject subject);
}