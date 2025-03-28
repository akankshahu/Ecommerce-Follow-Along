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


#### 🚀 Ecommerce-Follow-Along

🎯 Milestone 15 - Navbar Component

📌 What was achieved in this milestone?

In this milestone, we created a Navbar Component and integrated it into all pages of our Ecommerce application, making navigation smooth and user-friendly. Below are the key accomplishments:

✅ Built a reusable Nav Component 🏗️✅ Added navigation links to: 🏠 Home, 📦 My Products, ➕ Add Product, 🛒 Cart✅ Made the Navbar fully responsive across all screen sizes 📱💻✅ Ensured seamless navigation between pages 🔄✅ Improved user experience with an intuitive interface ✨

🛠️ Tech Stack Used

React ⚛️

Vite ⚡

React Router 🛤️

Tailwind CSS 🎨







🎯 Milestone 16 - Product Info Page 🛍️

📌 What was achieved in this milestone? 🏆

In this milestone, we developed a Product Info Page that enhances the user experience by allowing customers to view detailed product information, select the desired quantity, and seamlessly add items to their cart. Below are the key accomplishments:

✅ Created a Product Info Page that displays all product details 📝
✅ Implemented a quantity selection feature 🔢
✅ Added an Add to Cart button for effortless shopping 🛒
✅ Integrated the page seamlessly with the existing app 🔄
✅ Ensured the design is fully responsive across all devices 📱💻
✅ Improved user navigation for a smoother experience 🚀

🛠️ Tech Stack Used 🏗️

React ⚛️ - For building the UI components

Vite ⚡ - For fast and optimized development

React Router 🛤️ - For smooth navigation between pages

Tailwind CSS 🎨 - For a modern and responsive design
  





  🛒 Cart Functionality - Milestone 17
🚀 Overview

In this milestone, we implemented the cart functionality by creating an endpoint to add products to the cart and store them in a database. This helps in managing user-selected products efficiently.
📌 Steps Followed
📝 1. Updated User Schema to Include Cart Products

    Modified the User model to have a cart field.
    This field is an array that stores the product details added to the cart.

🔗 2. Created a New API Endpoint for Cart

    Built a POST endpoint (/cart/add) to allow users to add products to their cart.
    The endpoint accepts product details (ID, name, price, quantity, etc.) in the request body.

📦 3. Stored Cart Data in the Database

    Used MongoDB (via Mongoose) to store cart items.
    When a user adds a product, it gets saved in the database under their user document.

🛠️ 4. Tested API with Postman

    Sent sample requests using Postman to verify the API works correctly.
    Checked database updates to ensure the cart items are stored properly.

⚡ 5. Handled Errors & Validations

    Implemented error handling for invalid product data.
    Ensured a user must be logged in to add products to their cart.

📤 6. Pushed Code to GitHub

    Committed all changes and pushed the code to a public GitHub repository.
    Updated the README file to summarize Milestone 17.

📎 7. Submitted the Repository Link

    Shared the GitHub repository link in the assignment submission section.

✅ Technologies Used

    Node.js & Express.js (for backend)
    MongoDB & Mongoose (for database)
    Postman (for API testing)
    Git & GitHub (for version control & submission) 🚀


    







    🛒 Milestone 18 - Backend Endpoint for Cart Page
🚀 Overview

In this milestone, we implemented a backend API endpoint that allows users to retrieve all the products stored in their shopping cart using their email address. This feature is essential for an eCommerce application, as it enables users to view their cart contents seamlessly before proceeding to checkout.

A well-designed cart management system ensures:
✅ A smooth and seamless user experience.
✅ Efficient retrieval of cart items with minimal database queries.
✅ Secure access to user-specific cart data.

🎯 Key Learning Outcomes

Through this milestone, we:

✅ Created an API endpoint to handle frontend requests for cart items.
✅ Developed a backend route to retrieve a user’s cart products using their email as an identifier.
✅ Gained a deeper understanding of cart management in real-world eCommerce applications.

This milestone enhances both user experience and backend efficiency, ensuring a reliable shopping cart system. 🚀🛒 Milestone 18 - Backend Endpoint for Cart Page
🚀 Overview

In this milestone, we implemented a backend API endpoint that allows users to retrieve all the products stored in their shopping cart using their email address. This feature is essential for an eCommerce application, as it enables users to view their cart contents seamlessly before proceeding to checkout.

A well-designed cart management system ensures:
✅ A smooth and seamless user experience.
✅ Efficient retrieval of cart items with minimal database queries.
✅ Secure access to user-specific cart data.

