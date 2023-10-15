import React, { useState } from "react";
import "./Calc.css";
import { TextField, Button, Stack } from "@mui/material";

function Calc() {
  const [birthDay, setBirthDay] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [age, setAge] = useState(0);

  const calculateAge = () => {
    if (birthDay && birthMonth && birthYear) {
      const birthDate = new Date(`${birthYear}-${birthMonth}-${birthDay}`);
      const currentDate = new Date();
      const ageInMillis = currentDate - birthDate;
      const ageInYears = Math.floor(ageInMillis / (365 * 24 * 60 * 60 * 1000));
      if(ageInYears<0)
      {
        alert("Enter a valid birth date!")
      }
      setAge(ageInYears);
    } else {
      alert("Enter a valid birth date!");
    }
  };

  const handleReset = () => {
    setBirthDay("");
    setBirthMonth("");
    setBirthYear("");
    setAge(0);
  };

  const txtStyle = {
    width: "150px",
    marginRight: "15px",
  };

  const btnStyle = {
    fontWeight: "600",
    backgroundColor: "black",
    marginBottom: "40px",
    width: "200px",
    borderRadius: "0px",
    border: "0",
    fontWeight:"400",
    backgroundColor: "black",
    fontFamily: "Cinzel, serif",
  };

  return (
    <div className="container">
      <div className="banner">
        <h1 className="banner-head">Age Calculator</h1>
      </div>

      <div className="card">
        <div className="card-container">
          <form>
            <div style={{ marginBottom: "30px" }}>
              <TextField
                style={txtStyle}
                id="day"
                label="Day"
                variant="standard"
                inputProps={{
                  style: {
                    fontWeight: "bold",
                    fontSize: "30px",
                    fontFamily: "Cinzel, serif",
                  },
                }}
                InputLabelProps={{
                  style: {
                    fontFamily: "Cinzel, serif",
                    fontWeight: "bold",
                    color: "black",
                  },
                }}
                value={birthDay || ""}
                onChange={(e) => setBirthDay(e.target.value)}
              />
              <TextField
                style={txtStyle}
                id="month"
                label="Month"
                variant="standard"
                inputProps={{
                  style: {
                    fontWeight: "bold",
                    fontSize: "30px",
                    fontFamily: "Cinzel, serif",
                  },
                }}
                InputLabelProps={{
                  style: {
                    fontFamily: "Cinzel, serif",
                    fontWeight: "bold",
                    color: "black",
                  },
                }}
                value={birthMonth || ""}
                onChange={(e) => setBirthMonth(e.target.value)}
              />
              <TextField
                style={txtStyle}
                id="year"
                label="Year"
                variant="standard"
                inputProps={{
                  style: {
                    fontWeight: "bold",
                    fontSize: "30px",
                    fontFamily: "Cinzel, serif",
                  },
                }}
                InputLabelProps={{
                  style: {
                    fontFamily: "Cinzel, serif",
                    fontWeight: "bold",
                    color: "black",
                  },
                }}
                value={birthYear || ""}
                onChange={(e) => setBirthYear(e.target.value)}
              />
              {age > 0 && (
                <div className="render-div">
                  <h1>
                    {age}
                    <span>Years Of Age</span>
                  </h1>
                </div>
              )}
            </div>
            <Stack
              style={{ position: "absolute", bottom: "0" }}
              direction="row"
              spacing={10}
            >
              <Button
                style={btnStyle}
                variant="contained"
                onClick={calculateAge}
              >
                Calculate Age
              </Button>
              <Button
                style={btnStyle}
                variant="contained"
                onClick={handleReset}
              >
                Reset
              </Button>
            </Stack>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Calc;
