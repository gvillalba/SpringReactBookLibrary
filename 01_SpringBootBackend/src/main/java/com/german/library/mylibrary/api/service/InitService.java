package com.german.library.mylibrary.api.service;

import com.german.library.mylibrary.dal.entities.Subject;
import com.german.library.mylibrary.dal.repositories.SubjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InitService implements IInitService
{
	@Autowired
	private SubjectRepository subjectRepository;

	@Override
	public void initData()
	{
		Subject subject = new Subject();
		subject.setSubjectUid("Uid1");
		subject.setDescription("Fantasy");
		subjectRepository.save(subject);
	}
}
