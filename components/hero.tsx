import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            创造无限
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">方块世界</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            方块纪元工作室专注于游戏开发、创意设计和数字体验创新
            <br />
            用代码构建梦想，用创意点亮未来
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3"
            >
              查看作品
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 px-8 py-3 bg-transparent"
            >
              <Play className="mr-2 w-5 h-5" />
              观看演示
            </Button>
          </div>
        </div>

        <div className="mt-16 relative">
          <div className="w-full h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl backdrop-blur-sm border border-white/10 flex items-center justify-center">
            <div className="text-6xl">🎮</div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent rounded-2xl"></div>
        </div>
      </div>
    </section>
  )
}
