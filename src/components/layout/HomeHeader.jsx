import React from 'react'
import '../styles/HomeHeader.css'
import { BrowserRouter as Router, Link, link } from 'react-router-dom'
import {IntlProvider, FormattedMessage} from 'react-intl'
import ESMessages from '../lang/es-CO.json'
import ENMessages from '../lang/en-US.json'

export const HomeHeader = () => {
  return (
    <>
    <IntlProvider locale='es-CO' messages={ESMessages}>
    <div>
    <h1 className='APL'>ANIMAL PAWS</h1>
    <nav>
    <li><FormattedMessage id='nav.home' defaultMessage='Home'/></li>
    <Link to="/news"><li><FormattedMessage id='nav.news' defaultMessage='News'/></li></Link>
    <Link to="/about_us"><FormattedMessage id='nav.about_us' defaultMessage='About US'/></Link>
    </nav>
    </div>
    </IntlProvider>
    </>
  )
}
