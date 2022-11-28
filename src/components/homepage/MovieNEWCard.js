import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";

import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import Chip from "@mui/joy/Chip";

import Typography from "@mui/joy/Typography";
import Link from "@mui/joy/Link";

export default function DribbbleShot({ item }) {
  return (
    <Card
      sx={{
        color: "orange",
        width: 200,
        height: 360,
        padding: 1,
        bgcolor: "initial",
        boxShadow: "none",
        background: "black",
        "--Card-padding": "0px",
      }}
    >
      <Box sx={{ position: "relative" }}>
        <AspectRatio ratio="2/3">
          <figure>
            <img
              style={{
                objectFit: "contain",
              }}
              src={item.poster}
              srcSet={item.poster}
              loading="lazy"
              alt="poster"
            />
          </figure>
        </AspectRatio>
        <CardCover
          className="gradient-cover"
          sx={{
            marginTop: "-7rem",
            padding: "15px",
            "&:hover, &:focus-within": {
              opacity: 1,
            },
            opacity: 0,
            transition: "0.1s ease-in",
            background:
              "linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)",
          }}
        >
          {/* The first box acts as a container that inherits style from the CardCover */}
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyItems: "center",
                alignSelf: "flex-end",
              }}
            >
              <Typography
                level="h2"
                sx={{
                  fontSize: "sm",
                }}
              >
                <Link
                  href={`/home/${item.id}`}
                  overlay
                  underline="none"
                  sx={{
                    color: "black",
                    padding: "3px",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    display: "block",
                    color: "white",
                    background: "rgb(249,115,22)",
                  }}
                >
                  Show info
                </Link>
              </Typography>

              {/* <Typography
                level="h2"
                noWrap
                sx={{
                  fontSize: "sm",
                }}
              >
                <Link
                  href={`/home/${item.id}`}
                  overlay
                  underline="none"
                  sx={{
                    color: "black",
                    padding: "2px",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    display: "block",
                    background: "white",
                  }}
                >
                  Play trailer
                </Link>
              </Typography> */}
            </Box>
          </Box>
        </CardCover>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: 1.5,
          alignItems: "center",
          padding: "0 10px",
        }}
      >
        <div
          style={{
            "&:hover, &:focus-within": {
              opacity: 0.5,
            },
            opacity: 1,
            transition: "0.1s ease-in",
            background:
              "linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)",
          }}
        >
          <Typography sx={{ fontSize: "12px", fontWeight: "md" }}>
            {item.title}
          </Typography>
          <Typography sx={{ fontSize: "10px" }}>{item.releasedate}</Typography>
        </div>
        <Chip
          variant="outlined"
          color="neutral"
          size="sm"
          sx={{
            fontSize: "10px",
            borderRadius: "sm",
            py: 0.25,
            px: 0.5,
          }}
        >
          {item.genre}
        </Chip>
      </Box>
    </Card>
  );
}
