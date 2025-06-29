# Voting-pattern

An commercial full-stack application developed on behalf of a trade union for conducting elections among employees for the position of social labor inspector. Each employee can vote only once – duplicate entries of the same name and surname already present in the database will fail validation. After logging in, the administrator can view the voting results and has the option to export them to a PDF file. The form was used for voting that took place in April 2025.


The frontend of the application is built using Next.js with TS, while the backend is implemented using Prisma and SQLite.


 <div align="center">
  <img src="https://github.com/user-attachments/assets/162225ad-168b-4e55-8402-9a40e334392a" alt="html5" width="400" height="350" /> 
</div> 


## Vesion for users tests: <br> form http://vps-2c27257b.vps.ovh.ca:8090/ <br/> admin http://vps-2c27257b.vps.ovh.ca:8090/login
## Features

* Comunication with database - GET, POST
* Auth
* Protected Routes
* Data Access Layer
* Pagination with dynamic routing
* Forms / validations
* Table
* HTTP requests state messages for user
* Creating a PDF with data stored in a database
* RWD
* Automatic logout after five minutes


## Technologies

* Tailwind / daisyUI
* Next.js / TypeScript
* Prisma
* SQLite

## Libraries

* jsPDF
* better-auth
* html2canvas-pro
* zod - client validation/server validation
  
## Hooks
* useState, useEffect, useForm, useFormStatus, useRouter, useSearchParams, useRef

## Prerequisites
* Before getting started, make sure you have the Node.js and npm or yarn
* Node version: **Node.js v22.13.1**
* Clone this repository to your local machine
* Navigate to the project directory: **cd .\voting-pattern**
* Install the project dependencies by running **npm install** 
* Start the development server: **cd .\voting-pattern\ npm run dev** 
* Open your browser and visit your localhost:8080 to see the running application.

 

