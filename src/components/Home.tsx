import { AddCircleOutline } from "@mui/icons-material";
import RemoveIcon from "@mui/icons-material/Remove";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

import { Grid, Paper, SelectChangeEvent, Typography } from "@mui/material";
import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
// import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import { useState } from "react";

export function Bilal() {
  const [age, setAge] = useState("");
  const [storeName, setStoreName] = useState("");
  const [category, setCategory] = useState("");
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);
  const [product, setProduct] = useState("");
  const [productCategory, setProductCategory] = useState<Array<String>>([]);
  // const [product]
  const [selectCategory, setSelectCategory] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    if (count !== 0) {
      setCount(count - 1);
    }
  };
  console.log("haaaaaaaaalo", productCategory);
  return (
    <div className="App">
      {/* <Container maxWidth="sm"> */}
      <Container maxWidth="xl">
        <Box
          sx={{ bgcolor: "#cfe8fc", height: "100vh" }}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Box>
            <Box display={"flex"}>
              <TextField
                sx={{ m: 2 }}
                id="outlined-basic"
                label="Store Name"
                variant="outlined"
                // = "center"
                value={storeName}
                onChange={(e) => setStoreName(e.target.value)}
              />
              <Button size="medium" sx={{ m: 2 }} variant="contained">
                Add Store
              </Button>
            </Box>
            <Box display={"flex"}>
              <TextField
                sx={{ m: 2 }}
                id="outlined-basic"
                label="Category"
                variant="outlined"
                // = "center"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
              <Button
                size="medium"
                onClick={() => {
                  setProductCategory([...productCategory, category]);

                  // alert("clicked");
                }}
                sx={{ m: 2 }}
                variant="contained"
              >
                Add Category
              </Button>
            </Box>
            <Box display={"flex"} flexDirection={"row"}>
              <TextField
                sx={{ m: 2 }}
                id="outlined-basic"
                label="Product Name"
                variant="outlined"
                // = "center"
                value={product}
                onChange={(e) => setProduct(e.target.value)}
              />

              <FormControl sx={{ width: 100, m: 2 }}>
                <InputLabel id="demo-simple-select-label">Select</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={productCategory}
                  label="Select"
                  value={selectCategory}
                  onChange={(e) => {
                    setSelectCategory(e.target.value as string);
                  }}
                >
                  {productCategory.map((item) => {
                    return <MenuItem value={item}>{item}</MenuItem>;
                  })}
                </Select>
              </FormControl>
              <Box display={"flex"} alignItems={"center"}>
                <Button
                  size="medium"
                  sx={{ m: 2 }}
                  variant="contained"
                  onClick={decrementCount}
                >
                  <RemoveCircleOutlineIcon></RemoveCircleOutlineIcon>
                </Button>
                <Typography variant="h5">{count}</Typography>
                <Button
                  size="medium"
                  sx={{ m: 2 }}
                  variant="contained"
                  onClick={incrementCount}
                >
                  <AddCircleOutline></AddCircleOutline>
                </Button>
                <TextField
                  sx={{ m: 2 }}
                  id="outlined-basic"
                  label="Price"
                  variant="outlined"
                  // = "center"
                  value={price}
                  onChange={(e) => setPrice(parseInt(e.target.value))}
                />
                <Button size="medium" sx={{ m: 2 }} variant="contained">
                  Add
                </Button>
              </Box>
            </Box>
            <Box>
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <Box>
                    <TextField
                      sx={{ m: 2 }}
                      id="outlined-basic"
                      label="Store Name"
                      variant="outlined"
                      // = "center"
                    ></TextField>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box>
                    <TextField
                      sx={{ m: 2 }}
                      id="outlined-basic"
                      label="Category Name"
                      variant="outlined"
                      // = "center"
                    ></TextField>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box>
                    <TextField
                      sx={{ m: 2 }}
                      id="outlined-basic"
                      label="Product Name"
                      variant="outlined"
                      // = "center"
                    ></TextField>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box>
                    <TextField
                      sx={{ m: 2 }}
                      id="outlined-basic"
                      label="Quantity"
                      variant="outlined"
                      // = "center"
                    ></TextField>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export function Profile() {
  return <img src="https://i.imgur.com/QIrZWGIs.jpg" alt="Alan L. Hart" />;
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
