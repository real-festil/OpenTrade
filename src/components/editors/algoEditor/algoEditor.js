import React, { Component } from 'react';
import GridLayout from 'react-grid-layout';
import Backdrop from '../../ui/backdrop/backdrop';
import classes from './algoEditor.module.css';
import '../../changePassword/changePassword.css';
import crossImage from '../../../images/cross.svg';
import {Treebeard} from 'react-treebeard';
import SplitPane, { Pane } from 'react-split-pane';
import './splitPane.css';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-twilight";



class AlgoEditor extends Component {

    layout = [
        {i: 'a', x: 10, y: 0.5, w: 11, h: 4, minW: 10, maxW: Infinity, minH: 3.8, maxH: Infinity}
    ];

    dataPython = {
        name: 'python',
        "toggled": false,
        "activate": true,
        children: [
            {
                name: 'loading',
                loading: true,
                children: []
            }
        ],

    }

    dataOther = {
        name: 'Other',
        "toggled": false,
        children: [
            {
                name: 'loading',
                loading: true,
                children: []
            }
        ]
    }

    onToggle = () => {
    }

    render() {
        return (
            <>
                <Backdrop show={this.props.show}/>
                <GridLayout
                    className={classes.AlgoEditor}
                    layout={this.layout}
                    width={1200}
                    draggableHandle='.Handler'
                    verticalCompact={false}
                    isResizable={true}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-150vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                        <div key='a' className={classes.Wrapper}>
                            <div className='Handler'>
                                <div className={classes.Draggable}>
                                    <div>
                                        <h3>Algo Editor</h3>
                                        <img src={crossImage} alt=''/>
                                    </div>
                                    <img src={crossImage} alt='' onClick={this.props.modalClosed}/>
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
                                            <Treebeard
                                                data={this.dataPython}
                                                onToggle={this.onToggle}
                                            />
                                            <Treebeard
                                                data={this.dataOther}
                                            />
                                        </div>
                                        <div className={classes.Editor}>
                                            <AceEditor
                                                 placeholder="Placeholder Text"
                                                 mode="python"
                                                 theme="twilight"
                                                 name="blah2"
                                                 onLoad={this.onLoad}
                                                 onChange={this.onChange}
                                                 fontSize={14}
                                                 showPrintMargin={true}
                                                 showGutter={true}
                                                 highlightActiveLine={true}
                                                 value={`from`}
                                                 setOptions={{
                                                 enableBasicAutocompletion: true,
                                                 enableLiveAutocompletion: true,
                                                 enableSnippets: false,
                                                 showLineNumbers: true,
                                                 tabSize: 2,
                                                 }}
                                                width='100%'
                                                />
                                        </div>
                                    </SplitPane>
                                    <div initialSize='170px'>
                                        debug
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