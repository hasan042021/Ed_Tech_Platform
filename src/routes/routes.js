import Login from "../pages/Authentication/Login";
import Registration from "../pages/Authentication/Registration";
import Assignment from "../pages/assignment/Assignment";
import AssignmentMark from "../pages/assignmentMark/AssignmentMark";
import CoursePlayer from "../pages/coursePlayer/CoursePlayer";
import Dashboard from "../pages/dashboard/Dashboard";
import LeaderBoard from "../pages/leaderboard/LeaderBoard";
import Quizz from "../pages/quiz/Quizz";
import QuizzesAdmin from "../pages/quizzesAdmin/QuizzesAdmin";
import Videos from "../pages/videos/Videos";

export const studentPublicRoutes = [
  {
    path: "/",
    component: Login,
  },
  {
    path: "/register",
    component: Registration,
  },
];

export const studentPrivateRoutes = [
  {
    path: "course-player",
    name: "Course Player",
    component: CoursePlayer,
  },
  {
    path: "leaderbord",
    name: "Leaderboard",
    component: LeaderBoard,
  },
  {
    path: "quiz",
    name: "Quiz",
    component: Quizz,
  },
];

export const adminPrivateRoutes = [
  {
    path: "dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "assignment",
    name: "Assignment",
    component: Assignment,
  },
  {
    path: "assignment-mark",
    name: "Assignment Mark",
    component: AssignmentMark,
  },
  {
    path: "quizzes",
    name: "Quizzes",
    component: QuizzesAdmin,
  },
  {
    path: "videos",
    name: "Videos",
    component: Videos,
  },
];
