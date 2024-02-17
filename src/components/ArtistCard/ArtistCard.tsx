import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CSSObject, styled } from "@mui/material/styles";
import {
  Info,
  InfoEyebrow,
  InfoSlotStyles,
  InfoSubtitle,
  InfoTitle,
} from "../../mui-treasury/info-basic";
import SpotifyButton from "../SpotifyButton/SpotifyButton";

const useStyles = (): CSSObject & Partial<InfoSlotStyles> => {
  return {
    eyebrow: {
      color: "rgba(255, 255, 255, 0.92)",
      fontFamily: '"Spartan", san-serif',
      lineHeight: 1.4,
      fontSize: "1.0625rem",
      letterSpacing: "1px",
      textTransform: "initial",
      marginBottom: 0,
    },
    title: {
      color: "#fff",
      fontSize: "1.25rem",
      fontWeight: "bold" as const,
      lineHeight: 1.2,
    },
    subtitle: {
      color: "rgba(255, 255, 255, 0.72)",
      lineHeight: 1.5,
      "&:last-child": {
        marginTop: "1rem",
      },
    },
  };
};

const StyledCard = styled(Card)({
  borderRadius: "1rem",
  position: "relative",
  minWidth: 200,
  maxWidth: 300,
  aspectRatio: "1 / 1.2",
  margin: 10,
  overflow: "hidden",
  transition: "all 500ms cubic-bezier(0.5, 0, 0.5, 1)",
  "@media only screen and (max-width: 600px)": {
    margin: 5
  },
  "&:after": {
    content: '""',
    display: "block",
    position: "absolute",
    width: "100%",
    height: "64%",
    bottom: 0,
    zIndex: 1,
    background: "linear-gradient(to top, #000, rgba(0,0,0,0))",
  },
});

const StyledCardMedia = styled(CardMedia)({
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  zIndex: 0,
  backgroundPosition: "top",
});

const Content = styled("div")(({ theme }) => ({
  padding: "10px 10px", //theme.spacing(3, 2),
  boxSizing: "border-box",
  position: "absolute",
  zIndex: 2,
  bottom: 0,

  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  width: "100%",

  color: "white"
}));

interface ArtistCardProps {
  artist: Artist
}

export function ArtistCard({artist}: ArtistCardProps) {
  return (
    <StyledCard sx={{ boxShadow: 24 }}>
      <StyledCardMedia
        image={artist.images[0].url}
      />
        <Content>
          <Info
            useStyles={useStyles}
          >
            <InfoEyebrow className="spotify-font"
              sx={{ fontSize: "0.9em" }}>
              {artist.followers.total.toLocaleString()} Followers
            </InfoEyebrow>
            <InfoTitle
              sx={{
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis"
              }}
            >
              {artist.name}
            </InfoTitle>
            <InfoSubtitle
              sx={{
                marginTop: "0 !important"
              }}
            >
              <SpotifyButton />
            </InfoSubtitle>
          </Info>
        </Content>
    </StyledCard>
  );
}