import './App.css'
import { CssBaseline, Grid, ThemeProvider, Typography } from '@mui/material'
import EditorWrapper from './components/Editor/EditorWrapper'
import theme from "./theme"

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid 
        container 
        sx={{ mt:10, alignItems: "center" }} 
        flexDirection="column">
        <Grid item>
          <Typography variant='h4' >Lexical Editor App</Typography>
        </Grid>
        <Grid item xs={9} sx={{width: "100%", mt: 5, borderRadius: "15px", overflow: "hidden" }}>
          <EditorWrapper />
        </Grid>
      </Grid>
    </ThemeProvider>
    </>
  )
}

export default App
