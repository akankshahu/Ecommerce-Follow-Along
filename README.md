# Ecommerce-Follow-Along.

Building an e-commerce app using the MERN stack.
This is a full-fledged e-commerce application built using the **MERN Stack** (MongoDB, Express.js, React.js, Node.js). The goal of this project is to learn how to build and deploy a real-world application with the MERN stack, focusing on key features like authentication, product management, and order handling.

## Milestone 2: Project Overview

Milestone 2:

Welcome to the Follow-Along Project: Milestone 2! 🚀

In this Milestone 2, we’ll structure the project, set up the frontend and backend, and build the login page for application.

This milestone focuses on creating the project structure, configuring tools, and starting with your first user-facing feature - the Login Page.

Create a structured folder hierarchy for the project.
Set up a React app for the frontend and a Node.js server for the backend.
Configure Tailwind CSS for streamlined styling.
Add optional extensions for improving development efficiency.
Build a functional and styled Login Page for the frontend.

Key features of milestone 2 🛠️

Project Folder Structure: Learn to organize your project files into separate frontend and backend directories.

React Frontend Setup: Initialized a React application for building the user interface.

Node.js Backend Setup: Set up a simple Node.js server to prepare for API integration in future milestones.

Login Page Development: Create the first user interface of your e-commerce application, focusing on both functionality and styling.

## Milestone 3: Project Setup for Backend

In this milestone, we focused on setting up the backend for our e-commerce application. The key achievements include:

- **Backend Folder Structure**: Organized the backend code into dedicated folders for routes, controllers, models, and middleware.
- **Server Setup**: Configured a Node.js server using Express to handle API requests and listen on a designated port.
- **Database Connection**: Integrated MongoDB for efficient data storage and confirmed the connection between the server and MongoDB.
- **Error Handling**: Implemented basic error handling to provide clear error messages for better debugging and user feedback.

This setup ensures that our backend is well-structured and ready to support the application as it grows.

## Milestone 4: Creating User Model and Controller

In this milestone, we focused on enhancing the backend of our e-commerce application. The key achievements include:

- **User Model**: Created a User Model to define how user data is stored in the database.
- **User Controller**: Developed a User Controller to manage user-related operations such as adding a new user and retrieving user information.
- **File Uploads with Multer**: Set up Multer to handle file uploads, allowing users to upload profile images.

This setup ensures that our backend can efficiently manage user data and handle file uploads.

## Milestone 5: Creating the Signup Page

## Objective of Milestone 5:

In this milestone, the primary goal was to create the Sign-Up page for the application. The page allows users to input their details, register for an account, and submit that data to the server. We’ve built a front-end form that includes input fields for Name, Email, and Password, and added form validation to ensure the submitted data is correct and meets basic requirements.

## What Was Accomplished:

Created a Sign-Up Form (Frontend - HTML & CSS):
The Sign-Up form includes three main fields for the user to input data:
Name: The user's full name.
Email: The user’s email address.
Password: The user’s password for the account.
Each field is paired with a label, making the form e
asy to understand and accessible for all users.
Form Validation (JavaScript):
Form validation ensures that the data entered by the user meets the expected format before being submitted to the backend.
The form fields are validated for the following criteria:
Name Field: Ensures that the name is not left blank and has a value.
Email Field: Ensures that the email entered is in a valid email format (e.g., example@domain.com).
Password Field: Checks that the password entered meets the minimum length requirement (6 characters or more).

## Milestone 6: What was achieved

- **Password Encryption**: Implemented bcrypt to securely hash passwords before storing them in the database.
- **Secure User Data Storage**: Created a backend signup route that stores user data (name, email) in MongoDB, ensuring the password is encrypted and never stored in plain text.
- **Database Setup**: Configured MongoDB and Mongoose to store user data securely.

## User Signup & Password Encryption

### What was achieved:

- Created a backend API for user signup.
- Integrated bcrypt to hash passwords before storing them in the database.
- Ensured all user data (name, email, etc.) is stored securely, with passwords never stored in plain text.

