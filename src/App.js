import Router from "./route/Index";

import DataTablePage from "./pages/components/table/DataTable";
import ThemeProvider from "./layout/provider/Theme";


const App = () => {
  return (
    <ThemeProvider>
      <DataTablePage />
    </ThemeProvider>
  );
};
export default App;