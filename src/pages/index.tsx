import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'src/store'
import { selectCount } from 'src/store/counter'
import { setCounterState } from 'src/store/counter/counterSlice'
import { NextSeo } from 'next-seo'
import Hero from 'src/components/organisms/Hero'
import SkillCard from 'src/components/organisms/SkillCard'
import Container from 'src/components/atoms/Container/Container'

import { useScrollTo } from 'src/hooks'
import BannerPoints from 'src/components/organisms/BannerPoints'
import { Point } from 'src/components/organisms/BannerPoints/BannerPoints'
import SlideIndicator from 'src/components/molecules/SlideIndicator'
import { Motto } from 'src/components/content'
import ExternalLink from 'src/components/atoms/ExternalLink/ExternalLink'
import PortfolioProjectSection, {
  ProjectVideo,
  ProjectText,
} from 'src/components/organisms/PortfolioProjectSection/PortfolioProjectSection'
import FunText from 'src/components/organisms/FunText/FunText'
import PuzzleIcon from '@heroicons/react/outline/PuzzleIcon'
import { useStore } from './_app'

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
  const [gameRef, gotoGame] = useScrollTo()
  const [voiceRef, gotoVoice] = useScrollTo()
  const [elegantUiRef, gotoElegantUi] = useScrollTo()
  const [robustArchRef, gotoRobustArch] = useScrollTo()

  useEffect(() => {
    dispatch(setCounterState(data))
  }, [data, dispatch])
  const setHoverTargetType = useStore((state) => state.setHoverTargetType)
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

      <div className='fixed right-0 z-30 -translate-y-1/2 border-2 border-white bg-white/20 hover:bg-white/80 top-1/2 group '>
        <div className='flex flex-col gap-3 px-2 py-3 transition-opacity bg-white opacity-0 group-hover:opacity-100'>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
          <button
            type='button'
            aria-label='gotoHero'
            className='w-2 h-2 p-2 transition-all bg-black border-2 border-black rounded-full hover:scale-150'
            onClick={gotoHero}
          />
          <button
            type='button'
            aria-label='goto stack'
            className='w-2 h-2 p-2 transition-all bg-white border-2 border-black rounded-full hover:scale-150'
            onClick={gotoStack}
          />
          <button
            type='button'
            aria-label='goto ikea clone project'
            className='w-2 h-2 p-2 transition-all bg-white border-2 border-black rounded-full hover:scale-150'
            onClick={gotoIkea}
          />
          <button
            type='button'
            aria-label='goto epic clone project'
            className='w-2 h-2 p-2 transition-all bg-white border-2 border-black rounded-full hover:scale-150'
            onClick={gotoZillow}
          />
          <button
            type='button'
            aria-label='goto zillow clone project'
            className='w-2 h-2 p-2 transition-all bg-white border-2 border-black rounded-full hover:scale-150'
            onClick={gotoEpic}
          />
          <button
            type='button'
            aria-label='goto voice'
            className='w-2 h-2 p-2 transition-all bg-white border-2 border-black rounded-full hover:scale-150'
            onClick={gotoVoice}
          />
        </div>
      </div>

      <main>
        <Container>
          <div className='fixed bottom-0 right-0 p-2 '>
            <button type='button' onClick={gotoGame}>
              <PuzzleIcon className='w-6 h-6 text-black animate-pulse fill-primary' />
            </button>
          </div>
          <div ref={heroRef} className='z-40 -mt-16'>
            <Hero
              scrollToElegantUi={gotoElegantUi}
              scrollToRobustArch={gotoRobustArch}
              scrollToGame={gotoGame}
            />
          </div>

          <BannerPoints
            title='Robust architecture'
            description='Recipe for robust architecture.'
            ref={robustArchRef}
          >
            <div className='mt-4 overflow-x-scroll overscroll-x-none thin-scrollbar first-letter:text-4xl'>
              <div
                className='gap-8 pb-12 space-y-4 text-lg h-screen60'
                style={{ columnWidth: '16rem', columnFill: 'auto' }}
              >
                <Point title='Functional programming'>
                  <p>
                    Debugging takes the most time out of the software
                    engineers&apos; life.
                  </p>
                  <p>
                    The biggest culprit of software debugging is figuring out
                    the <strong>expected mutations.</strong>
                  </p>
                  <p>
                    The concepts of pure functions and immutability by keeping
                    the side-effect code separately make debugging a breeze.
                  </p>
                  <p>An easily debuggable software is a healthy software.</p>
                  <ExternalLink href='https://javascript.plainenglish.io/pure-functions-why-c925c55347b8'>
                    Pure functions. Why?
                  </ExternalLink>
                  <ExternalLink href='https://javascript.plainenglish.io/understanding-immutability-d00ed097e020'>
                    Lets understand immutability.
                  </ExternalLink>
                  <ExternalLink href='https://javascript.plainenglish.io/fix-a-pain-point-like-immerjs-e4a4e4a63441'>
                    Fix it like immer.
                  </ExternalLink>
                </Point>
                <Point title='Redux'>
                  <p>Is redux dead?</p>
                  <p>
                    Redux is a architectural pattern than a library and hence
                    can not be replaced with other global state management
                    libraries and network clients.
                  </p>

                  <p>
                    The unidirectional control flow reduces complexity in
                    enterprise sized application. Even if the application grows
                    to hundreds of pages and thousands of components, each unit
                    needs to think about <strong>what data I select?</strong>{' '}
                    and
                    <strong> what action I dispatch?</strong>
                  </p>
                  <ExternalLink href='https://karthickragavendran.medium.com/enterprise-application-architecture-with-redux-time-machine-attached-3da8c12b115a'>
                    Enterprise application architecture with redux
                  </ExternalLink>
                  <ExternalLink href='https://karthickragavendran.medium.com/redux-everything-under-the-ui-16043964c359'>
                    Redux everything under UI
                  </ExternalLink>
                  <ExternalLink href='https://javascript.plainenglish.io/how-to-quantify-the-complexity-of-a-react-application-with-redux-6f1a501e9454'>
                    How to Quantify the Complexity of a React App with Redux?
                  </ExternalLink>
                  <ExternalLink href='https://karthickragavendran.medium.com/advanced-redux-slices-with-reselect-async-thunk-68b0a459f723'>
                    Advanced Redux Slices with Reselect & Async thunk
                  </ExternalLink>
                  <ExternalLink href='https://karthickragavendran.medium.com/selectors-actions-hooks-architecture-with-redux-toolkit-a41ac1b36007'>
                    Selectors-Actions-Hooks architecture with Redux Toolkit
                  </ExternalLink>
                </Point>
                <Point title='Observables'>
                  <p>
                    The realm of asynchronous programming can get absolutely
                    chaotic as the nature and timeline of operations gets
                    complex. Observable streams provide a place for the
                    developers to calmly sit and notice the incoming events and
                    orchestrate them with clarity and precision.
                  </p>
                  <p>Observables are promises on steroids.</p>
                </Point>
                <Point title='Typescript'>
                  <p>A well-typed project enables reckless refactoring.</p>
                  <p>
                    Like a good automation tool, typescript language takes away
                    a lot of cognitive load from the developers&apos; minds.
                    Although it has a decent learning curve, the outcome makes
                    typescript a must-have.
                  </p>
                  <ExternalLink href='https://karthickragavendran.medium.com/typescript-why-866281eaebf8'>
                    Typescript. Why?
                  </ExternalLink>
                  <ExternalLink href='https://javascript.plainenglish.io/typescript-how-to-create-synchronized-derived-types-4bf2371a9eab'>
                    TypeScript: How to create Synchronized derived types?
                  </ExternalLink>
                  <ExternalLink href='https://karthickragavendran.medium.com/protect-react-codebase-with-eslint-prettier-typescript-lint-staged-and-husky-9dd549bdb1c'>
                    Protect react codebase with Eslint, Prettier, Typescript,
                    Lint-staged and husky.
                  </ExternalLink>
                </Point>
                <Point title='Tests that mimic the user'>
                  <p>Testing is a reinforcement loop.</p>
                  <p>
                    The test suites that only break when the application fails
                    are the good ones.
                  </p>
                  <p>
                    The test suite that breaks for everything including
                    application failures becomes tiresome and may result in
                    abandonment.
                  </p>
                </Point>
                <Point title='Visual Regression'>
                  <p>
                    Along with functional testing, visual regression testing
                    provides almost confidence.
                  </p>
                  <p>
                    Chromatic works in tandem with the storybook and catches UI
                    changes at a pixel level. It will be a great help for
                    confident pull requests.
                  </p>
                </Point>
                <Point title='A powerful network client'>
                  <p>
                    A powerful network client will serve the application with
                    the below functionalities too.
                  </p>
                  <ul>
                    <li>Caching</li>
                    <li>Normalized caching (GraphQL)</li>
                    <li>Manage stale data</li>
                    <li>Request deduplication and so on</li>
                  </ul>
                </Point>
                <Point title='Git hooks & CI/CD'>
                  Pre-commit validations enables us to do stress free YOLO
                  commits.
                </Point>
                <Point title='GraphQL'>
                  <p>
                    Graphql is definitely more representational than REST.
                    GraphQL is also self-documenting as it evolves.
                  </p>
                  <ExternalLink href='https://www.youtube.com/watch?v=iQrsckyou_8'>
                    GraphQL API With Express, MongoDB, and JWT
                  </ExternalLink>
                </Point>
                <Point title='Codegen'>
                  <p>
                    Most types we use in the application are derived from the
                    server state. Typescript is not fun if we need to create and
                    maintain the ever-changing types ourselves.
                  </p>
                  <p>
                    The ability to generate types and fetching hooks with a
                    simple command will save a huge amount of precious effort
                    from developers.
                  </p>
                  <ExternalLink href='https://karthickragavendran.medium.com/react-query-in-ssr-starring-graphql-codegen-54c0dc4b07b4'>
                    React Query in SSR starring Graphql-Codegen
                  </ExternalLink>
                </Point>
              </div>
            </div>
          </BannerPoints>

          <BannerPoints
            title='Elegant UI'
            description='Recipe for elegant UI.'
            ref={elegantUiRef}
          >
            <div className='mt-4 overflow-x-scroll overscroll-x-none thin-scrollbar first-letter:text-4xl'>
              <div
                className='gap-8 pb-12 space-y-4 text-lg h-screen60'
                style={{ columnWidth: '16rem', columnFill: 'auto' }}
              >
                <Point title='Design system'>
                  <div>
                    The design system reduces the decision fatigue that affects
                    the quality of the decisions and improves consistency and
                    developer experience.
                  </div>
                  <div className='mt-3 '>
                    <ExternalLink href='https://javascript.plainenglish.io/design-systems-why-aedbacf9d578'>
                      Why should you have a design system for your product?
                    </ExternalLink>
                    <ExternalLink href='https://karthickragavendran.medium.com/design-system-foundations-using-tailwind-abb1af1acabb'>
                      Design system foundations using tailwind.
                    </ExternalLink>
                    <ExternalLink href='https://karthickragavendran.medium.com/design-system-components-using-tailwind-42f2fdb3a56'>
                      Design system components using tailwind.
                    </ExternalLink>
                  </div>
                </Point>

                <Point title='Isolated component development & testing'>
                  <p>
                    React is data-driven and hence each frame/snapshot in the
                    application&apos;s runtime can be reproduced with the right
                    data.
                  </p>
                  <p>
                    Any component can go through a variety of states in an
                    application&apos;s runtime. Having a detailed catalog of all
                    components with all those possible states provides great
                    confidence.
                  </p>
                </Point>
                <Point title='Composition'>
                  <p>
                    Often flexibility and complexity grow together. When we want
                    a component to be adapted to numerous scenarios we may end
                    up making the component unwieldy.
                  </p>
                  <p>
                    The concept of children prop in react helps us drastically
                    reduce the complexity while increasing flexibility.
                  </p>
                </Point>
                <Point title='Atomic design'>
                  We discussed isolated component development with composition.
                  The methodology of atomic design helps us organize the
                  components hierarchically. That increases reusability and
                  consistency.
                </Point>
                <Point title='Styling abstraction using components'>
                  <p>
                    The priority scheme to determine the right style rule based
                    on a brilliant game of specificity quickly became a
                    nightmare as the applications grew larger. Huge applications
                    needed grandmasters of CSS to modify something.
                  </p>
                  <p>
                    CSS modules, Styled components, and utility first CSS
                    localizes the styles to the component level and hence allows
                    the UI developers to almost skip the game of specificity and
                    develop UI&apos;s instead.
                  </p>
                </Point>
                <Point title='UX foundations'>
                  Being aware and following the simple laws of UX allows us to
                  produce good UI quickly.
                </Point>
              </div>
            </div>
          </BannerPoints>

          <div className='py-4 group' ref={stackRef}>
            <div className='tracking-widest uppercase transition-all translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 text-primary'>
              Basic Skills
            </div>

            <div className='h-full overflow-x-scroll overscroll-x-none thin-scrollbar'>
              <div
                className='gap-4 space-y-4 h-screen80'
                style={{ columnWidth: '20rem' }}
              >
                <SkillCard title='Core' type='title' />
                <SkillCard title='Javascript' experience={4} />
                <SkillCard title='CSS' experience={4} />
                <SkillCard title='HTML' experience={4} />
                <SkillCard title='React' experience={3.5} />
                <SkillCard title='Next JS' experience={1} />

                <SkillCard title='Architecture' type='title' />
                <SkillCard title='Redux' experience={3.5} />
                <SkillCard title='Typescript' experience={3} />
                <SkillCard title='RxJS' experience={0.5} />
                <SkillCard title='Immer' experience={0.5} />
                <SkillCard title='React hook form' experience={1} />
                <SkillCard title='Yup' experience={1} />
                <SkillCard title='graphql-code-generator' experience={1} />

                <SkillCard title='UI' type='title' experience={4} />
                <SkillCard title='Storybook' experience={2} />
                <SkillCard title='Tailwind' experience={1.5} />
                <SkillCard title='Chromatic' experience={1.5} />
                <SkillCard title='Material UI' experience={3} />
                <SkillCard title='Headless UI' experience={1.5} />
                <SkillCard title='D3' experience={1} />
                <SkillCard title='Framer motion' experience={1} />
                <SkillCard title='React spring' experience={1} />

                <SkillCard title='Testing' type='title' experience={4} />
                <SkillCard title='React testing library' experience={1.5} />
                <SkillCard title='Jest' experience={2} />
                <SkillCard title='Cypress' experience={1.5} />
                <SkillCard title='Eslint' experience={3} />
                <SkillCard title='Prettier' experience={3} />
                <SkillCard title='Husky' experience={1} />
                <SkillCard title='Lint staged' experience={1} />
                <SkillCard title='MSW' experience={1} />

                <SkillCard title='Backend' type='title' />
                <SkillCard title='NodeJS' experience={4} />
                <SkillCard title='Express' experience={2} />
                <SkillCard title='GraphQL' experience={2} />
                <SkillCard title='Firebase' experience={3} />
                <SkillCard title='Hasura' experience={1.5} />

                <SkillCard title='Others' type='title' />
                <SkillCard title='Web scraping' experience={1} />
                <SkillCard title='Data science' experience={0.5} />
                <SkillCard title='Machine learning' experience={0.5} />

                <SkillCard title='Previously worked on' type='title' />
                <SkillCard title='Unity3D' experience={3} />
                <SkillCard title='C#' experience={3} />
                <SkillCard title='Android development' experience={2} />
                <SkillCard title='Java' experience={2} />
              </div>
            </div>
            <div className='flex justify-end'>
              <SlideIndicator direction='left' />
            </div>
          </div>

          <div className='my-24' />

          <div className='space-y-36'>
            <div className='py-1' ref={ikeaRef} />
            <PortfolioProjectSection>
              <ProjectVideo videoId='uqXiXxlZKis' />

              <ProjectText
                repository='https://github.com/karthickthankyou/ikea-clone'
                intro={
                  <>
                    <div>
                      This elegant clone of the IKEA store is simple and solid.
                    </div>
                    <div>
                      This project is backed with sound technologies and it lets
                      us move fast and healthy. I made the majority of this
                      application in a couple of{' '}
                      <a
                        target='_blank'
                        onMouseEnter={() => setHoverTargetType('LINK')}
                        onMouseLeave={() => setHoverTargetType('DEFAULT')}
                        className='underline'
                        href='https://github.com/karthickthankyou/ikea-clone/commits/main'
                        rel='noreferrer'
                      >
                        weeks
                      </a>
                      .{' '}
                    </div>
                  </>
                }
                title='IKEA Clone'
                links={[
                  {
                    text: 'ikea.iamkarthick.com',
                    url: 'https://ikea.iamkarthick.com',
                  },
                  {
                    text: 'story.ikea.iamkarthick.com',
                    url: 'https://story.ikea.iamkarthick.com',
                  },
                ]}
                techStack={[
                  'ReactJS',
                  'NextJS',
                  'Redux',
                  'RXJS',
                  'GraphQL',
                  'Postgres',
                  'URQL',
                  'GQL Codegen',
                  'Storybook',
                  'Chromatic',
                  'Material UI',
                  'Tailwind',
                  'Typescript',
                  'Eslint',
                  'Prettier',
                  'React hook form',
                  'Yup',
                  'Sentry',
                  'Firebase',
                  'Immer',
                  'React Spring',
                  'Testing library',
                  'Cypress',
                  'Husky',
                  'Lint staged',
                  'Commitlint',
                ]}
              />
            </PortfolioProjectSection>
            <div className='py-1' ref={zillowRef} />
            <PortfolioProjectSection>
              <ProjectText
                intro={
                  <>
                    <div>
                      This is a refactoring project. I tried to make the UI look
                      cleaner while keeping the feel of zillow. I encourage you
                      to compare the original zillow.com. feature-rich.
                    </div>
                    <div>
                      My favorite part of this project is the composability. For
                      instance the map component contains various layers for
                      Homes, Cities, States and for UI.
                    </div>
                  </>
                }
                right={false}
                title='Zillow Clone'
                repository='https://github.com/karthickthankyou/zillow-clone-safe'
                links={[
                  {
                    text: 'zillow.iamkarthick.com',
                    url: 'https://zillow.iamkarthick.com',
                  },
                  {
                    text: 'story.zillow.iamkarthick.com',
                    url: 'https://story.zillow.iamkarthick.com',
                  },
                ]}
                techStack={[
                  'ReactJS',
                  'NextJS',
                  'Redux',
                  'RXJS',
                  'GraphQL',
                  'Postgres',
                  'URQL',
                  'GQL Codegen',
                  'Storybook',
                  'Chromatic',
                  'Material UI',
                  'Tailwind',
                  'Reach UI',
                  'Typescript',
                  'Eslint',
                  'Prettier',
                  'React hook form',
                  'Yup',
                  'Sentry',
                  'Firebase',
                  'Immer',
                  'Mapbox',
                  'MSW',
                  'React Spring',
                  'Testing library',
                  'Cypress',
                  'Husky',
                  'Lint staged',
                  'Commitlint',
                ]}
              />

              <ProjectVideo videoId='lxXosGgMjl0' />
            </PortfolioProjectSection>
            <span ref={epicRef} />
            <PortfolioProjectSection>
              <ProjectVideo videoId='Yu39Iw937dI' />
              <ProjectText
                repository='https://github.com/karthickthankyou/epicgames-clone-develop'
                title='Epic Clone'
                intro={
                  <>
                    <div>
                      This ultra modern looking application is built with
                      firestore (IKEA and Zillow have GraphQL with gql-codegen
                      and they are much more scalable and robust).
                    </div>
                    <div>
                      This application has a cool recommender system checkout
                      the games pages and the corresponding similar items.
                    </div>
                  </>
                }
                links={[
                  {
                    text: 'epic.iamkarthick.com',
                    url: 'https://epic.iamkarthick.com',
                  },
                  {
                    text: 'story.epic.iamkarthick.com',
                    url: 'https://story.epic.iamkarthick.com',
                  },
                ]}
                techStack={[
                  'ReactJS',
                  'Redux',
                  'Chromatic',
                  'Storybook',
                  'Tailwind',
                  'Algolia',
                  'React hook form',
                  'Immer',
                  'headlessui',
                  'Firebase',
                  'React helmet',
                  'Typescript',
                  'Eslint',
                  'Prettier',
                  'Testing library',
                  'Cypress',
                  'Husky',
                  'Lint staged',
                  'Commitlint',
                ]}
              />
            </PortfolioProjectSection>
          </div>

          <div ref={voiceRef} />
          <BannerPoints height='min-h-50vh' title='Voice'>
            <Motto />
          </BannerPoints>

          <div className='py-2' id='helloworldchallenge' ref={gameRef} />
          <FunText />
        </Container>
      </main>
    </div>
  )
}

export default Home
