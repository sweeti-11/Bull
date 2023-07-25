import React from 'react'
import Graph from './Graph.js'
import Market from './Market.js'
import GainerLosser from './GainerLosser.js'

const CommodityAnalysis = () => {
    return (
        <>
            <section id='commodity' className='commodity mt-5'>
                <div className='container'>
                    <div className='row'>
                        <h3 style={{ color: "#059473" }}>COMMODITY MARKET</h3>
                        <div className='col-lg-7 mt-5 '>
                            <Graph />
                        </div>
                        <div className='col-lg-5 px-5'>
                            <Market />
                        </div>
                    </div>
                </div>
            </section>
            <GainerLosser/>

        </>
    )
}

export default CommodityAnalysis