### Instructions:

- To start the server, use `npm start`.
- Make a POST request to `/signup` with the following body:
  ```json
  {
    "name": "John Doe",
    "email": "johndoe@example.com",
    "password": "securepassword123"
  }
  ```
  # Milestone 7 - User Login Implementation

In this milestone, I have implemented the user login functionality for the backend. The steps taken are:

1. **Login Endpoint**: I created a POST endpoint `/login` that accepts user credentials (email and password).
2. **Password Validation**: I used `bcrypt` to compare the hashed password stored in the database with the user's input.
3. **Error Handling**: If the user doesn't exist or the password is incorrect, appropriate error messages are returned.
4. **Success**: If the login is successful, a message is returned indicating a successful login.

This milestone helps ensure that sensitive information (like passwords) is securely hashed and compared, adding an important layer of security to the application.

### Next Steps:

In the next milestone, I will focus on enhancing the security of the login process by implementing sessions or JWT for user authentication.

# Milestone 8 - Product Card Component

In this milestone, I created a reusable product card component and displayed multiple product cards on the homepage.

### Achievements:

1. **Card Component**: A card component was created to display product information such as name, price, and image.
2. **Dynamic Data**: The homepage was updated to dynamically display multiple product cards using an array of product data.
3. **Grid Layout**: A responsive grid layout was applied to neatly organize the product cards.
4. **Reusable Design**: The card component is designed to be reusable for various products.

### Next Steps:

In the next milestone, I plan to add features like product filtering, sorting, and integrating the API to fetch products dynamically.

## Milestone 9: Product Form Creation

## Overview

In Milestone 9, we focus on creating a frontend form to handle product details input. This form will allow users to submit multiple images, product information, and store these details for future use in the database. The final product will be displayed on the products home page, which was created in the previous milestone.

       !!! Learning Goals 🎯 !!!

By the end of this milestone, you will:

1> Learn how to create a form that accepts all product details (like name, description, price, etc.).

2> Learn how to handle the submission of multiple images for a product.

3> Understand how to integrate this form with a backend (for example, with a Mongoose schema).

4>Gain experience in implementing user input and managing files in a frontend project.

### Why Create Product Form?

The product form serves as the input interface for adding new products to the ecommerce platform. Without this form, there would be no way to add products to the system. The form will accept various details for each product such as:

Product Name: The name of the product.
Description: A brief description of the product.
Price: The price of the product.
Images: Multiple images representing the product (for display purposes).
These details will eventually be saved in the database and displayed on the product homepage, which was set up in the previous milestone.

#### Steps Taken in Milestone 9 📝

1. Create the Product Form
   The core functionality of Milestone 9 revolves around creating a form where users can input all the necessary details about a product. This includes text inputs for product name, price, and description, along with an option to upload multiple images. The form uses the multipart/form-data format to send files (images) to the backend.

Features of the Form:
Product Name: A text input field for entering the product's name.
Description: A textarea for entering a detailed description of the product.
Price: A number input for the price of the product.
Images: An input field that allows multiple images to be uploaded at once. 2. Handling Multiple Images
To support multiple image uploads, we utilized an input field with the attribute multiple, which allows the user to select more than one file. These files are then sent to the backend for processing and storage. The backend will store the images and their metadata, which will be linked to the corresponding product in the database.

3. Mongoose Schema for Products
   We created a Mongoose schema to define the structure of the product object that will be saved in the database. The schema includes the following fields:

name: String - Name of the product.
description: String - Description of the product.
price: Number - Price of the product.
images: Array - List of image URLs related to the product (these images are uploaded and stored in a cloud storage solution). 4. Backend Integration
We set up an API endpoint to handle the form submission, which saves the product details in the database and stores the images. This backend API processes the uploaded images and stores their URLs in the database.

5. Admin Access (Optional)
   For future improvements, we discussed how to extend this functionality to allow only admins to upload products. This involves implementing authentication and authorization, ensuring that only users with admin privileges can add new products.

