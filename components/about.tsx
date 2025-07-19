import { Card, CardContent } from "@/components/ui/card"
import { Gamepad2, Palette, Code, Zap } from "lucide-react"

export function About() {
  const features = [
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: "游戏开发",
      description: "专业的游戏开发团队，从概念设计到最终发布的全流程服务",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "创意设计",
      description: "独特的视觉设计和用户体验，让每个项目都充满创意和活力",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "技术创新",
      description: "运用最新技术栈，打造高性能、可扩展的数字产品",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "快速交付",
      description: "高效的开发流程，确保项目按时高质量交付",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">关于我们</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            方块纪元工作室成立于2020年，是一家专注于游戏开发和数字创意的工作室。
            我们致力于创造有趣、创新的数字体验，让技术与艺术完美融合。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <CardContent className="p-6 text-center">
                <div className="text-purple-400 mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
