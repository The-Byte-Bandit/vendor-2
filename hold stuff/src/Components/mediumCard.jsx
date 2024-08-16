import React, { useEffect, useState } from 'react';
import DurationBtn from './durationBtn';
import { clock, toggle, empty, emptySales, yellowSatusIcon, orangeSatusIcon, greenSatusIcon, nurayAvatar, arrowRight } from '../constants/constant';
import { typography } from '../style';
import { useSelector, useDispatch } from 'react-redux';
import LineChartComponent from './lineChart'

function MediumCard(props) {
  const dispatch = useDispatch();
  const dashboardCardState = useSelector((state) => state.dashboard);
  const walletCardState = useSelector((state) => state.wallet);

  const [toggleTransaction, setToggleTransaction] = useState("incoming")
  console.log(dashboardCardState.recentOrders.length);

  // useEffect(() => {
  //
  //   console.log('Toggle transaction changed:', toggleTransaction);
  //
  // }, [toggleTransaction]);

  const cardType = props.type.toLowerCase()

  const title = (() => {
    switch (cardType) {
      case 'orders':
        return 'Recent Orders';
      case 'transactions':
        return 'Recent Transactions';
      case 'trendlist':
        return 'Sales Trend';
      case 'linechart':
        return 'Sales Trend';
      case 'transactionhistory':
        return 'Transaction history';
      default:
        return '';
    }
  })();




  return (
    <div className='flex flex-col flex-1 max-w-[1900px] max-h-[867px] overflow-hidden'>
      <div className='flex flex-col flex-1 border-[1px] h-[100%] w-[100%] rounded-[16px] p-[16px] gap-[16px] border-stroke-soft-200 bg-bg-white-0'>
        <div className='flex flex-1 flex-row max-h-[32px]'>
          <div className='flex flex-row gap-[3px] justify-center items-center max-w-[567px]'>
            <div><img src={clock} alt='clock' className='w-[75%]' /></div>
            <h3 className={`${typography.labelMedium}`}>{title}
            </h3>
          </div>
          <div className='ml-auto'><DurationBtn /></div>
        </div>



                                                          {/* TANSACTIONS */}

        {cardType === "transactions" && dashboardCardState.recentTransactions.incoming.length === 0 &&
                dashboardCardState.recentTransactions.outgoing.length === 0 &&
                dashboardCardState.recentTransactions.pending.length === 0 && (
          <div className='w-[100%px] h-[248px] flex items-center '>
            <div className='flex flex-col w-[100%] justify-center items-center'>
              <div className='flex justify-center'>
                <img src={emptySales} alt='empty' />
              </div>
              <div>
                <h3 className={`${typography.paragraphSmall} text-center text-text-soft-400`}>
                  No records of transactions yet<br />Please check back later.{}
                </h3>
              </div>
            </div>
          </div>
        )}

        {cardType === "transactions" && (dashboardCardState.recentTransactions.incoming.length > 0 ||
                dashboardCardState.recentTransactions.outgoing.length > 0 ||
                dashboardCardState.recentTransactions.pending.length > 0) && (
                  <div className='w-[100%] h-[100%] '>
                    <div className='grid grid-cols-3 bg-bg-weak-100 py-[2px] px-[4px] '>
                      <div className={`flex justify-center rounded-[6px] hover:cursor-pointer  ${toggleTransaction === 'incoming' && 'bg-bg-white-0 shadow-custom-300'}`} onClick={() => setToggleTransaction('incoming')}>
                        <h5>Incoming</h5>
                      </div>
                      <div className={`flex justify-center rounded-[6px] hover:cursor-pointer  ${toggleTransaction === 'outgoing' && 'bg-bg-white-0 shadow-custom-300'}`} onClick={() => setToggleTransaction('outgoing')}>
                        <h5>Outgoing</h5>
                      </div>
                      <div className={`flex justify-center rounded-[6px] hover:cursor-pointer  ${toggleTransaction === 'pending' && 'bg-bg-white-0 shadow-custom-300'}`} onClick={() => setToggleTransaction('pending')}>
                        <h5>Pending</h5>
                      </div>
                    </div>
                    {(dashboardCardState.recentTransactions[toggleTransaction]).slice(0,5).map((items, index) => {
                      return (
                        <div key={index} className='flex flex-row h-[56px] gap-[8px] rounded-[12px] items-center py-[8px] px-[8px] '>
                          <div>
                            <img src={items.icon} alt='icon'/>
                          </div>
                          <div className='flex flex-col  max-w-[529px] h-[44px] '>
                            <h5 className={`${typography.labelSmall} text-text-main-900`}>
                              {items.transaction}
                            </h5>
                            <p className={`${typography.paragraphXSmall}`}>
                              {items.description}
                            </p>
                          </div>

                          <div className='flex flex-col ml-auto max-w-[74px] gap-[4px] text-right '>
                            <h5 className={`${typography.paragraphSmall} truncate`} >₦{items.amount.toLocaleString()}</h5>
                            <p className={`${typography.paragraphXSmall}`}>{items.date} </p>
                          </div>

                          <div>
                            <img src = {arrowRight} alt='arrow'/>
                          </div>
                        </div>
                      );
                    })}

                  </div>
                )}



                                                          {/* ORDERS */}

        {dashboardCardState.recentOrders.length === 0 && (cardType === "orders" || cardType === "Orders") &&  (
          <div className='w-[100%] h-[248px] flex items-center '>
            <div className='flex flex-col w-[100%] justify-center items-center'>
              <div className='flex justify-center'>
                <img src={empty} alt='empty' />
              </div>
              <div>
                <h3 className={`${typography.paragraphSmall} text-center text-text-soft-400`}>
                  No records of spendings yet<br />Please check back later.
                </h3>
              </div>
            </div>
          </div>
        )}
        {dashboardCardState.recentOrders.length > 0 &&(cardType === "orders" || cardType === "Orders" ) && (
          <div className="grid grid-cols-6 h-full">
          <div className="col-span-2 h-full">
            <div className='flex flex-col h-full'>
              <div className='flex flex-row bg-bg-weak-100 mb-[10px]'>
                <div>
                  <input type="checkbox" />
                </div>
                <div className={`flex flex-row max-w-[186px] items-center gap-[10px] ml-[16px]`}>
                  <h3 className={`${typography.paragraphSmall}`}>Product</h3>
                  <div>
                    <img src={toggle} alt='toggle' />
                  </div>
                </div>
              </div>
              <div className='flex flex-col justify-between h-full'>
                {dashboardCardState.recentOrders.slice(0,5).map((item, index) => (
                  <div key={index} className='flex flex-1 items-center flex-row gap-[10px] border-b border-stroke-soft-200 w-[100%] max-h-[75px] 2xl:max-h-[105px]  mt-[0px]'>
                    <div>
                      <input type="checkbox" />
                    </div>
                    <div className='flex justify-center items-center ml-[6px] gap-[8px] max-w[100px] '>
                      <div>
                        <img src={nurayAvatar} alt='avatar'/>
                      </div>
                      <div className='flex flex-col justify-center items-center'>
                        <p className={`${typography.paragraphSmall} truncate`}>
                          {item.product}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-span-2 flex flex-col h-full">
            <div className='bg-bg-weak-100 w-[100%] h-[24px] flex items-center mb-[10px] py-[8px] px-[12px]'>
              <div className={`flex flex-row flex-nowrap max-w-[160px] gap-[10px]`}>
                <h3 className={`${typography.paragraphSmall}`}>Customer Name</h3>
                <div>
                  <img src={toggle} alt='toggle' />
                </div>
              </div>
            </div>
            <div className='flex flex-col h-full justify-between'>
              {dashboardCardState.recentOrders.slice(0,5).map((item, index) => (
                <div key={index} className='flex flex-1 items-center gap-[10px]  max-h-[75px] 2xl:max-h-[105px]  mt-[0px] px-[12px] border-b border-stroke-soft-200'>
                  <div className='flex flex-col gap-[6px] '>
                    <p className={`${typography.paragraphSmall}`}>
                      {item.userName}
                    </p>
                    <p className={`${typography.paragraphXSmall}`}>
                      {item.email}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col h-full">
            <div className='bg-bg-weak-100 w-[100%] h-[24px] flex items-center mb-[10px] py-[8px] px-[12px]'>
              <div className={`flex flex-row max-w-[76px] items-center gap-[10px]`}>
                <h3 className={`${typography.paragraphSmall}`}>Amount</h3>
                <div>
                  <img src={toggle} alt='toggle' />
                </div>
              </div>
            </div>
            <div className='flex flex-1 flex-col justify-between h-full'>
              {dashboardCardState.recentOrders.slice(0,5).map((item, index) => (
                <div key={index} className='flex flex-1  px-[12px] items-center max-h-[75px] 2xl:max-h-[105px]  mt-[0px] border-b border-stroke-soft-200'>
                  <div className='flex max-w-[85px]'>
                    <h5 className={`${typography.labelSmall} text-text-main-900 truncate`}>
                      ₦{item.amount.toLocaleString()}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col h-full">
            <div className='bg-bg-weak-100 w-[100%] h-[24px] flex items-center py-[8px] px-[12px] mb-[10px]'>
              <div className={`flex flex-row  items-center gap-[10px]`}>
                <h3 className={`${typography.paragraphSmall}`}>Status</h3>
                <div>
                  <img src={toggle} alt='toggle' />
                </div>
              </div>
            </div>
            <div className='flex flex-1 flex-col justify-between h-full'>
              {dashboardCardState.recentOrders.slice(0,5).map((item, index) => (
                <div key={index} className='flex items-center flex-1  max-h-[75px] 2xl:max-h-[105px] mt-[0px] border-b border-stroke-soft-200  py-[4px]'>
                  <div className='flex flex-row py-[4px] px-[3px] gap-[4px] items-center rounded-[6px] border-[1px] border-stroke-soft-200  ml-[8px]'>
                    <div>
                      {item.status === "Pending" && <img src={orangeSatusIcon} alt='pending'/> || item.status === "Shipped" && <img src={yellowSatusIcon} alt='shipped'/> || item.status === "Delivered" && <img src={greenSatusIcon} alt='delivered'/> }
                    </div>
                    <h5 className={`${typography.labelXSmall} text-text-sub-500`}>{item.status}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        )}



                                                    {/* SALES TREND (LIST) */}




          {dashboardCardState.recentOrders.length === 0 && (cardType === "trendlist" || cardType === "TrendList") &&  (
          <div className='w-[100%] h-[248px] flex items-center '>
            <div className='flex flex-col w-[100%] justify-center items-center'>
              <div className='flex justify-center'>
                <img src={empty} alt='empty' />
              </div>
              <div>
                <h3 className={`${typography.paragraphSmall} text-center text-text-soft-400`}>
                  No records of spendings yet<br />Please check back later.
                </h3>
              </div>
            </div>
          </div>
        )}
        {dashboardCardState.recentOrders.length > 0 &&(cardType === "trendlist" || cardType === "TrendList" ) && (
          <div className="grid grid-cols-6">
          <div className="col-span-2">
            <div className=''>
              <div className='flex flex-row bg-bg-weak-100 '>
                <div>
                  <input type="checkbox" />
                </div>
                <div className={`flex flex-row max-w-[186px] items-center gap-[10px] ml-[16px]`}>
                  <h3 className={`${typography.paragraphSmall}`}>Product</h3>
                  <div>
                    <img src={toggle} alt='toggle' />
                  </div>
                </div>
              </div>
              <div>
                {dashboardCardState.recentOrders.slice(0,5).map((item, index) => (
                  <div key={index} className='flex flex-1 items-center flex-row gap-[10px] border-b border-stroke-soft-200 w-[100%] max-h-[105px]  mt-[0px]'>
                    <div>
                      <input type="checkbox" />
                    </div>
                    <div className='flex justify-center items-center ml-[6px] gap-[8px] max-w[100px] '>
                      <div>
                        <img src={nurayAvatar} alt='avatar'/>
                      </div>
                      <div className='flex flex-col justify-center items-center'>
                        <p className={`${typography.paragraphSmall} truncate`}>
                          {item.product}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-span-2">
            <div className='bg-bg-weak-100 w-[100%] h-[24px] flex items-center py-[8px] px-[12px]'>
              <div className={`flex flex-row flex-nowrap max-w-[160px] gap-[10px]`}>
                <h3 className={`${typography.paragraphSmall}`}>Customer Name</h3>
                <div>
                  <img src={toggle} alt='toggle' />
                </div>
              </div>
            </div>
            {dashboardCardState.recentOrders.slice(0,5).map((item, index) => (
              <div key={index} className='flex  items-center max-h-[105px]  mt-[0px] px-[12px] border-b border-stroke-soft-200'>
                <div className='flex flex-col gap-[6px] '>
                  <p className={`${typography.paragraphSmall}`}>
                    {item.userName}
                  </p>
                  <p className={`${typography.paragraphXSmall}`}>
                    {item.email}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="">
            <div className='bg-bg-weak-100 w-[100%] h-[24px] flex items-center py-[8px] px-[12px]'>
              <div className={`flex flex-row max-w-[76px] items-center gap-[10px]`}>
                <h3 className={`${typography.paragraphSmall}`}>Amount</h3>
                <div>
                  <img src={toggle} alt='toggle' />
                </div>
              </div>
            </div>
            {dashboardCardState.recentOrders.slice(0,5).map((item, index) => (
              <div key={index} className='flex py-[8px] px-[12px] items-center max-h-[105px]  mt-[0px] border-b border-stroke-soft-200'>
                <div className='flex max-w-[85px]'>
                  <h5 className={`${typography.labelSmall} text-text-main-900 truncate`}>
                    ₦{item.amount.toLocaleString()}
                  </h5>
                </div>
              </div>
            ))}
          </div>

          <div className="">
            <div className='bg-bg-weak-100 w-[100%] h-[24px] flex items-center py-[8px] px-[12px]'>
              <div className={`flex flex-row max-w-[80px] items-center gap-[10px]`}>
                <h3 className={`${typography.paragraphSmall}`}>Status</h3>
                <div>
                  <img src={toggle} alt='toggle' />
                </div>
              </div>
            </div>
            {dashboardCardState.recentOrders.slice(0,5).map((item, index) => (
              <div key={index} className='flex items-center  max-h-[105px] mt-[0px] border-b border-stroke-soft-200  py-[4px] '>
                <div className='flex flex-row py-[4px] px-[4px] gap-[4px] items-center rounded-[6px] border-[1px] border-stroke-soft-200  ml-[8px]'>
                  <div>
                    {item.status === "Pending" && <img src={yellowSatusIcon} alt='pending'/> || item.status === "Shipped" && <img src={orangeSatusIcon} alt='shipped'/> || item.status === "Delivered" && <img src={greenSatusIcon} alt='delivered'/> }
                  </div>
                  <h5 className={`${typography.labelXSmall} text-text-sub-500`}>{item.status}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
        )}

                              {/* SALES TREND (LINE-CHART) */}
        {(cardType === "linechart" || cardType === "linechart") &&  (
          <div className='w-[100%] h-full  '>
            <div className=''>
            <LineChartComponent/>
            </div>
          </div>
        )}

                          {/*TRANSACTION HISTORY */}

          {walletCardState.transactionhistory.length === 0 && (cardType === "transactionhistory" || cardType === "transactionhistory") &&  (
          <div className='w-[100%px] h-[248px] flex items-center '>
            <div className='flex flex-col w-[100%] justify-center items-center'>
              <div className='flex justify-center'>
                <img src={empty} alt='empty' />
              </div>
              <div>
                <h3 className={`${typography.paragraphSmall} text-center text-text-soft-400`}>
                  No records of spendings yet<br />Please check back later.
                </h3>
              </div>
            </div>
          </div>
        )}
        {walletCardState.transactionhistory.length > 0 &&(cardType === "transactionhistory" || cardType === "transactionhistory" ) && (
        <div className="grid grid-cols-6 h-full">
          <div className="col-span-2 h-full">
            <div className='flex flex-col h-full'>
              <div className='flex flex-row bg-bg-weak-100 mb-[10px]'>
                <div>
                  <input type="checkbox" />
                </div>
                <div className={`flex flex-row max-w-[186px] items-center gap-[10px] ml-[16px]`}>
                  <h3 className={`${typography.paragraphSmall}`}>Product</h3>
                  <div>
                    <img src={toggle} alt='toggle' />
                  </div>
                </div>
              </div>
              <div className='flex flex-col justify-between h-full'>
                {walletCardState.transactionhistory.slice(0,5).map((item, index) => (
                  <div key={index} className='flex flex-1 items-center flex-row gap-[10px] border-b border-stroke-soft-200 w-[100%] max-h-[105px]  mt-[0px]'>
                    <div>
                      <input type="checkbox" />
                    </div>
                    <div className='flex justify-center items-center ml-[6px] gap-[8px] max-w[100px] '>
                      <div>
                        <img src={nurayAvatar} alt='avatar'/>
                      </div>
                      <div className='flex flex-col justify-center items-center'>
                        <p className={`${typography.paragraphSmall} truncate`}>
                          {item.product}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-span-2 flex flex-col h-full">
            <div className='bg-bg-weak-100 w-[100%] h-[24px] flex items-center mb-[10px] py-[8px] px-[12px]'>
              <div className={`flex flex-row flex-nowrap max-w-[160px] gap-[10px]`}>
                <h3 className={`${typography.paragraphSmall}`}>Customer Name</h3>
                <div>
                  <img src={toggle} alt='toggle' />
                </div>
              </div>
            </div>
            <div className='flex flex-col h-full justify-between'>
              {walletCardState.transactionhistory.slice(0,5).map((item, index) => (
                <div key={index} className='flex flex-1 items-center gap-[10px]  max-h-[105px]  mt-[0px] px-[12px] border-b border-stroke-soft-200'>
                  <div className='flex flex-col gap-[6px] '>
                    <p className={`${typography.paragraphSmall}`}>
                      {item.userName}
                    </p>
                    <p className={`${typography.paragraphXSmall}`}>
                      {item.email}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col h-full">
            <div className='bg-bg-weak-100 w-[100%] h-[24px] flex items-center mb-[10px] py-[8px] px-[12px]'>
              <div className={`flex flex-row max-w-[76px] items-center gap-[10px]`}>
                <h3 className={`${typography.paragraphSmall}`}>Date</h3>
                <div>
                  <img src={toggle} alt='toggle' />
                </div>
              </div>
            </div>
            <div className='flex flex-1 flex-col justify-between h-full'>
              {walletCardState.transactionhistory.slice(0,5).map((item, index) => (
                <div key={index} className='flex flex-1  px-[12px] items-center max-h-[105px]  mt-[0px] border-b border-stroke-soft-200'>
                  <div className='flex flex-row flex-1 max-w-[529px] h-[44px] gap-[16px] items-center '>
                    <h5  className={`${typography.labelXSmall} flex flex-row justify-center items-center`} >
                        {item.date}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col h-full">
            <div className='bg-bg-weak-100 w-[100%] h-[24px] flex items-center py-[8px] px-[12px] mb-[10px]'>
              <div className={`flex flex-row  items-center gap-[10px]`}>
                <h3 className={`${typography.paragraphSmall}`}>Status</h3>
                <div>
                  <img src={toggle} alt='toggle' />
                </div>
              </div>
            </div>
            <div className='flex flex-1 flex-col justify-between h-full'>
              {walletCardState.transactionhistory.slice(0,5).map((item, index) => (
                <div key={index} className='flex items-center flex-1  max-h-[105px] mt-[0px] border-b border-stroke-soft-200  py-[4px] '>
                  <div className='flex flex-1 flex-row py-[4px] px-[3px] gap-[4px] items-center rounded-[6px] border-[1px] border-stroke-soft-200  ml-[8px]'>
                    <div>
                      {item.status === "Pending" && <img src={orangeSatusIcon} alt='pending'/> || item.status === "Shipped" && <img src={yellowSatusIcon} alt='shipped'/> || item.status === "Delivered" && <img src={greenSatusIcon} alt='delivered'/> }
                    </div>
                    <h5 className={`${typography.labelXSmall} text-text-sub-500`}>{item.status}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        )}

        {/* {walletCardState.transactionhistory.length > 0 &&(cardType === "transactionhistory" || cardType === "transactionhistory" ) && (
          <div className='grid grid-rows'>
            <div className='grid grid-rows'>
              <div className='grid grid-flow-col '>
                <div className='flex flex-row bg-bg-weak-100 '>
                  <div>
                    <input type="checkbox" />
                  </div>
                  <div className={`flex flex-row max-w-[186px] items-center gap-[10px] ml-[16px]`}>
                    <h3 className={`${typography.paragraphSmall}`}>Product</h3>
                    <div>
                      <img src={toggle} alt='toggle' />
                    </div>
                  </div>
                </div>

                <div className='bg-bg-weak-100 w-[100%] h-[24px] flex items-center py-[8px] px-[12px]'>
                  <div className={`flex flex-row flex-nowrap max-w-[160px] gap-[10px]`}>
                    <h3 className={`${typography.paragraphSmall}`}>Customer Name</h3>
                    <div>
                      <img src={toggle} alt='toggle' />
                    </div>
                  </div>
                </div>

                <div className='bg-bg-weak-100 w-[100%] h-[24px] flex items-center py-[8px] px-[12px]'>
                  <div className={`flex flex-row max-w-[76px] items-center gap-[10px]`}>
                    <h3 className={`${typography.paragraphSmall}`}>Date</h3>
                    <div>
                      <img src={toggle} alt='toggle' />
                    </div>
                  </div>
                </div>

                <div>
                  <div className='bg-bg-weak-100 w-[100%] h-[24px] flex items-center py-[8px] px-[12px]'>
                    <div className={`flex flex-row  items-center gap-[10px]`}>
                      <h3 className={`${typography.paragraphSmall}`}>Status</h3>
                      <div>
                        <img src={toggle} alt='toggle' />
                      </div>
                    </div>
                  </div>
                </div>

              </div>


              <div className='grid grid-rows'>
              {walletCardState.transactionhistory.slice(0,5).map((item, index) => (
                <div key={index} className=''>
                  {index === 0 ? renderTablbeheader() :''}
                  <div className='grid grid-flow-col'>
                    <div  className='flex flex-1 items-center flex-row gap-[10px] border-b border-stroke-soft-200 w-[100%] max-h-[75px]  mt-[10px]'>
                      <div>
                        <input type="checkbox" />
                      </div>
                      <div className='flex justify-center items-center ml-[6px] gap-[8px] max-w[100px] '>
                        <div>
                          <img src={nurayAvatar} alt='avatar'/>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                          <p className={`${typography.paragraphSmall} truncate`}>
                            {item.product}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div key={index} className='flex flex-1  max-h-[75px]  mt-[10px] px-[12px] border-b border-stroke-soft-200'>
                      <div className='flex flex-col gap-[6px] '>
                        <p className={`${typography.paragraphSmall}`}>
                          {item.userName}
                        </p>
                        <p className={`${typography.paragraphXSmall}`}>
                          {item.email}
                        </p>
                      </div>
                    </div>

                    <div key={index} className='flex  px-[12px] items-center max-h-[75px]  mt-[10px] border-b border-stroke-soft-200'>
                      <div className='flex flex-row flex-1 max-w-[529px] h-[44px] gap-[16px] items-center '>
                        <h5  className={`${typography.labelXSmall} flex flex-row justify-center items-center`} >
                            {item.date}
                        </h5>
                      </div>
                    </div>

                    <div className='flex flex-row py-[4px] px-[2px] gap-[4px] items-center rounded-[6px] border-[1px] border-stroke-soft-200  ml-[8px]'>
                      <div>
                        {item.status === "Pending" && <img src={orangeSatusIcon} alt='pending'/> || item.status === "Shipped" && <img src={yellowSatusIcon} alt='shipped'/> || item.status === "Delivered" && <img src={greenSatusIcon} alt='delivered'/> }
                      </div>
                      <h5 className={`${typography.labelXSmall} text-text-sub-500`}>{item.status}</h5>
                    </div>
                  </div>
                </div>

                ))}
              </div>
            </div>
          </div>
        )} */}

      </div>
    </div>
  );
}

export default MediumCard;
