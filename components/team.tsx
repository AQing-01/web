import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Twitter } from "lucide-react"

export function Team() {
  const teamMembers = [
    {
      name: "张小明",
      role: "创始人 & 技术总监",
      avatar: "👨‍💻",
      description: "10年游戏开发经验，专注于游戏引擎和图形技术",
      skills: ["Unity", "C++", "Shader"],
    },
    {
      name: "李小红",
      role: "创意总监",
      avatar: "👩‍🎨",
      description: "资深游戏设计师，擅长用户体验和视觉设计",
      skills: ["UI/UX", "3D Art", "Animation"],
    },
    {
      name: "王小强",
      role: "前端开发工程师",
      avatar: "👨‍💼",
      description: "全栈开发工程师，专注于Web技术和用户界面",
      skills: ["React", "TypeScript", "WebGL"],
    },
    {
      name: "赵小美",
      role: "游戏策划",
      avatar: "👩‍🚀",
      description: "游戏策划专家，负责游戏玩法设计和平衡性调优",
      skills: ["Game Design", "Analytics", "Testing"],
    },
  ]

  return (
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">团队成员</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            我们是一支充满激情和创造力的团队，每个成员都在各自的领域拥有丰富的经验， 共同致力于创造出色的数字体验。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <CardContent className="p-6 text-center">
                <div className="text-6xl mb-4">{member.avatar}</div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-purple-300 mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm mb-4">{member.description}</p>
                <div className="flex flex-wrap gap-1 mb-4 justify-center">
                  {member.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-2 py-1 bg-white/10 text-gray-300 rounded text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex justify-center gap-3">
                  <Github className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                  <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                  <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
