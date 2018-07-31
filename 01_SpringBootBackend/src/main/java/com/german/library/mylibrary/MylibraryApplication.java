package com.german.library.mylibrary;

import com.german.library.mylibrary.dal.entities.Book;
import com.german.library.mylibrary.dal.entities.Subject;
import com.german.library.mylibrary.dal.repositories.BookRepository;
import com.german.library.mylibrary.dal.repositories.SubjectRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;

import javax.persistence.FetchType;
import javax.persistence.ManyToOne;

@SpringBootApplication
@EntityScan(basePackages = {"com.german.library.mylibrary.dal.entities"})
public class MylibraryApplication
{

	public static void main(String[] args) {
		SpringApplication.run(MylibraryApplication.class, args);
	}

	@Bean
	public CommandLineRunner demo(SubjectRepository subjectRepository, BookRepository bookRepository)
	{
		return (args) -> {

			// ONLY FOR TESTING!!!
			bookRepository.deleteAll();
			subjectRepository.deleteAll();

			Subject computerScience = new Subject("is001", "Computer Science");
			computerScience = subjectRepository.save(computerScience);

			Subject business = new Subject("is002", "Business");
			business = subjectRepository.save(business);

			Subject economy = new Subject("is003", "Economy");
			economy = subjectRepository.save(economy);

			this.saveBookSamples(bookRepository, computerScience, business, economy);
		};
	}

	private void saveBookSamples(BookRepository bookRepository, Subject computerScience, Subject business, Subject economy)
	{
		saveSampleBook("Springer001","Spring Boot Essentials","Josh","Long", "Springer", computerScience,2017,"First Edition", bookRepository);
		saveSampleBook("Packt001","Learning Spring Boot 2.0","Greg","Turnquist", "Packt", computerScience,2017,"First Edition", bookRepository);
		saveSampleBook("Packt002","Learning Spring Boot 2.0","Greg","Turnquist", "Packt", computerScience,2018,"Second Edition", bookRepository);
		saveSampleBook("Packt003","Mastering Spring Boot 2.0","Dinesh","Rajput", "Packt", computerScience,2017,"First Edition", bookRepository);

		saveSampleBook("Packt004","Mastering React","Adam","Horton", "Packt", computerScience,2016,"First Edition", bookRepository);
		saveSampleBook("Packt005","Fullstack React: The Complete Guide to ReactJS and Friends","Anthony","Accomazzo", "Packt", computerScience,2017,"First Edition", bookRepository);

		saveSampleBook("Packt006","Learning React: Functional Web Development with React and Redux","Alex","Banks", "O'Reilly", computerScience,2017,"First Edition", bookRepository);
		saveSampleBook("Packt007","Learning React Native: Building Native Mobile Apps with JavaScript","Bonnie","Eisenman", "O'Reilly", computerScience,2015,"First Edition", bookRepository);
		saveSampleBook("Packt008","React: Up & Running: Building Web Applications","Stoyan","Stefanov", "O'Reilly", computerScience,2016,"First Edition", bookRepository);

		saveSampleBook("Packt009","Head First Java","Kathy","Sierra", "O'Reilly", computerScience,2003,"First Edition", bookRepository);
		saveSampleBook("Packt010","Head First Design Patterns","Kathy","Sierra", "O'Reilly", computerScience,2004,"First Edition", bookRepository);
		saveSampleBook("Packt011","Effective Java","Joshua","Bloch", "O'Reilly", computerScience,2001,"First Edition", bookRepository);
		saveSampleBook("Packt012","Learning Java","Jonathan","Knudsen", "O'Reilly", computerScience,2000,"First Edition", bookRepository);

		saveSampleBook("Busi001","A taste of Sucessful Business Practices","Jim","Pennypacker", "Business Publisher", business,2016,"First Edition", bookRepository);

		saveSampleBook("Eco001","Global Economic Prospects","Michael","Mussa", "Business Publisher", economy,2002,"First Edition", bookRepository);

	}

	private void saveSampleBook(String bookUid,String name, String authorFirstName, String authorLastName,
								String publisher, Subject subject, Integer yearOfPublication, String edition,
								BookRepository bookRepository)
	{
		Book book = new Book();
		book.setAuthorFirstName(authorFirstName);
		book.setAuthorLastName(authorLastName);
		book.setName(name);
		book.setPublisher(publisher);
		book.setEdition(edition);
		book.setSubject(subject);
		book.setBookUid(bookUid);
		book.setYearOfPublication(yearOfPublication);

		bookRepository.save(book);
	}
}
