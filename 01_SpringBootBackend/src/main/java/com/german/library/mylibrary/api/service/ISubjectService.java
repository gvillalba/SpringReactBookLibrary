package com.german.library.mylibrary.api.service;

import com.german.library.mylibrary.dal.entities.Subject;

import java.util.List;

public interface ISubjectService
{
	Subject createSubject(Subject subject);
	List<Subject> getAllSubjects();
}
