'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { Menu, X, ChevronDown, ChevronRight, Linkedin, Phone, Globe, Search } from 'lucide-react'




const menuItems = [

    {
      name: 'Solutions',
      href: '#',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/background-VQT8xNQyRGO5pfKXhTrHFpm3KnS74d.jpg',
      items: [
        'Aluminum Profiles',
        'Sliding Doors and Lifts',
        'Partition Systems',
        'Smoke Protection Doors',
        'Panoramic Systems',
        'ACP for Cladding',
        {
          name: 'Commercial UPS Systems',
          href: '#commercial-ups',
          items: [
            'Line Interactive for SMB and Server Rooms',
            'Modular for scalability',
            'Lithium battery Storage Solutions'
          ]
        }
      ],
    },
    {
      name: 'Project Services',
      href: '#',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/background-VQT8xNQyRGO5pfKXhTrHFpm3KnS74d.jpg',
      items: [
        'Supply Services',
        'B2B Sales',
        {
          name: 'Solutions Consulting',
          href: '#solutions-consulting',
          items: [
            'Power Capacity & load Requirements',
            'Energy Efficiency and Cost Optimization',
            'System Scalability and Future-Proofing',
            'Compliance with Standards and Regulations',
            'Backup System Design and Layout',
            'Energy Storage System',
            'Energy Efficiency and Insulation',
            'Structural Integrity and Performance',
            'Design Flexibility and Aesthetic Solutions',
            'Regulatory Compliance',
            'Acoustic and Soundproofing Requirements',
            'Environmental Sustainability and Material Selection',
            'Custom Engineering and Project-Specific Designs'
          ]
        }
      ],
    },
    { name: 'References', href: '#',image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/background-VQT8xNQyRGO5pfKXhTrHFpm3KnS74d.jpg', },
    {
      name: 'About us',
      href: '#',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/background-VQT8xNQyRGO5pfKXhTrHFpm3KnS74d.jpg',
      items: [
        'Partner with us',
        'Our Quality Commitment',
        'Downloads',
        'OEM Implementation Services',
        'Sliding Doors and Lifts'
      ],
    },
    { name: 'Downloads', href: '#' },
]

export default function LandingPage() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleDropdown = (name: string) => {
    setActiveDropdown(prev => prev === name ? null : name)
    setActiveSubmenu(null)
  }

  const toggleSubmenu = (e: React.MouseEvent, name: string) => {
    e.stopPropagation()
    setActiveSubmenu(prev => prev === name ? null : name)
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
        setActiveSubmenu(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-[#444546] text-white" style={{ fontFamily: "'Noto Sans Condensed', sans-serif" }}>
      <header className="border-b border-gray-800 relative z-40">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-EOXa2m7MUMDskuPlh9WW3pM9P6sHv4.png" 
              alt="Ajil Mutawara Logo" 
              width={150} 
              height={40} 
              onError={(e) => {
                e.currentTarget.src = "/placeholder.svg?height=40&width=150"
                e.currentTarget.alt = "Ajil Mutawara Logo (Placeholder)"
              }}
            />
          </div>
          <nav className="hidden lg:flex space-x-6" ref={dropdownRef}>
            {menuItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  className="flex items-center space-x-1 hover:text-yellow-400 transition-colors py-2"
                  onClick={() => toggleDropdown(item.name)}
                  aria-expanded={activeDropdown === item.name}
                  aria-haspopup="true"
                >
                  <span>{item.name}</span>
                  {item.items && <ChevronDown size={16} />}
                </button>
                {item.items && activeDropdown === item.name && (
                  <div className="absolute left-0 mt-2 w-screen max-w-7xl -ml-72 bg-[#121212] shadow-lg z-50">
                    <div className="flex p-6 border border-gray-800">
                      <div className="w-1/4 pr-6">
                        <Image src={item.image} alt={`${item.name} preview`} width={300} height={400} className="rounded-lg" />
                        <h3 className="mt-4 text-xl font-semibold">{item.name}</h3>
                      </div>
                      <div className="w-3/4 pl-6 border-l border-gray-800">
                        <h3 className="text-2xl font-semibold mb-4">{item.name}</h3>
                        <div className="grid grid-cols-2 gap-4 max-h-[400px] overflow-y-auto pr-4">
                          {item.items.map((subItem) => (
                            <div key={typeof subItem === 'string' ? subItem : subItem.name}>
                              {typeof subItem === 'string' ? (
                                <Link
                                  href="#"
                                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors py-2 border-b border-gray-800"
                                >
                                  <span>{subItem}</span>
                                  <ChevronRight size={16} />
                                </Link>
                              ) : (
                                <div>
                                  <button
                                    onClick={(e) => toggleSubmenu(e, subItem.name)}
                                    className="flex items-center justify-between w-full text-left font-semibold text-lg mb-2"
                                    aria-expanded={activeSubmenu === subItem.name}
                                    aria-haspopup="true"
                                  >
                                    <span>{subItem.name}</span>
                                    <ChevronDown size={16} />
                                  </button>
                                  {activeSubmenu === subItem.name && (
                                    <div className="pl-4">
                                      {subItem.items.map((nestedItem) => (
                                        <Link
                                          key={nestedItem}
                                          href={`${subItem.href}#${nestedItem.toLowerCase().replace(/\s+/g, '-')}`}
                                          className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors py-1"
                                        >
                                          <span>{nestedItem}</span>
                                          <ChevronRight size={14} />
                                        </Link>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="#" aria-label="LinkedIn">
              <Linkedin size={20} />
            </Link>
            <Link href="#" aria-label="Phone">
              <Phone size={20} />
            </Link>
            <Link href="#" aria-label="Language">
              <Globe size={20} />
            </Link>
            <Link href="#" aria-label="Search">
              <Search size={20} />
            </Link>
          </div>
          <button
            className="lg:hidden text-white"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {/* Mobile Menu */}
        <div className={`lg:hidden ${mobileMenuOpen ? 'block' : 'hidden'} bg-[#121212] absolute top-full left-0 right-0 z-50`}>
          <nav className="container mx-auto px-4 py-4">
            {menuItems.map((item) => (
              <div key={item.name} className="py-2">
                <button
                  className="flex items-center justify-between w-full text-left"
                  onClick={() => toggleDropdown(item.name)}
                  aria-expanded={activeDropdown === item.name}
                >
                  <span>{item.name}</span>
                  {item.items && <ChevronDown size={16} />}
                </button>
                {item.items && activeDropdown === item.name && (
                  <div className="mt-2 pl-4">
                    {item.items.map((subItem) => (
                      <div key={typeof subItem === 'string' ? subItem : subItem.name}>
                        {typeof subItem === 'string' ? (
                          <Link
                            href="#"
                            className="block py-2 text-gray-300 hover:text-white transition-colors"
                          >
                            {subItem}
                          </Link>
                        ) : (
                          <div>
                            <button
                              onClick={(e) => toggleSubmenu(e, subItem.name)}
                              className="flex items-center justify-between w-full text-left font-semibold text-lg mt-2 mb-1"
                              aria-expanded={activeSubmenu === subItem.name}
                            >
                              <span>{subItem.name}</span>
                              <ChevronDown size={16} />
                            </button>
                            {activeSubmenu === subItem.name && (
                              <div className="pl-4">
                                {subItem.items.map((nestedItem) => (
                                  <Link
                                    key={nestedItem}
                                    href={`${subItem.href}#${nestedItem.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="block py-1 text-gray-300 hover:text-white transition-colors"
                                  >
                                    {nestedItem}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex items-center space-x-4 mt-4">
              <Link href="#" aria-label="LinkedIn">
                <Linkedin size={20} />
              </Link>
              <Link href="#" aria-label="Phone">
                <Phone size={20} />
              </Link>
              <Link href="#" aria-label="Language">
                <Globe size={20} />
              </Link>
              <Link href="#" aria-label="Search">
                <Search size={20} />
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section 
          className="relative h-screen bg-cover bg-center flex items-center" 
          style={{ backgroundImage: 'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/background-VQT8xNQyRGO5pfKXhTrHFpm3KnS74d.jpg")' }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          <div className="container mx-auto px-4 z-10 text-white">
            <div className="max-w-3xl">
              <p className="text-xl mb-2">Superior Structural Performance and Regulation Compliant</p>
              <h1 className="text-5xl font-bold mb-4 leading-tight">Building Solutions for Architectural and Functional Project Needs</h1>
              <p className="text-lg mb-6">
                We Are, Suppliers Of Superior Quality Products In Commercial UPS And Aluminum Profiles For Wide Applications To Saudi Arabian Projects. We Also Extend Supplier Integration Services With Our Key Strategic Partners In Consulting And End-to-end Project Implementation.
              </p>
              <p className="text-xl mb-4">Discover How Our Innovative Products Can Elevate Your Next Project</p>
              <button className="bg-yellow-500 text-white-900 px-8 py-3 rounded-md font-semibold hover:bg-yellow-400 transition-colors">
                Inquire Now
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#121212] text-white py-4 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Ajil Mutawara. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}