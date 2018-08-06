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
