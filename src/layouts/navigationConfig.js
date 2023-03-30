// TODO: Proper icons need to be used
// import {
//   getTicketsIcon
// } from '../../@regis/component/icons/AppIcons'
import Dashboard from '../modules/dashboard'
import Routes from '../routes/routeConstants'


const DashboardPage = {
  id: 'dashboard',
  name: 'Dashboard',
  resourceKey: 'ticketsListView',
  url: Routes.Dashboard,
  type: 'item',
  routeType: 'route',
  // icon: getTicketsIcon('#FFFFFF'),
  mobile: false,
  component: Dashboard,
  restriction: true
}

const DIVIDER0 = {
  id: 'divider0',
  type: 'divider',
}

const navigationConfig = [
  // LOGIN_PAGE,
  DashboardPage,
  // TICKETS_ADD_NEW,
  // TILL,
  DIVIDER0,
  // TIME_CARD,
  // MY_PRODUCTIVITY,
  // // SAMPLE_CONTROLS,
  // // FULLPAGE_1,
  // // FULLPAGE_2,
  // SETTINGS
]

export default navigationConfig
