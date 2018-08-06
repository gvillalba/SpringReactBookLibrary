# SpringReactBookLibrary
Demo of Integration of Application with Spring Boot (Java) Backend and React.js (TypeScript) Frontend 

## Run the Backend
	cd 01_SpringBootBackend
	mvn spring-boot:run

## Run the Frontend

	cd 02_ReactFrontend

	# Install Node Dependencies (The first time)
	npm install

	# Run
	npm start

# Dependencies

## Backend
	Java 8 (JDK or JRE).
	Maven
	PostgreSQL installed (althought can be easily replaced by in-memory db or other DB)

## Frontend
	npm is installed (https://www.npmjs.com)
	
# Architecture
	There are two applications, backend and frontend. 
	The backend exposes a restul API and the frontend calls the services defined by it.
	
## Backend Architecture
	The backend application is implemented in Java 8 using Spring Boot / Spring Data JPA and a 
	PostgreSQL database.
	There are two main packages the 'api' and the 'dal'.
	
	The 'api' package (com.german.library.mylibrary.api) is composed by 3 subpackages:
	1. 'controller': exposes the restful API.
	2. 'Model': Should contain business related classes that are NOT entities (from database). 
	3. 'service': It is used to implement the services exposed by the 'api' package. This package is 
	the only one that get access to the data access layer (DAL).
	
	The 'dal' package (com.german.library.mylibrary.dal) is the implementation of the data access layer (DAL).
	The DAL uses the 'repository' pattern from Spring Data JPA. That is, the boiler plate code, such as common 
	CRUD (Create, Retrieve, Update, Delete) operations is limited using naming conventions and String Data will 
	provide the implementation for the interface methods. it also allows especifying custom queries.
	It is composed by two packages:
	1. 'entities': Maps persistent entities from/to the database.
	2. 'repositories': Provides the definition of the operations that access the database.

## Frontend Architecture

	
# Use Cases
	This application implements a limited set of use cases for a Book Library. 
	The intend is not to be complete, but to illustrate the integration of a 
	Java-based backend application implemented with Spring Boot / Spring Data JPA 
	using a relational database (PostgreSQL), and a frontend application implemented 
	using React.js with TypeScript.
	
## get books
## get books by year
## get years from books
## get books by filter (Not fully implemented, returns all books)
## create book (backend only) 
## get subjects
## create subject
