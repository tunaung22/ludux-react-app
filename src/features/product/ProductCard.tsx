import React from 'react';
import {
  Typography,
  Card,
  CardMedia,
  CardHeader,
  CardContent,
  CardActions,
  IconButton,
  Grid,
} from '@mui/material';
import {
  Edit as EditIcon,
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon,
} from '@mui/icons-material';
import imgPlaceholder from '../../assets/images/placeholder.svg';
import noImage from '../../assets/images/no-image.png';

type ProductCardProps = {
  children?: React.ReactChildren;
  product_code: string;
  name: string;
  description?: string;
  uri: string;
};

export function ProductCard(props: ProductCardProps) {
  return (
    <Card
      sx={{
        minWidth: '180px',
        // width: '14vw',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
      }}
    >
      {/* <CardMedia image={noImage} sx={{ height: 120 }} /> */}
      {/* <CardMedia
        component="img"
        image={noImage}
        title="image alt text"
        sx={{ height: 120 }}
      /> */}
      <CardMedia
        image={noImage}
        title="image alt text"
        sx={{
          height: 'auto',
          paddingTop: '56.25%', // 16:9,
          marginTop: '30',
          // height: 100,
          // width: '100%',
          // marginLeft: '33%',
        }}
      />
      {/* <CardHeader
        // avatar={
        //   <Avatar aria-label="recipe" className={classes.avatar}>
        //     R
        //   </Avatar>
        // }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={props.title}
        subheader={props.lastUpdated}
      /> */}
      <CardContent sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h6">{props.product_code}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="caption">{props.name}</Typography>
          </Grid>
          {/* <Grid item xs={12}>
            <Typography variant="caption">{props.uri}</Typography>
          </Grid> */}
          {/* <Grid item xs={12}>
            <Typography
              variant="body2"
              style={{
                display: 'block',
                textOverflow: 'ellipsis',
                wordWrap: 'break-word',
                overflow: 'hidden',
                maxHeight: '3.6em',
                lineHeight: '1.8em',
              }}
            >
              {props.description}
            </Typography>
          </Grid> */}
        </Grid>
      </CardContent>
      <CardActions disableSpacing sx={{}}>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton>
          <EditIcon />
        </IconButton>
        <IconButton>
          <EditIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
