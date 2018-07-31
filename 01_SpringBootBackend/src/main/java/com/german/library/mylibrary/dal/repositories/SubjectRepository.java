package com.german.library.mylibrary.dal.repositories;

import com.german.library.mylibrary.dal.entities.Subject;
import org.springframework.data.repository.CrudRepository;

public interface SubjectRepository extends CrudRepository<Subject, Long>
{
}