🎯 Key Learning Outcomes

Through this milestone, we:

✅ Created an API endpoint to handle frontend requests for cart items.
✅ Developed a backend route to retrieve a user’s cart products using their email as an identifier.
✅ Gained a deeper understanding of cart management in real-world eCommerce applications.

This milestone enhances both user experience and backend efficiency, ensuring a reliable shopping cart system. 🚀
## Milestone 19: Cart Page and Quantity Management

### Overview

In this milestone, we created a frontend page to display the products inside the cart and added functionality to increase and decrease the quantity of each product. We also wrote backend endpoints to handle the quantity updates.

### What Was Achieved

1. **Cart Page UI**:
   - Created a new cart page that displays the products inside the cart using the endpoint built in Milestone 18.
   - Each product in the cart is displayed with its name, price, quantity, and total cost.

2. **Quantity Management**:
   - Added `+` and `-` buttons for each product to increase and decrease the quantity.
   - Implemented functionality to update the quantity in the frontend when the buttons are clicked.

3. **Backend Endpoints**:
   - Created a backend endpoint to increase the quantity of a product in the cart.
   - Created a backend endpoint to decrease the quantity of a product in the cart.
   - Ensured that the quantity cannot go below 1.

### Steps Followed

1. **Frontend**:
   - Created a new `Cart.jsx` component to display the cart items.
   - Used state management to handle the quantity updates.
   - Made API calls to the backend endpoints to update the quantity in the database.

2. **Backend**:
   - Added new routes in the backend to handle the quantity updates.
   - Implemented logic to increase and decrease the quantity of a product in the cart.
   - Ensured proper error handling and validation.

### How to Test

1. **Run the Application**:
   - Start the backend server using `npm start`.
   - Start the frontend development server using `npm run dev`.

2. **Test the Cart Page**:
   - Navigate to the cart page in the application.
   - Verify that the products are displayed correctly.
   - Use the `+` and `-` buttons to increase and decrease the quantity of each product.
   - Ensure that the total cost is updated correctly.

### Technologies Used

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express, MongoDB, Mongoose

### Future Improvements

- Add validation to ensure that the quantity does not exceed available stock.
- Implement user authentication to ensure that only logged-in users can access the cart.
- Add a feature to remove products from the cart.

This milestone enhances the cart functionality, providing a better user experience by allowing users to manage the quantity of products in their cart seamlessly.
## Milestone 20: Profile Page and User Data Endpoint

### Overview

In this milestone, we created a backend endpoint to retrieve user data and a frontend profile page to display the user's profile information, including their profile photo, name, email, and addresses.

### What Was Achieved

1. **Backend Endpoint**:
   - Created an endpoint to fetch user data based on their email.
   - The endpoint retrieves the user's profile photo, name, email, and addresses from the database.

2. **Frontend Profile Page**:
   - Developed a profile page to display the user's profile photo, name, and email.
   - Added a section to display the user's addresses.
   - Included a button labeled "Add Address" for adding new addresses.
   - Displayed a message "No address found" if the user has no addresses.

### Steps Followed

1. **Backend**:
   - Added a new route in the backend to handle requests for user data.
   - Implemented logic to fetch user data from the database based on the provided email.
   - Ensured proper error handling and validation.

2. **Frontend**:
   - Created a new `Profile.jsx` component to display the user's profile information.
   - Used state management to handle the fetched user data.
   - Made an API call to the backend endpoint to retrieve user data.
   - Displayed the user's profile photo, name, and email in one section.
   - Displayed the user's addresses in another section with an "Add Address" button.
   - Showed a message "No address found" if the user has no addresses.

### How to Test

1. **Run the Application**:Logo
Livebooks
Backend Web Development [V2]
Deploying your API, local and prod[V2]
Follow-along project milestone #5
Score 60% or more to mark this assignment as completed
Your recent submission was not upto the mark. Please check your report under ‘Your Attempts’ and resubmit.

Certified Score

5
/10
Your Attempts
Hey Kalvians!

Welcome to Milestone 5! 🌟

You’ve made fantastic progress so far, and in this milestone, we’re going to take your app even further! This time, we’ll focus on building the Sign-Up Page on the frontend and setting up routes to handle the user sign-up process smoothly.

If some of the concepts feel new, don’t worry! We’ll break everything down so it’s easy to follow and understand step by step.

Learning Goals 🎯
By the end of this milestone, you will:

