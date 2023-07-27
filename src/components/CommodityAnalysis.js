import React from 'react'
import Graph from './Graph.js'
import Market from './Market.js'
import GainerLosser from './GainerLosser.js'
import MostActive from './MostActive.js'

const CommodityAnalysis = () => {
    return (
        <>
            <section id='commodity' className='commodity mt-5'>
                <div className='container'>
                    <div className='row'>
                        <h3 style={{ color: "#059473", fontWeight:"bold" }}>COMMODITY MARKET</h3>
                        <div className='col-lg-7 mt-5 '>
                            <Graph />
                        </div>
                        <div className='col-lg-5  px-5'>
                            <Market />
                        </div>
                    </div>
                </div>
            </section>
            <section id='losser' className='losser mt-4'>
            <div className='container'>
            <div className='row'>
            <div className='col-lg-6'>
            <GainerLosser/>
            </div>
            <div className='col-lg-6'>
            <MostActive/>
            </div>
            
            </div>

            </div>

           
           
            </section>
        </>
    )
}

export default CommodityAnalysis