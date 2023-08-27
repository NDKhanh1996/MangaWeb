import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useState } from "react";
import storage from "../../../config/fireBase";
import { useFormik } from "formik";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Comicservice from "../../../service/bookService";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
};

export default function AddBookModal() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [file, setFile] = useState(null);
    const [percent, setPercent] = useState(0)
    const choseFile = (e) => {
        let file = e.target.files[0];
        setFile(file)
    }

    const formAddComic = useFormik({
        initialValues: {
            name: "",
            categories: "",
            author:""
        },
        onSubmit: values => {

            const storageRef = ref(storage, `/images/${file.name}`);
            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const percent = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
                    setPercent(percent);
                },
                (err) => console.log(err),
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                        let data = {
                            name: values.name,
                            categories: values.categories,
                            author: values.author,
                            cover: url
                        }
                        Comicservice.addComic(data).then()
                    });
                }
            );

        }
    })


    return (
        <>
            <Box sx={{ flexGrow: 1 }} />
            <Button
                onClick={handleOpen}
                variant="contained"
                sx={{
                    bgcolor: 'blue',
                    color: 'white',
                    '&:hover': {
                        bgcolor: 'gray',
                        color: 'white',
                    },
                }}
            >
                Add Book
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <h1>Add Comic</h1>
                    <form encType="multipart/form-data" onSubmit={formAddComic.handleSubmit}>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Name</label>
                            <input type="text"
                                class="form-control"
                                id="exampleInputEmail1"
                                name="name"
                                aria-describedby="emailHelp"
                                style={{ width: "500px" }}
                                onChange={formAddComic.handleChange}
                                value={formAddComic.values.name}
                            />
                            <div id="emailHelp" class="form-text"></div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Categories</label>
                            <input type="text"
                                class="form-control"
                                id="exampleInputPassword1"
                                name="categories"
                                style={{ width: "500px" }}
                                onChange={formAddComic.handleChange}
                                value={formAddComic.values.categories}
                            />
                        </div>

                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">author</label>
                            <input type="text"
                                class="form-control"
                                id="exampleInputPassword1"
                                name="author"
                                style={{ width: "500px" }}
                                onChange={formAddComic.handleChange}
                                value={formAddComic.values.author}
                            />
                        </div>

                        <div>
                            <input type="file" name="cover" onChange={choseFile} required />
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                        <p>{percent} % done</p>
                    </form>
                </Box>
            </Modal>
        </>
    )
}