import React from "react";
import {Card, CardHeader, CardContent, CardMedia} from '@material-ui/core';
import {makeStyles} from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";

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
                paddingTop: '98.25%', // 16:9
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

/*

{
    datetaken: "2020-08-11 11:47:46"
    datetakengranularity: "0"
    datetakenunknown: "0"
    dateupload: "1598194237"
    farm: 66
    height_n: 213
    id: "50259130597"
    isfamily: 0
    isfriend: 0
    ispublic: 1
    owner: "127470263@N08"
    ownername: "bellemma39"
    secret: "968a428b2e"
    server: "65535"
    title: "5A7A9012_DxO"
    url_n: "https://live.staticflickr.com/65535/50259130597_968a428b2e_n.jpg"
    views: "0"
    width_n: 320
}
 */