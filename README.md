# CovidApp  - Reactjs and Spring Boot application

Application submitted for Software System Architecture course at @Unibz

### 1 OVERVIEW

This application has been designed with Spring Data REST and its powerful backend
functionality, combined with React’s sophisticated features to build an easy-to-understand UI.
The project is also managed with Maven, to build and launch the whole application with one
command. The Spring Data part is designed to be accessed as an external server from the React
application, indeed in this case the URL is hardcoded (http://localhost:8080/).

The whole system is launched by running `mvn spring-boot: run` on the console; this will install
and run npm and all the plugins required for React automatically. Then spring is initialised, and
the server starts running.

During the development of the application, there is no need to rebuild the whole project from
the beginning, since there is the webpack plugin which allows to directly refresh the application
on the browser, because it watches the bundle.js and recompiles it whenever a change to the
React application is made. To run it, just type on the console the following command: `npm run-
script watch`.

### 2 VERSIONS, DEPENDENCIES, PLUGINS

With the Spring Data REST structure, the following dependencies were added:

- Rest Repositories: Expose data repositories over REST via Spring Data REST.
- Thymeleaf: A server-side Java template engine for web environments. Allows HTML to be correctly
    displayed in browsers and as static prototypes.
- Spring Data JPA: Persist data in SQL stores with Java Persistence API using Spring Data.
- H2 Database: Provides a fast in-memory database that supports JDBC API.

To build a nice interface with React, two plugins were used mainly:

- Material UI: React components focused on layout and usage
- DevExtreme Reactive: React components based on Material UI focused on data display

Versions:

- Java 13
- Spring Boot 2.3.
- Node 12.16. 3
- Npm 6. 14.
- React 16.5.

(LICENSE: https://js.devexpess.com/EULAs/DevExtremeNonCommercial/)
