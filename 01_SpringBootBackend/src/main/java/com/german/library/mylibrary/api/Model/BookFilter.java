package com.german.library.mylibrary.api.Model;

import java.util.Objects;

public class BookFilter
{
	private String bookName;
	private String authorFirstName;
	private String authorLastName;
	private Integer year;
	private String subject;

	private String keyword;

	public String getBookName()
	{
		return bookName;
	}

	public void setBookName(String bookName)
	{
		this.bookName = bookName;
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

	public Integer getYear()
	{
		return year;
	}

	public void setYear(Integer year)
	{
		this.year = year;
	}

	public String getSubject()
	{
		return subject;
	}

	public void setSubject(String subject)
	{
		this.subject = subject;
	}

	public String getKeyword()
	{
		return keyword;
	}

	public void setKeyword(String keyword)
	{
		this.keyword = keyword;
	}

	@Override
	public boolean equals(Object o)
	{
		if (this == o) return true;
		if (!(o instanceof BookFilter)) return false;
		BookFilter that = (BookFilter) o;
		return Objects.equals(bookName, that.bookName) &&
				Objects.equals(authorFirstName, that.authorFirstName) &&
				Objects.equals(authorLastName, that.authorLastName) &&
				Objects.equals(year, that.year) &&
				Objects.equals(subject, that.subject) &&
				Objects.equals(keyword, that.keyword);
	}

	@Override
	public int hashCode()
	{

		return Objects.hash(bookName, authorFirstName, authorLastName, year, subject, keyword);
	}
}
