import React from "react";
import {Card, CardHeader, CardMedia} from '@material-ui/core';
import {makeStyles} from "@material-ui/styles";

export default function Photo
    ({
         imageUrl,
         ownerName,
         title,
     })
{


    const useStyles = makeStyles((theme) => (
        {
            root: {
                display: 'flex',
                width: '30%',
                padding: '1%',
                [theme.breakpoints.down('sm')]: {
                    width: '60%',
                },
            },
            card: {
                padding: 4,
                margin: 'auto',
                width: '100%',
            },
            cardHeader: {
                width: '100%'
            },
            image: {
                height: 0,
                paddingTop: '98.25%',
            },
            img: {
                margin: 'auto',
                display: 'block',
                maxWidth: '100%',
                maxHeight: '100%',
            },
        }
    ));

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Card className={classes.card}>
                <CardHeader
                    className={classes.cardHeader}
                    title={ownerName}
                    subheader={title}
                    titleTypographyProps={{
                        variant : 'subtitle1',
                        style: {
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            minHeight: '1rem',
                            maxWidth: '100%',
                            fontSize: '0,8rem'
                        }
                    }}
                    subheaderTypographyProps={{
                        variant : 'caption',
                        style: {
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            maxWidth: '100%',
                            fontSize: '0,9rem'
                        }
                    }}
                />
                <CardMedia className={classes.image} image={imageUrl}/>
            </Card>
        </div>
    )
}