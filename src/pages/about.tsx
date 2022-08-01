import { Box } from '@chakra-ui/react'
import * as React from 'react'
import { MainLayout } from '../layouts/MainLayout'

// markup
function AboutPage() {
  return (
    <MainLayout>
      <p className="Text-sm-black">
        Hi! I'm Eric, and as a software engineer, I've always been interested in
        creating software that helps others do their work with less friction.
        Whether that's building product platforms or data infrastructure, I've
        done my job when users can barely tell that I'm there, but miss me the
        most when I'm not.
      </p>
      <p>
        Throughout the years, I've also stumbled into several experiences in
        education and mentorship. I try to honor and continue this tradition
        whenever possible. I've taught many software skills workshops and
        maintain some very rewarding relationships with mentees have found me
        through the years. If your hackathon/meetup needs a workshop or if you
        see something in my background that could be useful to you, please send
        me a note!
      </p>
    </MainLayout>
  )
}

export default AboutPage
