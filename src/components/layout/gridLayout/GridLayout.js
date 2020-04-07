import React from 'react';

const gridLayout = ( props ) => {
  return (
    <RGL
                                cols={12}
                                rowHeight={100}
                                onResizeStop={this.onWidthChanged}
                                useCSSTransforms={false}
                                draggableHandle='.DragHandle'
                                layout={this.layout}>
                                    <div className={classes.Placeholder} key='c'>
                                     <div className='DragHandle'>
                                      <p>Order Depth:</p>
                                     </div>
                                     <OrderDepth/>
                                    </div>
                                    <div className={classes.Placeholder} key='a'>
                                      <div className='DragHandle'>
                                        <p>Overview</p>
                                        <Select
                                         options={this.options}
                                         isMulti
                                         inputValue='choose interested accounts'
                                         width='100%'
                                         containerWidth='70%'/>
                                      </div>
                                       <Overview/>
                                     </div>
                                    <div className={classes.Placeholder} key='b'>
                                      <MarketWatch/>
                                     </div>
                                    <div className={classes.Placeholder} key='d'>
                                      <FullScreen enabled={this.state.isFullscreen} onChange={isFullscreen => this.setState({isFullscreen})}>
                                      <div className='DragHandle'>
                                          <p style={{flex: '50%', width: '50px'}}>P&L in USD</p>
                                          <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                            <img src={ColumnsImg} alt='' style={{marginRight: '20px', cursor: 'pointer'}} onClick={this.onFullscreenHandler}/>
                                            <div style={{width: "35%"}}>
                                                <Select
                                                options={this.netOptions}
                                                inputValue='Net'
                                                width='400%'
                                                containerWidth='18%'/>
                                            </div>
                                            <div style={{width: "35%"}}>
                                              <Select
                                              options={this.timeOptions}
                                              inputValue='1d'
                                              width='400%'
                                              containerWidth='18%'/>
                                            </div>
                                          </div>

                                        </div>
                                        <Pl/>
                                        </FullScreen>
                                    </div>

                                    <div className={classes.Placeholder} key='e'>
                                      <LastGrid/>
                                    </div>
                        </RGL>
  )
}

export default gridLayout;