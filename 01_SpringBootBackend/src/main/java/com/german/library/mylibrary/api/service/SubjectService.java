package com.german.library.mylibrary.api.service;

import com.german.library.mylibrary.dal.entities.Subject;
import com.german.library.mylibrary.dal.repositories.SubjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SubjectService implements ISubjectService
{
	@Autowired
	private SubjectRepository subjectRepository;

	@Override
	public Subject createSubject(Subject subject)
	{
		return this.subjectRepository.save(subject);
	}

	@Override
	public List<Subject> getAllSubjects()
	{
		Iterable<Subject> iterSubjects = subjectRepository.findAll();
		List<Subject> subjectList = new ArrayList<>();

		for (Subject subject: iterSubjects)
			subjectList.add(subject);

		return subjectList;
	}
}
