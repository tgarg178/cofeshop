// 'use client'

// import { useEffect } from 'react'

// export default function BootstrapClient() {
//   useEffect(() => {
//     require('bootstrap/dist/js/bootstrap.bundle.min.js')
//   }, [])

//   return null
// }
'use client'

import { useEffect } from 'react'

export default function BootstrapClient() {
  useEffect(() => {
    import('bootstrap') // loads bootstrap with Popper
  }, [])

  return null
}
