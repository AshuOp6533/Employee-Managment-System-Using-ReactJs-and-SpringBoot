package com.jspiders.employee.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jspiders.employee.pojo.Employee;
import com.jspiders.employee.repository.EmpRepo;

@Service
public class EmpService {
	
	@Autowired
	private EmpRepo empRepo;

	public Employee addEmp(Employee employee) {
		return empRepo.save(employee);
	}

}
