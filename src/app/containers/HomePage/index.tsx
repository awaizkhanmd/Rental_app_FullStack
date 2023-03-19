import React from 'react'
import styled from 'styled-components';
import tw from 'twin.macro';
import { BookCard } from '../../components/bookCard';
import { Footer } from '../../components/footer';
import { Marginer } from '../../components/marginer';
import { Navbar } from '../../components/navbar';
import { AboutUs } from './aboutus';
import { BookingSteps } from './bookingSteps';
import { TopCars } from './topCars';
import { TopSection } from './topSection';

const PageContaier = styled.div`
${tw`
flex
flex-col
w-full
items-center
overflow-x-hidden
`}
`;

export function HomePage() {
  
    return <PageContaier>
      <Navbar/>
    <TopSection/>
    <Marginer  direction='vertical' margin="4em"/>
    <BookCard/>
    <Marginer  direction='vertical' margin="11em"/>
    <BookingSteps/>
    <Marginer  direction='vertical' margin="11em"/>
    <AboutUs/>
    <Marginer  direction='vertical' margin="11em"/>
    <TopCars/>
    <Footer/>
    </PageContaier>

}
