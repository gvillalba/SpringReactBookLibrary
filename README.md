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
	the only one that gets access to the data access layer (DAL).
	
	The 'dal' package (com.german.library.mylibrary.dal) is the implementation of the data access layer (DAL).
	The DAL uses the 'repository' pattern from Spring Data JPA. That is, the boiler plate code, such as common 
	CRUD (Create, Retrieve, Update, Delete) operations is limited using naming conventions and String Data will 
	provide the implementation for the interface methods. it also allows especifying custom queries.
	It is composed by two packages:
	1. 'entities': Maps persistent entities from/to the database.
	2. 'repositories': Provides the definition of the operations that access the database.
	
	*Note: 
	For the purposes of this demo, the data from the database is deleted and re-created when the applications starts. 
	The data can be queried directly on the database.
	Some books are created so that they are available on the restful API and the frontend can show them.
	
	The available services on the API are detailed in the "Use Cases" section.

## Frontend Architecture

	
# Use Cases
	This application implements a limited set of use cases for a Book Library. 
	The intend is not to be complete, but to illustrate the integration of a 
	Java-based backend application implemented with Spring Boot / Spring Data JPA 
	using a relational database (PostgreSQL), and a frontend application implemented 
	using React.js with TypeScript.
	
## get books
	GET localhost:9090/books
	
	Returns the list of all the books available in the database.
	
## get books by year
	GET localhost:9090/books/year/{year}
	
	Returns the list of books available in the database filtered by a given year of publication.
	
	e.g. localhost:9090/books/year/2016
	returns:
	[
    {
        "id": 5,
        "name": "Mastering React",
        "authorFirstName": "Adam",
        "authorLastName": "Horton",
        "yearOfPublication": 2016,
        "publisher": "Packt",
        "bookUid": "Packt004",
        "edition": "First Edition",
        "subject": {
            "id": 1,
            "subjectUid": "is001",
            "description": "Computer Science"
        }
    },
    {
        "id": 9,
        "name": "React: Up & Running: Building Web Applications",
        "authorFirstName": "Stoyan",
        "authorLastName": "Stefanov",
        "yearOfPublication": 2016,
        "publisher": "O'Reilly",
        "bookUid": "Packt008",
        "edition": "First Edition",
        "subject": {
            "id": 1,
            "subjectUid": "is001",
            "description": "Computer Science"
        }
    },
    {
        "id": 14,
        "name": "A taste of Sucessful Business Practices",
        "authorFirstName": "Jim",
        "authorLastName": "Pennypacker",
        "yearOfPublication": 2016,
        "publisher": "Business Publisher",
        "bookUid": "Busi001",
        "edition": "First Edition",
        "subject": {
            "id": 2,
            "subjectUid": "is002",
            "description": "Business"
        }
    }
]
## get years from books
	GET localhost:9090/books/years
	
	Returns the list of years from which there are available books on the database published that year.
	
	e.g.:
	[
	    2000,
	    2001,
	    2002,
	    2003,
	    2004,
	    2015,
	    2016,
	    2017,
	    2018
	]

## get books by filter (Not fully implemented, returns all books)
	POST localhost:9090/books/filter
	
## create book (backend only) 
	POST localhost:9090/books
	
	Creates a new Book. (not implemented in the frontend, but can be used directly with applications such as POSTMAN).
	
	e.g. body:
	
	{
	    "name": "My New Book",
	    "authorFirstName": "Andrew",
	    "authorLastName": "Green",
	    "yearOfPublication": 2016,
	    "publisher": "Packt",
	    "bookUid": "Packt004",
	    "edition": "First Edition",
	    "subject": {
		"id": 1,
		"subjectUid": "is001",
		"description": "Computer Science"
	    }
	}
	
	e.g. returns (persisted book object):
	
	{
	    "id": 16,
	    "name": "My New Book",
	    "authorFirstName": "Andrew",
	    "authorLastName": "Green",
	    "yearOfPublication": 2016,
	    "publisher": "Packt",
	    "bookUid": "Packt004",
	    "edition": "First Edition",
	    "subject": {
		"id": 1,
		"subjectUid": "is001",
		"description": "Computer Science"
    		}
	}

## get subjects
	GET localhost:9090/subjects
	
	Returns the list of book subjects.
	
	e.g.:
	[
	    {
		"id": 1,
		"subjectUid": "is001",
		"description": "Computer Science"
	    },
	    {
		"id": 2,
		"subjectUid": "is002",
		"description": "Business"
	    },
	    {
		"id": 3,
		"subjectUid": "is003",
		"description": "Economy"
	    }
	]
	
## create subject
	POST localhost:9090/subjects
	
	Creates a new book subject.
	
	e.g. body:
	
	{
	    "subjectUid": "is004",
	    "description": "New Book Subject"
	}
	
	e.g. returns (persisted subject object):
	{
	    "id": 4,
	    "subjectUid": "is004",
	    "description": "New Book Subject"
	}
	
