## Apis & Endpoint

---

## **1. User Service**

- **API Name**: `getUserById`
    - **Endpoint**: `GET /api/users/{userId}`
- **API Name**: `getUsersByRole`
    - **Endpoint**: `GET /api/users/role/{role}`
- **API Name**: `createUser`
    - **Endpoint**: `POST /api/users`
- **API Name**: `updateUser`
    - **Endpoint**: `PUT /api/users/{userId}`
- **API Name**: `deleteUser`
    - **Endpoint**: `DELETE /api/users/{userId}`
- **API Name**: `loginUser`
    - **Endpoint**: `POST /api/users/login`
- **API Name**: `registerUser`
    - **Endpoint**: `POST /api/users/register`
- **API Name**: `getCurrentUserProfile`
    - **Endpoint**: `GET /api/users/me`
- **API Name**: `resetPassword`
    - **Endpoint**: `POST /api/users/reset-password`

---

## **2. Course Service**

- **API Name**: `getAllCourses`
    - **Endpoint**: `GET /api/courses`
- **API Name**: `getCourseById`
    - **Endpoint**: `GET /api/courses/{courseId}`
- **API Name**: `createCourse`
    - **Endpoint**: `POST /api/courses`
- **API Name**: `updateCourse`
    - **Endpoint**: `PUT /api/courses/{courseId}`
- **API Name**: `deleteCourse`
    - **Endpoint**: `DELETE /api/courses/{courseId}`
- **API Name**: `getCoursesByInstructor`
    - **Endpoint**: `GET /api/courses/instructor/{instructorId}`

---

## 3. Enrole **Course**

- **API Name**: `enrollInCourse`
    - **Endpoint**: `POST /api/courses/{courseId}/enroll`
- **API Name**: `getEnrollmentsByCourse`
    - **Endpoint**: `GET /api/courses/{courseId}/enrollments`
- **API Name**: `getStudentEnrollments`
    - **Endpoint**: `GET /api/courses/student/{studentId}/enrollments`

---

## **4.** Assignment And Tas**k Management Service**

- **API Name**: `getAllProjects`
    - **Endpoint**: `GET /api/projects`
- **API Name**: `getProjectById`
    - **Endpoint**: `GET /api/projects/{projectId}`
- **API Name**: `createProject`
    - **Endpoint**: `POST /api/projects`
- **API Name**: `updateProject`
    - **Endpoint**: `PUT /api/projects/{projectId}`
- **API Name**: `deleteProject`
    - **Endpoint**: `DELETE /api/projects/{projectId}`
- **API Name**: `getTasksByProject`
    - **Endpoint**: `GET /api/projects/{projectId}/tasks`
- **API Name**: `createTask`
    - **Endpoint**: `POST /api/projects/{projectId}/tasks`
- **API Name**: `updateTask`
    - **Endpoint**: `PUT /api/projects/{projectId}/tasks/{taskId}`
- **API Name**: `deleteTask`
    - **Endpoint**: `DELETE /api/projects/{projectId}/tasks/{taskId}`
- **API Name**: `getTasksByUser`
    - **Endpoint**: `GET /api/users/{userId}/tasks`
- **API Name**: `updateTaskStatus`
    - **Endpoint**: `PATCH /api/projects/{projectId}/tasks/{taskId}/status`

---

## 5. Exam **Management Service**

| **API Name** | **HTTP Method** | **Endpoint** | **Description** |
| --- | --- | --- | --- |
| `createExam` | `POST` | `/api/exams` | Create a new exam. |
| `getExamById` | `GET` | `/api/exams/{examId}` | Get a specific exam by its ID. |
| `getAllExams` | `GET` | `/api/exams` | Get all available exams. |
| `addQuestionToExam` | `POST` | `/api/exams/{examId}/questions` | Add a question to an existing exam. |
| `getQuestionsForExam` | `GET` | `/api/exams/{examId}/questions` | Retrieve questions for a specific exam. |
| `submitExam` | `POST` | `/api/exams/{examId}/submit` | Submit exam answers for grading. |
| `getExamResults` | `GET` | `/api/exams/{examId}/results` | Get the exam results for a specific exam. |
| `deleteExam` | `DELETE` | `/api/exams/{examId}` | Delete an existing exam. |

