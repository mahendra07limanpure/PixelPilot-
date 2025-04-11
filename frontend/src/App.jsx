import { useState } from 'react'
import { motion } from 'framer-motion'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [demoView, setDemoView] = useState('before')

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-inter font-bold bg-gradient-to-r from-primary-start to-primary-end bg-clip-text text-transparent">
            STYLESNAP
          </h1>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {darkMode ? (
              <SunIcon className="w-6 h-6" />
            ) : (
              <MoonIcon className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="pt-32 pb-20 px-4"
      >
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-inter font-bold mb-6">
            Transform Product Pages in Seconds with AI
          </h1>
          <p className="text-xl md:text-2xl font-open-sans text-gray-600 dark:text-gray-300 mb-8">
            Upload your logo → Get branded, conversion-optimized designs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-primary-start to-primary-end text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Try Demo (Free)
            </button>
            <button className="px-8 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg font-semibold hover:border-primary-end transition-colors">
              View GitHub
            </button>
          </div>
        </div>
      </motion.section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-inter font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Upload Brand Assets',
                description: 'Upload your logo and brand colors',
                step: 1
              },
              {
                title: 'Add Products',
                description: 'Drag & drop your product images',
                step: 2
              },
              {
                title: 'Export Code',
                description: 'Get React or Shopify-ready code',
                step: 3
              }
            ].map((item) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-primary-start to-primary-end rounded-full flex items-center justify-center text-white font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-inter font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Demo Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-inter font-bold text-center mb-12">Live Demo</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-4">
              <div className="flex gap-4 mb-4">
                <button
                  onClick={() => setDemoView('before')}
                  className={`px-4 py-2 rounded ${
                    demoView === 'before'
                      ? 'bg-primary-start text-white'
                      : 'bg-gray-100 dark:bg-gray-800'
                  }`}
                >
                  Before
                </button>
                <button
                  onClick={() => setDemoView('after')}
                  className={`px-4 py-2 rounded ${
                    demoView === 'after'
                      ? 'bg-primary-end text-white'
                      : 'bg-gray-100 dark:bg-gray-800'
                  }`}
                >
                  After
                </button>
              </div>
              <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg">
                {/* Demo iframe would go here */}
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-gray-500">Interactive Demo Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-inter font-bold mb-12">Powered By</h2>
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {['React', 'Tailwind', 'OpenAI', 'Shopify'].map((tech) => (
              <div
                key={tech}
                className="flex items-center justify-center w-32 h-32 bg-white dark:bg-gray-900 rounded-xl shadow-lg"
              >
                <span className="font-semibold">{tech}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            Powered by AI color detection & design algorithms
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-inter font-bold mb-4">StyleSnap</h3>
              <p className="text-gray-400">
                AI-powered eCommerce UI generator
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">GitHub</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <p className="text-gray-400">
                © {new Date().getFullYear()} StyleSnap. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
