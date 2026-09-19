import TTDImg from "./assets/projects/TickTockDo/Home.png";
import TTDComponents from "./assets/projects/TickTockDo/Components.png";
import TTDTaskComplete from "./assets/projects/TickTockDo/TaskComplete.png";
import TTDPomodoro from "./assets/projects/TickTockDo/Pomodoro.png";

import PortfolioDesign from "./assets/projects/Portfolio/PortfolioDesign.png";
import PortfolioComponent from "./assets/projects/Portfolio/component.png";
import PortfolioPalate from "./assets/projects/Portfolio/CozyColorPalate.png";
import PortfolioDark from "./assets/projects/Portfolio/DarkTheme.png";
import PortfolioWireframe from "./assets/projects/Portfolio/Wireframe.png";
import PortfolioImg from "./assets/projects/Portfolio/PortfolioImg.png";

import RSAMockup from "./assets/projects/RideSharing/RSAMockup.png";
import RSAcomponents from "./assets/projects/RideSharing/RSAcomponents.png";
import RSAicons from "./assets/projects/RideSharing/RSAicons.png";
import RSAonboard from "./assets/projects/RideSharing/RSAonboard.png";
import RSAlogin from "./assets/projects/RideSharing/RSAlogin.png";
import RSApostlogin from "./assets/projects/RideSharing/RSApostlogin.png";
import RSApostlogin2 from "./assets/projects/RideSharing/RSApostlogin2.png";
import RSAaccount from "./assets/projects/RideSharing/RSAaccount.png";

import ForkflowImg from "./assets/projects/Forkflow/ForkflowImg.png";
import ForkflowAccount from "./assets/projects/Forkflow/ForkflowAccount.png";
import ForkflowHome from "./assets/projects/Forkflow/ForkflowHome2.png";
import ForkflowLogin from "./assets/projects/Forkflow/ForkflowLogin.png";
import ForkflowMenu from "./assets/projects/Forkflow/ForkflowMenu.png";
import ForkflowReservation from "./assets/projects/Forkflow/ForkflowReservation.png";
import ForkflowTrack from "./assets/projects/Forkflow/ForkflowTrack.png";
import ForkflowMyReservation from "./assets/projects/Forkflow/ForkflowMyReservation.png";
import ForkflowPalate from "./assets/projects/Forkflow/ForkflowPalate.png";

import TickTockDoMockup from "./assets/projects/TickTockDoWeb/ticktockdoMockup.jpg";
import Todo from "./assets/projects/TickTockDoWeb/todo.png";
import pomodoro from "./assets/projects/TickTockDoWeb/pomodoro.png";

import employeeManagement from "./assets/projects/Inventory/employeeManagement.png";
import inventoryManagement from "./assets/projects/Inventory/inventoryManagement.png";
import IMSdashboard from "./assets/projects/Inventory/IMSdashboard.png";
import IMSlogin from "./assets/projects/Inventory/IMSlogin.png";
import userSelection from "./assets/projects/Inventory/userSelection.png";
import IMSrecipt from "./assets/projects/Inventory/recipt.png";

import foodcourt from "./assets/projects/Foodcourt.png";
import mediconnect from "./assets/projects/mediconnect.png";

