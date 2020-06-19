import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
<<<<<<< HEAD
import makeStyles from '@material-ui/core/styles/makeStyles';
import Divider from '@material-ui/core/Divider';
import CardActionArea from '@material-ui/core/CardActionArea';
import UserTags from './UserTags';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        // height: 140,
        height: 0,
        paddingTop: '56.25%', // 16:9,
        marginTop: '30',
    },
});

const VolunteerCard = props => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.avatar} title="Volunteer Picture"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h6">
                        {props.volunteerName}
                    </Typography>
                    <Typography variant="subtitle1" component="h6">
                        <UserTags tags={props.tags} />
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.description}
                    </Typography>
                    <Divider className="MuiDivider-root" light />
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" target="_blank">
                    Read More
                </Button>
                <Button size="small" color="primary" target="_blank">
                    Start Conversation
                </Button>
            </CardActions>
        </Card>
    );
};
=======
import Divider from '@material-ui/core/Divider';
import Tags from './Tags/Tags';
import classes from '../modules/card.module.css';

const VolunteerCard = ({
    avatar, volunteerName, description, tags,
}) => (
    <Card className={classes.root}>
        <CardMedia
                className={classes.media}
                image={avatar}
                title="Volunteer Picture"
        />
        <CardContent>
            <Typography variant="h5" component="h6" style={{ fontFamily: '\'Baloo 2\', cursive' }}>
                {volunteerName}
            </Typography>
            <Typography variant="subtitle1" component="h6">
                <Tags tags={tags} />
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {description}
            </Typography>
            <Divider className="MuiDivider-root" light />
        </CardContent>
        <CardActions>
            <Button size="small" color="primary" target="_blank">Read More</Button>
            <Button size="small" color="primary" target="_blank">Start Conversation</Button>
        </CardActions>
    </Card>
    );
>>>>>>> 095e6e132d4a5094915d1e47f198552f2ab6dcf1

export default VolunteerCard;
