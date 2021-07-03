import { Editor } from '@tinymce/tinymce-react';
import {
    Button,
    Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from '@material-ui/core';
import { useHistory, useLocation } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import firebaseApp from '../../firebase/firebase';



const useStyles = makeStyles((theme) => ({
    marginAll: {
        margin: theme.spacing(2),
    },
}));




export default function EditArticle() {
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();
    const [value, setValue] = useState('');
    // const [text, setText] = useState('');

    useEffect(() => {
        firebaseApp
            .database()
            .ref("articles")
            .child(location.state.aid)
            .get()
            .then(function (snapshot) {
                if (snapshot.exists()) {
                    const data = snapshot.val();
                    setValue(data.articleContent);
                } else {
                    console.log("No data available");
                }
            })
            .catch(function (error) {
                console.error(error);
            });
    }, [location.state]);

    const saveToDatabase = () => {
        updateArticle(value);
        console.log(value);
        console.log("Saved");
        history.goBack();

    };

    function updateArticle(updatedArticle) {
        firebaseApp.database().ref("articles")
            .child(location.state.aid)
            .update({
                articleContent: updatedArticle,
            });
    }


    return (
        <Container>
            <Container
                className={classes.marginAll}>
                <Typography variant="h4" component="h2">
                    Edit Article
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.marginAll}
                    onClick={saveToDatabase}
                >
                    Save
                </Button>
            </Container>
            <Editor
                value={value}
                onInit={(evt, editor) => {
                    editor.getContent({ format: 'text' });
                    // setText(editor.getContent({ format: 'text' }));
                }}
                onEditorChange={(newValue, editor) => {
                    setValue(newValue);
                    editor.getContent({ format: 'text' });
                    // setText(editor.getContent({ format: 'text' }));
                }}
                apiKey="ox9djshgzwudkg9mnu5yf8py96c03wfphwcqkhlt4ns77z47"
                init={{
                    menubar: false,
                    height: 800,
                    plugins: [
                        'advlist autolink lists link image',
                        'charmap print preview anchor help',
                        'searchreplace visualblocks code',
                        'insertdatetime media table paste wordcount'
                    ],
                    toolbar:
                        'undo redo | formatselect | bold italic | alignleft aligncenter alignright | bullist numlist outdent indent | help'

                }}
            />
        </Container>
    );
}