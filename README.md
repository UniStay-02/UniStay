# UniStay | Hostel Management System
## Project Overview 
UniStay is a modern web application that helps university students discover and explore hostels near their campus. The platform provides an easy way to search for accommodation, compare hostel options, view detailed information and make booking requests through a user-friendly interface.

## Features

- Browse available hostels
- Search hostels by name
- Filter hostels by:
  - Location
  - Price
  - Hostel Type (Male, Female, Mixed)
- View detailed hostel information
- Hostel image gallery
- Book hostel rooms
- View booking history
- User profile management
- Responsive design for desktop, tablet, and mobile devices

## Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- JavaScript

### Data management
- Local Storage

### Version Control

- Git
- GitHub

## Project Structure 

```
UniStay/
│
├── public/
│
├── src/
│   │
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │   └── logo.png
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── SearchBar.jsx
│   │   ├── ProfileCard.jsx
│   │   ├── HostelDetails.jsx
│   │   ├── Gallery.jsx
│   │   └── ProtectedRoute.jsx
│   │
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   ├── ThemeContext.jsx
│   │   └── HostelContext.jsx
│   │
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Hostels.jsx
│   │   ├── HostelDetails.jsx
│   │   ├── Booking.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Profile.jsx
|   |   ├── BookingForm.jsx
│   │   │
│   │   └── admin/
│   │       ├── Dashboard.jsx
│   │       ├── AddHostel.jsx
│   │       ├── EditHostel.jsx
│   │       ├── ManageUsers.jsx
│   │       └── ManageBookings.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── package.json
├── package-lock.json
├── vite.config.js
├── README.md
└── LICENSE
```
## Contributions

Contributions to UniStay are welcome. To contribute:

1. Fork the repository.
2. Clone your fork to your local machine.

   ```bash
   git clone https://github.com/UniStay-02/UniStay
   ```

3. Create a new branch for your feature or bug fix.

   ```bash
   git checkout -b feature/your-feature-name
   ```

4. Make your changes and test them thoroughly.

5. Commit your changes with a clear commit message.

   ```bash
   git commit -m "Add hostel search functionality"
   ```

6. Push your branch to GitHub.

   ```bash
   git push origin feature/your-feature-name
   ```

7. Open a Pull Request describing the changes you made.

## Coding Standards

To maintain consistency and code quality across the project, all contributors should follow these standards:

### General Guidelines

- Write clean, readable, and maintainable code.
- Use meaningful and descriptive variable, function, and component names.
- Keep components focused on a single responsibility.
- Avoid code duplication whenever possible.
- Remove unused imports, variables, and files.


## Future Roadmap

The following features are planned for future releases of **UniStay**:

- **Online Payment Integration** – Allow students to securely pay booking fees through integrated payment gateways.
- **Google Maps Integration** – Display hostel locations on an interactive map and provide directions.
- **Real-Time Room Availability** – Show live updates on available and occupied rooms.
- **Hostel Owner Dashboard** – Enable hostel owners to manage listings, bookings, and room availability.
- **In-App Messaging** – Allow direct communication between students and hostel owners for inquiries and booking discussions.

## Licence

- MIT license

## Author

### Collaboration

- Ian Cymi
- Derrick Weru
- Japheth Kiprono
- Idah Karwitha