---

## **6. Analytics and Reporting Service**

- **API Name**: `generateReport`
    - **Endpoint**: `POST /api/analytics/reports`
- **API Name**: `getReportsByUser`
    - **Endpoint**: `GET /api/analytics/reports/user/{userId}`
- **API Name**: `getReportById`
    - **Endpoint**: `GET /api/analytics/reports/{reportId}`
- **API Name**: `createPerformanceMetric`
    - **Endpoint**: `POST /api/analytics/metrics`
- **API Name**: `getPerformanceMetricsByCourse`
    - **Endpoint**: `GET /api/analytics/metrics/course/{courseId}`
- **API Name**: `getPerformanceMetricsByUser`
    - **Endpoint**: `GET /api/analytics/metrics/user/{userId}`

---

## **7. Rating, Comment, and Feedback Service**

- **API Name**: `addLikeToContent`
    - **Endpoint**: `POST /api/ratings/content/{contentId}/like`
- **API Name**: `addRatingToContent`
    - **Endpoint**: `POST /api/ratings/content/{contentId}/rate`
- **API Name**: `getRatingsByContent`
    - **Endpoint**: `GET /api/ratings/content/{contentId}`
- **API Name**: `addCommentToContent`
    - **Endpoint**: `POST /api/comments/content/{contentId}`
- **API Name**: `getCommentsByContent`
    - **Endpoint**: `GET /api/comments/content/{contentId}`
- **API Name**: `getFeedbackByUser`
    - **Endpoint**: `GET /api/feedback/user/{userId}`

---

## 8. **Tracking Management Service**

| **API Name** | **HTTP Method** | **Endpoint** | **Description** |
| --- | --- | --- | --- |
| `trackCourseProgress` | `GET` | `/api/tracking/courses/{courseId}` | Track the student's progress in a course. |
| `trackProjectProgress` | `GET` | `/api/tracking/projects/{projectId}` | Track the progress of a project. |
| `trackTaskProgress` | `GET` | `/api/tracking/tasks/{taskId}` | Track the progress of an individual task. |
| `getAllTrackedProgress` | `GET` | `/api/tracking` | Get all tracked progress for a user. |
| `getTrackedProgressByUser` | `GET` | `/api/tracking/users/{userId}` | Get progress tracked for a specific user. |
| `addTrackingRecord` | `POST` | `/api/tracking` | Add a new tracking record for a task or project. |
| `updateTrackingStatus` | `PUT` | `/api/tracking/{trackingId}` | Update the progress tracking status. |
| `deleteTrackingRecord` | `DELETE` | `/api/tracking/{trackingId}` | Delete a tracking record. |

---

## **9. Notification Service**

- **API Name**: `getNotificationsByUser`
    - **Endpoint**: `GET /api/notifications/user/{userId}`
- **API Name**: `createNotification`
    - **Endpoint**: `POST /api/notifications`
- **API Name**: `markNotificationAsRead`
    - **Endpoint**: `PATCH /api/notifications/{notificationId}/read`
- **API Name**: `deleteNotification`
    - **Endpoint**: `DELETE /api/notifications/{notificationId}`

---

## 10. Forums or Chat **Management Service**

