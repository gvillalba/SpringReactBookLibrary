package com.german.library.mylibrary.dal.entities;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;
import javax.persistence.NamedNativeQuery;
import java.util.Objects;

@Entity
@NamedNativeQuery(
		name = "Book.distinct.years",
		query = "select distinct year_of_publication from book order by year_of_publication"
)
public class Book extends BaseEntity
{
	private String name;
	private String authorFirstName;
	private String authorLastName;
	private Integer yearOfPublication;
	private String publisher;
	private String bookUid;
	private String edition;

	@ManyToOne(fetch = FetchType.EAGER)
	private Subject subject;

	public Book()
	{

	}

	public String getName()
	{
		return name;
	}

	public void setName(String name)
	{
		this.name = name;
	}

	public String getAuthorFirstName()
	{
		return authorFirstName;
	}

	public void setAuthorFirstName(String authorFirstName)
	{
		this.authorFirstName = authorFirstName;
	}

	public String getAuthorLastName()
	{
		return authorLastName;
	}

	public void setAuthorLastName(String authorLastName)
	{
		this.authorLastName = authorLastName;
	}

	public Integer getYearOfPublication()
	{
		return yearOfPublication;
	}

	public void setYearOfPublication(Integer yearOfPublication)
	{
		this.yearOfPublication = yearOfPublication;
	}

	public String getPublisher()
	{
		return publisher;
	}

	public void setPublisher(String publisher)
	{
		this.publisher = publisher;
	}

	public String getBookUid()
	{
		return bookUid;
	}

	public void setBookUid(String bookUid)
	{
		this.bookUid = bookUid;
	}

	public Subject getSubject()
	{
		return subject;
	}

	public void setSubject(Subject subject)
	{
		this.subject = subject;
	}

	public String getEdition()
	{
		return edition;
	}

	public void setEdition(String edition)
	{
		this.edition = edition;
	}

	@Override
	public boolean equals(Object o)
	{
		if (this == o) return true;
		if (!(o instanceof Book)) return false;
		Book book = (Book) o;
		return Objects.equals(name, book.name) &&
				Objects.equals(authorFirstName, book.authorFirstName) &&
				Objects.equals(authorLastName, book.authorLastName) &&
				Objects.equals(yearOfPublication, book.yearOfPublication) &&
				Objects.equals(publisher, book.publisher) &&
				Objects.equals(bookUid, book.bookUid) &&
				Objects.equals(edition, book.edition) &&
				Objects.equals(subject, book.subject);
	}

	@Override
	public int hashCode()
	{

		return Objects.hash(name, authorFirstName, authorLastName, yearOfPublication, publisher, bookUid, edition, subject);
	}
}
