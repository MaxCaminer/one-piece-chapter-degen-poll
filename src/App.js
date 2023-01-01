import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
  Typography,
  Rating,
  TextField,
  Autocomplete,
  Slider,
  Stack,
  Card,
  styled,
  ThemeProvider,
  createTheme,
  CssBaseline,
} from "@mui/material";
import React from "react";
import OPNames from "./op_names.json";

const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const marks_chapter = [
  {
    value: 0,
    label: "Impossible",
  },
  {
    value: 5,
    label: "Mid",
  },
  {
    value: 10,
    label: "GODA",
  },
];

const marks_hype = [
  {
    value: 0,
    label: "Meh",
  },
  {
    value: 5,
    label: "So-so",
  },
  {
    value: 10,
    label: "HYPE AF",
  },
]

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    </ThemeProvider>
      <Stack spacing={2} justifyContent="center" alignItems="center">
        
          {/* Header */}
          <Typography variant="h1">One Piece Degens</Typography>
        

        
          {/* Chapter Rating */}
          <Typography component="legend">
            What did you rate this chapter?
          </Typography>
          {/* <Rating
            name="simple-controlled"
            defaultValue={0}
            precision={1}
            max={10}
            size="large"
          /> */}
          <Slider
        aria-label="Custom marks"
        defaultValue={50}
        step={1}
        min={0}
        max={10}
        valueLabelDisplay="auto"
        marks={marks_chapter}
        sx={{ width: 600}}
      />
        
          {/* Hype rating */}
          <Typography component="legend">
            How hype are you for next chapter?
          </Typography>
          {/* <Rating
            name="simple-controlled"
            defaultValue={0}
            precision={1}
            max={10}
            size="large"
          /> */}
          <Slider
        aria-label="Custom marks"
        defaultValue={50}
        step={1}
        min={0}
        max={10}
        valueLabelDisplay="auto"
        marks={marks_hype}
        sx={{ width: 600}}
      />
        
          {/* Favourite Character  */}
          <Typography component="legend">
            Favourite character of the chapter?
          </Typography>
          <Autocomplete
            id="combo-box-test"
            options={OPNames}
            sx={{ width: 600 }}
            renderInput={(params) => (
              <TextField {...params} label="Character Name" />
            )}
          />
        
          {/* Overall Thoughts */}
          <Typography component="legend">
            What are your overall thoughts from this chapter?
          </Typography>
          <TextField
            sx={{ width: 600 }}
            multiline
            label="Thoughts go here..."
            id="fullWidth"
            rows={4}
          />
        
          {/* Predictions */}
          <Typography component="legend">
            What are you predictions for next week?
          </Typography>
          <TextField
            sx={{ width: 600 }}
            multiline
            label="Put on your tin foil hats..."
            id="fullWidth"
            rows={4}
          />
        
      </Stack>
    </div>
  );
}

export default App;
