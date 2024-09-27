// Small card for each experiment for limited information
// export function ExperimentCard() {}

export function ExperimentCard({ experiment, onClick }) {
    const { title, lab, date } = experiment;
  
    return (
      <div
        onClick={onClick}
        className="p-4 border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 cursor-pointer"
      >
        <h3 className="text-lg font-semibold text-blue-600">{title}</h3>
        <p className="text-sm text-gray-700">Lab: {lab}</p>
        <p className="text-sm text-gray-700">
          Date: {new Date(date).toLocaleDateString()}
        </p>
      </div>
    );
  }
  

// Detailed view of each experiment
// export function Experiment() {}
export function Experiment({ experiment }) {
    const { title, lab, date, objectives, materials, procedure } = experiment;
  
    return (
      <div className="p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">{title}</h2>
        <p className="text-md text-gray-800 mb-2">
          <strong>Lab:</strong> {lab}
        </p>
        <p className="text-md text-gray-800 mb-2">
          <strong>Date:</strong> {new Date(date).toLocaleDateString()}
        </p>
        <p className="text-md text-gray-800 mb-4">
          <strong>Objectives:</strong> {objectives}
        </p>
        <p className="text-md text-gray-800 mb-4">
          <strong>Materials:</strong> {materials}
        </p>
        <p className="text-md text-gray-800 mb-4">
          <strong>Procedure:</strong> {procedure}
        </p>
        <div className="flex justify-end mt-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring"
          >
            Edit Experiment
          </button>
        </div>
      </div>
    );
  }

  
  const sampleExperiment = {
    title: 'Physics Lab Experiment 1',
    lab: 'Physics Lab',
    date: '2024-09-15',
    objectives: 'To study the laws of motion.',
    materials: 'Inclined plane, stopwatch, weights, protractor.',
    procedure: 'Set up the inclined plane and measure the time taken by different objects to slide down the plane at different angles.',
  };
  
// Usage:
//   <ExperimentCard
//     experiment={sampleExperiment}
//     onClick={() => console.log('Experiment Card Clicked')}
//   />
//   <Experiment experiment={sampleExperiment} />
  
