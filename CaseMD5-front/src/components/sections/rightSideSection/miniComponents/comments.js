import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Textarea from '@mui/joy/Textarea';
import {useEffect, useState} from "react";
import Typography from "@mui/material/Typography";
import axios from "axios";

export default function ExampleTextareaComment(props) {
    const [worldComment, setWorldComment] = useState(false);
    const [comment, setComment] = useState('');
    const [isCommentAdded, setIsCommentAdded] = useState(false);
    let account
    if (props) {
        account = props.session.accountInfo
    }

    const addComment = () => {
        const newWorldComment = {
            account: { id: account.id },
            content: comment,
            commentTime: new Date().toISOString()
        };
        axios
            .post('http://localhost:8080/worldComment/add', newWorldComment)
            .then((response) => {
                console.log('World comment added successfully:', response.data);
                setIsCommentAdded(true);
            })
            .catch((error) => {
                console.error('Failed to add world comment:', error);
            });
    };

    useEffect(() => {
        fetch('http://localhost:8080/worldComment/')
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('worldComment');
                }
            })
            .then((data) => {
                setWorldComment(data);
                setIsCommentAdded(false);
            })
            .catch(error => {
                console.error(error);
            });
    }, [isCommentAdded]);


    const italic = false;
    const fontWeight = 'normal';
    return (
        <FormControl>
            <h1 style={{paddingLeft: 10, color: "#2980b9"}}>Chat thế giới</h1>
            {worldComment.result && worldComment.result.length > 0 && (
                worldComment.result.map((item, index) => (
                    <Box
                        key={index}
                        sx={{
                            marginLeft: '10px',
                            border: '1px solid black',
                            padding: '5px',
                            boxShadow: '3px 3px 5px rgba(1, 1, 1, 1)',
                            marginBottom: '10px',
                        }}
                    >
                        <Typography sx={{color: 'blue'}}>{item.account.name}</Typography>
                        <Typography>{item.content}</Typography>
                    </Box>
                ))
            )}

            <FormLabel sx={{marginLeft: '10px'}}>Your comment</FormLabel>
            <Textarea
                placeholder="Type something here…"
                minRows={3}
                value={comment}
                onChange={(e) => setComment(e.target.value)} // Hàm xử lý khi nội dung của ô input thay đổi
                endDecorator={
                    <Box
                        sx={{
                            display: 'flex',
                            gap: 'var(--Textarea-paddingBlock)',
                            pt: 'var(--Textarea-paddingBlock)',
                            borderTop: '1px solid',
                            borderColor: 'divider',
                            flex: 'auto',
                        }}
                    >
                        <Button sx={{ml: 'auto'}} onClick={addComment}>Send</Button>
                    </Box>
                }
                sx={{
                    minWidth: 300,
                    fontWeight,
                    fontStyle: italic ? 'italic' : 'initial',
                }}
            />
        </FormControl>
    );
}
