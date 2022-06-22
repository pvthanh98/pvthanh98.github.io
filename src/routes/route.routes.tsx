import AppLayout from "../layouts/app.layout";
import BodyLayout from "../layouts/body.layout";
import { MyCV } from "../pages/CV/my-cv.page";
import { ExpenseByCategoryPage } from "../pages/expense-by-category";
import { HomePage } from "../pages/home/home.page";
import { LoginPage } from "../pages/login";
import { MonthlyLimitationPage } from "../pages/monthly-limitation";
import { YearMonthlyPage } from "../pages/monthly-year.page";
import { OverviewPage } from "../pages/overview.page";
import { ProfilePage } from "../pages/profile";
import { UserFriendList } from "../pages/user/friend-list.page";
import { UserFriendRequest } from "../pages/user/friend-request.page";
import { UserPage } from "../pages/user/user.page";
import { DailyExpensePage } from "../pages/daily-expense.page";
import * as path from './path';
import { MessengerPage } from "../pages/messenger/messenger.page";

export const publicRoutes = [
  {
    path: path.ROOT_PATH,
    layout: AppLayout,
    component: HomePage
  },
  {
    path: path.LOGIN_PATH,
    layout: BodyLayout,
    component: LoginPage
  },
  {
    path: path.ABOUT_PATH,
    layout: BodyLayout,
    component: MyCV
  },
]

export const privateRoutes = [
  {
    path: path.PROFILE_PATH,
    layout: AppLayout,
    component: ProfilePage
  },
  {
    path: path.USER_PATH,
    layout: AppLayout,
    component: UserPage
  },
  {
    path: path.USER_FRIEND_PATH,
    layout: AppLayout,
    component: UserFriendList
  },
  {
    path: path.USER_FRIEND_REQUEST_PATH,
    layout: AppLayout,
    component: UserFriendRequest
  },
  {
    path: path.FINANCE_OVERVIEW_PATH,
    layout: AppLayout,
    component: OverviewPage
  },
  {
    path: path.FINANCE_EXPENSE_BY_CATEGORY_PATH,
    layout: AppLayout,
    component: ExpenseByCategoryPage
  },
  {
    path: path.FINANCE_MONTHLY_LIMITATION_PATH,
    layout: AppLayout,
    component: MonthlyLimitationPage
  },
  {
    path: path.FINANCE_EXPENSE_BY_MONTH_PATH,
    layout: AppLayout,
    component: YearMonthlyPage
  },
  {
    path: path.FINANCE_EXPENSE_DAILY_PATH,
    layout: AppLayout,
    component: DailyExpensePage
  },
  {
    path: path.MESSENGER_PATH,
    layout: AppLayout,
    component: MessengerPage
  }
]