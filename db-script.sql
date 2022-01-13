CREATE DATABASE IF NOT EXISTS medical;

USE medical;

CREATE TABLE donor
	(donor_id INT PRIMARY KEY AUTO_INCREMENT, 
    donor_name VARCHAR(50), 
    donor_email VARCHAR(15) NOT NULL UNIQUE, 
    donor_password VARCHAR(15),
    donor_phone VARCHAR(10));
    
CREATE TABLE employee
	(emp_id INT PRIMARY KEY AUTO_INCREMENT, 
    emp_name VARCHAR(50), 
    emp_email VARCHAR(15) NOT NULL UNIQUE, 
    emp_password VARCHAR(15),
    emp_phone VARCHAR(10));
    
CREATE TABLE requestor
	(requestor_id INT PRIMARY KEY AUTO_INCREMENT, 
    req_name VARCHAR(50), 
    req_email VARCHAR(15) NOT NULL UNIQUE, 
    req_password VARCHAR(15),
    req_phone VARCHAR(10)
    );
    
CREATE TABLE medicine
	(med_id INT PRIMARY KEY AUTO_INCREMENT,
    med_name VARCHAR(50),
    quantity INT DEFAULT 0);
    
CREATE TABLE requests
	(requestor_id INT NOT NULL,
    med_id INT NOT NULL,
    req_status VARCHAR(20) DEFAULT "Pending");
