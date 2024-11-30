

# ROJLEARN: Online Learning Management and Tracking System (LMS)

LMS platform where instructors can create and manage courses, students can enrol and participate in courses, and both can interact seamlessly. The platform will also enable instructors to create projects, assign tasks, set deadlines, and track progress. Administrators will have full control over the content and user management.



### **Technologies:**

- **Spring Boot**: For application setup and configuration.
- **Spring Data JPA**: For interacting with relational databases.
- **Spring Security**: For user authentication and authorization.
- **REST APIs**: To build backend services for the application.
- **React**: For building the front end of the application.
- **MongoDB**: For storing unstructured data like user activity logs, discussions, and notifications.
- **MySQL or PostgreSQL**: For relational data storage (e.g., user data, courses, enrollments).
- **WebSockets**: For real-time communication features like chat and notifications.

### **Features:**

1. **User Roles:**
    - **Admin**: Full access to manage users, courses, content, and platform settings.
    - **Instructor**: Can create and manage courses, projects, and tasks, and track student progress.
    - **Student**: Can enrol in courses, participate in projects, and track their progress.
2. **Course Creation and Management:**
    - Instructors can create courses, and add course materials, quizzes, and assignments.
    - Manage course settings, including course description, syllabus, and prerequisites.
3. **Enrollment System:**
    - Students can browse available courses and enrol.
    - Admins and instructors can manage enrollments and permissions.
4. **Progress Tracking and Assessments:**
    - Track student progress through quizzes, assignments, and course completion.
    - Automatic grading for quizzes and manual grading options for assignments.
5. **Discussion Forums or Chat for Interaction:**
    - Forums for course discussions, Q&A, and peer interaction.
    - Real-time chat for immediate communication between students and instructors.
6. **User Registration and Login:**
    - Secure registration and login functionality with Spring Security.
    - Password recovery and multi-factor authentication for enhanced security.
7. **Project and Task Management:**
    - Instructors can create projects, assign tasks, and set deadlines.
    - Task assignment to individual students or groups.
    - Real-time progress tracking and status updates for each task.
8. **Notifications:**
    - Notifications for upcoming deadlines, new tasks, course updates, and forum activity.
    - Push notifications for urgent alerts and updates.
9. **User Dashboard:**
    - Personalized dashboards for each user role (Admin, Instructor, Student).
    - Overview of courses, tasks, deadlines, and recent activities.
10. **Analytics and Reporting:**
    - Generate reports on student performance, course engagement, and task completion.
    - Analytics for instructors to monitor course effectiveness and improve content.
11. **Content Management:**
    - Admins can manage all content, including courses, forums, and user-generated content.
    - Version control for course materials and automatic updates.
12. **Integration with External Tools:**
    - Integration with third-party tools like Google Drive, Zoom, or Microsoft Teams for additional functionalities.
13. **API Documentation and Developer Portal:**
    - Comprehensive API documentation for developers to integrate and extend the LMS functionality.
    - Developer portal for managing API keys and monitoring API usage.
14. **Like, Rating, and Comment System:**
    - **Likes and Ratings**: Allow students to like and rate courses, assignments, and projects. This feedback can help instructors improve their content and help other students identify popular courses.
    - **Comments**: Enable commenting on courses, lessons, and projects to foster interaction and peer learning. Instructors can also provide feedback directly in the comment section.
15. **Performance Reviews and Feedback:**
    - **360-Degree Feedback**: Enable comprehensive feedback from peers, instructors, and self-assessments for a holistic view of a student's performance.
    - **Skill Assessment Tests**: Include pre-assessment tests to evaluate the current skill level and post-assessment tests to measure learning outcomes.
16. **Support and Helpdesk Integration:**
    - **Helpdesk and Support Ticketing**: Integrate with helpdesk systems to provide prompt support and resolve issues raised by users.
    - **Knowledge Base and FAQs**: Create a searchable knowledge base and FAQ section to help users quickly find answers to common questions.


# 🏁 Installation
### 💻 Running locally

To run the SmartPool project locally, follow these steps:

1. Install [MongoDB](https://www.mongodb.com) and [MongoDB Compass (optional)](https://www.mongodb.com/products/compass) on your machine.
2. Clone the project repository.
3. Navigate to the `rojlearnn` project directory.
```bash
cd rojlearnn
```
4. Go to `rojlearnn/src/main/java/com/rojlearnn/rojlearnn/config/WebConfig.java`, and change the necessary credentials.
```java
.allowedOrigins(" YOUR_FONTEND_URL")
```
5. Go to `rojlearnn/src/main/java/com/rojlearnn/rojlearnn` :

```bash
cd rojlearnn/src/main/java/com/rojlearnn/rojlearnn
```

6. Run `RojlearnnApplication.java` file:


7. For Environment variables, we have provided some default values in the `ENV` to reduce the burden, but some parameters are mandatory:
   Go to `rojlearnn/src/main/resources/application.properties` file and change value
   - `PORT`: Do not change the value, let it be set to 8080 to view the swagger docs after deployment.
   - `spring.data.mongodb.uri`: Provide the MongoDB Atlas database URL. An example is prefilled for you, edit/update it to continue.
   - `spring.data.mongodb.database`: Your DataBase Name.
     
8. Navigate to the `rojlearnf` project directory.
```bash
cd rojlearnf
```
9. create a `.env` file same as `.envExam`. we have provided some default values in the `ENV` to reduce the burden, but some parameters are mandatory:
   - `VITE_URL`: Change the URL to your back-end URL for cors.
10. Install the packages:

```bash
npm install
```

11. Run the project:

```bash
npm run dev
```

### **Document:**
[Backend](https://github.com/firojahmed1313/ROJLEARNN/blob/main/rojlearnn/doc.md)

### **Diagram:**
![errojlearn](https://github.com/user-attachments/assets/b468df8b-2a35-476c-b68f-73dc4cf25649)
![mermaid-diagram-2024](https://github.com/user-attachments/assets/834c89b4-17ac-40fb-9c1b-8be97214cb18)
