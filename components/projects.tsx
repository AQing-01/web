import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "方块冒险",
      description: "一款3D像素风格的冒险游戏，玩家在方块世界中探索、建造和战斗",
      image: "🎮",
      tags: ["Unity", "C#", "3D"],
      status: "已发布",
    },
    {
      title: "创意工坊",
      description: "为创作者提供的数字工具平台，支持多种创意内容的制作和分享",
      image: "🛠️",
      tags: ["React", "Node.js", "WebGL"],
      status: "开发中",
    },
    {
      title: "像素艺术生成器",
      description: "AI驱动的像素艺术生成工具，帮助开发者快速创建游戏素材",
      image: "🎨",
      tags: ["Python", "AI", "Web"],
      status: "即将发布",
    },
    {
      title: "方块音乐",
      description: "结合音乐和游戏的创新体验，让玩家在节奏中构建方块世界",
      image: "🎵",
      tags: ["Unity", "Audio", "VR"],
      status: "概念阶段",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">项目作品</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            我们的作品涵盖游戏开发、创意工具、数字艺术等多个领域， 每个项目都体现了我们对创新和品质的追求。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center text-6xl">
                  {project.image}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                      {project.status}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 bg-white/10 text-gray-300 rounded text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      查看详情
                    </Button>
                    <Button size="sm" variant="ghost" className="text-gray-300 hover:text-white">
                      <Github className="w-4 h-4 mr-2" />
                      源码
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
