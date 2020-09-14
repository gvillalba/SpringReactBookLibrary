package com.german.library.mylibrary.dal.repositories.custom;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import java.util.List;

public class BookRepositoryImpl implements BookRepositoryCustom
{
	@PersistenceContext
	private EntityManager entityManager;

	public List<Integer> getDistinctYears()
	{
		Query query = entityManager.createNamedQuery("Book.distinct.years");
		List<Integer> results = query.getResultList();

		return results;
	}
}