| **API Name** | **HTTP Method** | **Endpoint** | **Description** |
| --- | --- | --- | --- |
| `createForum` | `POST` | `/api/forums` | Create a new discussion forum. |
| `getForumById` | `GET` | `/api/forums/{forumId}` | Retrieve a specific forum by its ID. |
| `getAllForums` | `GET` | `/api/forums` | Retrieve all forums. |
| `addPostToForum` | `POST` | `/api/forums/{forumId}/posts` | Add a new post to a forum. |
| `getPostsForForum` | `GET` | `/api/forums/{forumId}/posts` | Retrieve all posts in a specific forum. |
| `createChatRoom` | `POST` | `/api/chats` | Create a new chat room. |
| `getChatRoomMessages` | `GET` | `/api/chats/{chatRoomId}/messages` | Get all messages from a specific chat room. |
| `sendMessage` | `POST` | `/api/chats/{chatRoomId}/messages` | Send a message to a chat room. |
| `deleteForum` | `DELETE` | `/api/forums/{forumId}` | Delete an existing forum. |
| `deleteChatRoom` | `DELETE` | `/api/chats/{chatRoomId}` | Delete a specific chat room. |

---

## **1. Content Management Service (Admin)**

- **API Name**: `getAllContent`
    - **Endpoint**: `GET /api/content`
- **API Name**: `getContentById`
    - **Endpoint**: `GET /api/content/{contentId}`
- **API Name**: `createContent`
    - **Endpoint**: `POST /api/content`
- **API Name**: `updateContent`
    - **Endpoint**: `PUT /api/content/{contentId}`
- **API Name**: `deleteContent`
    - **Endpoint**: `DELETE /api/content/{contentId}`
- **API Name**: `getContentVersions`
    - **Endpoint**: `GET /api/content/{contentId}/versions`

---

## 11. Cart Service

| **API Name** | **Endpoint** | **HTTP Method** | **Description** |
| --- | --- | --- | --- |
| **addItemToCart** | `/api/carts` | `POST` | Add an item (course, exam, etc.) to the user's cart. |
| **getCartByUserId** | `/api/carts/{userId}` | `GET` | Retrieve the cart for a specific user. |
| **removeItemFromCart** | `/api/carts/{cartId}/items/{itemId}` | `DELETE` | Remove a specific item from the user's cart. |
| **checkoutCart** | `/api/carts/{cartId}/checkout` | `POST` | Checkout the items in the cart and proceed with payment. |
| **clearCart** | `/api/carts/{cartId}/clear` | `DELETE` | Clear all items from the user's cart. |

---

## **Enhanced Database Structure**

### **1. User Service (`user_service_db`)**

```sql

CREATE DATABASE user_service_db;

USE user_service_db;

CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(100) NOT NULL UNIQUE,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('Admin', 'Instructor', 'Student') NOT NULL,
    profile_picture_url VARCHAR(255),               -- New: User profile picture
    phone_number VARCHAR(20),                       -- New: Contact number
    address VARCHAR(255),                           -- New: Physical address
    is_active BOOLEAN DEFAULT TRUE,                 -- New: For soft delete/active status
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,  -- New: Updated time
    last_login TIMESTAMP,                           -- New: Tracks the last login time
    deleted_at TIMESTAMP NULL DEFAULT NULL          -- New: For soft delete
);

```

### **2. Course Service (`course_service_db`)**

```sql

CREATE DATABASE course_service_db;

USE course_service_db;

CREATE TABLE courses (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    instructor_id INT NOT NULL,
    category VARCHAR(100),                          -- New: Course category (e.g., Programming, Data Science)
    thumbnail_url VARCHAR(255),                     -- New: Course thumbnail image URL
    duration_hours DECIMAL(5,2),                    -- New: Course duration in hours
    price DECIMAL(10, 2) DEFAULT 0.00,              -- New: Course price
    is_published BOOLEAN DEFAULT FALSE,             -- New: For marking published courses
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL DEFAULT NULL,         -- New: Soft delete
    INDEX (instructor_id),                          -- New: Index for faster lookups
    FOREIGN KEY (instructor_id) REFERENCES user_service_db.users(id)
);

```

### **3. Enrollment Service (`enroll_service_db`)**

