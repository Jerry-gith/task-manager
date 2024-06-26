export const sections = [
    {
      id: "about",
      title: "About Task Manager",
      content: (
        <p>
          Welcome to Task Manager, your ultimate productivity tool designed to
          help you manage your time, prioritize tasks, and achieve your goals
          efficiently. Whether you're a student, professional, or entrepreneur,
          Task Manager is here to streamline your workflow and keep you focused
          on what matters most.
        </p>
      ),
    },
    {
      id: "technologies",
      title: "Technologies Used",
      content: (
        <ul className="space-y-4">
          <li>
            <h3 className="font-bold">Next.js</h3>
            <p>
              Next.js is a powerful React framework that enables server-side
              rendering and static site generation. This enhances performance
              and SEO, providing a seamless and fast user experience.
            </p>
          </li>
          <li>
            <h3 className="font-bold">TypeScript</h3>
            <p>
              TypeScript is a superset of JavaScript that adds static types,
              ensuring code reliability and maintainability. It helps catch
              errors early during development and improves the overall quality
              of the codebase.
            </p>
          </li>
          <li>
            <h3 className="font-bold">Firebase</h3>
            <p>
              Firebase is a comprehensive app development platform that provides
              various tools and services, including real-time databases,
              authentication, and hosting. It allows for secure and scalable
              back-end services, ensuring that your data is safe and easily
              accessible.
            </p>
          </li>
        </ul>
      ),
    },
    {
      id: "incorporation",
      title: "How We Incorporate These Technologies",
      content: (
        <>
          <p>
            <span className="font-bold">Next.js:</span> We use Next.js to build
            our front-end, leveraging its capabilities for server-side rendering
            and static site generation. This means that our app loads quickly
            and is optimized for search engines, providing a smooth experience
            for users.
          </p>
          <br/>
          <p>
            <span className="font-bold">TypeScript:</span> Our codebase is
            written in TypeScript to ensure that our application is robust and
            maintainable. The use of TypeScript helps us catch potential issues
            early and allows for better collaboration among our development
            team.
          </p>
          <br/>
          <p>
            <span className="font-bold">Firebase:</span> Firebase serves as our
            back-end solution. We utilize its real-time database to store and
            sync user data across devices, ensuring that your tasks are always
            up-to-date. Firebase Authentication is used to handle user sign-ups
            and logins securely, while Firebase Hosting is used to deploy our
            application.
          </p>
        </>
      ),
    },
    {
      id: "aboutApp",
      title: "What Task Manager Is About",
      content: (
        <>
          <p>
            Task Manager is designed to boost your productivity and help you
            manage your time effectively. Our app offers features such as:
          </p>
          <br/>
          <ul className="space-y-4">
            <li>
              <span className="font-bold">Task Organization:</span> Create,
              edit, and categorize tasks to keep your to-do list organized.
            </li>
            <li>
              <span className="font-bold">Time Boxing:</span> Allocate specific
              time slots for tasks to ensure you stay focused and productive.
            </li>
            <li>
              <span className="font-bold">Priority Setting:</span> Set
              priorities for your tasks to tackle the most important ones first.
            </li>
            <li>
              <span className="font-bold"> Deadline Management:</span> Never
              miss a deadline with our intuitive task scheduling and reminders.
            </li>
          </ul>
          <br/>
          <p>
            Whether you're juggling multiple projects or need a simple way to
            keep track of daily tasks, Task Manager is here to assist you in
            staying organized and productive.
          </p>
        </>
      ),
    },
    {
      id: "contact",
      title: "Contact Us",
      content: (
        <>
          <p>
            We'd love to hear from you! If you have any questions, feedback, or
            need assistance, please don't hesitate to reach out to us.
          </p>
          <ul className="space-y-4">
            <li className="font-bold">Email: support@taskmanager.com</li>
            <li className="font-bold">Phone: +1 (555) 123-4567</li>
            <li className="font-bold">
              Address: 123 Productivity Lane, Suite 100, Taskville, TX 75001
            </li>
          </ul>
          <p>
            Follow us on social media to stay updated on new features and
            improvements:
          </p>
          <p>
            Twitter: @TaskManagerApp Facebook: Task Manager LinkedIn: Task
            Manager Inc. Thank you for choosing Task Manager. Together, we can
            achieve more!
          </p>
        </>
      ),
    },
  ];
