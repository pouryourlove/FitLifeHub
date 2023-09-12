import { Typography, Stack } from "@mui/material";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const capitalizeStyle = {
    textTransform: "capitalize",
  };

  return (
    <Stack
      gap="60px"
      sx={{
        flexDirection: { lg: "row" },
        p: "20px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography variant="h2" style={capitalizeStyle}>
          {name}
        </Typography>
        <Typography variant="h4" style={capitalizeStyle}>
          Target : {target}
        </Typography>
        <Typography variant="h4" style={capitalizeStyle}>
          Bodypart : {bodyPart}
        </Typography>
        <Typography variant="h4" style={capitalizeStyle}>
          Equipment : {equipment}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Detail;
