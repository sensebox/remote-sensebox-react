import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FileUpload from './fileupload';
import Queue from './components/Queue'
import Grid from "@material-ui/core/Grid";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }
    async componentDidMount() {
        if (localStorage.getItem("deviceID") === null) {
            fetch("http://192.168.1.134/api/device/register")
                .then((response) => response.json())
                .then((data) => {
                    localStorage.setItem("deviceID", data.deviceID);
                })
        }
        console.log(localStorage.getItem("deviceID"))
    }
    render() {
        return (
            // this.state.loading ? null : <FileUpload />
            <Grid container spacing={1}>
                <Grid item xs={12} align="center">
                    <FileUpload />
                </Grid>
                <Grid item xs={12} align="center">
                    <Queue />
                </Grid>
            </Grid>


        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));