import React from 'react'
import { Intro } from './home/intro'
import { About } from './home/about'
import { Services } from './home/service'
import { HTrade } from './home/trade'
import { Faqs } from './home/faqs'

export const Home = () => {
  return (
    <div>
        <Intro />
        <About />
        <Services />
        <HTrade />
        <Faqs />
    </div>
  )
}
