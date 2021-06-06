import React,{ useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {ChatEngine} from 'react-chat-engine';
import {useAuth} from '../contexts/AuthContext';
import axios from 'axios';



function Chats(props) {
    const history = useHistory();
    const {user} = useAuth();
    const [loading, setLoading] = useState(true);

    console.log("The user is ");
    console.log(user);
    console.log(" is the user");

    const getFile = async (url) => {
        const response = await fetch(url);
        const data = await response.blob();

        return new File([data], 'userPhoto.jpg', {type:'image/jpeg'});
    }

    useEffect(()=>{

        console.log("useEffect(()=>  ");
        console.log(user.email);
        console.log(user.uid);
        
        console.log("useEffect(()=>  ");


        if(!user){
            history.push('/');
            return;
        }
        axios.get('https://api.chatengine.io/users/me', {
            headers: {
                "project-id": "e49045b9-fdb9-45de-9b3a-dd8269df4476",
                "user-name": user.email,
                "user-secret": user.uid,
            }
        }).then(()=>{
            setLoading(false);
        }).catch(()=> {
            let formdata = new FormData();
            formdata.append('email', user.email);
            formdata.append('username', user.email);
            formdata.append('secret', user.uid);

            getFile(user.photoURL)
                .then((avatar) => {
                    formdata.append('avatar', avatar, avatar.name);

                    axios.post("https://api.chatengine.io/users/",
                    formdata,
                        { headers: { "private-key": "e069469a-eef4-4180-8634-8eb6e7c0ac61"}})
                        .then(()=>{
                            setLoading(false);
                        })
                        .catch((error)=> console.log(error));

                })
        })
    },[user, history])

    if(!user || loading) return "loading...";


    return (
        <div className="chats-page">
            <ChatEngine
                    height= "calc(100vh - 66px)"
                    projectID="e49045b9-fdb9-45de-9b3a-dd8269df4476"
                    userName={user.email}
                    userSecret={user.uid}
                />
        </div>
    );
}

export default Chats;