$$ Future Improvements 💡 $$
As the project continues to evolve, we suggest several potential enhancements to build on Milestone 9:

Admin Authentication: Implement an admin role to restrict product uploads to administrators only.
User Profiles: Allow users to create and maintain shop profiles, where they can upload and manage their products.
Product Validation: Add validation on the backend to ensure that product names, prices, and images are valid before saving to the database.
Product Search and Sorting: In future milestones, we will enhance the product homepage by adding features like filtering and sorting of products based on categories, price range, etc.

## Milestone 10: Product Schema and Endpoint Creation

### What was achieved in this milestone:

In Milestone 10, the following tasks were completed:

1. **Mongoose Product Schema Creation:**

   - Defined the structure of the product data using Mongoose.
   - Included fields like `name`, `description`, `price`, and `image URL`.
   - Implemented validation for each field to ensure only valid data is saved to the database.

2. **POST Endpoint for Storing Product Data:**

   - Built a POST endpoint that accepts product data.
   - Validated the incoming data and stored it in the MongoDB database.
   - Ensured proper error handling and response messages in case of invalid data.

3. **Validation:**
   - Ensured that only valid product data is saved to the database by adding validation rules for fields like `name`, `description`, `price`, and `image URL`.

### Key Features Implemented:

- **Product Schema**: Used Mongoose to create the schema with proper data types and validation.
- **POST Endpoint**: Created an endpoint to receive product details and store them in the database.
- **Validation**: Ensured that data such as `name` and `price` are required, and that the `image URL` is in a valid format.

### Additional Improvements:

- This milestone provides the foundation for creating an admin access system, allowing only admins to upload products.
- It also sets up the basic framework for a user shop profile, which can be expanded later on.

### How to Test:

- Run the application locally or in your preferred environment.
- Use Postman or any API testing tool to send a POST request to `/products` with the following sample JSON body:

```json
{
  "name": "Product Name",
  "description": "Product Description",
  "price": 19.99,
  "imageUrl": "https://example.com/image.jpg"
}
```

## Product Display App - Milestone 11 🚀

### Welcome to the Product Display App! This project demonstrates how to build a full-stack application that fetches product data from a MongoDB database and dynamically displays it on the frontend using React. This is the Milestone 11 of the project.

Table of Contents 📚
Overview
Learning Goals
Features
Installation
Backend Setup
Frontend Setup
How It Works
Technologies Used
Submission Guidelines
Overview 🎯

#### In this milestone, you will:

1> Backend: Set up an Express API endpoint that fetches all product data from MongoDB and sends it to the frontend.
2> Frontend: Use React to display the fetched product data dynamically using a ProductCard component.
This project simulates a basic e-commerce website where products are fetched from a backend API and displayed on the homepage.

Learning Goals 🧠
By the end of this milestone, you will have gained hands-on experience in:

Creating API endpoints in Express to fetch data from a MongoDB database.
Using React to dynamically render data fetched from an API.
Building a full-stack application with a backend and frontend communicating via HTTP requests.

### Features ✨

Dynamic Product Display: All product data is displayed on the homepage.
Backend API: A RESTful API built with Express to fetch all products from MongoDB.
Frontend Integration: React frontend fetching data from the backend and displaying it dynamically using reusable components.

## Ecommerce Follow-Along - Milestone 12 🎯

Overview 🌟

In Milestone 12, we added the "My Products" page functionality to the ecommerce app. This page displays all products added by the user based on their email. We set up an endpoint to fetch products filtered by the user’s email from the MongoDB database, and then we dynamically display those products on the frontend using the previously created Product Card component.

## What Was Achieved in This Milestone 🎉

Backend 🖥️:

Created an Express endpoint to filter products based on the user's email.
Retrieved all the products associated with the logged-in user's email from the MongoDB database.
Frontend 💻:

Wrote a function to call the new backend endpoint and retrieve the products.
Dynamically displayed the retrieved products in the Product Card component.
Key Learning Outcomes 📚:

