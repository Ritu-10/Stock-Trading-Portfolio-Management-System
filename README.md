# Stock Trading & Portfolio Management System

A **real-time stock trading simulation platform** that allows users to buy/sell stocks, manage portfolios, and track transactions. The system demonstrates backend design, database modeling, and real-time updates typical in fintech applications.

## Features
- Manage user portfolio with balance and stock holdings.
- Execute secure buy/sell transactions via REST APIs.
- Background scheduler updates stock prices every minute.
- Maintain transaction history and generate reports.
- (Optional) Leaderboard for top-performing users.

## Tech Stack
- **Backend:** Java, Spring Boot (REST APIs)
- **Database:** MySQL / PostgreSQL
- **Scheduler:** Spring @Scheduled for dynamic stock updates
- **API Documentation:** Swagger / OpenAPI

## System Design
**Architecture Overview:**

## System Design
**Architecture Overview:**


## Project Status
🚧 This project is currently in active development.  
Basic structure and initial setup have been completed, and core modules (trading logic, database schema, and portfolio management) are being implemented.  
Upcoming updates will include:  
- User authentication & role management  
- Real-time stock price simulation  
- Portfolio analytics dashboard  


```mermaid
graph TD
A[User] --> B[Spring Boot REST API]
B --> C[(Portfolio DB)]
B --> D[Transaction DB]
E[Scheduler] --> F[Stock Price Generator]
F --> D
