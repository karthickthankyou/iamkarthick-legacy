import { useCallback, useMemo, useEffect, useState } from 'react'
import XIcon from '@heroicons/react/outline/XIcon'
import TripleText from '../TripleText'
import { RadioGroup } from '@headlessui/react'
import Dialog from 'src/components/molecules/Dialog/Dialog'

const targetWords = [
  'Lorem',
  'ipsum',
  'sit',
  'dolor',
  'elit.',
  'amet,',
  'Explicabo',
  'consectetur',
  'laboriosam',
  'voluptatum.',
  'adipisicing',
]

const FunText = () => {
  const [open, setopen] = useState(false)
  const [text, settext] = useState('')
  const [target, settarget] = useState('hello world')
  const [duration, setduration] = useState(1000)
  const [disturbance, setdisturbance] = useState('o')
  const [matchedIndex, setindex] = useState<number | null>(null)

  const reset = useCallback(() => {
    settext('')
    setindex(null)
  }, [settext, setindex])

  useEffect(() => {
    const interval = setInterval(() => {
      settext((a) => `${a}${disturbance}`)
    }, duration)

    if (matchedIndex) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [disturbance, matchedIndex, settext, duration])

  if (text.length > 200) {
    reset()
  }

  const found = text.toLowerCase().indexOf(target)

  if (!matchedIndex && found > -1) {
    console.log('Wow!', found)
    setindex(found)
  }

  return (
    <div className='min-h-screen'>
      <Dialog open={open} setOpen={setopen}>
        <div className='mt-2 mb-4 space-y-3'>
          <div className='mb-6 text-xl font-bold'>Configure</div>
          <label className='flex flex-col items-start gap-2'>
            <div className='font-semibold'>Target word</div>
            <input
              type='text'
              value={target}
              placeholder='Type something...'
              className='inline px-1 py-2 bg-transparent border-2 shadow-none border-primary whitespace-nowrap min-w-fit'
              onChange={(e) => settarget(e.target.value)}
            />{' '}
          </label>
          <label className='flex flex-col items-start gap-2'>
            <div className='font-semibold'>Repeating character(s)</div>
            <input
              type='text'
              value={disturbance}
              placeholder='Type something...'
              className='inline px-1 py-2 bg-transparent border-2 shadow-none border-primary whitespace-nowrap min-w-fit'
              onChange={(e) => setdisturbance(e.target.value)}
            />{' '}
          </label>
          <RadioGroup value={duration} onChange={setduration}>
            <RadioGroup.Label className='font-semibold'>
              Duration
            </RadioGroup.Label>
            <div className='flex gap-2 mt-2'>
              <RadioGroup.Option value={500}>
                {({ checked }) => (
                  <span
                    className={`${
                      checked && 'bg-primary text-white'
                    } p-2 rounded border border-white shadow`}
                  >
                    500
                  </span>
                )}
              </RadioGroup.Option>
              <RadioGroup.Option value={1000}>
                {({ checked }) => (
                  <span
                    className={`${
                      checked && 'bg-primary text-white'
                    } p-2 rounded border border-white shadow`}
                  >
                    1000
                  </span>
                )}
              </RadioGroup.Option>
              <RadioGroup.Option value={1500}>
                {({ checked }) => (
                  <span
                    className={`${
                      checked && 'bg-primary text-white'
                    } p-2 rounded border border-white shadow`}
                  >
                    1500
                  </span>
                )}
              </RadioGroup.Option>
              <RadioGroup.Option value={2000}>
                {({ checked }) => (
                  <span
                    className={`${
                      checked && 'bg-primary text-white'
                    } p-2 rounded border border-white shadow`}
                  >
                    2000
                  </span>
                )}
              </RadioGroup.Option>
            </div>
          </RadioGroup>
        </div>
      </Dialog>

      <div className='text-3xl font-bold text-primary '>
        Hello world challenge!{' '}
      </div>
      <div className='max-w-md mt-4 text-2xl font-light'>
        Can you type <span className='font-bold'>{target}</span> when the
        character{disturbance.length > 1 && 's'}{' '}
        <span className='font-bold'>{disturbance}</span> keeps repeating every{' '}
        <span className='font-bold'>{duration}</span> ms?
      </div>
      {matchedIndex && (
        <div className='mt-6 text-2xl animate-bounce'>Yay. You won! 🎉</div>
      )}
      <div className='flex gap-4 mt-4'>
        <button
          type='button'
          onClick={() => setopen(true)}
          className='underline underline-offset-2'
        >
          Configure
        </button>
        <button
          className='underline underline-offset-2'
          type='button'
          onClick={reset}
        >
          {matchedIndex ? 'Replay' : 'Reset'}
        </button>
      </div>

      <div className='flex gap-2 mt-12'>
        <input
          type='text'
          value={text}
          placeholder='Type something...'
          className='max-w-md px-2 py-4 text-3xl border-2 shadow-xl font-extralight shadow-black/20 border-primary'
          onChange={(e) => settext(e.target.value)}
        />
      </div>
      {text && (
        <div className='flex flex-wrap px-4 pt-2 pb-12 my-4'>
          {text.split('').map((item, index) => {
            const bg =
              matchedIndex &&
              index >= matchedIndex &&
              index <= matchedIndex + target.length - 1
            return (
              <TripleText
                // eslint-disable-next-line react/no-array-index-key
                key={`${item} ${index}`}
                className={`${
                  bg && 'animate-bounce underline underline-offset-4'
                }`}
                text={item}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}

export default FunText