You will create the frontend UI for users to register by filling out their details.
We’ll ensure that user inputs (like email and password) are properly validated before they’re submitted. Update the README file: Don’t forget to document what you’ve accomplished!
1. What’s a Sign-Up page?
The Sign-Up page is where users can enter their details to create an account. This page will typically include fields like:
Name
Email
Password
This page allows users to provide their information, which will be sent to the server for processing.
We’ll create a simple yet effective sign-up form that looks clean and is user-friendly.
2. What is Form validation?
Form Validation ensures that the information users provide is correct and in the right format.
For instance, we’ll check if the email is in the correct format and if the password meets certain security criteria (e.g., minimum length).
Form validation helps prevent errors and ensures that the backend receives clean and valid data.
Steps for Milestone 5 📝
In this milestone, you will work on the frontend while your mentor will guide you through:
Building the Sign-Up Page with HTML and CSS.
Adding form validation to ensure users input valid data.
In case you missed the mentor-led session, don’t worry! You can always go through the content and reach out to your mentor for help on any coding aspects.

Submission Guidelines 📥
Once you’ve completed these steps:
Push your code to the same GitHub repository you’ve used for previous milestones.
Make sure your repository is publicly accessible.
Update your README file with a new section summarizing your progress for Milestone 5.
Share the repository link in the assignment provided below.
Next steps 🚀
In the next milestone, we’ll continue building out advanced features for your app, including connecting the front-end with the backend and managing user sessions! Keep up the great work, and as always, feel free to reach out to your mentor if you have any questions.

Good luck, Kalvians! ✨

Take this assignment to show your understanding of the topics you have learned.

Max. Duration:
1 hr
How did you like this assignment?

Not Good

Okayish

Good

Very Good

Previous

Deploying your API - Practice assignment #2
Next

Follow-along project milestone #6
Submitted on 8 Feb 2025, 05:51 pm
   - Start the backend server using `npm start`.
   - Start the frontend development server using `npm run dev`.

2. **Test the Profile Page**:
   - Navigate to the profile page in the application.
   - Verify that the user's profile photo, name, and email are displayed correctly.
   - Check that the user's addresses are displayed correctly.
   - Ensure that the "Add Address" button is functional.
   - Verify that the message "No address found" is displayed if the user has no addresses.

### Technologies Used

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express, MongoDB, Mongoose

### Future Improvements

- Add functionality to update the user's profile photo, name, and email.
- Implement user authentication to ensure that only logged-in users can access the profile page.
- Add a feature to edit and delete addresses.

This milestone enhances the user experience by providing a comprehensive profile page that displays the user's information and allows for address management.







📌 Milestone 21 - Address Form Frontend 🚀
🏆 Learning Goals

By completing this milestone, I have learned how to:
✅ Create a frontend form for address input 🏡
✅ Store user input in the component's state 💾
✅ Navigate to the address form page from the profile section 🔄
🛠️ Steps Implemented

1️⃣ Designed an address form with fields for:

    Country 🌍
    City 🏙️
    Address Line 1 🏠
    Address Line 2 🏢
    Zip Code 🔢
    Address Type 📌
    2️⃣ Managed input values using React state ⚛️
    3️⃣ Handled form submission and navigation 📩



    

    🚀 Milestone 22: Adding Address to User Profile

📌 Overview

In this milestone, we implemented a backend endpoint to store user addresses in the database. The address will be saved inside the user's profile as part of the address array in the user collection.

🎯 Learning Goals

✅ Create a backend endpoint to store the address inside the user profile.

✅ Understand how to handle form data from the frontend.

✅ Update the user collection with the new address.

🛠️ Steps Implemented

Created an API endpoint to receive the address from the frontend form.

Validated and processed the address before storing it in the database.

Updated the user collection by adding the address inside the address array.

Tested the endpoint using Postman and frontend integration.

Committed & Pushed changes to the GitHub repository.

   

























🚀 Milestone 23: Implementing Place Order Functionality 🛒

📌 Overview

In this milestone, we have implemented the Place Order functionality in our React app. We have created a Select Address page and written a Mongoose schema for storing order details in the backend.

🎯 Features Implemented

🖥️ Frontend:

✅ Added a "Place Order" button inside the Cart Page.
✅ Created a Select Address Page to display available addresses and allow the user to select one.

🛠️ Backend:

✅ Implemented an API endpoint to fetch user addresses.
✅ Created a Mongoose schema for storing order details.

📝 Steps Implemented

Frontend (React)

🛍️ Added Place Order Button:

Located inside the Cart Page.

Navigates to the Select Address page upon clicking.

📍 Created Select Address Page:

Fetches and displays all available addresses.

