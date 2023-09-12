import { Box, Typography, Button } from "@mui/material";
import backgroundImage from "../assets/images/running.jpg";

const Hero = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        ml: { lg: "0", sm: "0", xs: "0" },
      }}
    >
      <Box
        sx={{
          ml: { lg: "100px", sm: "50px" },
        }}
        position="relative"
        p="20px"
      >
        <Typography
          color="#FF2625"
          fontWeight={600}
          sx={{ fontSize: { lg: "100px", xs: "70px" } }}
        >
          FitLifeHub
        </Typography>
        <Typography
          fontWeight={700}
          sx={{ fontSize: { lg: "44px", xs: "40px" } }}
          mb="23px"
          mt="30px"
        >
          Let's learn <br /> exercises
        </Typography>
        <Typography fontSize="22px" lineHeight="35px" mb={4}>
          Check out how to do exercises
        </Typography>
        <Button
          variant="contained"
          color="error"
          href="#exercises"
          sx={{ backgroundColor: "#ff2625", padding: "20px" }}
        >
          Explore Exercises
        </Button>
      </Box>
    </Box>
  );
};

export default Hero;
