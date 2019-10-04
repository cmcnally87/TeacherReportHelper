import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// import reports from '../../reports'


const useStyles = makeStyles(theme => ({
  root: {
    minWidth: "250px"
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '76.25%', // 16:9
  },

  bigAvatar: {
    width: 60,
    height: 60,
    padding: '1em',
    margin: "0"
  },
  red: {
    backgroundColor: "#ef5350"
  },
  green: {
    backgroundColor: "#9CCC65"
  }
}));

function getReport(averageMarks){
  if(averageMarks >= 60){
    return ('good')
  }else if(averageMarks >= 40){
    return ('average')
  }else{
    return ('bad')
  }
}



export default function PupilCard(props) {
  const classes = useStyles();
  const behaviourPoints = props.behaviourPoints;
  const totalAssMarks = props.assessmentOne + props.assessmentTwo + props.assessmentThree;
  const averageMarks = Math.round(totalAssMarks / 3);
  // const behaviourColor = behaviourPoints => {return behaviourPoints < 0 ? classes.red : classes.green}
  // console.log(behaviourColor())

  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
      
  return (
    <Card id={props.id} className={classes.root}>
      <CardHeader className={behaviourPoints < 0 ? classes.red : classes.green}
        title={props.firstname + ' ' + props.surname}
        subheader={`Behavior points: ${props.behaviourPoints}`} 
      />
      <CardMedia
        className={classes.media}
        image={require("../../assets/pupilPhotos/user.png")}
        title={props.firstname + ' ' + props.surname}
      />
      <CardContent style={{paddingBottom: '0px'}}>
        <Typography paragraph>
          Assessment 1: {props.assessmentOne}
        </Typography>        
        <Typography paragraph>
          Assessment 2: {props.assessmentTwo}
        </Typography>        
        <Typography paragraph>
          Assessment 3: {props.assessmentThree}
        </Typography>
        <Typography paragraph>
          Average: {averageMarks}
        </Typography> 
      </CardContent> 
      <CardActions disableSpacing>
      <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography varient="h8">{getReport(averageMarks)}</Typography>
        </CardContent>
      </Collapse>
    </Card>

  )
}
