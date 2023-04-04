import VideosContextProvider from "../contexts/providers/VideosContextProvider";
import Login from "../pages/Authentication/Login";
import Registration from "../pages/Authentication/Registration";
import CoursePlayer from "../pages/CoursePlayer";
import CourseVideo from "../pages/CourseVideo";
import LeaderBoard from "../pages/LeaderBoard";
import VideoQuizz from "../pages/VideoQuizz";
import Assignment from "../pages/admin/Assignment";
import AssignmentMark from "../pages/admin/AssignmentMark";
import Dashboard from "../pages/admin/Dashboard";
import Quizzes from "../pages/admin/Quizzes";
import Videos from "../pages/admin/Videos";

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
    path: "quiz/:videoId",
    name: "Quiz",
    component: VideoQuizz,
  },
  {
    path: "course-player/:videoId",
    component: CourseVideo,
  },
];

export const adminPrivateRoutes = [
  {
    path: "dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "videos",
    name: "Videos",
    component: Videos,
    provider: VideosContextProvider,
  },
  {
    path: "assignment",
    name: "Assignment",
    component: Assignment,
  },

  {
    path: "quizzes",
    name: "Quizzes",
    component: Quizzes,
  },
  {
    path: "assignment-mark",
    name: "Assignment Mark",
    component: AssignmentMark,
  },
];
