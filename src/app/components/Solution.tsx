export default function Solution() {
    return (
      <section className="py-16 bg-gray-50 px-4 text-center">
        <h2 className="text-3xl font-semibold mb-4">How MemoTag Works</h2>
        <p className="max-w-2xl mx-auto mb-8">MemoTag combines wearable tech and AI to monitor physical and cognitive health.</p>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div>
            <h3 className="text-xl font-bold mb-2">Wearable Device</h3>
            <p>Tracks movement, sleep, and vital signs in real-time.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">AI Analysis</h3>
            <p>Analyzes behavior patterns for early dementia signs.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Caregiver Dashboard</h3>
            <p>Provides real-time insights and alerts for family and doctors.</p>
          </div>
        </div>
      </section>
    )
  }
  