import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import theme from "./theme.js";
import { QueryClient, QueryClientProvider } from "react-query";

import HomePage from "./pages/HomePage";
import AdminLoginPage from "./pages/admin/index";
import NotFoundPage from "./pages/404Page";


import DashBoardPage from "./pages/admin/DashBoard";
import DoctorsListPage from "./pages/admin/DoctorsListPage";
import AddNewDoctor from "./pages/admin/AddNewDoctor";



const queryClient = new QueryClient();

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/admin">
              <AdminLoginPage />
            </Route>
            <Route exact path="/admin/dashboard">
              <DashBoardPage />
            </Route>
            <Route exact path="/admin/dashboard/doctors">
              <DoctorsListPage />
            </Route>
             <Route exact path="/admin/dashboard/adddoctor">
              <AddNewDoctor />
            </Route>
            
             <Route path="*">
              <NotFoundPage />
            </Route>
          </Switch>
        </QueryClientProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
