import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { workspaceName } from '../../actions/workspaceActions';

import { detectWhitespacesAndReturnReadableResult } from '../../helpers/whitespace';

import Dialog from '../Dialog';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import TextField from '@material-ui/core/TextField';

import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Blockly from 'blockly/core';
import Copy from '../copy.svg';

const styles = (theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    iconButton: {
        backgroundColor: theme.palette.button.compile,
        color: theme.palette.primary.contrastText,
        width: '40px',
        height: '40px',
        '&:hover': {
            backgroundColor: theme.palette.button.compile,
            color: theme.palette.primary.contrastText,
        }
    },
    button: {
        backgroundColor: theme.palette.button.compile,
        color: theme.palette.primary.contrastText,
        '&:hover': {
            backgroundColor: theme.palette.button.compile,
            color: theme.palette.primary.contrastText,
        }
    }
});


class AddToQueue extends Component {

    constructor(props) {
        super(props);
        this.state = {
            progress: false,
            open: false,
            file: false,
            title: '',
            content: '',
            name: props.name
        };
    }

    componentDidUpdate(props) {
        if (props.name !== this.props.name) {
            this.setState({ name: this.props.name });
        }
    }


    upload = () => {
        if (this.state.name) {
            this.setState({ progress: true });
            const data = {
                "sketch_name": this.state.name,
                "sketch": this.props.arduino,
                "sketch_xml": this.props.xml
            };
            if (process.env.React_APP_SAME_SERVER === "true") {
                fetch(`${window.location.origin}/api/upload`, {
                    method: "POST",
                    headers: { 'Content-Type': 'application/json', 'sessionID': this.props.sessionID },
                    body: JSON.stringify(data)
                })
                    .then(data => {
                        this.setState({ progress: false });
                        window.location.href = "/";
                    })
                    .catch(err => {
                        console.log(err);
                        this.setState({ progress: false, file: false, open: true, title: Blockly.Msg.compiledialog_headline, content: Blockly.Msg.compiledialog_text });
                    });
            } else {
                fetch(`${process.env.REACT_APP_REMOTE_BACKEND}/api/upload`, {
                    method: "POST",
                    headers: { 'Content-Type': 'application/json', 'sessionID': this.props.sessionID },
                    body: JSON.stringify(data)
                })
                    .then(data => {
                        this.setState({ progress: false });
                        window.location.href = "/";
                    })
                    .catch(err => {
                        console.log(err);
                        this.setState({ progress: false, file: false, open: true, title: Blockly.Msg.compiledialog_headline, content: Blockly.Msg.compiledialog_text });
                    });
            }
        } else {
            this.createFileName();
        }
    }

    toggleDialog = () => {
        this.setState({ open: !this.state, progress: false });
    }

    createFileName = () => {
        if (!this.state.name) {
            this.setState({ file: true, open: true, title: 'Projekt kompilieren', content: 'Bitte gib einen Namen für die Bennenung des hoch zu ladenden Programms ein und bestätige diesen mit einem Klick auf \'Eingabe\'.' });
        }
    }

    setFileName = (e) => {
        this.setState({ name: detectWhitespacesAndReturnReadableResult(e.target.value) });
    }

    render() {
        return (
            <div>
                {this.props.iconButton ?
                    <Tooltip title={Blockly.Msg.tooltip_compile_code} arrow style={{ marginRight: '5px' }}>
                        <IconButton
                            className={`compileBlocks ${this.props.classes.iconButton}`}
                            onClick={() => this.upload()}
                        >
                            <FontAwesomeIcon icon={faUpload} size="l" />
                        </IconButton>
                    </Tooltip>
                    :
                    <Button style={{ float: 'right', color: 'white' }} variant="contained" className={this.props.classes.button} onClick={() => this.upload()}>
                        <FontAwesomeIcon icon={faUpload} style={{ marginRight: '5px' }} /> Upload
          </Button>
                }
                <Backdrop className={this.props.classes.backdrop} open={this.state.progress}>
                    <div className='overlay'>
                        <img src={Copy} width="400" alt="copyimage"></img>
                        <h2>{Blockly.Msg.compile_overlay_head}</h2>
                        <p>{Blockly.Msg.compile_overlay_text}</p>
                        <p>{Blockly.Msg.compile_overlay_help}<a href="/faq" target="_blank">FAQ</a></p>
                        <CircularProgress color="inherit" />
                    </div>
                </Backdrop>
                <Dialog
                    open={this.state.open}
                    title={this.state.title}
                    content={this.state.content}
                    onClose={this.toggleDialog}
                    onClick={this.state.file ? () => { this.toggleDialog(); this.setState({ name: this.props.name }) } : this.toggleDialog}
                    button={this.state.file ? Blockly.Msg.button_cancel : Blockly.Msg.button_close}
                >
                    {this.state.file ?
                        <div style={{ marginTop: '10px' }}>
                            <TextField autoFocus placeholder='Dateiname' value={this.state.name} onChange={this.setFileName} style={{ marginRight: '10px' }} />
                            <Button disabled={!this.state.name} variant='contained' color='primary' onClick={() => this.upload()}>Eingabe</Button>
                        </div>
                        : null}
                </Dialog>
            </div>
        );
    };
}

AddToQueue.propTypes = {
    arduino: PropTypes.string.isRequired,
    name: PropTypes.string,
    workspaceName: PropTypes.func.isRequired,
    sessionID: PropTypes.string,
};

const mapStateToProps = state => ({
    xml: state.workspace.code.xml,
    arduino: state.workspace.code.arduino,
    name: state.workspace.name,
    sessionID: state.general.sessionID
});


export default connect(mapStateToProps, { workspaceName })(withStyles(styles, { withTheme: true })(AddToQueue));
