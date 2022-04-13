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
            Imagine a person having a magic rice bowl that can produce an
            endless amount of food.
          </p>
          <p>Not just that.</p>
          <p>
            That person can send that bowl of rice to wherever and whomever they
            want all over the world instantly.
          </p>
          <p>
            That person worked hard to achieve that and now they have it, The
            magic bowl.
          </p>
          <p>
            Can they instantly solve world hunger?<strong>Absolutely</strong>.
          </p>
          <p>
            Instead, if they choose to make a fortune out of it selling each
            instance of the freely spawned bowl of rice to only the ones that
            can afford it is not fair.
          </p>
          <p>
            The pandemic created a culture of online classes that do not make
            sense to me. Through a digital medium, a teacher does not have to
            perform it live to the students. He/She can prerecord and play it
            with students and be available for their doubts.
          </p>{' '}
          <p>
            But, does it have to come from the same teacher? The school
            management can carefully record the topics <strong>once</strong> and
            reuse them for years to come. How much of the calculus has changed
            in the past 5 or 10 years?
          </p>{' '}
          <p>
            Also, does every school need to record their classes? Should the
            quality of education change based on what money the students pay?
          </p>{' '}
          <p>
            People are losing their minds to getting into prestigious
            universities in the world. If IIT professors are the best educators
            in India, they should be given the responsibility to create
            educational content for the nation.
          </p>{' '}
          <p>
            Why can’t the nation create courses of mathematics at a budget of
            100 crore rupees for all age groups, with different languages, with
            clear animations and explanations from the top minds of the nation,
            and mandate that material for all schools <strong>uniformly</strong>
            ?
          </p>{' '}
          <p>
            India has a huge youth resource. They all deserve IIT-level
            education for free. Why? Because digital distribution is almost free
            and becoming cheaper. Protecting education behind the walls only for
            the selected few or hiding digital educational content only for the
            subscribers is selfish.
          </p>{' '}
          <p>
            The prepackaged degrees do not make sense too. The government can
            design like 500 certifications (like the 12 AWS certifications)
            categorized by age level for every subject along with their
            world-class study material.
          </p>{' '}
          <p>
            The students must be asked to pick them at any combination. For
            instance, a student might pick certifications that focus on
            Marketing + Biology + Computer Science + Literature and can become
            something amazing.
          </p>{' '}
          <p>
            The 9–4 routine nature of educational institutions is tiresome too.
            When will the students have their time and explore?
          </p>{' '}
          <p>
            Every day millions of teachers repeating the same subject throughout
            the nation is completely pointless. It is like using a pigeon for
            communication instead of using a mobile phone.
          </p>{' '}
          <p>So, we don&apos;t need schools?</p>
          <p>
            We need extensive laboratories for everyone to enroll, a highly
            validated exam procedure and exam halls to conduct them.{' '}
            <em>
              Study whatever and whenever you want. Book a slot and take those
              exams and pass.
            </em>
          </p>{' '}
          <p>
            It used to be a time where the seats in prestigious institutes were
            limited. A classroom can only hold a certain number of people. And
            we had to discriminate against the poor, the unfortunates, and
            whoever failed the entrance exams.
          </p>{' '}
          <p>What is stopping us now?</p>
          <p>Why are there still entrance exams and limited admissions?</p>
          <p>Let the whole nation learn the same material.</p>
          <p>
            Let the whole nation take the exams and prove their abilities.
          </p>{' '}
          <p>
            In this internet era, Everyone deserves world-class education for
            free. Because, it is possible!
          </p>
        </div>
      </div>
    </div>
  )
}
