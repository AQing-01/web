import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">联系我们</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            有项目想法或合作意向？我们很乐意听到您的声音。 让我们一起创造令人惊叹的数字体验。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">联系信息</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <p className="text-white font-medium">邮箱</p>
                  <p className="text-gray-300">hello@cubeera.studio</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <p className="text-white font-medium">电话</p>
                  <p className="text-gray-300">+86 138-0000-0000</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <p className="text-white font-medium">地址</p>
                  <p className="text-gray-300">北京市朝阳区创意园区</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-white mb-6">发送消息</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="您的姓名"
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                  />
                  <Input
                    type="email"
                    placeholder="您的邮箱"
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                  />
                </div>
                <Input
                  placeholder="项目主题"
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                />
                <Textarea
                  placeholder="详细描述您的项目需求..."
                  rows={5}
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                />
                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                  <Send className="w-4 h-4 mr-2" />
                  发送消息
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
