import { createTheme } from "@mui/material/styles"
import { useMemo } from "react"
import { themeSettings } from "./theme"
import { ThemeProvider } from "@mui/material"

function App() {
  const theme = useMemo(() => createTheme(themeSettings), [])
  return <div className="App">
    <ThemeProvider theme={theme}>

    </ThemeProvider>
  </div>
}

export default App
