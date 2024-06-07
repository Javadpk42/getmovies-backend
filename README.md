# Get Movies Backend

## Project Overview

This is the backend service for the Get Movies web application. The backend handles API requests and interacts with a MongoDB Atlas database to manage movie data. It provides endpoints to retrieve and search for movies.
### Prerequisites

- Node.js installed on your machine.
- MongoDB installed or access to a cloud MongoDB service.
- Git installed on your machine.
- An internet connection to fetch dependencies.

### Installation Steps

1. Clone the repository to your local machine:
    ```sh
    git clone https://github.com/Javadpk42/getmovies-backend.git
    ```

2. Navigate to the project directory:
    ```sh
    cd getmovies-backend
    ```

3. Install the required dependencies:
    ```sh
    npm install
    
4. Set Up Environment Variables:
    Create a `.env` file in the root directory and define the following environment variables:
    ```env
    PORT=The port on which the backend server will run.
    CLIENT_API=The URL of the frontend client.
    MONGO_URL=<your-mongodb-connection-string>
    ```
5. Start the backend server:
    ```sh
    npm run dev
    ```

