import React, { PureComponent } from 'react';
import GridLayout from 'react-grid-layout';
import Backdrop from '../../ui/backdrop/backdrop';
import classes from './algoEditor.module.css';
import '../../changePassword/changePassword.css';
import crossImage from '../../../images/cross.svg';
import SvgIcon from '@material-ui/core/SvgIcon';
import { fade, makeStyles, withStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import Collapse from '@material-ui/core/Collapse';
import {Treebeard} from 'react-treebeard';
import SplitPane, { Pane } from 'react-split-pane';
import './splitPane.css';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-twilight";
import { useSpring, animated } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support
import Button from '../../ui/button/button';
import Input from '../../ui/input/input';
import CustomTreeview from '../../ui/treeview/treeview';

class AlgoEditor extends PureComponent {
    state = {
        debug: '',
        filename: '',
        files: ['twap.py'],
        selectedFile: 'twap.py',
        adding: false,
        changed: false,
        valueChanged: false,
        value: '',
        treeShow: true
    }

    layout = [
        {i: 'a', x: 10, y: 0, w: 11, h: 4, minW: 10, maxW: Infinity, minH: 3.8, maxH: Infinity}
    ];

    onClicked = () => {
        this.setState({debug: 'Server unreachable'});
        console.log(this.state.files)
    }

    onAdding = () => {
        this.setState({adding: true})
    }

    onCancelAdding = () => {
        this.setState({adding: false})
    }

    onFileSubmit = () => {
        let arr = this.state.files;
        arr.push(this.state.filename)
        this.setState({files: arr, adding: false, filename: '', changed: false});
        localStorage.setItem('files', this.state.files)
    }

    onAddingChange = (e) => {
        this.setState({changed: e.target.value})
        this.setState({filename: e.target.value})
    }

    onChange = (value, callback) => {
        this.setState({value: value})
        if(this.state.value === localStorage.getItem('value')) {
            this.setState({valueChanged: false})
        } else
            this.setState({valueChanged: true})
        value = this.state.value;
        callback(value);
    }

    onChangeSubmit = (value) => {
        let promise = new Promise(( resolve ) => {
            resolve(this.setState({value: value}));
          });
          promise.then (
            result => localStorage.setItem('value', this.state.value)
          )
    }

    onChangeRestore = (value) => {
        this.setState({value: localStorage.getItem('value') || ''})
    }

    onTreeClicked = () => {
        this.setState({treeShow: !this.state.treeShow})
    }

    onLoad = () => {
        setTimeout(() => localStorage.getItem('value'), 0);
    }

    componentDidMount() {
        this.setState({value: localStorage.getItem('value') || ''})
    }

    onFileChanged = (name) => {
        this.setState({selectedFile: name});
    }

    render() {
        let adding = this.state.adding ? (
            <div className={classes.Adding}>
                <Input style={{width: '150px', marginRight: '10px'}} placeholder='Input filename here' changed={this.onAddingChange}/>
                {this.state.changed ? <Button style={{marginRight: '10px'}} clicked={this.onFileSubmit} caption='Submit'/> : null}
                <Button  caption='Cancel' clicked={this.onCancelAdding}/>
            </div>
        ) : null
        let valueChanged = this.state.valueChanged ? (
            <>
                <Button className='NonDraggable' caption='Restore' btnSelector='btnDisabled' clicked={(value, onChangeSubmit) => this.onChange(null, this.onChangeRestore)}/>
                <Button className='NonDraggable' caption='Save' clicked={(value, onChangeSubmit) => this.onChange(null, this.onChangeSubmit)}/>
            </>
        ) :
        (
            <Button className='NonDraggable' caption='TEST' clicked={this.onClicked}/>
        )
        return (
            <>
                <Backdrop show={this.props.show}/>
                <GridLayout
                    className={classes.AlgoEditor}
                    layout={this.layout}
                    width={1200}
                    draggableHandle='.Handler'
                    draggableCancel='.NonDraggable'
                    verticalCompact={false}
                    isResizable={true}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-150vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                        <div key='a' className={classes.Wrapper}>
                            <div className='Handler'>
                                <div className={classes.Draggable}>
                                    <div className={classes.DraggableWrapper}>
                                        <div>
                                            <h3>Algo Editor</h3>
                                            <img className='NonDraggable' onClick={this.onAdding} src={crossImage} alt=''/>
                                        </div>
                                        {valueChanged}
                                    </div>

                                    <img src={crossImage} className='NonDraggable' alt='' onClick={this.props.modalClosed}/>
                                </div>
                            </div>
                            <div className={classes.ContentWrapper}>
                                <SplitPane
                                    split='horizontal'
                                    >
                                    <SplitPane
                                        split='vertical'
                                        >
                                        <div initialSize='200px' className={classes.Tree}>
                                            <CustomTreeview clicked={this.onTreeClicked} caption='Python'>
                                                {this.state.treeShow ? (this.state.files.map((file) => <li onClick={() => this.onFileChanged({file})}>{file}</li>)) : null}
                                            </CustomTreeview>
                                        </div>
                                        <div className={classes.Editor}>
                                            {adding}
                                            <AceEditor
                                                 placeholder="Placeholder Text"
                                                 mode="python"
                                                 theme="twilight"
                                                 name="blah2"
                                                 value={this.state.value}
                                                 onLoad={this.onLoad}
                                                 onChange={(value, callback) => this.onChange(value, () => null)}
                                                 fontSize={14}
                                                 showPrintMargin={true}
                                                 showGutter={true}
                                                 highlightActiveLine={true}
                                                 setOptions={{
                                                    enableBasicAutocompletion: true,
                                                    enableLiveAutocompletion: true,
                                                    enableSnippets: false,
                                                    showLineNumbers: true,
                                                    tabSize: 2,
                                                 }}
                                                width='100%'
                                                height='700px'
                                                />
                                        </div>
                                    </SplitPane>
                                    <div initialSize='100px'  minSize='30px'>
                                        {this.state.debug}
                                    </div>
                                </SplitPane>
                            </div>

                        </div>
                </GridLayout>
            </>
        );
    }
}

export default AlgoEditor;