#### How to write an endpoint to filter data by a specific user constraint (email in this case).

How to send and receive data between frontend and backend.
How to display dynamic content on the frontend using React components (Product Card).
What You’ll Find in This Repository 🛍️
Express Server: Contains routes and API for interacting with the MongoDB database.
Frontend React App: Displays the list of products dynamically using the product card.
MongoDB: Used to store and retrieve product data, filtered by email.
Steps Followed in Milestone 12 🚀
Create an Express Route:

Set up the endpoint /products to get all products associated with the current user’s email from MongoDB.
Frontend API Call:

Made a call to the new API endpoint from the React frontend to fetch data and display it on the "My Products" page.
Product Display:

Dynamically passed the product data to the Product Card component for display.

### Milestone 13: Editing Products in MongoDB 🛍️

Overview 🌟
->>> In this milestone, we added functionality to edit the details of products in the MongoDB database. The goal was to provide a seamless experience for updating product details both on the frontend and backend.

###### Learning Goals 🎯

By completing this milestone, I learned how to:

Write an endpoint to update existing data in MongoDB.
Auto-fill a form with existing data for easy editing.
Integrate frontend functionality with backend API for updating product information.
What I Did 📝
1>>>>
Backend:
Created an update endpoint in Express to receive new product data and update the corresponding product in MongoDB.
Utilized MongoDB's findByIdAndUpdate method to modify the product data based on its ID.
2>>>>
Frontend:
Added an Edit button next to each product.
When the edit button is clicked, the product’s current details are auto-filled in the form.
Implemented functionality to allow changes to the product details and then update the database after submission.

#### Key Functions Implemented:

Edit Button: An option for users to edit product details.
Auto-fill Form: The form is pre-filled with the current details of the product when the edit button is clicked.
Update Endpoint: A backend endpoint that takes the new data and updates the product in MongoDB.
Technologies Used 🔧
Node.js: For building the backend.
Express: To handle HTTP requests.
MongoDB: To store and manage product data.
Frontend (HTML/CSS): Basic frontend to display products and handle user interactions.
JavaScript: For both backend and frontend functionalities.
🚀

### Challenges Faced 🧩

Data consistency: Ensuring that the data sent from the frontend matches the structure required by MongoDB.
Form auto-fill: Making sure the form auto-fills correctly with the existing product data and handles the editing seamlessly.
Future Improvements 🔮
Validation: Adding form validation to ensure the data entered is correct and complete.
Error handling: Improving error handling to provide clear messages to the user when something goes wrong.
Conclusion 🎉
This milestone was a great exercise in working with MongoDB and building a functional backend that interacts with the frontend. I now have a better understanding of how to implement CRUD operations and connect the frontend with the backend.

###### Follow-along Project - Milestone 14: Modifying Data through API 🚀

->>
Milestone Overview 📝
->>>???

In Milestone 14, the goal was to add the functionality to delete a product from the database by integrating a delete button into the product card in the frontend and creating an endpoint in the backend to handle the delete request.

Learning Goals 🎯
By the end of this milestone, you should have learned:

How to write a backend endpoint that deletes a product from MongoDB by its ID.
How to add a delete button to the frontend and send the product ID to the backend for deletion. 🖱️
Milestone Steps 🛠️
Backend: Creating the Delete Endpoint 💻
Define the Delete Route: Create an Express.js route that listens for DELETE requests. This route will receive the product ID to delete the corresponding product in MongoDB. 🗑️
MongoDB Delete Operation: Using the findByIdAndDelete method of MongoDB, the backend will remove the product with the given ID. 🔥
Error Handling: Ensure appropriate error handling for invalid or missing IDs, or when the product doesn't exist. ⚠️
Frontend: Delete Button 💡
Add Delete Button: In the frontend, each product card should have a delete button. 🔴
Send Delete Request: When the button is clicked, the product ID should be sent to the backend to delete the product. You can use fetch or axios for sending the API request. 🚀
Update UI: Upon successful deletion, the product should be removed from the displayed list of products. 🔄
