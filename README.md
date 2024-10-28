# CNC-MySQL Studio

**CNC-MySQL Studio** is an advanced, open-source MySQL management tool developed by Code N Code IT Solutions. Built on Laravel 11.x and React with TypeScript, CNC-MySQL Studio provides a modern, powerful, and user-friendly interface for managing MySQL databases. Inspired by industry tools like PHPMyAdmin and JetBrains DataGrip, it includes AI-driven query suggestions, advanced data visualization, and rich customization options.

---

## Features

### Core Features
- **Database Management**: View, create, update, and delete databases with ease.
- **Table Management**: Efficiently manage tables, including schema updates, data entry, and record management.
- **User Management & Access Control**: Role-based access control with support for Multi-Factor Authentication (MFA).
- **SQL Query Execution**: Full support for executing raw SQL queries, with logging and export options.
- **Data Import & Export**: Seamlessly import/export data in various formats (CSV, JSON, XML).
- **Schema Versioning**: Track schema changes with built-in version control for easy rollbacks.

### Advanced Features
- **AI-Driven Query Suggestions**: Powered by AI, CNC-MySQL Studio suggests optimized query structures and provides auto-complete options to improve productivity and performance.
- **Real-Time Query Analysis**: Analyze query performance in real time, including execution time, query plan, and recommendations for optimization.
- **Visual Data Modeling**: Drag-and-drop interface for designing and visualizing database schema and relationships.
- **Data Visualization Tools**: Generate interactive graphs, charts, and dashboards directly from data tables to visualize patterns and insights.
- **Dark Mode and Custom Themes**: Switch between light and dark modes or customize the theme to suit your preferences.
- **Error Detection & Debugging**: Built-in error detection with suggestions and debugging tools to help you troubleshoot issues instantly.

### Security Features
- **Multi-Factor Authentication (MFA)**: Secure your login with additional authentication layers.
- **Role-Based Access Control (RBAC)**: Set fine-grained permissions for users, ensuring data security and limited access.
- **Activity Logging**: Logs all activity, providing audit trails for changes and access.

### Integrations
- **Support for External Databases**: Connect to external MySQL databases with ease.
- **API Support**: Access and manage databases through a RESTful API for integration with other applications.

---

## Installation

### Requirements
- PHP 8.x
- Node.js 16.x or later
- MySQL 5.7 or later
- Composer

### Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/CodeNCode-IT-Solutions/cnc-mysql-studio.git
   cd cnc-mysql-studio
2. **Install Backend Dependencies**
   ```bash
   composer install
3. **Install Frontend Dependencies**
   ```bash
    npm install
4. **Configure Environment**
    - Duplicate `.env.example` to `.env` and configure your database credentials:
      ```plaintext
      DB_CONNECTION=mysql
      DB_HOST=127.0.0.1
      DB_PORT=3306
      DB_DATABASE=your_database
      DB_USERNAME=your_username
      DB_PASSWORD=your_password
      ```
5. **Generate Application Key**
    ```bash
    php artisan key:generate
6. **Run Migrations**
   ```bash
   php artisan migrate

7. **Build and Serve the Application**
    - Development Server
      ```bash
      npm run dev
      php artisan serve
      ```
    - Production Build
      ```bash
      npm run build
      ```

8. **Access Application**
    - Open your browser and go to [http://localhost:8000/phpmyadmin](http://localhost:8000/phpmyadmin) or [http://localhost:8000](http://localhost:8000), depending on your configuration.
---

## Usage

### SQL Query Suggestions
The AI-driven query suggestion tool automatically provides optimized query recommendations based on your input, ensuring efficiency and performance.

### Data Visualization
Navigate to the **Data Visualization** tab on any table to access interactive charts, graphs, and summaries, which can be customized and exported.

### Advanced Data Modeling
Use the **Schema Designer** to drag-and-drop table relations, visualize the database structure, and track changes.

---

## Development

### Running Tests
Run unit tests for backend and frontend:
- **Backend**: PHPUnit
  ```bash
  php artisan test

- **Frontend**: Jest
  ```bash
    npm run test

### API Documentation
For API integration, CNC-MySQL Studio provides a comprehensive RESTful API. Access API documentation at `/api/docs` after installation.

### Contributing
- Fork the repository
- Create a new branch (`git checkout -b feature`)
- Make your changes
- Commit your changes (`git commit -am 'Add new feature'`)
- Push to the branch (`git push origin feature`)
- Create a new Pull Request
- Follow the Code of Conduct
- Wait for review and approval
- Merge changes
- Celebrate your contribution!
  - **Note**: Please update the README with details of changes and new features.
  - **Note**: Ensure that your code follows the existing coding standards and conventions.
  - **Note**: Write detailed commit messages and PR descriptions for better understanding.
  - **Note**: Test your changes thoroughly before submitting a PR.
  - **Note**: Document any new features or changes in the README.
  - **Note**: Follow the [Contributing Guidelines](CONTRIBUTING.md) for more details.
  - **Note**: Respect the [Code of Conduct](CODE_OF_CONDUCT.md) and be respectful to others.
  - **Note**: Have fun and enjoy contributing to open-source projects!
  - **Note**: If you have any questions or need help, feel free to reach out to the maintainers.

