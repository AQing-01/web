"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, CuboidIcon as Cube } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Cube className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">方块纪元工作室</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
              关于我们
            </Link>
            <Link href="#projects" className="text-gray-300 hover:text-white transition-colors">
              项目作品
            </Link>
            <Link href="#team" className="text-gray-300 hover:text-white transition-colors">
              团队成员
            </Link>
            <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
              联系我们
            </Link>
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/40 backdrop-blur-md rounded-lg mt-2">
              <Link
                href="#about"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                关于我们
              </Link>
              <Link
                href="#projects"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                项目作品
              </Link>
              <Link
                href="#team"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                团队成员
              </Link>
              <Link
                href="#contact"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                联系我们
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
