import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import Link from 'src/components/atoms/Link'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'src/store'
import { selectCount } from 'src/store/counter'
import { increment, setCounterState } from 'src/store/counter/counterSlice'
import { NextSeo } from 'next-seo'
import Hero from 'src/components/organisms/Hero'
import SkillCard from 'src/components/organisms/SkillCard'
import Container from 'src/components/atoms/Container/Container'
import HR from 'src/components/molecules/HR/HR'
import Image from 'src/components/atoms/Image'
import ProductCard from 'src/components/organisms/ProductCard/ProductCard'
import TechBadge from 'src/components/atoms/TechBadge/TechBadge'
import { useScrollTo } from 'src/hooks'
import BannerPoints from 'src/components/organisms/BannerPoints'
import {
  BulletPoint,
  Point,
} from 'src/components/organisms/BannerPoints/BannerPoints'
import CoverLetter from 'src/components/organisms/CoverLetter'
import SlideIndicator from 'src/components/molecules/SlideIndicator'
import { Motto } from 'src/components/content'

export const getStaticProps: GetStaticProps = async () => ({
  props: { data: ['Karthick', 'Ragavendran'] }, // will be passed to the page component as props
})

const Home: NextPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const obj = { title: 'Hello World' }
  const [text, setText] = useState(JSON.stringify(obj))
  const dispatch = useAppDispatch()
  const count = useAppSelector(selectCount)

  const [heroRef, gotoHero] = useScrollTo()
  const [stackRef, gotoStack] = useScrollTo()
  const [ikeaRef, gotoIkea] = useScrollTo()
  const [epicRef, gotoEpic] = useScrollTo()
  const [zillowRef, gotoZillow] = useScrollTo()
  const [elegantUiRef, gotoElegantUi] = useScrollTo()
  const [robustArchRef, gotoRobustArch] = useScrollTo()

  useEffect(() => {
    dispatch(setCounterState(data))
  }, [data, dispatch])
  return (
    <div>
      <Head>
        <title>Karthick Ragavendran | Portfolio</title>
        <meta
          name='description'
          content='Its my portfolio. I will keep it updated with the cool stuff I do.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <NextSeo
        title='Karthick Ragavendran | Portfolio.'
        description='A short description goes here which says what goes here.'
      />

      <div className='fixed right-0 z-30 flex items-center justify-end h-screen '>
        <div className='flex flex-col gap-3 px-2 py-3 bg-white'>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
          <button
            type='button'
            aria-label='gotoHero'
            className='w-4 h-4 p-2 transition-all bg-black border-2 border-black rounded-full hover:scale-150'
            onClick={gotoHero}
          />
          <button
            type='button'
            aria-label='goto stack'
            className='w-4 h-4 p-2 transition-all bg-white border-2 border-black rounded-full hover:scale-150'
            onClick={gotoStack}
          />
          <button
            type='button'
            aria-label='goto ikea clone project'
            className='w-4 h-4 p-2 transition-all bg-white border-2 border-black rounded-full hover:scale-150'
            onClick={gotoIkea}
          />
          <button
            type='button'
            aria-label='goto epic clone project'
            className='w-4 h-4 p-2 transition-all bg-white border-2 border-black rounded-full hover:scale-150'
            onClick={gotoEpic}
          />
          <button
            type='button'
            aria-label='goto zillow clone project'
            className='w-4 h-4 p-2 transition-all bg-white border-2 border-black rounded-full hover:scale-150'
            onClick={gotoZillow}
          />
        </div>
      </div>

      <main>
        <Container>
          <div ref={heroRef}>
            <Hero
              scrollToElegantUi={gotoElegantUi}
              scrollToRobustArch={gotoRobustArch}
            />
          </div>

          <BannerPoints
            title='Elegant UI'
            description='Recipe for elegant UI.'
            ref={elegantUiRef}
          >
            <Point title='Design system'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
              in quo consectetur, sit at, maiores minus nam impedit nesciunt
              magni quaerat, sed asperiores!
            </Point>
            <Point title='Isolated component development & testing'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
              in quo consectetur, sit at, maiores minus nam impedit nesciunt
              magni quaerat, sed asperiores!
            </Point>
            <Point title='Composition'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
              in quo consectetur, sit at, maiores minus nam impedit nesciunt
              magni quaerat, sed asperiores!
            </Point>
            <Point title='Atomic design'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
              in quo consectetur, sit at, maiores minus nam impedit nesciunt
              magni quaerat, sed asperiores!
            </Point>
            <Point title='Styling abstraction using components'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
              in quo consectetur, sit at, maiores minus nam impedit nesciunt
              magni quaerat, sed asperiores!
            </Point>
            <Point title='UX foundations'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
              in quo consectetur, sit at, maiores minus nam impedit nesciunt
              magni quaerat, sed asperiores!
            </Point>
          </BannerPoints>
          <BannerPoints
            title='Robust architecture'
            description='Recipe for robust architecture.'
            ref={robustArchRef}
          >
            <Point title='Functional programming'>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
                in quo consectetur, sit at,
              </p>
              <p>
                Aiores minus nam impedit nesciunt magni quaerat, sed asperiores!
              </p>
            </Point>
            <Point title='Redux'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
              in quo consectetur, sit at, maiores minus nam impedit nesciunt
              magni quaerat, sed asperiores!
            </Point>
            <Point title='Observables'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
              in quo consectetur, sit at, maiores minus nam impedit nesciunt
              magni quaerat, sed asperiores!
            </Point>
            <Point title='Typescript'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
              in quo consectetur, sit at, maiores minus nam impedit nesciunt
              magni quaerat, sed asperiores!
            </Point>
            <Point title='Tests that mimic the user'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
              in quo consectetur, sit at, maiores minus nam impedit nesciunt
              magni quaerat, sed asperiores!
            </Point>
            <Point title='Visual Regression'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
              in quo consectetur, sit at, maiores minus nam impedit nesciunt
              magni quaerat, sed asperiores!
            </Point>
            <Point title='Caching'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
              in quo consectetur, sit at, maiores minus nam impedit nesciunt
              magni quaerat, sed asperiores!
            </Point>
            <Point title='Git hooks & CI/CD'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
              in quo consectetur, sit at, maiores minus nam impedit nesciunt
              magni quaerat, sed asperiores!
            </Point>
          </BannerPoints>

          <div className='group' ref={stackRef}>
            <div className='tracking-widest uppercase transition-all translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 text-primary'>
              Basic Skills
            </div>
            <div className='flex justify-end'>
              <SlideIndicator direction='left' />
            </div>
            <div className='h-full overflow-x-scroll thin-scrollbar'>
              <div
                className='gap-4 space-y-4 h-screen80'
                style={{ columnWidth: '24rem' }}
              >
                <SkillCard title='Core' type='title'>
                  <p>
                    I am fond of functional javascript. I believe that if the
                    application is made with pure functions it become super easy
                    to work with and evolve.
                  </p>
                </SkillCard>
                <SkillCard title='Javascript' experience={4}>
                  <p>
                    I am fond of functional javascript. I believe that if the
                    application is made with pure functions it become super easy
                    to work with and evolve.
                  </p>

                  <div>
                    <Link
                      href='https://javascript.plainenglish.io/javascript-currying-practical-example-512cf1099e81'
                      className='w-4 h-4 bg-black rounded-full'
                    >
                      {'a '}
                    </Link>
                  </div>
                </SkillCard>

                <SkillCard title='CSS' experience={4}>
                  <p>
                    I am a big fan of utility first CSS. With tailwind, I can
                    develop UI at the speed of writing.
                  </p>

                  <div>
                    <Link
                      href='https://javascript.plainenglish.io/javascript-currying-practical-example-512cf1099e81'
                      className='w-4 h-4 bg-black rounded-full'
                    >
                      {'a '}
                    </Link>
                  </div>
                </SkillCard>
                <SkillCard title='HTML' experience={4}>
                  <p>
                    I am fond of functional javascript. I believe that if the
                    application is made with pure functions it become super easy
                    to work with and evolve.
                  </p>

                  <div>
                    <Link
                      href='https://javascript.plainenglish.io/javascript-currying-practical-example-512cf1099e81'
                      className='w-4 h-4 bg-black rounded-full'
                    >
                      {'a '}
                    </Link>
                  </div>
                </SkillCard>
                <SkillCard title='React' experience={3.5}>
                  <p>
                    I started web development with react in 2018. So my brain
                    works in a data-driven way by default.
                  </p>
                  <p>
                    My favorite thing about react is composability. A lot of
                    components I create are composable like mixing and matching
                    the lego pieces.
                  </p>
                </SkillCard>

                <SkillCard title='Architecture' type='title'>
                  <p>
                    I started web development with react. So my brain works in a
                    data-driven way by default.
                  </p>
                </SkillCard>
                <SkillCard title='Redux' experience={3.5}>
                  <p>
                    I started web development with react. So my brain works in a
                    data-driven way by default.
                  </p>
                </SkillCard>
                <SkillCard title='RxJS' experience={0.5}>
                  <p>
                    I started web development with react. So my brain works in a
                    data-driven way by default.
                  </p>
                </SkillCard>
                <SkillCard title='Immer' experience={0.5}>
                  <p>
                    I started web development with react. So my brain works in a
                    data-driven way by default.
                  </p>
                </SkillCard>

                <SkillCard title='Design System' experience={2}>
                  <p>
                    Anything that comprises an application should look like they
                    belong together. I have an eye to immediately detect
                    inconsistent UI.
                  </p>
                </SkillCard>

                <SkillCard title='UI' type='title' experience={4}>
                  <p>
                    I have worked with companies that do not have a dedicated UX
                    designer.
                  </p>
                  <p>
                    Following the basic rules of UX, I can design (and develop)
                    consistent looking UI that provide smoother user experience.
                  </p>
                </SkillCard>

                <SkillCard title='Tailwind' experience={1.5}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
                  numquam quaerat fugiat!
                </SkillCard>

                <SkillCard title='Storybook' experience={2}>
                  <p>
                    Storybook drastically changed the way I think about UI. It
                  </p>
                </SkillCard>
                <SkillCard title='Chromatic' experience={1.5}>
                  <p>
                    Storybook drastically changed the way I think about UI. It
                  </p>
                </SkillCard>

                <SkillCard title='React hook form' experience={0.5}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
                  numquam quaerat fugiat!
                </SkillCard>

                <SkillCard title='Typescript' experience={3}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
                  numquam quaerat fugiat!
                </SkillCard>
                <SkillCard title='Eslint' experience={3}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
                  numquam quaerat fugiat!
                </SkillCard>
                <SkillCard title='Prettier' experience={3}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
                  numquam quaerat fugiat!
                </SkillCard>

                <SkillCard title='Husky' experience={1}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
                  numquam quaerat fugiat!
                </SkillCard>
                <SkillCard title='Lint staged' experience={1}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
                  numquam quaerat fugiat!
                </SkillCard>

                <SkillCard title='Cypress' experience={1.5}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
                  numquam quaerat fugiat!
                </SkillCard>
                <SkillCard title='MSW' experience={1}>
                  <p>
                    I started web development with react. So my brain works in a
                    data-driven way by default.
                  </p>
                </SkillCard>
                <SkillCard title='D3' experience={1}>
                  <p>
                    I started web development with react. So my brain works in a
                    data-driven way by default.
                  </p>
                </SkillCard>
              </div>
            </div>
          </div>

          <div className='my-24' />

          <ProductCard
            ref={ikeaRef}
            title='IKEA clone'
            src='https://res.cloudinary.com/thankyou/image/upload/v1649069402/iamkarthick/ikea-home_uvdzib.png'
          >
            <div className='flex flex-wrap gap-3' ref={ikeaRef}>
              <TechBadge text='React' />
              <TechBadge text='Redux' />
              <TechBadge text='Cypress' />
              <TechBadge text='React' />
              <TechBadge text='Redux' />
              <TechBadge text='Cypress' />
              <TechBadge text='React' />
              <TechBadge text='Redux' />
              <TechBadge text='Cypress' />
            </div>
          </ProductCard>
          <ProductCard
            ref={epicRef}
            title='Epic games clone'
            src='https://res.cloudinary.com/thankyou/image/upload/v1649069746/iamkarthick/Screenshot_2022-04-04_at_4.25.27_PM_w1vwxm.png'
          >
            <div className='grid grid-cols-3'>
              <TechBadge text='React' />
              <TechBadge text='Redux' />
              <TechBadge text='Cypress' />
            </div>
          </ProductCard>

          <ProductCard
            title='Zillow clone'
            src='https://res.cloudinary.com/thankyou/image/upload/v1649069803/iamkarthick/Screenshot_2022-04-04_at_4.26.30_PM_hsuutr.png'
          >
            <div className='grid grid-cols-3'>
              <TechBadge text='React' />
              <TechBadge text='Redux' />
              <TechBadge text='Cypress' />
            </div>
          </ProductCard>
          <BannerPoints title='Special skills' description='About myself'>
            <BulletPoint description='I can create UI at the speed of writing.' />
            <BulletPoint description='Learning more makes learning easier. I am interesting in taking any challenging tasks involving fields. I am interested in data science and ML.' />
            <BulletPoint description='I can squeeze in last bit of performance.' />
            <BulletPoint description='I am interested in web scraping.' />
          </BannerPoints>
          <BannerPoints height='min-h-50vh' title='Voice'>
            <Motto />
          </BannerPoints>
          <CoverLetter />
        </Container>
      </main>

      <footer className='py-12 mt-12 bg-primary-50'>
        <Container>Portfolio</Container>
      </footer>
    </div>
  )
}

export default Home
