import React from 'react';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { useFetchApi } from "../hooks/useFetchApi";

export const PicInfo = ({picDate}) => {

    const {data, loading} = useFetchApi(picDate);

    return(
        <>
            { loading && <p>Loading...</p> }
            { data.msg
                ? <h3>{data.msg}</h3>
                : <Container fixed>
                    <Card sx={{ maxWidth: 500, margin: 'auto' }}>
                        <CardMedia
                            component="img"
                            height="300"
                            image={data.url}
                            alt="nasa-image"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {data.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {data.explanation}
                            </Typography>
                        </CardContent>
                    </Card>
                </Container>
            }
        </>
    );
}

PicInfo.propTypes = {
    picDate: PropTypes.string.isRequired
}