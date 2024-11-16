import { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import BodyPartsScrollbar from "./Scrollbar";

const Search = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");

  const [bodyParts, setBodyParts] = useState([]);

  //for the catergories
  useEffect(() => {
    const fetchBodyParts = async () => {
      const bodyParts = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setBodyParts(["all", ...bodyParts]);
    };

    fetchBodyParts();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );

      const searchedExercises = exercisesData.filter((exercise) => {
        // Ensure exercise.name is a string before calling toLowerCase()
        const exerciseName =
          typeof exercise.name === "string" ? exercise.name.toLowerCase() : "";
        const target =
          typeof exercise.target === "string"
            ? exercise.target.toLowerCase()
            : "";
        const equipment =
          typeof exercise.equipment === "string"
            ? exercise.equipment.toLowerCase()
            : "";
        const bodyPart =
          typeof exercise.bodyPart === "string"
            ? exercise.bodyPart.toLowerCase()
            : "";

        return (
          exerciseName.includes(search) ||
          target.includes(search) ||
          equipment.includes(search) ||
          bodyPart.includes(search)
        );
      });

      setSearch("");
      setExercises(searchedExercises);
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "50px", xs: "35px" } }}
        mb="80px"
        textAlign="center"
      >
        Search the exercises <br /> you want to learn
      </Typography>
      <Box display="flex">
        <TextField
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px",
            },
            width: { lg: "1100px", xs: "500px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="76px"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <BodyPartsScrollbar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          isBodyParts
          setExercises={setExercises}
        />
      </Box>
    </Stack>
  );
};

export default Search;