```sql

CREATE DATABASE enroll_service_db;

USE enroll_service_db;

CREATE TABLE enrollments (
    id INT PRIMARY KEY AUTO_INCREMENT,
    course_id INT NOT NULL,
    student_id INT NOT NULL,
    enrollment_status ENUM('Pending', 'Enrolled', 'Completed') DEFAULT 'Pending',  -- New: Status of enrollment
    enrollment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    completed_at TIMESTAMP NULL DEFAULT NULL,      -- New: Course completion timestamp
    last_accessed TIMESTAMP,                       -- New: Tracks last access to the course
    FOREIGN KEY (course_id) REFERENCES course_service_db.courses(id),
    FOREIGN KEY (student_id) REFERENCES user_service_db.users(id)
);

```

### **4. Task Management Service (`task_service_db`)**

```sql
CREATE DATABASE task_service_db;

USE task_service_db;

CREATE TABLE Assignment (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    deadline DATE,                                   -- New: Project deadline
    is_archived BOOLEAN DEFAULT FALSE,               -- New: Mark project as archived
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL DEFAULT NULL,          -- New: Soft delete
    FOREIGN KEY (instructor_id) REFERENCES user_service_db.users(id)
);

CREATE TABLE tasks (
    id INT PRIMARY KEY AUTO_INCREMENT,
    assignmentid INT NOT NULL,
    assignedto INT NOT NULL,
    description TEXT NOT NULL,
    status ENUM('Pending', 'In Progress', 'Completed', 'Overdue') DEFAULT 'Pending',  -- New: 'Overdue' status
    priority ENUM('Low', 'Medium', 'High') DEFAULT 'Medium',                          -- New: Task priority
    due_date DATE,
    completed_at TIMESTAMP NULL DEFAULT NULL,       -- New: Completion time
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL DEFAULT NULL,         -- New: Soft delete
    FOREIGN KEY (project_id) REFERENCES projects(id),
    FOREIGN KEY (assigned_to) REFERENCES user_service_db.users(id)
);

```

### **5. Exam Management Service (`exam_service_db`)**

```sql

CREATE DATABASE exam_service_db;

USE exam_service_db;

CREATE TABLE exams (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    course_id INT,
    total_marks DECIMAL(5, 2),                       -- New: Total marks for the exam
    duration_minutes INT,                            -- New: Duration of the exam in minutes
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (course_id) REFERENCES course_service_db.courses(id)
);

CREATE TABLE exam_questions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    exam_id INT,
    question_text TEXT,
    option1 VARCHAR(255),
    option2 VARCHAR(255),
    option3 VARCHAR(255),
    option4 VARCHAR(255),
    correct_answer VARCHAR(255),
    points DECIMAL(5, 2),                            -- New: Points for the question
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (exam_id) REFERENCES exams(id)
);

CREATE TABLE exam_submissions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    exam_id INT,
    student_id INT,
    answers JSON,
    score DECIMAL(5, 2),
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    graded_at TIMESTAMP NULL DEFAULT NULL,          -- New: Grading timestamp
    FOREIGN KEY (exam_id) REFERENCES exams(id),
    FOREIGN KEY (student_id) REFERENCES user_service_db.users(id)
);

```

### **6. Analytics Service (`analytics_service_db`)**

```sql

CREATE DATABASE analytics_service_db;

USE analytics_service_db;

CREATE TABLE reports (
    id INT PRIMARY KEY AUTO_INCREMENT,
    report_name VARCHAR(255) NOT NULL,
    generated_by INT NOT NULL,
    report_type ENUM('Course', 'Task', 'Exam') NOT NULL,   -- New: Type of report
    file_path VARCHAR(255),                                -- New: Path to the report file
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (generated_by) REFERENCES user_service_db.users(id)
);

CREATE TABLE performance_metrics (
    id INT PRIMARY KEY AUTO_INCREMENT,
    course_id INT NOT NULL,
    user_id INT NOT NULL,
    metric_name VARCHAR(255) NOT NULL,
    metric_value DOUBLE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (course_id) REFERENCES course_service_db.courses(id),
    FOREIGN KEY (user_id) REFERENCES user_service_db.users(id)
);

```

