
# Floor Management Application

The **Floor Management Application** allows restaurant managers to easily design and manage their restaurant floor layout. The app provides functionality for drag-and-drop table management, configuring table details, managing rooms, and saving the room layout. It also includes features for editing table details such as table name, covers, and online status.


**Features**
- Drag and drop tables onto the floor plan with precise positioning.
- View and edit table details (Table Name, Min Covers, Max Covers).
- Set the height, width, and rotate tables.
- Duplicate or delete tables.
- Toggle table online status (Active/Inactive).
- Add, save, and manage rooms.
- Display statistics such as total tables, minimum and maximum covers, and online capacity.

## Tech Stack

- **Frontend Framework:** React
- **State Management:** Redux
- **Styling:** Tailwind CSS
- **Drag and Drop:** react-rnd
- **Persistence:** Local Storage or Mock Backend (for saving room layouts)
- **Type Safety:** TypeScript

## Installation

### Prerequisites

- Node.js (v18+)
- npm  package manager

### Steps to Get Started

1. **Clone the repository**
    ```bash
    https://github.com/kugan7370/Floor-Management-App.git
    cd floor-management-app
    ```

2. **Install dependencies**
    ```bash
    npm install
    ```


3. **Run the development server**
    ```bash
    npm start
    ```

    The app should now be running on [http://localhost:5173/]

    
## Usage

1. **Drag and Drop Tables**
   - Users can drag tables from the sidebar onto the floor plan and place them in the desired position.

2. **Edit Table Details**
   - Select a table to view and edit its details, such as the table name, minimum and maximum covers.
   - Optionally, adjust the height and width of the table or rotate it.

3. **Table Management**
   - Toggle the table's online status (Active/Inactive).
   - Duplicate or delete tables by selecting the relevant icons.

4. **Room Management**
   - Add new rooms to the floor plan.
   

5. **View Statistics**
   - At the bottom of the UI, see the total number of tables, main covers, max covers, and online capacity.



## Future Enhancements


1. **Backend Integration**: Connect with a backend to store room layouts and table data persistently.
2. **User Authentication**: Add login functionality for restaurant managers to personalize their floor plans.
3. **Advanced Statistics**: Include more detailed analytics such as occupancy rate, busiest times, and more.

## Screenshots
![Floor Management](https://github.com/user-attachments/assets/cf37bd20-f8a9-4cdf-9d83-c02e47bd6bf9)

