import React, {useEffect} from 'react'
import { useRouter } from 'next/router'

const Index = () => {

  useEffect(() => {
    router.push(`/subject/space_2/lesson/lbdhXTAbh81xU1x5iwY0`)
  }, [])
  

    const router = useRouter()
    const {subject} = router.query
  return (
    <span>
        PAGE NOT FOUND.... REDIRECTIN TO LESSON PAGE
    </span>
  )
}

export default Index