import Image from 'src/components/atoms/Image'
import { useStore } from 'src/pages/_app'

export const Motto = () => {
  const setHoverTargetType = useStore((state) => state.setHoverTargetType)
  return (
    <div>
      <div className='max-w-lg text-3xl font-black underline-offset-2'>
        All <u>education must be</u> digitized and distributed for{' '}
        <em className='text-primary'>
          <u>free</u>
        </em>
        .
      </div>
      <div className='mt-4 overflow-x-scroll overscroll-x-none thin-scrollbar '>
        <div
          className='gap-8 pb-12 space-y-4 text-lg text-justify h-screen60'
          style={{ columnWidth: '16rem' }}
        >
          <Image
            alt='Happy children'
            className='w-full h-36'
            onMouseEnter={() => setHoverTargetType('IMAGE')}
            onMouseLeave={() => setHoverTargetType('DEFAULT')}
            src='https://res.cloudinary.com/thankyou/image/upload/v1649821855/kids_ji04az.avif'
          />
          <p className='first-letter:text-4xl'>
            If food can be digitally created and distributed online, Can we
            solve world hunger? Absolutely. <strong>But will we?</strong>
          </p>
          <p>
            Because we did not do that with education. Once created education
            can be distributed almost free of cost. Still, there are paywalls
            and entrance exams everywhere.
          </p>
          <p>
            The pandemic has introduced our children to a culture of online
            classes that do not make sense to me. Through a digital medium, a
            teacher does not have to perform it live to the students. He/She can
            prerecord and play it with students and be available for their
            doubts. But, does it have to come from the same teacher? The school
            management can carefully record the topics once and reuse them for
            years to come.
          </p>{' '}
          <p>
            But, does it have to come from the same teacher? The school
            management can carefully record the topics <strong>once</strong> and
            reuse them for years to come.
          </p>{' '}
          <p>
            Also, does every school need to record their classes? Should the
            quality of education change based on what money the students pay?
          </p>{' '}
          <p>
            People are losing their minds about getting into prestigious
            universities. If those professors are the best educators, they
            should be given the responsibility to create educational content for
            the nation for regional languages and the whole world in English.
          </p>{' '}
          <p>
            Why can’t the nation create courses of mathematics at a budget of
            100 crore rupees for all age groups, with different languages, with
            clear animations and explanations from the top minds of the nation,
            and mandate that material for all schools{' '}
            <strong className='italic text-primary'>uniformly?</strong>
          </p>{' '}
          <p>
            India has a huge youth resource. They all deserve IIT-level
            education for free. Protecting education behind the walls only for
            the selected few or hiding digital educational content only for the
            subscribers should become immoral.
          </p>{' '}
          <div className='text-xl font-bold '>Rethinking education</div>
          <p>
            We can question the existing style of prepackaged degrees. The
            government can design like 500 certifications (like the 12 AWS
            certifications) categorized by age level for every subject along
            with their world-class study material.
          </p>{' '}
          <p>
            The students can be asked to pick them at any combination. For
            instance, a student might pick certifications that focus on{' '}
            <span className='text-xs inline rounded border px-1 py-0.5'>
              Marketing
            </span>{' '}
            +{' '}
            <span className='text-xs inline rounded border px-1 py-0.5'>
              Biology
            </span>{' '}
            +{' '}
            <span className='text-xs inline rounded border px-1 py-0.5'>
              Computer Science
            </span>{' '}
            +{' '}
            <span className='text-xs inline rounded border px-1 py-0.5'>
              Literature
            </span>{' '}
            and can become something amazing.
          </p>{' '}
          <p>
            The 9–4 routine nature of educational institutions is tiresome too.
            When will the students have their time and explore?
          </p>{' '}
          <p>
            We need extensive laboratories for everyone to enroll in, a highly
            validated exam procedure, and exam halls to conduct them.{' '}
            <em>
              Study whatever and whenever you want. Book a slot, take those
              exams and pass.
            </em>
          </p>{' '}
          <div className='text-xl font-bold '>What is stopping us now?</div>
          <p>
            There used to be a time when the seats in prestigious institutes
            were limited. A physical classroom can only hold a certain number of
            people. And we had to stop the poor, the unfortunates, and whoever
            chose to live a little and hence failed the entrance exams from
            getting a quality education.
          </p>{' '}
          <p>The Internet has broken all those barriers.</p>
          <p>
            But still, our children are stuck behind the invisible barriers that
            the adults chose to keep.
          </p>
          <p>
            Using technology, We have to work towards removing those barriers
            and make knowledge accessible to everyone.
          </p>
        </div>
      </div>
    </div>
  )
}
