

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

const Dashboard = () => {
  return (
      <Card>
        <CardHeader>
        <CardTitle className="text-red-600"> <img src="./protarck-logopng-upscaled.png" alt="Protarck logo" style={{ width: "3rem", height: "3rem" }} />
            Protarck</CardTitle>
        <CardDescription className="text-green-600">Next Gen Project Monitoring!</CardDescription>
        </CardHeader>
      <CardContent className="text-blue-600">
          <p>A powerful and versatile project management tool that helps you get things done.</p>
        </CardContent>
        <CardFooter>
        <Button className='bg-yellow-600'> <a href="https://ceyinfo.com" className="btn btn-primary">Try Protarck for free</a></Button>  
        </CardFooter>
      </Card>
 
  )
}

export default Dashboard