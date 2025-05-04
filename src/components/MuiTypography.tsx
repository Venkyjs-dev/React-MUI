import { Typography } from "@mui/material";

const MuiTypography = () => {
  return (
    <section>
      <Typography variant="h1"> H1 Heading</Typography>
      <Typography variant="h2"> H2 Heading</Typography>
      <Typography variant="h3"> H3 Heading</Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        H4 Heading
      </Typography>
      <Typography variant="h5"> H5 Heading</Typography>
      <Typography variant="h6"> H6 Heading</Typography>

      <Typography variant="subtitle1"> Subtitle 1</Typography>
      <Typography variant="subtitle2"> Subtitle 2</Typography>

      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, iusto
        enim, quia dolore a repellat omnis magnam dolores provident laborum aut,
        aliquam corrupti repellendus sed? Saepe dolorem non illo odio.
      </Typography>
      <hr />

      <Typography variant="body2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est sunt
        fugiat ex molestiae libero perferendis voluptatum omnis animi unde.
        Optio eius eaque iste saepe placeat id nisi quos fuga aliquam.
      </Typography>
    </section>
  );
};

export default MuiTypography;
