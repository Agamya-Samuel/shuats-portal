'use client'

import Link from "next/link"
import {  Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react'
import Image from "next/image"

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Main Content */}
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Contact Us</h1>
          
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-purple-500 mr-3" />
                <span>contact@eduportal.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-purple-500 mr-3" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-purple-500 mr-3" />
                <span>123 Education St, Learning City, ED 12345</span>
              </div>
            </div>

            {/* Developer Information */}
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Meet the Developer</h3>
              <div className="flex items-center">
                <div className="flex-1">
                  <h4 className="text-lg font-medium">John Doe</h4>
                  <p className="text-gray-400 mb-2">Full Stack Developer</p>
                  <p className="text-sm text-gray-300 mb-4">
                    John is a passionate developer with 5+ years of experience in educational technology. 
                    He&apos;s committed to creating intuitive and accessible learning platforms.
                  </p>
                  <div className="flex space-x-4">
                    <Link href="#" className="text-purple-500 hover:text-purple-400">
                      <Github className="h-5 w-5" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/agamyasamuel/" className="text-purple-500 hover:text-purple-400">
                      <Linkedin className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
                <div className="ml-6">
                  <Image 
                    src="/placeholder.svg"
                    alt="John Doe" 
                    width={128}
                    height={128}
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}