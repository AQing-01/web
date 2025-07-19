import Link from "next/link"
import { CuboidIcon as Cube, Github, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black/40 backdrop-blur-sm border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Cube className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">方块纪元工作室</span>
            </Link>
            <p className="text-gray-300 mb-4 max-w-md">
              专注于游戏开发和数字创意的工作室，致力于创造有趣、创新的数字体验。
            </p>
            <div className="flex space-x-4">
              <Github className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">服务</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  游戏开发
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  创意设计
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  技术咨询
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  项目合作
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">公司</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
                  关于我们
                </Link>
              </li>
              <li>
                <Link href="#team" className="text-gray-300 hover:text-white transition-colors">
                  团队成员
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  新闻动态
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  联系我们
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2024 方块纪元工作室. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  )
}
