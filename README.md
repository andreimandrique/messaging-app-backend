# messaging-app-backend
 A server that serve Rest API and Websocket using socket IO for my real time messaging messaging app.
 
## Installation
### 1. Clone the repository
Get a copy of the repo
### 2. Install dependencies
In the root directory
```
npm install
```
## 3. Frontend Application
For the frontend web application to use . 

https://github.com/andreimandrique/messaging-app-frontend

### 3.Set up environment variables: 
Create .env file in the root directory and add the following 
```
DATABASE_URL="postgresql://<db role>:<db password>@<db host>/<db name>?sslmode=require"
JWT_SECRET="<Your JWT secret>"
FRONTEND_URL="<Your frontend web application>"
```
### 4. Generate Prisma client
In the root folder run
```
npx prisma generate
```
### 5. Start the server
In development
```
npm run dev
```
In production
```
npm run start
```
### 6. Access the application
Open your browser and navigate to http://localhost:3000
## Features
### Rest API
* Log in 
* Register Account
* Verify
### Websocket 
* Join Room
* Real time message 