const projects = [
  {
    id: 1,
    title: "Portfolio Design",
    category: "UI Design",
    tags: ["Figma", "UI/UX"],
    image: PortfolioImg,
    screenshots: [
      {
        image: PortfolioWireframe,
        heading: "Wireframe",
        desc: "Started with low-fidelity wireframes to plan the website’s structure, layout, and content hierarchy.",
      },
      {
        image: PortfolioPalate,
        heading: "Design System",
        desc: "Defined the color palette and created reusable components, floating UI elements & card designs for consistency.",
      },
      {
        image: PortfolioComponent,
        heading: null,
        desc: "Created custom visual elements, including the hills illustration, to give the portfolio a unique identity.",
      },
      {
        image: PortfolioDesign,
        heading: "High-Fidelity Design",
        desc: "Transformed the wireframes into a polished high-fidelity design with refined typography, colors, spacing, and visuals.",
      },
      {
        image: PortfolioDark,
        heading: "Dark Theme",
        desc: "Designed a dark theme version to provide an alternative visual experience while maintaining consistency across the website.",
      },
    ],
    desc: "This project showcases the complete UI design process for my personal portfolio website, starting with a low-fidelity wireframe and progressing to a polished high-fidelity design in Figma.",
    label: "View Design",
    link: "#",
    live: "https://www.figma.com/design/B0R3WIk1yb0rLJ9i7ViLhr/Portfolio-Design?node-id=37-92&t=jhKhP6SfKtL1hYuz-1",
  },
  {
    id: 2,
    title: "Ride Sharing App Design & Prototype",
    category: "UI Design",
    tags: ["Figma", "UI/UX", "Prototyping"],
    desc: "A clean and user-friendly ride-booking mobile app designed in Figma, featuring onboarding, authentication, ride booking, and a streamlined user experience.",
    image: RSAMockup,
    screenshots: [
      {
        image: RSAMockup,
        heading: "Mockup Design",
        desc: null,
      },
      {
        image: RSAcomponents,
        heading: "Components Used",
        desc: "Created a reusable component library for the ride-sharing app, including buttons, login fields, navigation, rating elements, input fields, and confirmation pop-ups to maintain a consistent UI.",
      },
      {
        image: RSAicons,
        heading: "Icons",
        desc: "Designed a consistent set of custom icons for the ride-sharing app, including navigation, search, location, communication, and action icons.",
      },
      {
        image: RSAonboard,
        heading: "Onboarding Screen",
        desc: null,
      },
      {
        image: RSAlogin,
        heading: "Login & Account Recovery",
        desc: null,
      },
      {
        image: RSApostlogin,
        heading: "Post Login Pages",
        desc: null,
      },
      {
        image: RSApostlogin2,
        heading: null,
        desc: null,
      },
      {
        image: RSAaccount,
        heading: "Account & Security",
        desc: null,
      },
    ],
    label: "View Prototype",
    link: "#",
    live: "https://www.figma.com/proto/vOsSLYuikdhWqCqAhJJZuw/Driver-Booking-App?node-id=283-866&viewport=1300%2C68%2C0.4&t=AqiTgsqQRTQ3OWXt-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=280%3A308&page-id=0%3A1",
  },
  {
    id: 3,
    title: "Restaurant App",
    category: "UI Design",
    tags: ["Figma", "UI/UX", "Prototyping"],
    image: ForkflowImg,
    screenshots: [
      {
        image: ForkflowPalate,
        heading: "Color Palette",
        desc: null,
      },
      {
        image: ForkflowImg,
        heading: "Home Page",
        desc: null,
      },
      {
        image: ForkflowLogin,
        heading: "Login & Recovery",
        desc: null,
      },
      {
        image: ForkflowMenu,
        heading: "Menu",
        desc: null,
      },
      {
        image: ForkflowTrack,
        heading: "Track Order",
        desc: "Continuous Scrollable",
      },
      {
        image: ForkflowReservation,
        heading: "Make Reservation",
        desc: "Continuous Scrollable",
      },
      {
        image: ForkflowMyReservation,
        heading: "View Reservation",
        desc: null,
      },
    ],
    desc: "The Fork Flow is user-friendly restaurant app designed to let customers explore the menu and offers, place and track orders, and conveniently make table reservations.",
    label: "View Prototype",
    link: "#",
    live: "https://www.figma.com/proto/Oj8ylddggNtAwYThCxt3k8/Fork-Flow?page-id=1551%3A15683&node-id=2279-64098&viewport=-33455%2C48%2C0.63&t=UUNwtcunsNVfYOyz-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2279%3A64098&show-proto-sidebar=1",
  },
  {
    id: 4,
    title: "TickTockDo",
    category: "UI Design",
    tags: ["Figma", "UI/UX", "Prototyping", "Pixel Art"],
    image: TTDImg,
    screenshots: [
      {
        image: TTDImg,
        heading: "Home Screen",
        desc: "The main landing screen with the todo list and timer side by side.",
      },
      {
        image: TTDComponents,
        heading: "Components Used",
        desc: null,
      },
      {
        image: TTDTaskComplete,
        heading: "Task Complete",
        desc: "A completed task marked with a check, giving users a clear sense of progress and accomplishment.",
      },
      {
        image: TTDPomodoro,
        heading: "Pomodoro",
        desc: "A focused timer that helps users manage work sessions and breaks using the Pomodoro technique.",
      },
    ],
    desc: "A pixel-art productivity app designed in Figma, featuring task management and a Pomodoro timer with an interactive prototype for a smooth and engaging user experience.",
    link: "https://github.com/prabal/ticktockdo",
    live: "https://www.figma.com/proto/M5fpjTrSlo3hZYWBTPtBvp/Cozy-Pixel-Art-UI?node-id=34-726&viewport=164%2C214%2C0.21&t=KsheO9ftPev2pooh-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=34%3A726&page-id=0%3A1",
    label: "View Prototype",
  },
  {
    id: 5,
    title: "TickTockDo Web",
    category: "Web App",
    tags: ["Javascript", "TailwindCss", "React"],
    image: TickTockDoMockup,
    desc: "A cozy pixel art productivity app built with React + Vite. Combines a todo list and pomodoro timer in one place, with a warm brown/beige pixel aesthetic, custom pixel fonts, sound effects, lofi music player, and localStorage persistence.",
    screenshots: [
      {
        image: Todo,
        heading: "Todo",
        desc: "The To-Do feature allows users to add, complete, and manage tasks, with filters for All, Completed, and Trash. Users can also clear completed tasks or all tasks, with completed tasks visually marked using a checkmark and strikethrough. It includes Lofi music controls with play/pause and volume adjustment.",
      },
      {
        image: pomodoro,
        heading: "Pomodoro",
        desc: "The Pomodoro feature includes Focus, Short Break, and Long Break timers, with options to pause and reset sessions. It also keeps the To-Do list accessible while working and includes Lofi music controls with play/pause and volume adjustment.",
      },
    ],
    link: "https://github.com/yourfriend8P/TickTockDo/tree/main/TickTockDo",
    live: "https://tick-tock-do.vercel.app/todo",
  },
  {
    id: 6,
    title: "Inventory Management System",
    category: "Desktop Application",
    tags: ["C++", "Qt"],
    image: IMSdashboard,
    screenshots: [
      {
        image: userSelection,
        heading: "User Selection",
        desc: "user-friendly and versatile login system to cater to different roles within the application",
      },
      {
        image: IMSlogin,
        heading: "User Selection",
        desc: "user-friendly and versatile login system to cater to different roles within the application",
      },
      {
        image: inventoryManagement,
        heading: "Inventory Management",
        desc: "Provides a comprehensive set of tools for managing the departmental store's inventory. Admin users can perform key operations, including creating new items, updating existing details, and deleting items that are no longer in stock.",
      },
      {
        image: employeeManagement,
        heading: "Employee Management",
        desc: "Provides a robust set of tools for overseeing and managing the departmental store's workforce. Admin users can perform essential operations, including creating new employee profiles, updating existing details, and deleting employee records.",
      },
      {
        image: IMSdashboard,
        heading: "Dashboard",
        desc: "Counter Managers can effortlessly enter item codes and quantities, and the corresponding items are dynamically displayed in a table, including essential details like item name, quantity, price and subtotal.",
      },
      {
        image: IMSrecipt,
        heading: "Receipt",
        desc: "The bill includes real-time and date for accurate record-keeping.",
      },
    ],
    desc: "An Inventory Management System developed using C++ and the Qt framework, with SQLite as the database, to efficiently manage inventory, employees, and checkout operations through a centralized platform.",
    link: "https://github.com/yourfriend8P/Inventory-Management-System",
    live: "#",
  },
  {
    id: 7,
    title: "Disease Prediction System",
    category: "CS Project",
    tags: ["Python", "Flask", "scikit-learn"],
    image: null,
    desc: "ML system using Random Forest, Decision Tree and Naive Bayes via a Flask API to predict diseases from symptoms.",
    link: "https://github.com/sophiyashres/cureai",
    live: "#",
  },
  {
    id: 8,
    title: "Food Court",
    category: "CS Project",
    tags: ["JavaScript", "CSS"],
    image: foodcourt,
    screenshots: [
      {
        image: foodcourt,
        heading: null,
        desc: null,
      },
    ],
    desc: "A full-stack food court management system featuring separate admin, mobile, and backend components for managing food ordering and restaurant operations",
    link: "https://github.com/yourfriend8P/Food-Court",
    live: "#",
  },
  {
    id: 9,
    title: "MediConnect",
    category: "CS Project",
    tags: ["PHP", "JavaScript", "CSS"],
    image: mediconnect,
    screenshots: [
      {
        image: mediconnect,
        heading: null,
        desc: null,
      },
    ],
    desc: "A web-based hospital management system built with PHP, JavaScript, CSS, and MySQL, providing dedicated interfaces for managing doctors, patients, departments, and hospital operations.",
    link: "https://github.com/yourfriend8P/medi-connect-main-2",
    live: "#",
  },

  // add more..
];

export default projects;
