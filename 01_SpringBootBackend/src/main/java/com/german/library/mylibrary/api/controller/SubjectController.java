package com.german.library.mylibrary.api.controller;

import com.german.library.mylibrary.api.service.ISubjectService;
import com.german.library.mylibrary.dal.entities.Subject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/subjects")
public class SubjectController
{
	private final ISubjectService subjectService;

	@Autowired
	public SubjectController(ISubjectService subjectService)
	{
		this.subjectService = subjectService;
	}

	@GetMapping(value={"", "/"})
	public ResponseEntity<List<Subject>> getSubjects()
	{
		List<Subject> subjectList = this.subjectService.getAllSubjects();
		return new ResponseEntity<List<Subject>>(subjectList, subjectList != null ? HttpStatus.CREATED : HttpStatus.NOT_FOUND);
	}

	@PostMapping(value={"", "/"})
	public ResponseEntity<Subject> createBook(@RequestBody Subject subject)
	{
		Subject savedSubject = this.subjectService.createSubject(subject);
		return new ResponseEntity<Subject>(savedSubject, savedSubject != null ? HttpStatus.CREATED : HttpStatus.NOT_FOUND);
	}

}
