import CompanionCards from '@/components/CompanionCards'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import { recentSessions } from '@/constants'
import React from 'react'

const Page = () => {
      return(
        <main>
          <h1 className="text-2xl underline">Popular Companions</h1>

          <section className="home-section">
            <CompanionCards 
              id="1"
              name="Neura the Brainy Explorer"
              topic="Neural Network of the Brain"
              subject="Science"
              duration={45} 
              color="#ffda6e"
            />
            <CompanionCards 
              id="2"
              name="Countsy the Math Wizard"
              topic="Derivatives & Integrals"
              subject="Math"
              duration={30} 
              color="#e5d0ff"
            />
            <CompanionCards 
              id="3"
              name="Verba the Vacubulary Virtuoso"
              topic="Word Formation & Usage"
              subject="English"
              duration={30} 
              color="#BDE7FF"
            />
          </section>

          <section className="home-section">
            <CompanionsList 
              title="Recentle Completed Sessions"
              companions={recentSessions}
              classNames="w-2/3 max-lg:w-full"
            />
            <CTA />
          </section>
        </main>
      )
}

export default Page