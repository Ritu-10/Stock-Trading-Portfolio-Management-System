# Stock-Trading-Portfolio-Management-System
A stock trading simulation platform that allows users to buy/sell stocks, manage portfolios, and track transactions. Includes a background scheduler to update stock prices dynamically.

graph TD
A[User] --> B[Spring Boot REST API]
B --> C[(Portfolio DB)]
B --> D[Transaction DB]
E[Scheduler] --> F[Stock Price Generator]
F --> D
