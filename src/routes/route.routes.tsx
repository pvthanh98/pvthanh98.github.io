import AppLayout from "../layouts/app.layout";
import BodyLayout from "../layouts/body.layout";
import { MyCV } from "../pages/CV/my-cv.page";
import { ExpenseByCategoryPage } from "../pages/expense-by-category";
import { HomePage, HomePagePropType } from "../pages/home/home.page";
import { LoginPage } from "../pages/login";
import { MonthlyLimitationPage } from "../pages/monthly-limitation";
import { YearMonthlyPage } from "../pages/monthly-year.page";
import { OverviewPage } from "../pages/overview.page";
import { ProfilePage } from "../pages/profile";
import { UserFriendList } from "../pages/user/friend-list.page";
import { UserFriendRequest } from "../pages/user/friend-request.page";
import { UserPage } from "../pages/user/user.page";
import { UserPage as AdminUserPage } from "../pages/admin/user";
import { DailyExpensePage } from "../pages/daily-expense.page";
import * as path from './path';
import { MessengerPage } from "../pages/messenger/messenger.page";
import { io } from "socket.io-client";
import ChatLayout from "../layouts/chat.layout";
import { MessengerChatPage, MessengerChatPagePropType } from "../pages/messenger/messenger-chat";
import { LogPage } from "../pages/logs/log.page";
import { PostDetailPage } from "../pages/post-detail/post-detail.page";
import AdminLayout from "../layouts/admin.layout";
import { DashboardPage } from "../pages/admin/Dashboard/dashboard.page";
import { CategoryPage } from "../pages/admin/category";
import { TagPage } from "../pages/admin/tag";
import { PostPage } from "../pages/admin/post";
const socket: any = io('https://tp-finance-server.herokuapp.com');
// const socket: any = io('http://localhost:8080');

export const publicRoutes = [
  {
    path: path.ROOT_PATH,
    layout: AppLayout,
    component: HomePage,
    componentProps: {
      socket: socket
    } as HomePagePropType
  },
  {
    path: path.LOGIN_PATH,
    layout: BodyLayout,
    component: LoginPage,
    componentProps: {}
  },
  {
    path: path.POST_DETAIL_PATH,
    layout: AppLayout,
    component: PostDetailPage,
    componentProps: {}
  },
  {
    path: path.LOG_PATH,
    layout: AppLayout,
    component: LogPage,
    componentProps: {
      socket: socket
    } as HomePagePropType
  },
  {
    path: path.ABOUT_PATH,
    layout: BodyLayout,
    component: MyCV,
    componentProps: {}
  },
]

export const privateRoutes = [
  {
    path: path.PROFILE_PATH,
    layout: AppLayout,
    component: ProfilePage,
    componentProps: {}
  },
  {
    path: path.USER_PATH,
    layout: AppLayout,
    component: UserPage,
    componentProps: {}
  },
  {
    path: path.USER_FRIEND_PATH,
    layout: AppLayout,
    component: UserFriendList,
    componentProps: {}
  },
  {
    path: path.USER_FRIEND_REQUEST_PATH,
    layout: AppLayout,
    component: UserFriendRequest,
    componentProps: {}
  },
  {
    path: path.FINANCE_OVERVIEW_PATH,
    layout: AppLayout,
    component: OverviewPage,
    componentProps: {}
  },
  {
    path: path.FINANCE_EXPENSE_BY_CATEGORY_PATH,
    layout: AppLayout,
    component: ExpenseByCategoryPage,
    componentProps: {}
  },
  {
    path: path.FINANCE_MONTHLY_LIMITATION_PATH,
    layout: AppLayout,
    component: MonthlyLimitationPage,
    componentProps: {}
  },
  {
    path: path.FINANCE_EXPENSE_BY_MONTH_PATH,
    layout: AppLayout,
    component: YearMonthlyPage,
    componentProps: {}
  },
  {
    path: path.FINANCE_EXPENSE_DAILY_PATH,
    layout: AppLayout,
    component: DailyExpensePage,
    componentProps: {}
  },
  {
    path: path.MESSENGER_PATH,
    layout: ChatLayout,
    component: MessengerPage,
    componentProps: {}
  },
  {
    path: path.MESSENGER_CHAT_PATH,
    layout: ChatLayout,
    component: MessengerChatPage,
    componentProps: {
      socket: socket
    } as MessengerChatPagePropType
  },
  {
    path: path.ADMIN_DASHBOARD,
    layout: AdminLayout,
    component: DashboardPage,
    componentProps: {}
  },
  {
    path: path.ADMIN_HOME,
    layout: AdminLayout,
    component: DashboardPage,
    componentProps: {}
  },
  {
    path: path.ADMIN_CATEGORY,
    layout: AdminLayout,
    component: CategoryPage,
    componentProps: {}
  },
  {
    path: path.ADMIN_TAG,
    layout: AdminLayout,
    component: TagPage,
    componentProps: {}
  },
  {
    path: path.ADMIN_POST,
    layout: AdminLayout,
    component: PostPage,
    componentProps: {}
  },
  {
    path: path.ADMIN_USER,
    layout: AdminLayout,
    component: AdminUserPage,
    componentProps: {}
  }
]