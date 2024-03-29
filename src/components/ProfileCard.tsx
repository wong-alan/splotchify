import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Tooltip from "@mui/material/Tooltip";
import Skeleton from "@mui/material/Skeleton";
import OpenInNewOutlined from "@mui/icons-material/OpenInNewOutlined";
import { Info, InfoEyebrow, InfoSubtitle, InfoTitle } from "../mui-treasury/info-basic";
import { getInfoN03Styles } from "../mui-treasury/info-n03";
import Emoji, { getFlagEmoji } from "./icons/Emoji";
import { SPLOTCHIFY_SVG } from "./icons/SplotchifyIcon";
import { BASE_SKELETON_SX, DEFAULT_TOOLTIP_SX, Repeat } from "../utils";

interface ProfileCardProps {
    profile: UserProfile | null
}

export const ProfileCard = ({profile}: ProfileCardProps) => {
    if (!profile) {
        return (
            <Card
                sx={{
                    minWidth: 450,
                    maxWidth: 495,
                    borderRadius: "20px",
                    boxShadow: 24,
                    transition: "0.3s",
                    margin: "24px",
                    bgcolor: "#242424"
                }}
            >
                <Box sx={{ minWidth: 256 }}>
                    <Box
                        sx={{
                            padding: `4px 24px 0`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <Skeleton variant="circular" animation="wave"
                            width={60} height={60}
                            sx={{
                                ...BASE_SKELETON_SX,
                                transform: "translateY(calc(50% + 8px))",
                            }}
                        />
                        <Skeleton variant="text" animation="wave"
                            width={240} height={25}
                            sx={{ ...BASE_SKELETON_SX, }}
                        />
                    </Box>
                    <Box
                        component="hr"
                        sx={(theme) => ({
                            backgroundColor: "grey.200",
                            marginBottom: `${24 - 1}px`, // minus 1 due to divider height
                            [theme.breakpoints.up("sm")]: {
                                marginBottom: `${30 - 1}px`, // minus 1 due to divider height
                            },
                        })}
                    />
                </Box>
                <CardContent sx={{ padding: "8px 24px 24px 24px" }}>
                    <Info useStyles={getInfoN03Styles}>
                        <InfoEyebrow>
                            <Skeleton variant="text" animation="wave"
                                width={117} height={30}
                                sx={{ ...BASE_SKELETON_SX }}
                            />
                        </InfoEyebrow>
                        <InfoTitle sx={{marginBottom: "0.5em"}}>
                            <Skeleton variant="text" animation="wave"
                                width={250} height={36}
                                sx={{ ...BASE_SKELETON_SX }}
                            />
                        </InfoTitle>
                        <InfoSubtitle>
                            <Repeat count={5}>
                                <Skeleton variant="text" animation="wave"
                                    width={225} height={30}
                                    sx={{ ...BASE_SKELETON_SX }}
                                />
                            </Repeat>
                        </InfoSubtitle>
                    </Info>
                </CardContent>
            </Card>
        );
    }

    const iconSrc: string = profile.images.length == 0 ?
        SPLOTCHIFY_SVG :
        profile.images.sort((a, b) => b.height - a.height)[0].url;
        // Sort by decreasing size

    return (
        <Card
            sx={{
                maxWidth: 495,
                borderRadius: "20px",
                boxShadow: 24,
                transition: "0.3s",
                margin: "24px",
                bgcolor: "#242424"
            }}
        >
            <Box sx={{ minWidth: 256 }}>
                <Box
                    sx={{
                        padding: `4px 24px 0`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Avatar
                        alt={"User profile picture"}
                        src={iconSrc}
                        sx={{
                            width: 60,
                            height: 60,
                            transform: "translateY(calc(50% + 8px))", // hr has margin-top: 8px
                            "& > img": {
                                margin: 0,
                                backgroundColor: "common.white",
                            },
                        }}
                    />
                    <Tooltip
                        title="User ID"
                        placement="bottom-end"
                        componentsProps={{
                            tooltip: {
                                sx: DEFAULT_TOOLTIP_SX
                            }
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: "inherit",
                                fontWeight: 500,
                                fontSize: 14,
                                textTransform: "uppercase",
                                color: "grey.500",
                                letterSpacing: "1px",
                            }}
                        >
                            {profile.id}
                        </Typography>
                    </Tooltip>
                </Box>
                <Box
                    component="hr"
                    sx={(theme) => ({
                        backgroundColor: "grey.200",
                        marginBottom: `${24 - 1}px`, // minus 1 due to divider height
                        [theme.breakpoints.up("sm")]: {
                            marginBottom: `${30 - 1}px`, // minus 1 due to divider height
                        },
                    })}
                />
            </Box>
            <CardContent sx={{ padding: "8px 24px 24px 24px" }}>
                <Info useStyles={getInfoN03Styles}>
                    <InfoEyebrow>
                        {profile.product} <Emoji>{getFlagEmoji(profile.country)}</Emoji>
                    </InfoEyebrow>
                    <InfoTitle sx={{marginBottom: "0.5em", color: "white"}}>
                        {profile.display_name ? profile.display_name : "(no display name)"}
                    </InfoTitle>
                    <InfoSubtitle sx={{lineBreak: "anywhere", color: "white"}}>
                        Followers: {profile.followers.total} <br/>
                        Email: {profile.email} <br/>
                        Explicit content: {profile.explicit_content.filter_enabled ? "Not Allowed" : "Allowed"} <br />
                        Explicit content filter: {profile.explicit_content.filter_locked ? "Locked" : "Unlocked"} <br />
                        Spotify URI:
                            <Link href={profile.uri} target="_blank" rel="noopener">
                                {profile.uri} <OpenInNewOutlined sx={{fontSize: "1rem"}} />
                            </Link> <br/>
                        {
                            iconSrc != SPLOTCHIFY_SVG &&
                                <Link href={iconSrc} target="_blank" rel="noopener" sx={{fontSize: "17px"}}>
                                    Profile Image <OpenInNewOutlined sx={{fontSize: "1rem"}} />
                                </Link>
                        }
                    </InfoSubtitle>
                </Info>
            </CardContent>
        </Card>
    );
}

export default ProfileCard;
