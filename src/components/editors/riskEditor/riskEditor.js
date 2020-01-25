import React, { PureComponent } from 'react';
import GridLayout from 'react-grid-layout';
import Backdrop from '../../ui/backdrop/backdrop';
import classes from '../algoEditor/algoEditor.module.css';
import '../../changePassword/changePassword.css';
import crossImage from '../../../images/cross.svg';
import SvgIcon from '@material-ui/core/SvgIcon';
import { fade, makeStyles, withStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import Collapse from '@material-ui/core/Collapse';
import {Treebeard} from 'react-treebeard';
import SplitPane, { Pane } from 'react-split-pane';
import '../algoEditor/splitPane.css';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-twilight";
import { useSpring, animated } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support
import Button from '../../ui/button/button';

function TransitionComponent(props) {
    const style = useSpring({
      from: { opacity: 0, transform: 'translate3d(20px,0,0)' },
      to: { opacity: props.in ? 1 : 0, transform: `translate3d(${props.in ? 0 : 20}px,0,0)` },
    });

    return (
      <animated.div style={style}>
        <Collapse {...props} />
      </animated.div>
    );
  }

class AlgoEditor extends PureComponent {
    state = {
        debug: ''
    }


    layout = [
        {i: 'a', x: 10, y: 0.5, w: 11, h: 4, minW: 10, maxW: Infinity, minH: 3.8, maxH: Infinity}
    ];

    onClicked = () => {
        this.setState({debug: 'Server unreachable'});
    }

    render() {
        // const {data} = this.state;
        // const {decorators} = this.state;

        const StyledTreeItem = withStyles(theme => ({
            iconContainer: {
              '& .close': {
                opacity: 0.3,
              },
            },
            group: {
              marginLeft: 12,
              paddingLeft: 12,

            },
            selected: {
                '&:focus': {
                  backgroundColor: 'red',
                }
            }
          }))(props => <TreeItem {...props} />);

          const useStyles = makeStyles({
            root: {
              height: 264,
              flexGrow: 1,
              maxWidth: 400,
            },
          });



        console.log(this.state)
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
                                        <h3>Risk Editor</h3>
                                        <img src={crossImage} alt=''/>
                                        <Button caption='TEST' clicked={this.onClicked}/>
                                    </div>
                                    <img src={crossImage} alt='' onClick={this.props.modalClosed}/>
                                </div>
                            </div>
                            <div className={classes.ContentWrapper}>
                                {/* <SplitPane
                                    split='horizontal'
                                    > */}
                                    <SplitPane
                                        split='vertical'
                                        >
                                        <div initialSize='200px' className={classes.Tree}>
                                            <TreeView className={classes.TreeView}>
                                                <StyledTreeItem classes={{root: classes.TreeView}} className={classes.TreeItemWrap} nodeId="1" label="Risk">
                                                    <StyledTreeItem className={classes.TreeItem} nodeId="1" label="Server unreachable"/>
                                                </StyledTreeItem>
                                            </TreeView>
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
                                                 value={`Server unreachable`}
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
                                    {/* <div initialSize='170px'  minSize='130px'>
                                        {this.state.debug}
                                    </div>
                                </SplitPane> */}
                            </div>

                        </div>
                </GridLayout>
            </>
        );
    }
}

export default AlgoEditor;