package com.german.library.mylibrary.dal.entities;

import javax.persistence.Entity;
import java.util.Objects;

@Entity
public class Subject extends BaseEntity
{
	private String subjectUid;
	private String description;

	public Subject()
	{

	}

	public Subject(String subjectUid, String description)
	{
		this.subjectUid = subjectUid;
		this.description = description;
	}

	public String getSubjectUid()
	{
		return subjectUid;
	}

	public void setSubjectUid(String subjectUid)
	{
		this.subjectUid = subjectUid;
	}

	public String getDescription()
	{
		return description;
	}

	public void setDescription(String description)
	{
		this.description = description;
	}

	@Override
	public boolean equals(Object o)
	{
		if (this == o) return true;
		if (!(o instanceof Subject)) return false;
		Subject subject = (Subject) o;
		return Objects.equals(subjectUid, subject.subjectUid) &&
				Objects.equals(description, subject.description);
	}

	@Override
	public int hashCode()
	{

		return Objects.hash(subjectUid, description);
	}
}
