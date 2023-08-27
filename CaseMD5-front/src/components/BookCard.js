import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import axios from "axios";
import EditBookModal from "./EditBookModal";
import {useEffect, useState} from "react";

export default function BasicCard(props) {
    const [session, setSession] = useState(props.session.session);
    useEffect(() => {
        setSession(props.session.session);
    }, [props.session.session]);

    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:8080/book/')
            .then(response => response.json())
            .then(data => setData(data.result));
    }, []); // need dependency

    const handleDeleteClick = (event, id) => {
        event.preventDefault();
        axios.delete(`http://localhost:8080/book/delete/${id}`)
            .then(response => {
                console.log(response.data);
                window.location.href = 'http://localhost:3000/';
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <>
            {data.map(item => (
                <Card sx={{maxWidth: 150, minWidth: 150, margin: 1}} variant="null" key={item.id}>
                    <Box sx={{ '& button': { m: 1, fontSize: '10px', width: '55px', minWidth: "5px" }, marginLeft: '5px' }}>
                        <div>
                            {session && session.accountInfo && session.accountInfo.role === "ROLE_ADMIN" && (
                                <>
                                    <EditBookModal bookItem={item}/>
                                    <Button variant="contained" size="small" onClick={(event) => handleDeleteClick(event, item.id)}>Delete</Button>
                                </>
                            )}
                        </div>
                    </Box>
                    <CardMedia
                        sx={{
                            maxHeight: 200,
                            height: 999,
                            border: '1px solid #e0e0e0',
                            borderRadius: '4px'
                        }} // check later
                        image={item.cover}
                        variant="outlined"
                    />
                    <CardContent sx={{padding: 0, marginLeft: 2, flexGrow: 1}}>
                        <Typography gutterBottom variant="h7" component="div">
                            {/*click to this to open book*/}
                            <a href="">{item.name}</a>
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </>
    );
}