### **7. Rating, Comment, Feedback Service (`rcf_service_db`)**

```sql

CREATE DATABASE rcf_service_db;

USE rcf_service_db;

CREATE TABLE ratings (
    id INT PRIMARY KEY AUTO_INCREMENT,
    content_id INT NOT NULL,
    user_id INT NOT NULL,
    rating INT CHECK (rating >= 1 AND rating <= 5),
    comment TEXT,                                      -- New: Optional text feedback with rating
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (content_id) REFERENCES course_service_db.courses(id),
    FOREIGN KEY (user_id) REFERENCES user_service_db.users(id)
);

CREATE TABLE comments (
    id INT PRIMARY KEY AUTO_INCREMENT,
    content_id INT NOT NULL,
    user_id INT NOT NULL,
    comment_text TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (content_id) REFERENCES course_service_db.courses(id),
    FOREIGN KEY (user_id) REFERENCES user_service_db.users(id)
);

CREATE TABLE feedback (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    feedback_text TEXT NOT NULL,
    feedback_type ENUM('Bug', 'Feature Request', 'General') NOT NULL, -- New: Type of feedback
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES user_service_db.users(id)
);

```

### **8. Progress Tracking Service (`track_service_db`)**

```sql

CREATE DATABASE track_service_db;

USE track_service_db;

CREATE TABLE progress_tracking (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    course_id INT,
    task_id INT,
    progress_percentage DECIMAL(5, 2) NOT NULL,
    status ENUM('Started', 'In Progress', 'Completed') DEFAULT 'Started',  -- New: Progress status
    last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,  -- New: Track last update
    FOREIGN KEY (user_id) REFERENCES user_service_db.users(id),
    FOREIGN KEY (course_id) REFERENCES course_service_db.courses(id),
    FOREIGN KEY (task_id) REFERENCES task_service_db.tasks(id)
);

```

### **9. Notification Service (`notification_service_db`)**

```sql

CREATE DATABASE notification_service_db;

USE notification_service_db;

CREATE TABLE notifications (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    message TEXT NOT NULL,
    type ENUM('System', 'Reminder', 'Alert') NOT NULL,      -- New: Notification type
    is_read BOOLEAN DEFAULT FALSE,
    read_at TIMESTAMP NULL DEFAULT NULL,                    -- New: Time when the notification was read
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES user_service_db.users(id)
);

```

### **10. Chat Service (`chat_service_db`)**

```sql

CREATE DATABASE chat_service_db;

USE chat_service_db;

CREATE TABLE chat_rooms (
    id INT PRIMARY KEY AUTO_INCREMENT,
    room_name VARCHAR(255) NOT NULL,
    created_by INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (created_by) REFERENCES user_service_db.users(id)
);

CREATE TABLE messages (
    id INT PRIMARY KEY AUTO_INCREMENT,
    room_id INT,
    user_id INT,
    message_text TEXT NOT NULL,
    sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (room_id) REFERENCES chat_rooms(id),
    FOREIGN KEY (user_id) REFERENCES user_service_db.users(id)
);

```

### **11. Cart Service (`cart_service_db`)**

```sql

CREATE DATABASE cart_service_db;

USE cart_service_db;

CREATE TABLE carts (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    total_price DECIMAL(10, 2) NOT NULL,
    is_checked_out BOOLEAN DEFAULT FALSE,                   -- New: Track if the cart is checked out
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES user_service_db.users(id)
);

CREATE TABLE cart_items (
    id INT PRIMARY KEY AUTO_INCREMENT,
    cart_id INT NOT NULL,
    course_id INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    quantity INT NOT NULL DEFAULT 1,                        -- New: Quantity of the same course
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (cart_id) REFERENCES carts(id),
    FOREIGN KEY (course_id) REFERENCES course_service_db.courses(id)
);

```