Allows the user to select an address.

Backend (Node.js + Express + MongoDB)

📦 Created Order Schema:

Stores user ID, selected address, order items, and status.

🔗 Implemented API to Fetch Addresses:

Returns all addresses for the logged-in user.











## 🚀 Milestone 24: Order Confirmation Page 🛒

### 📌 Overview

In this milestone, we created an **Order Confirmation Page** in the frontend. This page displays the products being ordered, the selected delivery address, and the total price of the cart. It also includes a "Place Order" button to finalize the order.

---

### 🎯 Learning Goals

By completing this milestone, we learned how to:

✅ Display a summary of the products being ordered.  
✅ Show the selected delivery address for the order.  
✅ Calculate and display the total price of the cart.  
✅ Add a "Place Order" button to finalize the order.  

---

### 🛠️ Steps Implemented

1️⃣ **Display Ordered Products**:  
   - Fetched the list of products being ordered from the cart.  
   - Displayed each product with its name, quantity, and price.  

2️⃣ **Show Selected Address**:  
   - Retrieved the selected delivery address from the user's profile.  
   - Displayed the address details, including country, city, and zip code.  

3️⃣ **Calculate Total Price**:  
   - Calculated the total price of all products in the cart.  
   - Displayed the total price prominently on the page.  

4️⃣ **Add Place Order Button**:  
   - Added a "Place Order" button at the bottom of the page.  
   - Clicking the button navigates to the backend endpoint to place the order.  

---

### 🖥️ How the Order Confirmation Page Works

1️⃣ **Products Section**:  
   - Displays all the products being ordered.  
   - Includes product name, quantity, and price for each item.  

2️⃣ **Address Section**:  
   - Shows the selected delivery address.  
   - Includes details like country, city, address lines, and zip code.  

3️⃣ **Total Price Section**:  
   - Displays the total price of all items in the cart.  

4️⃣ **Place Order Button**:  
   - Finalizes the order and navigates to the backend for order placement.  

---



# 📌 Milestone 25 - Placing an Order Backend Endpoint

## 🎯 Learning Goals
By completing this milestone, you will:
- ✅ Create a backend endpoint to place an order.
- ✅ Retrieve user details using their email.
- ✅ Store order details in the MongoDB `orders` collection.
- ✅ Understand how to process and save multiple products as separate orders with the same address.

---

## 📝 Steps to Implement
1️⃣ **Create an endpoint** that receives:
   - Products 📦
   - User email 📧
   - Address details 🏠

2️⃣ **Retrieve user ID** using the email from the `users` collection. 👤

3️⃣ **Store each product as a separate order** but with the same address in MongoDB. 🗄️

4️⃣ **Use the Order Schema** created earlier to save order details in the `orders` collection. 📜

5️⃣ **Return a success response** upon order placement. 🎉

---

## 🛠️ Technologies Used
- **Backend:** Node.js, Express.js 🚀
- **Database:** MongoDB, Mongoose 🗃️
- **Frontend:** React.js ⚛️


## 🚀 Milestone 26: Fetching User Orders Backend Endpoint 🛒

### 📌 Overview

In this milestone, we implemented a **backend endpoint** to fetch all orders placed by a specific user. This endpoint retrieves the user's orders from the database using their email and returns the order details in the response.

---

### 🎯 Learning Goals

By completing this milestone, we learned how to:

✅ Create a backend endpoint to fetch user-specific orders.  
✅ Retrieve the user ID (`_id`) using their email.  
✅ Query the database to fetch all orders associated with the user.  
✅ Send the retrieved orders as a response to the client.  

---

### 🛠️ Steps Implemented

1️⃣ **Created the Backend Endpoint**:  
   - Built a GET endpoint `/api/v2/order/get-orders` to fetch user orders.  
   - The endpoint accepts the user's email as a query parameter.  

2️⃣ **Retrieved User ID**:  
   - Used the email provided in the request to fetch the `_id` of the user from the `users` collection.  

3️⃣ **Fetched User Orders**:  
   - Queried the `orders` collection using the retrieved user ID.  
   - Retrieved all orders associated with the user.  

4️⃣ **Sent Response**:  
   - Returned the list of orders in the response, including details like product, quantity, address, and status.  

5️⃣ **Tested the Endpoint**:  
   - Used **Postman** to test the endpoint with sample data.  
   - Verified that the correct orders were retrieved and returned in the response.  

---

### 📝 How the Endpoint Works

1️⃣ **Request**:  
   The endpoint accepts the user's email as a query parameter:  
