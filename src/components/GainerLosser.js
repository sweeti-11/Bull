import React from 'react'
import './commodity.css'

const GainerLosser = () => {

  return (
    <div>
        <section id='gain' className='gain'>
        <div className='container'>
        <div className='row'>
        <h3>Gainers / Losers</h3>
        <div className='col-lg-6'>
        <div>
        <ul className='d-flex'>
            <li>Gainers</li>
            <li>Losers</li>
        </ul>
        </div>
        <div className='gain-table'>
  <table>
    <tr>
      <th>COMMODITY</th>
      <th>LTP (₹)</th>
      <th>CHG (%)</th>
      <th>OPEN INTEREST (₹)</th>
      <th>VOLUME  (LOTS)</th>
    </tr>
    <tr>
      <td>Zinc</td>
      <td>940345</td>
      <td>940345</td>
      <td>940345</td>
      <td>940345</td>
    </tr>
    <tr>
      <td>Zinc</td>
      <td>940345</td>
      <td>940345</td>
      <td>940345</td>
      <td>940345</td>
    </tr>
    <tr>
      <td>Zinc</td>
      <td>940345</td>
      <td>940345</td>
      <td>940345</td>
      <td>940345</td>
    </tr>
    <tr>
    <td>Zinc Mini</td>
      <td>940345</td>
      <td>940345</td>
      <td>940345</td>
      <td>940345</td>
    </tr>
    <tr>
    <td>Zinc Mini</td>
      <td>67</td>
      <td>67</td>
      <td>67</td>
      <td>67</td>
    </tr>
  </table>
</div>
        </div>

        </div>

        </div>

        </section>
    </div>
  )
}

export default GainerLosser