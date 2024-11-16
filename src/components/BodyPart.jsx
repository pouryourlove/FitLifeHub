import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/dumbbell.png";
import { fetchData, exerciseOptions } from "../utils/fetchData";

const BodyPart = ({ item, setBodyPart, bodyPart, setExercises }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #ff2625" : "",
        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "400px",
        cursor: "pointer",
        marginTop: "100px",
      }}
      onClick={() => {
        setBodyPart(item);
        if (item === "all") {
          const fetchAllExercises = async () => {
            const allExercises = await fetchData(
              "https://exercisedb.p.rapidapi.com/exercises",
              exerciseOptions
            );
            setExercises(allExercises);
          };
          fetchAllExercises();
        }
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <img
        src={Icon}
        alt="dumbbell"
        style={{ width: "40px", height: "40px" }}
      />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        color="#3A1212"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
